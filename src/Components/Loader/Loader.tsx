import classNames from "classnames";
import "./Loader.scss";

type LoaderProps = {
	fullscreen?: boolean;
	size?: "sm" | "md" | "lg";
	glass?: boolean;
	className?: string;
};

function Loader({ fullscreen = false, size = "md", glass = true, className }: LoaderProps) {
	const spinnerClass = classNames("loader__spinner", `loader__spinner--${size}`, className);

	const backdropClass = classNames("loader__backdrop", {
		glass,
	});

	const innerClass = classNames("loader__spinner__inner", `loader__spinner--${size}`);

	const spinner = (
		<div className={spinnerClass}>
			<div className={innerClass} />
		</div>
	);

	if (fullscreen) {
		return <div className={backdropClass}>{spinner}</div>;
	}

	return spinner;
}

export default Loader;
