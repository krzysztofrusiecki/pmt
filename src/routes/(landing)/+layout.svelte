<script lang="ts">
	import type { LayoutData } from "./$types";

	export let data: LayoutData;
</script>

<div class="bg-white">
	<nav class="w-full bg-white">
		<div class="w-2/3 mx-auto p-6 flex items-center justify-between">
			<div>
				<a class="block h-12 w-12" href="/">
					<img src="/logo.svg" alt="Logo" />
				</a>
			</div>
			<ul class="flex items-center">
				{#if data.user}
					<li>
						<a
							class="px-6 py-2 text-white bg-primary hover:bg-primary-dark transition-colors cursor-pointer rounded-sm font-medium text-base"
							href="/app">Go to App</a
						>
					</li>
				{:else}
					<li>
						<a
							class="px-6 py-2 text-white bg-primary hover:bg-primary-dark transition-colors cursor-pointer rounded-sm font-medium text-base"
							href="/auth/login">Login</a
						>
					</li>
				{/if}
			</ul>
		</div>
	</nav>
	<slot />
</div>
