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

export const polygon = (obj) => {
	const ctx = obj.canvas;
	const {
		width, color = 'red', y, x,
	} = obj;

	const widthDouble = width * 2;
	ctx.translate(x, y + (width * -1));
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(width, width);
	ctx.lineTo(0, widthDouble);
	ctx.lineTo((width * -1), width);
	ctx.lineTo(0, 0);
	ctx.fillStyle = color;
	ctx.fill();
	// ctx.strokeStyle = color;
	// ctx.stroke();
	ctx.setTransform(1, 0, 0, 1, 0, 0);
};
