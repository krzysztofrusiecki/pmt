<script lang="ts">
	import { Toaster } from "svelte-french-toast";
	import "../app.css";
</script>

<div class="bg-white">
	<slot />
	<Toaster position="bottom-left" toastOptions={{ style: "border-radius: 3px;" }} />
</div>
