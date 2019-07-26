import React from 'react';
import classify from 'src/classify';
import defaultClasses from './block.css';

import {blockData } from './blockdata';
import BlockItem from './blockItem';
const Block = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
           {
               blockData.map(item => 
                <BlockItem  key={item.id} block={item}/>
                )
           }
        </div>
    );
}

export default classify(defaultClasses)(Block);