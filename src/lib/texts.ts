export const defaultTexts = {
	label: {
		h: 'hue channel',
		s: 'saturation channel',
		v: 'brightness channel',
		r: 'red channel',
		g: 'green channel',
		b: 'blue channel',
		a: 'alpha channel',
		hex: 'hex color'
	},
	color: {
		rgb: 'rgb',
		hsv: 'hsv',
		hex: 'hex'
	},
	changeTo: 'change to '
};

export let defaultA11yTexts = {
	contrast: 'contrast',
	nbGradeSummary: (count: number) =>
		count ? `⚠️ ${count} contrast grade${count && 's'} fail` : 'Contrast grade information',
	guidelines: `<p style="margin: 0; font-size: 12px;">Learn more at <a href="https://webaim.org/articles/contrast/" target="_blank">WebAIM contrast guide</a></p>`
};

export type Texts = typeof defaultTexts;
export type A11yTexts = typeof defaultA11yTexts;

export type DeepPartial<T> = T extends Function ? T : T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T;

export type TextsPartial = DeepPartial<Texts>;
export type A11yTextsPartial = DeepPartial<A11yTexts>;
