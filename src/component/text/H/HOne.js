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
        if(this.props.fntSz){
            this.h1Style = Object.assign(this.h1Style,{fontSize:this.props.fntSz })
        }
        if(this.props.fntWt){
            this.h1Style = Object.assign(this.h1Style,{fontWeight:this.props.fntWt })
        }
        if(this.props.color){
            this.h1Style = Object.assign(this.h1Style,{color:this.props.color })
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
