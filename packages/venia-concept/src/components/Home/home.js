import React, { Component } from 'react';
import ServiceItems from 'src/components/ServiceItems';
import Banner from 'src/components/Banner';
import PortfolioHomePage from 'src/components/PortfolioItems/PortfolioHomePage';
import Block from 'src/components/Block';
import Testimonial from 'src/components/Testimonial';
import classify from 'src/classify';
import defaultClasses from './home.css';
import { Link } from "react-router-dom";


class Home extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.homePage}>
                <Banner />
                <div>
                    <Link to='services'>
                        <div className={classes.Title}>
                            <h2>Main Services</h2>
                        </div>
                    </Link>
                    <ServiceItems />
                </div>
                <div>
                    <Link to='portfolio'>
                        <div className={classes.Title}>
                            <h2>Recent Works</h2>
                        </div>
                    </Link>
                    <PortfolioHomePage />
                </div>
                <div>
                    <Block />
                </div>

                <div>
                    <Testimonial />
                </div>
            </div>
        );
    }
}
export default classify(defaultClasses)(Home);
