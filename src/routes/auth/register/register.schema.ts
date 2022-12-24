import { z } from "zod";

export const schema = z
	.object({
		firstName: z.string().min(2).max(64),
		lastName: z.string().min(2).max(64),
		email: z.string().email(),
		password: z.string(),
		passwordConfirm: z.string(),
	})
	.superRefine(({ password, passwordConfirm }, ctx) => {
		if (password !== passwordConfirm) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "Password and Confirm Password must be the same string",
				fatal: true,
			});
		}
	});
