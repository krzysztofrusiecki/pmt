import { z } from "zod";

export const schema = z.object({
	email: z.string().trim().email(),
	password: z.string().trim().min(1),
});
