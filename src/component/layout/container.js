import React from 'react';


class Container extends React.Component {
    constructor(props) {
        super(props);
        this.contianerStyle = {
            position: 'relative',
            width: '90%',
            margin: '0 auto',
            padding: '0 10px',
            boxSizing: 'border-box'
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
