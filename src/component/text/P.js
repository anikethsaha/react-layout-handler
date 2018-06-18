import React from 'react';
import PropTypes from 'prop-types';

class P extends React.Component {
    constructor(props) {
        super(props);
        this.pStyle = {

            fontSize: '1.2rem',
            lineHeight: '1.71',
            display: 'block',
            marginBottom: '10px',
        }
    }

    render() {
        return (
            <p style={this.pStyle}>
                {this.props.children}
            </p>
        );
    }
}

P.propTypes = {};

export default P;
