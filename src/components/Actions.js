export const WINDOW_RESIZE = (width, height) => ({
	type: 'WINDOW_RESIZE',
	width,
	height,
});

export const WINDOW_SCROLL = scrollTop => ({
	type: 'WINDOW_SCROLL',
	scrollTop,
});
