export const addClass = (condition, className) => {
	if (condition) return ' ' + className;
	return '';
};

export const getScrollPosition = () => {
	const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	return scrollTop;
};

export const getWindowHeight = () => {
	const height = window.innerHeight;
	return height;
};

export const getWindowWidth = () => {
	const width = window.innerWidth;
	return width;
};
