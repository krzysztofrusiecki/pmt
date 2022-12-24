import type { Possible } from "$lib/types/common";
import { z, ZodSchema, ZodError } from "zod";

export const validateData = async <T extends z.ZodTypeAny>(
	formData: FormData,
	schema: ZodSchema,
): Promise<{
	data: z.infer<T>;
	errors: Possible<z.inferFlattenedErrors<typeof schema>>;
}> => {
	const body = Object.fromEntries(formData);

	try {
		const data: z.infer<T> = schema.parse(body);

		return {
			data,
			errors: null,
		};
	} catch (err) {
		if (err instanceof ZodError) {
			const errors = err.flatten();

			return {
				data: body,
				errors,
			};
		} else {
			throw err;
		}
	}
};
