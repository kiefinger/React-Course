import {Component} from 'react';

class ErrorBoundary extends Component {

    constructor() {
        super();
        this.state= {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log("CATCH");
        this.setState( {
            hasError: true
            }

        )
    }

    render() {
        if ( this.state.hasError ) {
            return <p>there was a error</p>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary