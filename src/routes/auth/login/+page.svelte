<script lang="ts">
	import { enhance } from "$app/forms";
	import { Button, Text, TextInput } from "$lib/components/atoms";
	import { FormGroup } from "$lib/components/molecules";
	import toast from "svelte-french-toast";
	import type { ActionData } from "./$types";

	export let form: ActionData;

	$: fieldErrors = form?.errors.fieldErrors;
</script>

<div class="h-screen flex flex-col items-center justify-center">
	<Text variant="h1">Login</Text>
	<form
		method="POST"
		action="?/login"
		class="flex flex-col items-center justify-center"
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
</div>
