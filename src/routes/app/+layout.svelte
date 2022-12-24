<script lang="ts">
	import type { LayoutData } from "./$types";

	export let data: LayoutData;

	$: fullName = `${data.user?.firstName} ${data.user?.lastName}`;
</script>

<div class="px-12 h-16 flex justify-end items-center">
	<div class="mr-4">{fullName}</div>
	<form method="POST" action="/app?/logout">
		<button type="submit" class="bg-gray-300 px-4 py-1">Logout</button>
	</form>
</div>
<slot />
