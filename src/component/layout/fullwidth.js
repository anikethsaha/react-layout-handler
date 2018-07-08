import React from 'react';
import PropTypes from 'prop-types';

class FullWidth extends React.Component {
    constructor(props){
        super(props);
        this.styleFullwidth = {
            width : '100%',
            padding : '.5em',
            float : 'left'
        }
        if(this.props.bgColor){
            this.styleFullwidth = Object.assign(this.styleFullwidth,{backgroundColor:this.props.bgColor })
        }
        if(this.props.p){
            this.styleFullwidth = Object.assign(this.styleFullwidth,{padding:this.props.p })
        }
        if(this.props.m){
            this.styleFullwidth = Object.assign(this.styleFullwidth,{margin:this.props.m })
        }
        if(screen.width <= 500){
            this.styleFullwidth = Object.assign(this.styleFullwidth,{width:'100%',padding:'1em 0' })
        }
    }
    render() {
        return (
            <div style={this.styleFullwidth}>
                {this.props.children}
            </div>
        );
    }
}

FullWidth.propTypes = {};

export default FullWidth;
