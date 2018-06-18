import React from 'react';
class SmallTitles extends React.Component {
    constructor(props) {
        super(props);

        this.SmallTitlesStyle = {
            fontSize: '24px',
            margin: ".78em auto",
        }
        if(this.props.align){
            this.SmallTitlesStyle = Object.assign(this.SmallTitlesStyle,{textAlign:this.props.align })
        }
        if(this.props.color){
            this.SmallTitlesStyle = Object.assign(this.SmallTitlesStyle,{color:this.props.color })
        }
    }

    render() {
        return (
            <h1 style={this.SmallTitlesStyle}>
                {this.props.children}
            </h1>
        );
    }
}



export default SmallTitles;
