import React from 'react';


class HeadThree extends React.Component {
    constructor(props) {
        super(props);
        this.h3Style = {
            letterSpacing: "-.02em",
            fontWeight: "500",
            fontStyle: "normal",
            fontSize: "1.5em",
            lineHeight: "1.04",
            marginBottom: '2rem'
        }
        if(this.props.align){
            this.h3Style = Object.assign(this.h3Style,{textAlign:this.props.align })
        }
        if(this.props.fntSz){
            this.h3Style = Object.assign(this.h3Style,{fontSize:this.props.fntSz })
        }
        if(this.props.fntWt){
            this.h3Style = Object.assign(this.h3Style,{fontWeight:this.props.fntWt })
        }
        if(this.props.color){
            this.h3Style = Object.assign(this.h3Style,{color:this.props.color })
        }

    }

    render() {
        return (
            <h3 style={this.h3Style}>
                {this.props.children}
            </h3>
        );
    }
}



export default HeadThree;
