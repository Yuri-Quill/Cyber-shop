import classNames from "classnames";
import "./Loader.scss";

const Loader = ({ mode = "main" }) => {
	return (
		<div
			className={classNames("loader", {
				"loader--full-screen": mode === "full-screen",
				"loader--main": mode === "main",
			})}
		>
			<div className="loader__spinner">
				<div className="loader__spinner--outer" />
				<div className="loader__spinner--inner" />
			</div>
		</div>
	);
};

export default Loader;
