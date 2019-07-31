import React from 'react';
import classify from 'src/classify';
import defaultClasses from './Team.css';


const Team = (props) => {

    const { classes, members } = props
    return (
        <div className={classes.root}>
            {
                members.map((item,i) =>
                    <div className={classes.content} key={i}>
                        <img src={item.imageUrl} alt="yereonemember" />
                        <div className={classes.title}>{item.name}</div>

                        <div className={classes.position}>
                            <h2>{item.position}</h2>
                        </div>
                    </div>

                )
            }

        </div>

    );
}

export default classify(defaultClasses)(Team);
