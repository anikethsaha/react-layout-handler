import React from 'react';


class HeadSix extends React.Component {
    constructor(props) {
        super(props);
        this.h6Style = {

            fontWeight: "500",
            fontStyle: "normal",
            fontSize: ".75em",
            lineHeight: "1.04",
            marginBottom: '2rem'
        }
        if(this.props.align){
            this.h6Style = Object.assign(this.h6Style,{textAlign:this.props.align })
        }
        if(this.props.fntSz){
            this.h6Style = Object.assign(this.h6Style,{fontSize:this.props.fntSz })
        }
        if(this.props.fntWt){
            this.h6Style = Object.assign(this.h6Style,{fontWeight:this.props.fntWt })
        }
        if(this.props.color){
            this.h6Style = Object.assign(this.h6Style,{color:this.props.color })
        }
    }

    render() {
        return (
            <h6 style={this.h6Style}>
                {this.props.children}
            </h6>
        );
    }
}



export default HeadSix;
