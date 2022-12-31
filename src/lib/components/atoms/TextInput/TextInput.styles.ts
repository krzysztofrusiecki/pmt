import { cva } from "cva";

export const styles = {
	input: cva(
		"w-full rounded-small bg-white border-[1px] border-secondary-gray-lighter transition-all outline-none placeholder:text-secondary-gray focus-visible:border-primary disabled:border-secondary-gray-lighter disabled:bg-secondary-gray-lighter",
		{
			variants: {
				size: {
					small: "px-2 py-0.5 text-sm",
					medium: "px-2 py-1 text-base",
					large: "px-2 py-2 text-base",
				},
				showError: {
					true: "border-secondary-red focus-visible:border-secondary-red disabled:border-secondary-gray-lighter",
				},
			},
			defaultVariants: {
				size: "medium",
				showError: false,
			},
		},
	),
};
