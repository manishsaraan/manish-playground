import React, { PureComponent } from 'react';

class ErrorHandler extends PureComponent {
    state = {
        isError: false,
    }

    componentDidCatch(){
        this.setState({isError: true });
    }

    render(){
        const { children } = this.props;
        console.log(this.state.isError);
        if(this.state.isError){
             return   (<div>Something went wrong!!</div>)
        }
        return children;
    }
}

export default ErrorHandler;