import React, { Component } from 'react';
import RichText from '../RichText/index';
import  replaceClass  from '../../util/createClasses';
import  defaultClasses   from './PortfolioFullDetail.css';

class PortfolioFullDetail extends Component {
    render() {
        const { content } = this.props.portfolio;
        return (
            <div className={defaultClasses.root}>
                <RichText content={replaceClass(content,defaultClasses)}/>
            </div>
        );
    }
}

export default PortfolioFullDetail;

