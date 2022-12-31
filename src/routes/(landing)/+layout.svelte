<script lang="ts">
	import type { LayoutData } from "./$types";

	export let data: LayoutData;
</script>

<div class="bg-white">
	<nav class="mb-4">
		{#if data.user}
			<a class="text-primary underline" href="/app">Go to App</a>
		{:else}
			<a class="mr-4 text-primary underline" href="/auth/login">Login</a>
			<a class="text-primary underline" href="/auth/register">Register</a>
		{/if}
	</nav>
	<slot />
</div>
