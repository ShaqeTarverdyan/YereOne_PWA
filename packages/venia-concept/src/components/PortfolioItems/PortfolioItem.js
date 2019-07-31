import React from 'react';
import { Link } from "react-router-dom";
import classify from 'src/classify';
import defaultClasses from './PortfolioItem.css';

class PortfolioItem extends React.Component {
    render() {
        const { classes } = this.props;
        const { url_key, imageUrl, title, } = this.props.portfolio
        return (

            <div className={classes.view}>
                <img
                    src={imageUrl}
                    alt={title}
                />
                <div className={classes.mask}>
                    <h2>{title}</h2>
                    <Link
                        to={url_key}
                        className={classes.info}
                    > View More </Link>
                </div>
            </div>

        );
    }
}

export default classify(defaultClasses)(PortfolioItem);


