import React from 'react';
class LargeTitles extends React.Component {
    constructor(props) {
        super(props);

        this.LargeTitlesStyle = {
            fontSize: "3.3rem",
            fontWeight: "bold",
            letterSpacing: "-0.5px",
            display: "block",
            lineHeight: "1.2",
            margin: ".78em auto",
        }
        if(this.props.align){
            this.LargeTitlesStyle = Object.assign(this.LargeTitlesStyle,{textAlign:this.props.align })
        }
        if(this.props.color){
            this.LargeTitlesStyle = Object.assign(this.LargeTitlesStyle,{color:this.props.color })
        }
    }

    render() {
        return (
            <h1 style={this.LargeTitlesStyle}>
                {this.props.children}
            </h1>
        );
    }
}



export default LargeTitles;
