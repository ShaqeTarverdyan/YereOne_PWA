import React from 'react';
import { Link, resourceUrl } from 'src/drivers';
import classify from 'src/classify';
import defaultClasses from './Menu.css';
import { List } from 'react-feather';
import NavTrigger from '../Header/navTrigger';

const menudata = [
    { id: 1, name: 'Magento Extensions', url: '/magento-extensions' },
    { id: 2, name: 'Services', url: '/services' },
    { id: 3, name: 'Portfolio', url: 'portfolio' },
    { id: 4, name: 'About', url: 'about' },
    { id: 5, name: 'Contacts', url: 'contact' },
    { id: 6, name: 'Blog', url: 'blog' },
]

import Logo from '../Logo/index';
class MenuComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            isClose:false
        }
        this.handleIsOpenMenu = this.handleIsOpenMenu.bind(this);
        this.handleIsClose = this.handleIsClose.bind(this);
    }
    handleIsOpenMenu() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    handleIsClose() {
        this.setState({
            isClose:!this.state.isClose
        })
    }
    render() {
        const { classes } = this.props;
        const { isOpen } = this.state;
        return (
            <div className={classes.topnav}>
                <ul>
                    {
                        menudata.map(menuitem =>
                            <Link to={`${menuitem.url}`} key={menuitem.id}>
                                <li>{menuitem.name}</li>
                            </Link>
                        )
                    }
                </ul>
                <div className={classes.ResponsiveDiv}>
                    <div>
                        <NavTrigger className={classes.icon} onClick={this.handleIsOpenMenu} >
                            <List size={50} />
                        </NavTrigger>
                    </div>

                    <div>
                        <Link to={resourceUrl('/')}>
                            <Logo classes={{ logo: classes.logo }} />
                        </Link>
                    </div>
                </div>
                {
                    isOpen && <div> <NavTrigger /></div>
                }
            </div>
        );
    }
}
export default classify(defaultClasses)(MenuComponent);
