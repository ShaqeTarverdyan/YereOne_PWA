import React from 'react';
import classify from 'src/classify';
import defaultClasses from './Team.css';


const Team = (props) => {

    const { classes, members } = props
    return (
        <div className={classes.root}>
            {
                members.map(item =>
                    <div className={classes.content}>
                        <img src={item.imageUrl} alt="yereonemember" />
                    </div>
                )
            }

        </div>

    );
}

export default classify(defaultClasses)(Team);