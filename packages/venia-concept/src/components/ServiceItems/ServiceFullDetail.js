import React, { Component } from 'react';
import RichText from '../RichText/index';
import replaceClass from '../../util/createClasses';
import defaultClasses from './serviceFullDetail.css';
import PortfolioHomePage from 'src/components/PortfolioItems/PortfolioHomePage';


class ServiceFullDetail extends Component {
    render() {
        const { content } = this.props.service
        return (
            <div className={defaultClasses.root}>
                <RichText content={replaceClass(content, defaultClasses)} />
                <div>
                    < PortfolioHomePage />
                </div>
            </div>
        );
    }
}

export default ServiceFullDetail;