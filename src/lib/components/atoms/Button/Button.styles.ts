import { cva } from "cva";

export const styles = {
	button: cva(
		"font-medium rounded-sm transition-colors disabled:text-secondary-gray-dark disabled:bg-secondary-gray-lighter",
		{
			variants: {
				variant: {
					primary: "text-white bg-primary hover:bg-primary-dark",
					secondary: "text-white bg-secondary-green hover:bg-secondary-green-dark",
					tertiary: "text-black bg-secondary-gray-lighter hover:bg-secondary-gray-light",
					warn: "text-white bg-secondary-red hover:bg-secondary-red-dark",
				},
				size: {
					small: "px-4 py-0.5 text-sm",
					medium: "px-6 py-1 text-base",
					large: "px-6 py-2 text-base",
				},
				fullWidth: {
					true: "w-full",
				},
			},
			defaultVariants: {
				variant: "primary",
				size: "medium",
				fullWidth: false,
			},
		},
	),
};
