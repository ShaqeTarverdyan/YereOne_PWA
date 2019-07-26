import React, { Component } from 'react';
import RichText from '../RichText/index';
import  replaceClass  from '../../util/createClasses';
import defaultClasses from './serviceFullDetail.css';
class ServiceFullDetail extends Component {
    render() {
        const { content } = this.props.service
        console.log('rhis.props.service',this.props.servic)
        return (
            <div className={defaultClasses.root}>
                <RichText content={replaceClass(content,defaultClasses)} />


            </div>
        );
    }
}

export default ServiceFullDetail;