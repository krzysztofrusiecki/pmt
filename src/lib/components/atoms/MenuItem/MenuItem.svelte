<script lang="ts">
	import Text from "../Text/Text.svelte";
	import { styles } from "./MenuItem.styles";

	export let isActive: boolean;
	export let route: string;
	export let variant: "blue" | "gray" = "blue";
</script>

<li>
	<Text variant="h5">
		<a class={styles.item({ isActive, variant })} href={route}><slot /></a>
	</Text>
</li>
