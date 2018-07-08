import React from 'react';
import PropTypes from 'prop-types';

class Grid75 extends React.Component {
    constructor(props){
        super(props);
        this.styleGrid75 = {
            width : '61%',

            padding : '.5em',
            float : 'left',
        }
        if(this.props.bgColor){
            this.styleGrid75 = Object.assign(this.styleGrid75,{backgroundColor:this.props.bgColor })
        }
        if(this.props.bordr){
            this.styleGrid75 = Object.assign(this.styleGrid75,{border:this.props.bordr })
        }
        if(this.props.p){
            this.styleGrid75 = Object.assign(this.styleGrid75,{padding:this.props.p })
        }
        if(this.props.m){
            this.styleGrid75 = Object.assign(this.styleGrid75,{margin:this.props.m })
        }
        if(screen.width <= 500){
            this.styleGrid75 = Object.assign(this.styleGrid75,{width:'100%',padding:'1em 0' })
        }
    }
    render() {
        return (
            <div style={this.styleGrid75}>
                {this.props.children}
            </div>
        );
    }
}

Grid75.propTypes = {};

export default Grid75;
