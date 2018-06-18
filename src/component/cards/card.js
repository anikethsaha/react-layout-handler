import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.cardStyle = {
            display: 'block',
            padding: '1.2em .7em .5em',
            width: 'auto',
            boxShadow: '0 50px 100px rgba(0,0,0,0.15)',
            background: '#FFFFFF',
            borderRadius: '3px',
            margin: '1em',
        }
    }

    render() {
        return (
            <div style={this.cardStyle}>
                {this.props.children}
            </div>
        );
    }
}



export default Card;
