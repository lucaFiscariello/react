import React from "react";
import logo from '../logo.svg';

class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        document.body.classList.add("bg-dark");
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{display: "flex", margin: "auto"}}>
                    <img src={logo} alt="Logo" height="180px" />
                    <div>
                        <h1>Oops!</h1>
                        <p>Si è verificato un errore imprevisto.</p>
                        <a href="/" className="primary">Vai alla pagina Home</a>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;