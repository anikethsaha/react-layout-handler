import React from 'react';
import PropTypes from 'prop-types';

class Code extends React.Component {
    constructor(props) {
        super(props);
        this.codeStyle = {
                padding: ".2rem .5rem",
                margin:" 0 .2rem",
                fontSize: "90%",
                whiteSpace: "nowrap",
                background: "#F1F1F1",
                border: "1px solid #E1E1E1",
                borderRadius: "4px",

        }
    }

    render() {
        return (
            <code style={this.codeStyle}>
                 {this.props.children}
            </code>
        );
    }
}

Code.propTypes = {};

export default Code;
