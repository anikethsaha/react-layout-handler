import React from 'react';
import PropTypes from 'prop-types';

class Wrapper extends React.Component {
    constructor(props) {
        super(props);
        this.layoutStyle = {
            fontFamily  : "sans-serif",
            display     : "block",
            margin      : "0",
            padding     : "1em",
            color       : "#3d4852",
            minWidth    : '1008px',
            backgroundColor: 'white',
        }
        if(this.props.fontSize){
            this.layoutStyle = Object.assign(this.layoutStyle,{fontSize : this.props.fontSize});
        }
        if(this.props.color){
            this.layoutStyle = Object.assign(this.layoutStyle,{color : this.props.color});
        }
        if(this.props.bgColor){
            this.layoutStyle = Object.assign(this.layoutStyle,{backgroundColor : this.props.bgColor});
        }
        if(screen.width <= 500){
            this.layoutStyle = Object.assign(this.layoutStyle,{width:'100%',padding:'.5em 0' })
        }
        console.log('this.layoutStyle :', this.layoutStyle);
    }

    render() {
        return (
            <section style={this.layoutStyle}>
                {this.props.children}
            </section>
        );
    }
}

Wrapper.propTypes = {};

export default Wrapper;
