import React from "react";

export default class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { error: null, errorInfo: null };
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		// Catch errors in any components below and re-render with error message
		this.setState({
			error: error,
			errorInfo: errorInfo,
		});
		// You can also log error messages to an error reporting service here
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			console.log("error: ", this.state.error);
			console.log("errorInfo: ", this.state.errorInfo);
			return <h1>Something went wrong.</h1>;
		}

		return this.props.children;
	}
}
