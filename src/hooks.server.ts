import { env } from "$env/dynamic/public";
import type { Handle } from "@sveltejs/kit";
import PocketBase from "pocketbase";

export const handle: Handle = async function ({ event, resolve }) {
	event.locals.pb = new PocketBase(env.PUBLIC_POCKETBASE_URL);

	// load the store data from the request cookie string
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");

	try {
		// get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
		if (event.locals.pb.authStore.isValid) {
			await event.locals.pb.collection("users").authRefresh();
			event.locals.user = {
				firstName: event.locals.pb.authStore.model?.firstName,
				lastName: event.locals.pb.authStore.model?.lastName,
				email: event.locals.pb.authStore.model?.email,
				id: event.locals.pb.authStore.model?.id as string,
			};
		}
	} catch (_) {
		// clear the auth store on failed refresh
		event.locals.pb.authStore.clear();
		event.locals.user = null;
	}

	const response = await resolve(event);

	// send back the default 'pb_auth' cookie to the client with the latest store state
	response.headers.set("set-cookie", event.locals.pb.authStore.exportToCookie());

	return response;
};
