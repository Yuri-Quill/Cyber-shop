import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

import IErrorResponse from "../../types/error.types";

import "./Error.scss";

const ErrorPage = () => {
	const rawError = useRouteError();

	let error: Partial<IErrorResponse> = {
		message: "Unknown error!",
		status: 500,
		statusText: "Something went wrong",
	};

	if (isRouteErrorResponse(rawError)) {
		error = {
			message: rawError.data?.message,
			status: rawError.status,
			statusText: rawError.statusText,
		};
	} else if (rawError instanceof Error) {
		error.message = rawError.message;
	}

	return (
		<section className="error-page" role="alert" aria-label={`${error.status}: ${error.statusText}`}>
			<article className="error-page__article">
				<h1 className="error-page__title">Oops Something went wrong!</h1>
				<h2 className="error-page__status">{error.status}</h2>
				<p className="error-page__message">{error.message || error.statusText}</p>
				<Link className="error-page__link" to="/" role="link" aria-label="Go back to the home page">
					Go Back
				</Link>
			</article>
		</section>
	);
};

export default ErrorPage;
