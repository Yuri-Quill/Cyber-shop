import "./Loader.scss";
import clsx from "clsx";

type LoaderProps = {
	fullscreen?: boolean;
	size?: "sm" | "lg";
};

function Loader({ fullscreen = false, size }: LoaderProps) {
	const loaderClassName = clsx("loader", {
		"loader--sm": size === "sm",
		"loader--lg": size === "lg",
	});

	return fullscreen ? (
		<div className="loader-wrapper fullscreen">
			<div className={loaderClassName} />
		</div>
	) : (
		<div className={loaderClassName} />
	);
}

export default Loader;
