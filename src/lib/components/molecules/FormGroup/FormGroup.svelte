<script lang="ts">
	import type { Possible } from "$lib/types/common";
	import { styles } from "./FormGroup.styles";

	export let name: string;
	export let label: string;
	export let errors: Possible<string[]> = [];
	export let required = false;
</script>

<div class="w-full mb-4">
	<div class="inline-flex">
		<label class={styles.label({ showError: Boolean(errors?.length) })} for={name}>{label}</label>
		{#if required}
			<span class="text-secondary-red text-sm leading-snug font-semibold">*</span>
		{/if}
	</div>
	<slot />
	{#if errors?.length}
		{#each errors as error}
			<div class="mt-1 text-secondary-red text-sm leading-snug font-semibold">{error}</div>
		{/each}
	{/if}
</div>
