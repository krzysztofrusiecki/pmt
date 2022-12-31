<script lang="ts">
	import { Button, Text } from "$lib/components/atoms";
	import type { LayoutData } from "./$types";

	export let data: LayoutData;

	$: fullName = `${data.user?.firstName} ${data.user?.lastName}`;
</script>

<div class="px-12 h-16 flex justify-end items-center">
	<div class="mr-4">
		<Text variant="p">{fullName}</Text>
	</div>
	<form method="POST" action="/app?/logout">
		<Button type="submit" label="Logout" variant="tertiary" size="large" />
	</form>
</div>
<slot />
