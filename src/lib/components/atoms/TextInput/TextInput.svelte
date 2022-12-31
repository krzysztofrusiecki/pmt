<script lang="ts">
	import { styles } from "./TextInput.styles";

	export let type: "text" | "email" | "password" = "text";
	export let placeholder = "";
	export let value = "";
	export let name = "";
	export let size: "small" | "medium" | "large" = "medium";
	export let showError = false;
	export let disabled = false;

	function typeAction(node: HTMLInputElement) {
		node.type = type;
	}
</script>

<input
	class={styles.input({ size, showError })}
	id={name}
	{name}
	{placeholder}
	{disabled}
	bind:value
	on:change
	on:blur
	use:typeAction
/>
