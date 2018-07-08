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
        if(this.props.fntSz){
            this.h5Style = Object.assign(this.h5Style,{fontSize:this.props.fntSz })
        }
        if(this.props.fntWt){
            this.h5Style = Object.assign(this.h5Style,{fontWeight:this.props.fntWt })
        }
        if(this.props.color){
            this.h5Style = Object.assign(this.h5Style,{color:this.props.color })
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
