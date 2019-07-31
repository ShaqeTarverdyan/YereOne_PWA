import React from 'react';
import { Link } from 'src/drivers';
import classify from 'src/classify';
import defaultClasses from './MenuTRee.css';


const menudata = [
    { id: 1, name: 'Magento Extensions', url: '/magento-extensions' },
    { id: 2, name: 'Services', url: '/services' },
    { id: 3, name: 'Portfolio', url: 'portfolio' },
    { id: 4, name: 'About', url: 'about' },
    { id: 5, name: 'Contacts', url: 'contact' },
    { id: 6, name: 'Blog', url: 'blog' },
]

class MenuTree extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <ul>
                {
                    menudata.map(menuItem => 
                        <Link 
                            key={menuItem.id} 
                            to={menuItem.url} 
                            className={classes.root}
                            onClick={this.onClose}
                        >
                            <li className={classes.text} >{menuItem.name}</li>
                        </Link>
                    
                        )
                }
                </ul>

            </div>
        ); 
    }
}

export default classify(defaultClasses)(MenuTree);