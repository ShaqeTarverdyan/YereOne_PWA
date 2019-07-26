import React, { Component } from 'react';
import MainServices from 'src/components/ServiceItems/MainServices';
import MagentoServices from 'src/components/ServiceItems/MagentoServices';
import WordpressServices from 'src/components/ServiceItems/WordpressServices';
import { Link } from "react-router-dom";
import classify from 'src/classify';
import defaultClasses from './Services.css';

class Services extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <>
                    <div>
                    <Link to=''>
                                <h2>Main Services</h2>
                        </Link>
                        <MainServices />
                    </div>
                    <div>
                        <Link to=''>
                                <h2>Magento Services</h2>
                        </Link>
                        <MagentoServices />
                    </div>
                    <div>
                    <Link to=''>
                                <h2>Wordpress Services</h2>
                        </Link>
                        <WordpressServices />
                    </div>
                </>
            </div>
        );
    }
}

export default classify(defaultClasses)(Services);