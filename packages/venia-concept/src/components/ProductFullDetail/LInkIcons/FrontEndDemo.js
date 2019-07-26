import React from 'react';
import classify from 'src/classify';
import defaultClasses from '../productFullDetail.css';
import Icon from 'src/components/Icon';
import home from 'react-feather/dist/icons/home';

const FrontendDemo = (props) =>  {
        const { product, classes } = props;
        return (
            <div>
                {
                    product.frontend_demo_link !== null ?
                        <a
                            href={product.frontend_demo_link}
                            className={classes.FrontendDemo}
                            target="_blank"
                        >
                            <p><Icon src={home} size={40} /></p>
                            <h3>Frontend Demo</h3>
                        </a>
                        : ''
                }
            </div>

        );
    }
    
export default classify(defaultClasses)(FrontendDemo)