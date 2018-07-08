import React from 'react';
import PropTypes from 'prop-types';

class Grid25 extends React.Component {
    constructor(props){
        super(props);
        this.styleGrid25 = {
            width : '30.4%',

            padding : '.5em',
            float : 'left',
        }
        if(this.props.bgColor){
            this.styleGrid25 = Object.assign(this.styleGrid25,{backgroundColor:this.props.bgColor })
        }
        if(screen.width <= 500){
            this.styleGrid25 = Object.assign(this.styleGrid25,{width:'100%',padding:'1em 0' })
        }
    }
    render() {
        return (
            <div style={this.styleGrid25}>
                {this.props.children}
            </div>
        );
    }
}

Grid25.propTypes = {};

export default Grid25;
