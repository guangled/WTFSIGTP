/**
 * Created by cal on 3/26/17.
 */
import React, { Component } from 'react';

class Description extends Component {


    render() {

        return (
            <div className="well front-des">{this.props.des}</div>
        );
    }
}

export default Description;