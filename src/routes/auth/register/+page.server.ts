import { validateData } from "$lib/utils/validateData";
import { error, fail, redirect } from "@sveltejs/kit";
import { ClientResponseError } from "pocketbase";
import type { Actions } from "./$types";
import { schema } from "./register.schema";

export const actions: Actions = {
	register: async ({ request, locals }) => {
		const { data, errors } = await validateData<typeof schema>(await request.formData(), schema);

		if (errors) {
			return fail(400, {
				data,
				errors,
			});
		}

		try {
			await locals.pb.collection("users").create({
				...data,
			});
		} catch (err) {
			if (err instanceof ClientResponseError) {
				if (err.data.data.email.code === "validation_invalid_email") {
					throw error(400, "User with this email already exists");
				}
				throw error(400, "Failed to register new user");
			}
			throw error(500, "Something went wrong");
		}

		throw redirect(303, "/app");
	},
};
