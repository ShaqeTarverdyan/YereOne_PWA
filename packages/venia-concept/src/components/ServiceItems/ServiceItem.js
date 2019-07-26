import React from 'react';
import { Link } from "react-router-dom";
import classify from 'src/classify';
import defaultClasses from './ServiceItem.css';


class ServiceItem extends React.Component {
    render() {
        const { classes } = this.props;
        const { url_key, iconUrl, title} = this.props.service
        return (
            <div className={classes.ServiceItemRoot}>
                <Link to={url_key}>
                    <div>
                        <img 
                            src={iconUrl} 
                            alt='service'  
                        />
                    </div>
                    <p >
                        {title}
                    </p>
                </Link>
            </div>
        );
    }
   
}
export default classify(defaultClasses)(ServiceItem);