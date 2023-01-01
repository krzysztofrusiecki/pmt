import { z } from "zod";

export const schema = z
	.object({
		firstName: z.string().trim().min(2).max(64),
		lastName: z.string().trim().min(2).max(64),
		email: z.string().trim().email(),
		password: z.string().trim(),
		passwordConfirm: z.string().trim(),
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
