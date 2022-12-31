import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/svelte";
import TextInput from "./TextInput.svelte";

describe("TextInput", () => {
	it("should render placeholder inside input", () => {
		render(TextInput, { placeholder: "Test" });

		expect(screen.getByPlaceholderText("Test")).toBeInTheDocument();
	});

	it("should render input value", () => {
		render(TextInput, { value: "Test value" });

		expect(screen.getByDisplayValue("Test value")).toBeInTheDocument();
	});

	it("should render input disabled", () => {
		render(TextInput, { value: "Test value", disabled: true });

		expect(screen.getByDisplayValue("Test value")).toBeDisabled();
	});
});
