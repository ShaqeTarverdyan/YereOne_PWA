import React, { Component } from 'react';
import PortfolioList from 'src/components/PortfolioItems/PortfolioList';
import classify from 'src/classify';
import defaultClasses from './Portfolios.css';
class Portfolio extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <h1>Our Portfolio</h1>
                <h3>Take a look at our portfolio and see all of the sites we have created.</h3>
                <PortfolioList />
            </div>
        );
    }
}
export default classify(defaultClasses)(Portfolio);