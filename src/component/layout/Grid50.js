import React from 'react';
import PropTypes from 'prop-types';

class Grid50 extends React.Component {
    constructor(props){
        super(props);
        this.styleGrid50 = {
            width : '46%',

            padding : '.5em',
            float : 'left',
        }
        if(this.props.bgColor){
            this.styleGrid50 = Object.assign(this.styleGrid50,{backgroundColor:this.props.bgColor })
        }
        if(this.props.bordr){
            this.styleGrid50 = Object.assign(this.styleGrid50,{border:this.props.bordr })
        }
        if(screen.width <= 500){
            this.styleGrid50 = Object.assign(this.styleGrid50,{width:'100%',padding:'1em 0' })
        }
    }
    render() {
        return (
            <div style={this.styleGrid50}>
                {this.props.children}
            </div>
        );
    }
}

Grid50.propTypes = {};

export default Grid50;
