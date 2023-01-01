import { cva } from "cva";

export const styles = {
	label: cva("mb-1 text-black text-sm leading-snug font-semibold", {
		variants: {
			showError: {
				true: "text-secondary-red",
			},
		},
	}),
};
