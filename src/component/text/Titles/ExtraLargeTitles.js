import React from 'react';
class ExtraLargeTitles extends React.Component {
    constructor(props) {
        super(props);

        this.ExtraLargeTitlesStyle = {
            fontSize: "3.58em",
            fontWeight: '900',
            margin: ".78em auto",
        }
        if(this.props.align){
            this.ExtraLargeTitlesStyle = Object.assign(this.ExtraLargeTitlesStyle,{textAlign:this.props.align})
        }
        if(this.props.color){
            this.ExtraLargeTitlesStyle = Object.assign(this.ExtraLargeTitlesStyle,{color:this.props.color })
        }
    }

    render() {
        return (
            <h1 style={this.ExtraLargeTitlesStyle}>
                {this.props.children}
            </h1>
        );
    }
}



export default ExtraLargeTitles;
