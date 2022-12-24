import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/svelte";
import Button from "./Button.svelte";

describe("Button", () => {
	it("should render text inside button", () => {
		render(Button, { label: "Test" });

		expect(
			screen.getByRole("button", {
				name: "Test",
			}),
		).toBeInTheDocument();
	});

	it("should render disabled button when 'disabled' prop is passed", () => {
		render(Button, { label: "Test", disabled: true });

		expect(
			screen.getByRole("button", {
				name: "Test",
			}),
		).toBeDisabled();
	});
});
