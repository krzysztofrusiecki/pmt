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
	<Text variant="h1">Register</Text>
	<form
		method="POST"
		action="?/register"
		class="flex flex-col items-center justify-center"
		use:enhance={() => {
			return async ({ result, update }) => {
				switch (result.type) {
					case "success":
						await update();
						break;
					case "failure":
						if (result.data?.errors.formErrors?.length) {
							toast.error(result.data?.errors.formErrors[0]);
						}
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
		<FormGroup name="firstName" label="First name" errors={fieldErrors?.firstName} required>
			<TextInput
				name="firstName"
				size="large"
				value={form?.data?.firstName ?? ""}
				showError={Boolean(fieldErrors?.firstName?.length)}
			/>
		</FormGroup>
		<FormGroup name="lastName" label="Last name" errors={fieldErrors?.lastName} required>
			<TextInput
				name="lastName"
				size="large"
				value={form?.data?.lastName ?? ""}
				showError={Boolean(fieldErrors?.lastName?.length)}
			/>
		</FormGroup>
		<FormGroup name="email" label="Email" errors={fieldErrors?.email} required>
			<TextInput
				name="email"
				type="email"
				size="large"
				value={form?.data?.email ?? ""}
				showError={Boolean(fieldErrors?.email?.length)}
			/>
		</FormGroup>
		<FormGroup name="password" label="Password" errors={fieldErrors?.password} required>
			<TextInput
				name="password"
				type="password"
				size="large"
				value={form?.data?.password ?? ""}
				showError={Boolean(fieldErrors?.password?.length)}
			/>
		</FormGroup>
		<FormGroup
			name="passwordConfirm"
			label="Confirm password"
			errors={fieldErrors?.passwordConfirm}
			required
		>
			<TextInput
				name="passwordConfirm"
				type="password"
				size="large"
				value={form?.data?.passwordConfirm ?? ""}
				showError={Boolean(fieldErrors?.passwordConfirm?.length)}
			/>
		</FormGroup>
		<Button type="submit" label="Register" variant="primary" size="large" fullWidth />
	</form>
</div>
