import clsx from "clsx";

const cn = (mainClassName: string, modifier?: string) => {
	return clsx(mainClassName, modifier && `${mainClassName}--${modifier}`);
};

export default cn;
