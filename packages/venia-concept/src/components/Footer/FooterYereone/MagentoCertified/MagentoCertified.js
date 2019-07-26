import React from 'react';
import classify from 'src/classify';
import defaultClasses from './MagentoCertified.css';

const data = {
    image: 'https://www.yereone.com/blog/wp-content/themes/custom/assets/images/magento-certified.png',
    content: 'Our team has proven qualifications and certification for doing high quality work. Our goal is to create high quality online store for our customers worldwide.'
}
class MagentoCertified extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <a href="https://u.magento.com/certification/directory/dev/377948/" target='_blank'>
                    <h4>We are certified!</h4>
                </a>

                <div className={classes.content}>
                    <div>
                        <img src={data.image} alt="certified" />
                    </div>
                    <div>
                        <p>{data.content}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default classify(defaultClasses)(MagentoCertified);