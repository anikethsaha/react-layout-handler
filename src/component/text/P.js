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
        if(this.props.align){
            this.pStyle = Object.assign(this.pStyle,{textAlign:this.props.align })
        }
        if(this.props.fntSz){
            this.pStyle = Object.assign(this.pStyle,{fontSize:this.props.fntSz })
        }
        if(this.props.fntWt){
            this.pStyle = Object.assign(this.pStyle,{fontWeight:this.props.fntWt })
        }
        if(this.props.color){
            this.pStyle = Object.assign(this.pStyle,{color:this.props.color })
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
