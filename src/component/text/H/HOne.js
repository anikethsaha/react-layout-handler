import React from 'react';


class HeadOne extends React.Component {
    constructor(props) {
        super(props);
        this.h1Style = {
            letterSpacing: "-.02em",
            fontWeight: "500",
            fontStyle: "normal",
            fontSize: "2em",
            lineHeight: "1.04",
            marginBottom: '2rem'
        }
        if(this.props.align){
            this.h1Style = Object.assign(this.h1Style,{textAlign:this.props.align })
        }
    }

    render() {
        return (
            <h1 style={this.h1Style}>
                {this.props.children}
            </h1>
        );
    }
}



export default HeadOne;
