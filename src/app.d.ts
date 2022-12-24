/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
import type { Possible } from "$lib/types/common";
import type { User } from "$lib/types/users";
import PocketBase from "pocketbase";

declare global {
	declare namespace App {
		interface Locals {
			pb: PocketBase;
			user: Possible<User>;
		}
	}
}
