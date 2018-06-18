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
            color       : "rgba(0,0,0,.7)",
            minWidth    : '1008px',
            backgroundColor: 'rgb(244, 245, 247)',
        }
        if(this.props.fontSize){
            this.layoutStyle = Object.assign(this.layoutStyle,{fontSize : this.props.fontSize});
        }
        if(this.props.color){
            this.layoutStyle = Object.assign(this.layoutStyle,{color : this.props.color});
        }
        if(this.props.backgroundColor){
            this.layoutStyle = Object.assign(this.layoutStyle,{backgroundColor : this.props.backgroundColor});
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
