<script lang="ts">
	import { styles } from "./Button.styles";

	export let type: "button" | "submit" | "reset" = "button";
	export let label = "";
	export let variant: "primary" | "secondary" | "tertiary" | "warn" = "primary";
	export let size: "small" | "medium" | "large" = "medium";
	export let disabled = false;
	export let fullWidth = false;
</script>

<button class={styles.button({ variant, size, fullWidth })} {type} {disabled} on:click>
	{label}
</button>
