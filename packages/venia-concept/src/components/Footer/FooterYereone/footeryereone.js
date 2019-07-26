import React from 'react';
import classify from 'src/classify';
import defaultClasses from './footeryereone.css';
import AboutYereone from './AboutYereone/index';
import FooterContact from './Contacts/FooterContact';
import MagentoCertified from './MagentoCertified/index';


class FooterYereone extends React.Component {
    render() {
        const { classes } = this.props
        return (

            <div className={classes.root}>
                <hr />
                <div className={classes.content}>
                    <AboutYereone />
                    <FooterContact />
                    <MagentoCertified />
                </div>
            </div>
        )
    }
}
export default classify(defaultClasses)(FooterYereone);
