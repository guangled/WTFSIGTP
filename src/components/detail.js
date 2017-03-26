/*
 * @Author: guangled
 * @Date:   2017-03-25 17:59:37
 * @Last Modified by:   guangled
 * @Last Modified time: 2017-03-26 03:45:48
 */
import React, { Component } from 'react';

class Detail extends Component {


    render() {

        return (
            <h4 className="title">{this.props.msg}</h4>
        );
    }
}

export default Detail;