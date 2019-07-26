import React, { Component } from 'react';

import classify from 'src/classify';
import defaultClasses from './indicator.css';

import loaderindicato from './loadincindicator.jpg'
class LoadingIndicator extends Component {
    render() {
        const { props } = this;
        const { children, classes } = props;

        return (
            <div className={classes.root}>
                <img
                    className={classes.indicator}
                    src={loaderindicato}
                    width="64"
                    height="64"
                    alt="Loading indicator"
                />
                <span className={classes.message}>{children}</span>
            </div>
        );
    }
}

export default classify(defaultClasses)(LoadingIndicator);
