import React from 'react';


class HeadFive extends React.Component {
    constructor(props) {
        super(props);
        this.h5Style = {

            fontWeight: "500",
            fontStyle: "normal",
            fontSize: ".83em",
            lineHeight: "1.04",
            marginBottom: '2rem'
        }
        if(this.props.align){
            this.h5Style = Object.assign(this.h5Style,{textAlign:this.props.align })
        }
    }

    render() {
        return (
            <h5 style={this.h5Style}>
                {this.props.children}
            </h5>
        );
    }
}



export default HeadFive;
