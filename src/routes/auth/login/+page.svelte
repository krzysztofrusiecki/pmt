<script lang="ts">
	import { enhance } from "$app/forms";
	import { Button, Text, TextInput } from "$lib/components/atoms";
	import { FormGroup } from "$lib/components/molecules";
	import toast from "svelte-french-toast";
	import type { ActionData } from "./$types";

	export let form: ActionData;

	$: fieldErrors = form?.errors.fieldErrors;
</script>

<div class="mb-4">
	<Text variant="h1">Login</Text>
</div>
<form
	method="POST"
	action="?/login"
	class="w-full flex flex-col justify-center"
	use:enhance={() => {
		return async ({ result, update }) => {
			switch (result.type) {
				case "success":
					await update();
					break;
				case "error":
					toast.error(result.error.message);
					break;
				default:
					await update();
			}
		};
	}}
>
	<FormGroup name="email" label="Email" errors={fieldErrors?.email}>
		<TextInput
			name="email"
			type="email"
			size="large"
			value={form?.data?.email ?? ""}
			showError={Boolean(fieldErrors?.email?.length)}
		/>
	</FormGroup>
	<FormGroup name="password" label="Password" errors={fieldErrors?.password}>
		<TextInput
			name="password"
			type="password"
			size="large"
			value={form?.data?.password ?? ""}
			showError={Boolean(fieldErrors?.password?.length)}
		/>
	</FormGroup>
	<Button type="submit" label="Login" variant="primary" size="large" fullWidth />
</form>
<div class="mt-2 text-sm">
	Don't you have an account yet? <a
		class="text-primary hover:text-primary-dark  hover:underline hover:decoration-primary-dark"
		href="/auth/register">Create an account</a
	>
</div>
