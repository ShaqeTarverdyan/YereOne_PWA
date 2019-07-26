import React from 'react';
import defaultClasses from './SeconsaryHeader.css';
import classify from 'src/classify';
import { Link } from 'src/drivers';

class SecondaryHeader extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
               <div>secondary header</div>
            </div>
        );
    }

}

export default classify(defaultClasses)(SecondaryHeader);