import React from 'react';
import PropTypes from 'prop-types';

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.styleNav = {
            width : '100%',
            padding : '.5em 0',
            height : '2.5em',
            backgroundColor : 'white'
        }
        if(this.props.bgColor){
            this.styleNav = Object.assign(this.styleNav,{backgroundColor:this.props.bgColor })
        }
        if(this.props.position){
            this.styleNav = Object.assign(this.styleNav,{position:this.props.position })
        }
        if(this.props.height){
            this.styleNav = Object.assign(this.styleNav,{height:this.props.height })
        }
        if(screen.width <= 500){
            this.styleNav = Object.assign(this.styleNav,{width:'100%',padding:'1em 0' })
        }
    }
    render() {
        return (
            <nav style={this.styleNav}>
                {this.props.children}
            </nav>
        );
    }
}

Nav.propTypes = {};

export default Nav;
