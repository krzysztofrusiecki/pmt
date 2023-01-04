import { cva } from "cva";

export const styles = {
	item: cva("h-[44px] mr-2 px-4 py-2 flex items-center rounded-sm text-black transition-colors", {
		variants: {
			isActive: {
				true: "",
			},
			variant: {
				blue: "",
				gray: "",
			},
		},
		defaultVariants: {
			isActive: false,
			variant: "blue",
		},
		compoundVariants: [
			{
				isActive: false,
				variant: "gray",
				class: "bg-white hover:bg-secondary-gray-lighter",
			},
			{
				isActive: true,
				variant: "gray",
				class: "bg-secondary-gray-light hover:bg-secondary-gray-light",
			},
			{
				isActive: false,
				variant: "blue",
				class: "bg-white hover:bg-[#EFF6FF]",
			},
			{
				isActive: true,
				variant: "blue",
				class: "bg-[#BFDBFE] hover:bg-[#BFDBFE]",
			},
		],
	}),
};
