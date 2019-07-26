import React from 'react';
import classify from 'src/classify';
import defaultClasses from '../productFullDetail.css';
import Icon from 'src/components/Icon';
import list from 'react-feather/dist/icons/list';

const BackEndDemo = (props) => {
        const { product, classes } = props;
        return (
            <div>
                {
                    product.backend_demo_link !== null ?
                        <a
                            href={product.backend_demo_link}
                            className={classes.FrontendDemo}
                            target="_blank"
                        >
                            <p><Icon src={list} size={40} /></p>
                            <h3>Backend Demo</h3>
                            <p style={{ color: 'black', padding: '10%' }}> {product.backend_demo_access} </p>
                        </a>
                        : ''
                }
            </div>
        );
    }

export default classify(defaultClasses)(BackEndDemo)