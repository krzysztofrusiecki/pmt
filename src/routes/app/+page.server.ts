import { error } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
	logout: ({ locals }) => {
		try {
			locals.pb.authStore.clear();
		} catch (err) {
			error(500, "Something went wrong");
		}
	},
};
