import React from 'react';
import PropTypes from 'prop-types';

class Grid50 extends React.Component {
    constructor(props){
        super(props);
        this.styleGrid50 = {
            width : '47.5%',
            marginLeft : '-.1em',
            padding : '.5em',
            float : 'left',
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
