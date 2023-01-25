export const staggerContainer = (staggerChildren, delayChildren) => ({
	hidden: {},
	show: {
		transition: {
			staggerChildren,
			delayChildren,
		},
	},
});

export const mobileMenu = {
	hidden: {
		height: 0,
		opacity: 0.4,
	},
	show: {
		height: '100vh',
		opacity: 1,
		transition: {
			when: 'beforeChildren',
		},
	},
	transition: {
		duration: 0.6,
		when: 'beforeChildren',
	},
	exit: {
		opacity: 0,
		height: 0,
		transition: {
			ease: 'easeInOut',
			duration: 0.3,
			delay: 1.4,
		},
	},
};

export const mobileMenuLink = (showDelay, delay, exitDelay) => ({
	hidden: {
		y: 80,
		opacity: 0,
	},
	show: {
		y: 0,
		opacity: 1,
		transition: {
			ease: 'easeInOut',
			duration: 0.3,
			delay: showDelay,
		},
	},
	transition: {
		delay: delay,
	},
	exit: {
		opacity: 0,
		y: 80,
		transition: {
			ease: 'easeInOut',
			duration: 0.3,
			delay: exitDelay,
		},
	},
});

export const headerLinksVariants = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			type: 'tween',
		},
	},
};

export const leftRightElementVariants = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'tween',
			duration: 0.6,
			delay: 0.4,
		},
	},
};

export const socialVariants = (y) => ({
	hidden: {
		y: 0,
	},
	hover: {
		y: y,
		color: '#8e57e8',
		transition: {
			type: 'tween',
			duration: 0.2,
		},
	},
});

export const fadeIn = (direction, type, delay, duration) => ({
	hidden: {
		x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
		y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
		opacity: 0,
	},
	show: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			type,
			delay,
			duration,
			ease: 'easeIn',
		},
	},
});

export const fade = (duration, delay) => ({
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: duration,
			delay: delay,
			ease: 'easeInOut',
		},
	},
});
