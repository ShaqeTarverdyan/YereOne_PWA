import React from 'react';
import defaultClasses from './PortfolioItems.css';
import PortfolioItem from './PortfolioItem';
import Isotope from 'isotope-layout';
import $ from "jquery";

class PortfolioItems extends React.Component {
    constructor(props) {
        super(props);
        this.filter = this.filter.bind(this);
        this.showallItems = this.showallItems.bind(this);
    }

    componentDidMount() {
        this.iso = new Isotope('.root1', {});
    }

    filter(e) {
        const show = $(e.target).data('show');
        this.iso.arrange({
            filter: function (itemElem) {
                return $(itemElem).hasClass(show);
            }
        })
    }

    showallItems() {
        this.iso.arrange({
            filter: function () {
                return true;
            }
        })
    }
    render() {
        const { data } = this.props;
        return (
            <div className={defaultClasses.root}>
                <div className={defaultClasses.buttonGroup}>
                    <button data-show="PortfolioItem" onClick={this.showallItems}>All</button>
                    <button data-show="website" onClick={this.filter}>Website</button>
                    <button data-show="online-shop" onClick={this.filter}>Online Shop</button>
                    <button data-show="logo" onClick={this.filter} >Logo and Brandig</button>
                </div>

                <div className={`root1`}>
                    {
                        data.portfolios.items.map((portfolio) => (

                                <PortfolioItem
                                    portfolio={portfolio}
                                    key={portfolio.url_key}
                                    className={`${portfolio.category_id} ${portfolio.__typename} ${defaultClasses.PortfolioItems}`}
                                />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default PortfolioItems;


