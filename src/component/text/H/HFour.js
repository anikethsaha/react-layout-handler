import React from 'react';


class HeadFour extends React.Component {
    constructor(props) {
        super(props);
        this.h4Style = {
            fontWeight: "500",
            fontStyle: "normal",
            fontSize: "1.12em",
            lineHeight: "1.04",
            marginBottom: '2rem'
        }
        if(this.props.align){
            this.h4Style = Object.assign(this.h4Style,{textAlign:this.props.align })
        }
    }

    render() {
        return (
            <h4 style={this.h4Style}>
                {this.props.children}
            </h4>
        );
    }
}



export default HeadFour;
