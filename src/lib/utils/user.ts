import type { User } from "$lib/types/users";

export const getFullName = (user: User) => {
	return `${user.firstName} ${user.lastName}`;
};

export const getInitials = (user: User) => {
	return user.firstName.charAt(0) + user.lastName.charAt(0);
};
