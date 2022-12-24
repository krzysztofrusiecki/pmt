<script lang="ts">
	import { Button } from "$lib/components/atoms";
	import type { ActionData } from "./$types";

	export let form: ActionData;

	$: fieldErrors = form?.errors.fieldErrors;
</script>

<div class="h-screen flex flex-col items-center justify-center">
	<h1>Login</h1>
	<div>
		<form method="POST" action="?/login" class="flex flex-col items-center justify-center">
			<label for="email" class="flex flex-col">
				Email
				<input class="border-[1px] border-gray-200" name="email" value={form?.data?.email ?? ""} />
				{#if fieldErrors?.email?.length && fieldErrors?.email?.length > 0}
					{#each fieldErrors?.email as error}
						<div class="text-red-500 mb-1">{error}</div>
					{/each}
				{/if}
			</label>
			<label for="password" class="flex flex-col">
				Password
				<input class="border-[1px] border-gray-200" type="password" name="password" />
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
