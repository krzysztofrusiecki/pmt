import { validateData } from "$lib/utils/validateData";
import { error, fail, redirect } from "@sveltejs/kit";
import { ClientResponseError } from "pocketbase";
import type { Actions } from "./$types";
import { schema } from "./login.schema";

export const actions: Actions = {
	login: async ({ request, locals }) => {
		const { data, errors } = await validateData<typeof schema>(await request.formData(), schema);

		if (errors) {
			return fail(400, {
				data,
				errors,
			});
		}

		try {
			await locals.pb.collection("users").authWithPassword(data.email, data.password);
		} catch (err) {
			if (err instanceof ClientResponseError) {
				throw error(400, "Invalid credentials");
			}
			throw error(500, "Something went wrong");
		}

		throw redirect(303, "/app");
	},
};
