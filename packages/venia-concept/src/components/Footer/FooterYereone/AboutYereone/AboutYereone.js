import React from 'react';
import classify from 'src/classify';
import defaultClasses from './AboutYereone.css';
import * as footerData from '../../footerData';


class AboutYereone extends React.Component {
    render() {
        const { classes } = this.props;
        const { title, image, content} = footerData.FooterAbout
        return (
            <div className={classes.root}>
                <h4>{title}</h4>
                <div className={classes.content}>
                    <div>
                        <img src={image} alt='Yereone' style={{ width: '100%' }} />
                    </div>
                    <div>
                        <p>{content}</p>
                    </div>
                </div>


            </div>
        )
    }
}
export default classify(defaultClasses)(AboutYereone);