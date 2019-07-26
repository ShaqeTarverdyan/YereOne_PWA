import React from 'react';
import classify from 'src/classify';
import defaultClasses from './banner.css';
import { bannerData } from './bannerdata';
import { Link } from "react-router-dom";
class Banner extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.bannerSegment}>
                <div className={classes.bannerContent}>
                    <div className={classes.bannerText}>
                        <h1>
                            {bannerData.title}
                        </h1>
                        <p>
                            {bannerData.content}
                        </p>
                        <div>
                            <img src={bannerData.imageUrl} alt="magento_logo" />
                            <br />
                            <Link to="about">
                                <button>see more about as</button>
                            </Link>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
};
export default classify(defaultClasses)(Banner);