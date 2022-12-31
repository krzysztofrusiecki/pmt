type ColorPrimary = "primary" | "primary-light" | "primary-dark";
type ColorSecondaryGreen = "secondary-green" | "secondary-green-light" | "secondary-green-dark";
type ColorSecondaryRed = "secondary-red" | "secondary-red-light" | "secondary-red-dark";
type ColorSecondaryGray =
	| "secondary-gray"
	| "secondary-gray-lighter"
	| "secondary-gray-light"
	| "secondary-gray-dark"
	| "secondary-gray-darker";
type ColorOther = "white" | "black";

export type Color =
	| ColorPrimary
	| ColorSecondaryGreen
	| ColorSecondaryRed
	| ColorSecondaryGray
	| ColorOther;
