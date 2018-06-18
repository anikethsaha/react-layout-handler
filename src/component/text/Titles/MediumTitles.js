import React from 'react';
class MediumTitles extends React.Component {
    constructor(props) {
        super(props);

        this.MediumTitlesStyle = {
            fontSize: "2.64286rem",
            fontWeight: 'bold',
            display:' block',
            margin: ".78em auto",
        }
        if(this.props.align){
            this.MediumTitlesStyle = Object.assign(this.MediumTitlesStyle,{textAlign:this.props.align })
        }
        if(this.props.color){
            this.MediumTitlesStyle = Object.assign(this.MediumTitlesStyle,{color : this.props.color })
        }

    }

    render() {
        return (
            <h2 style={this.MediumTitlesStyle}>
                {this.props.children}
            </h2>
        );
    }
}



export default MediumTitles;
