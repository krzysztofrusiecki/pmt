<script lang="ts">
	import type { Possible } from "$lib/types/common";
	import type { User } from "$lib/types/users";
	import { getInitials } from "$lib/utils/user";
	import Text from "../Text/Text.svelte";

	export let url: Possible<string> = null;
	export let user: User;
</script>

<div class="h-7 w-7 rounded-[50%] overflow-hidden">
	{#if url}
		<img class="w-full h-full" src={url} alt="avatar" />
	{:else}
		<div class="w-full h-full flex items-center justify-center bg-secondary-gray-darker">
			<Text variant="h6" color="text-white" selectable={false}>{getInitials(user)}</Text>
		</div>
	{/if}
</div>
