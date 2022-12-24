<script lang="ts">
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
				<input
					class="border-[1px] border-gray-200"
					name="firstName"
					value={form?.data?.firstName ?? ""}
				/>
				{#if fieldErrors?.firstName?.length && fieldErrors?.firstName?.length > 0}
					{#each fieldErrors?.firstName as error}
						<div class="text-red-500 mb-1">{error}</div>
					{/each}
				{/if}
			</label>
			<label for="lastName" class="flex flex-col">
				Last name
				<input
					class="border-[1px] border-gray-200"
					name="lastName"
					value={form?.data?.lastName ?? ""}
				/>
				{#if fieldErrors?.lastName?.length && fieldErrors?.lastName?.length > 0}
					{#each fieldErrors?.lastName as error}
						<div class="text-red-500 mb-1">{error}</div>
					{/each}
				{/if}
			</label>
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
			<label for="passwordConfirm" class="flex flex-col">
				Confirm Password
				<input class="border-[1px] border-gray-200" type="password" name="passwordConfirm" />
				{#if fieldErrors?.passwordConfirm?.length && fieldErrors?.passwordConfirm?.length > 0}
					{#each fieldErrors?.passwordConfirm as error}
						<div class="text-red-500 mb-1">{error}</div>
					{/each}
				{/if}
			</label>
			<button type="submit" class="bg-blue-500 px-4 py-1">Register</button>
			{#if formError}
				<div class="bg-red-500 text-white mt-1">{formError}</div>
			{/if}
		</form>
	</div>
</div>
