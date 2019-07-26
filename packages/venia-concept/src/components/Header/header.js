import React, { Component, Suspense } from 'react';
import PropTypes from 'prop-types';
import classify from 'src/classify';
import { Link, resourceUrl, Route } from 'src/drivers';
import Icon from 'src/components/Icon';
import SearchIcon from 'react-feather/dist/icons/search';
import CartTrigger from './cartTrigger';
import SearchTrigger from './searchTrigger';
import MenuComponent from '../Menu/index';
import SecondaryHeader from './SecondaryHeader'
const SearchBar = React.lazy(() => import('src/components/SearchBar'));

import defaultClasses from './header.css';
import Logo from '../Logo';



class Header extends Component {
    static propTypes = {
        classes: PropTypes.shape({
            logo: PropTypes.string,
            primaryActions: PropTypes.string,
            root: PropTypes.string,
            open: PropTypes.string,
            closed: PropTypes.string,
            secondaryActions: PropTypes.string,
            toolbar: PropTypes.string
        }),
        searchOpen: PropTypes.bool,
        toggleSearch: PropTypes.func.isRequired
    };

    get searchIcon() {
        return <Icon src={SearchIcon} />;
    }
    render() {
        const { searchOpen, classes, toggleSearch } = this.props;
        const rootClass = searchOpen ? classes.open : classes.closed;
        return (
            <>
                <div>
                    <SecondaryHeader />
                    <hr />
                </div>
                <header className={rootClass}>
                    <div className={classes.toolbar}>
                        <div>
                            <Link to={resourceUrl('/')}>
                                <Logo classes={{ logo: classes.logo }} />
                            </Link>
                        </div>

                        <div className={classes.MenuBar}>
                            <MenuComponent />
                        </div>
                        <div className={classes.secondaryActions}>
                            <SearchTrigger
                                searchOpen={searchOpen}
                                toggleSearch={toggleSearch}
                            >
                                <p >{this.searchIcon}</p>
                            </SearchTrigger>
                            <CartTrigger />
                        </div>
                    </div>
                    <Suspense fallback={this.searchIcon}>
                        <Route
                            render={({ history, location }) => (
                                <SearchBar
                                    isOpen={searchOpen}
                                    history={history}
                                    location={location}
                                />
                            )}
                        />
                    </Suspense>
                </header>
            </>
        );
    }
}

export default classify(defaultClasses)(Header);
