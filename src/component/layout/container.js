import React from 'react';


class Container extends React.Component {
    constructor(props) {
        super(props);
        this.contianerStyle = {
            position: 'relative',
            width: '90%',
            margin: '0 auto',
            padding: '0 10px',
            boxSizing: 'border-box',

            fontFamily: 'system-ui,BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
        }
        if(screen.width <= 500){
            this.contianerStyle = Object.assign(this.contianerStyle,{width:'100%',padding:'.5em 0' })
        }
    }

    render() {
        return (
            <div style={this.contianerStyle}>

                {this.props.children}
            </div>
        );
    }
}


export default Container;
