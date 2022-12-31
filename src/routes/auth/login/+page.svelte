<script lang="ts">
	import { Button, Text, TextInput } from "$lib/components/atoms";
	import type { ActionData } from "./$types";

	export let form: ActionData;

	$: fieldErrors = form?.errors.fieldErrors;
</script>

<div class="h-screen flex flex-col items-center justify-center">
	<Text variant="h1">Login</Text>
	<div>
		<form method="POST" action="?/login" class="flex flex-col items-center justify-center">
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
			<Button type="submit" label="Login" variant="primary" size="large" fullWidth />
		</form>
	</div>
</div>
