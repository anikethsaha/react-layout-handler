import React from 'react';
import PropTypes from 'prop-types';

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.styleMenu = {
            width : 'fit-content',
            padding : '0 .1em',
            marginRight : '.5em',
            backgroundColor : 'white',
            float : 'left',
            listStyle: 'none',
            fontSize: '1.125rem',
            color: '#606f7b',
            textDecoration: 'none',
            lineHeight: '1.15',
        }
        this.alinkStyle ={
            fontWeight: '600',
            textDecoration: 'none',
            color: '#606f7b',
        }
        if(this.props.bgColor){
            this.styleMenu = Object.assign(this.styleMenu,{backgroundColor:this.props.bgColor })
        }
        if(this.props.position){
            this.styleMenu = Object.assign(this.styleMenu,{position:this.props.position })
        }
        if(this.props.height){
            this.styleMenu = Object.assign(this.styleMenu,{height:this.props.height })
        }
        if(screen.width <= 500){
            this.styleMenu = Object.assign(this.styleMenu,{width:'100%',padding:'1em 0' })
        }
    }
    render() {
        return (
            <li style={this.styleMenu}>
                <a href={this.props.alink || '#'} style={this.alinkStyle}>
                    {this.props.children}
                </a>
            </li>
        );
    }
}

Menu.propTypes = {};

export default Menu;
