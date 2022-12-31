<script lang="ts">
	import { Button, TextInput } from "$lib/components/atoms";
	import type { ActionData } from "./$types";

	export let form: ActionData;

	$: fieldErrors = form?.errors.fieldErrors;
	$: formError = form?.errors.formErrors[0];
</script>

<div class="h-screen flex flex-col items-center justify-center">
	<h1>Register</h1>
	<div>
		<form method="POST" action="?/register" class="flex flex-col items-center justify-center">
			<label for="firstName" class="flex flex-col">
				First name
				<TextInput
					name="firstName"
					size="large"
					value={form?.data?.firstName ?? ""}
					showError={Boolean(fieldErrors?.firstName?.length)}
				/>
				{#if fieldErrors?.firstName?.length && fieldErrors?.firstName?.length > 0}
					{#each fieldErrors?.firstName as error}
						<div class="text-red-500 mb-1">{error}</div>
					{/each}
				{/if}
			</label>
			<label for="lastName" class="flex flex-col">
				Last name
				<TextInput
					name="lastName"
					size="large"
					value={form?.data?.lastName ?? ""}
					showError={Boolean(fieldErrors?.lastName?.length)}
				/>
				{#if fieldErrors?.lastName?.length && fieldErrors?.lastName?.length > 0}
					{#each fieldErrors?.lastName as error}
						<div class="text-red-500 mb-1">{error}</div>
					{/each}
				{/if}
			</label>
			<label for="email" class="flex flex-col">
				Email
				<TextInput
					name="email"
					type="email"
					size="large"
					value={form?.data?.email ?? ""}
					showError={Boolean(fieldErrors?.email?.length)}
				/>
				{#if fieldErrors?.email?.length && fieldErrors?.email?.length > 0}
					{#each fieldErrors?.email as error}
						<div class="text-red-500 mb-1">{error}</div>
					{/each}
				{/if}
			</label>
			<label for="password" class="flex flex-col">
				Password
				<TextInput
					name="password"
					type="password"
					size="large"
					value={form?.data?.password ?? ""}
					showError={Boolean(fieldErrors?.password?.length)}
				/>
				{#if fieldErrors?.password?.length && fieldErrors?.password?.length > 0}
					{#each fieldErrors?.password as error}
						<div class="text-red-500 mb-1">{error}</div>
					{/each}
				{/if}
			</label>
			<label for="passwordConfirm" class="flex flex-col">
				Confirm Password
				<TextInput
					name="passwordConfirm"
					type="password"
					size="large"
					value={form?.data?.passwordConfirm ?? ""}
					showError={Boolean(fieldErrors?.passwordConfirm?.length)}
				/>
				{#if fieldErrors?.passwordConfirm?.length && fieldErrors?.passwordConfirm?.length > 0}
					{#each fieldErrors?.passwordConfirm as error}
						<div class="text-red-500 mb-1">{error}</div>
					{/each}
				{/if}
			</label>
			<Button type="submit" label="Register" variant="primary" size="large" fullWidth />
			{#if formError}
				<div class="bg-red-500 text-white mt-1">{formError}</div>
			{/if}
		</form>
	</div>
</div>
