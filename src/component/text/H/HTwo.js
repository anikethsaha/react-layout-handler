import React from 'react';


class HeadTwo extends React.Component {
    constructor(props) {
        super(props);
        this.h2Style = {
            letterSpacing: "-.02em",
            fontWeight: "500",
            fontStyle: "normal",
            fontSize: "1.5em",
            lineHeight: "1.04",
            marginBottom: '2rem'
        }
        if(this.props.align){
            this.h2Style = Object.assign(this.h2Style,{textAlign:this.props.align })
        }
        if(this.props.fntSz){
            this.h2Style = Object.assign(this.h2Style,{fontSize:this.props.fntSz })
        }
        if(this.props.fntWt){
            this.h2Style = Object.assign(this.h2Style,{fontWeight:this.props.fntWt })
        }
        if(this.props.color){
            this.h2Style = Object.assign(this.h2Style,{color:this.props.color })
        }
    }

    render() {
        return (
            <h2 style={this.h2Style}>
                {this.props.children}
            </h2>
        );
    }
}



export default HeadTwo;
