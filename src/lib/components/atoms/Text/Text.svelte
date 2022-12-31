<script lang="ts">
	import type { Color } from "$lib/types/styles";

	type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
	export let variant: Variant = "p";
	export let color: `text-${Color}` = "text-black";
	export let selectable = true;

	$: selectClass = selectable ? "select-text" : "select-none";
</script>

<svelte:element this={variant} class={`${selectClass} ${color}`}>
	<slot />
</svelte:element>

<style>
	h1 {
		@apply text-3xl font-bold leading-snug;
	}

	h2 {
		@apply text-2xl font-bold leading-snug;
	}

	h3 {
		@apply text-xl font-semibold leading-snug;
	}

	h4 {
		@apply text-lg font-semibold leading-snug;
	}

	h5 {
		@apply text-base font-medium leading-snug;
	}

	h6 {
		@apply text-sm font-medium leading-snug;
	}

	p {
		@apply text-base font-normal leading-snug;
	}
</style>
