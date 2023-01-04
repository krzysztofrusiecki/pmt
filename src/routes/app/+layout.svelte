<script lang="ts">
	import { page } from "$app/stores";
	import { Avatar, MenuItem, Text } from "$lib/components/atoms";
	import { getFullName } from "$lib/utils/user";
	import type { LayoutData } from "./$types";

	export let data: LayoutData;

	$: currentRoute = $page.route.id;
	$: fullName = `${data.user?.firstName} ${data.user?.lastName}`;
</script>

{#if data.user}
	<div class="px-8 h-16 flex items-center shadow-md">
		<nav class="w-full bg-white">
			<div class="flex items-center justify-between">
				<div class="flex items-center">
					<div class="mr-8">
						<a class="block h-12 w-12" href="/">
							<img src="/logo.svg" alt="Logo" />
						</a>
					</div>
					<ul class="flex items-center">
						<MenuItem route="/app" variant="blue" isActive={currentRoute === "/app"}
							>Dashboard</MenuItem
						>
						<MenuItem route="/app/tasks" variant="blue" isActive={currentRoute === "/app/tasks"}
							>Your tasks</MenuItem
						>
						<MenuItem
							route="/app/projects"
							variant="blue"
							isActive={currentRoute === "/app/projects"}>Projects</MenuItem
						>
						<MenuItem route="/app/people" variant="blue" isActive={currentRoute === "/app/people"}
							>People</MenuItem
						>
					</ul>
				</div>
				<ul class="flex items-center">
					<MenuItem
						route="/app/notifications"
						variant="gray"
						isActive={currentRoute === "/app/notifications"}
					>
						<img class="h-6 aspect-square" src="/bell.svg" alt="notifications" />
					</MenuItem>
					<MenuItem route="/app/user" variant="gray" isActive={currentRoute === "/app/user"}>
						<div class="mr-2"><Avatar user={data.user} /></div>
						<Text variant="h5">{getFullName(data.user)}</Text>
					</MenuItem>
					<li>
						<form class="flex" method="POST" action="/app?/logout">
							<button
								class="h-[44px] px-4 py-2 flex items-center rounded-sm bg-white hover:bg-secondary-gray-lighter"
							>
								<div class="h-7 w-7 mr-2 flex items-center">
									<img class="h-5 w-5" src="/logout.svg" alt="logout" />
								</div>
								<Text variant="h5">Logout</Text>
							</button>
						</form>
					</li>
				</ul>
			</div>
		</nav>
	</div>
	<slot />
{/if}
