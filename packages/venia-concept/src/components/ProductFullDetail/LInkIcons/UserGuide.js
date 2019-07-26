import React from 'react';
import classify from 'src/classify';
import defaultClasses from '../productFullDetail.css';
import Icon from 'src/components/Icon';
import folder from 'react-feather/dist/icons/folder'

const UserGuide = (props) =>  {
        const { product, classes } = props;
        return (
            <div>
                {
                    product.user_guide_link !== null ?
                        <a
                            href={product.user_guide_link}
                            className={classes.FrontendDemo}
                            target="_blank"
                        >
                            <p><Icon src={folder} size={40} /></p>
                            <h3>User Guide</h3>
                        </a>
                        : <></>
                }
            </div>

        );
    }
export default classify(defaultClasses)(UserGuide)