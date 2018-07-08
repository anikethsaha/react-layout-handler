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
        if(this.props.fntSz){
            this.h4Style = Object.assign(this.h4Style,{fontSize:this.props.fntSz })
        }
        if(this.props.fntWt){
            this.h4Style = Object.assign(this.h4Style,{fontWeight:this.props.fntWt })
        }
        if(this.props.color){
            this.h4Style = Object.assign(this.h4Style,{color:this.props.color })
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
