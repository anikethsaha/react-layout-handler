import React from 'react';
import PropTypes from 'prop-types';

class MenuContainer extends React.Component {
    constructor(props){
        super(props);
        this.styleMenuContainer = {
            width : '100%',
            backgroundColor : 'white',
            float : 'right'
        }
        if(this.props.bgColor){
            this.styleMenuContainer = Object.assign(this.styleMenuContainer,{backgroundColor:this.props.bgColor })
        }
        if(this.props.position){
            this.styleMenuContainer = Object.assign(this.styleMenuContainer,{position:this.props.position })
        }
        if(this.props.height){
            this.styleMenuContainer = Object.assign(this.styleMenuContainer,{height:this.props.height })
        }
        if(screen.width <= 500){
            this.styleMenuContainer = Object.assign(this.styleMenuContainer,{width:'100%',padding:'1em 0' })
        }
    }
    render() {
        return (
            <ul style={this.styleMenuContainer}>
                {this.props.children}
            </ul>
        );
    }
}

MenuContainer.propTypes = {};

export default MenuContainer;
