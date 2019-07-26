import React from 'react';
import classify from 'src/classify';
import defaultClasses from './blockItem.css';
import Icon from 'src/components/Icon'; 

const BlockItem = (props) => {
    const { classes, block } = props;
    const { title, content, icon } = block
    return (
            <div className={classes.root}>
                <div><Icon  src={icon} size={40}/></div>
                <h4>{title}</h4>
                <p>{content}</p>
            </div>
    );
}


export default classify(defaultClasses)(BlockItem);