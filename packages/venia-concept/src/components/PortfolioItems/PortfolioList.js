import React, { Component } from 'react';
import classify from 'src/classify';
import defaultClasses from './PorfolioList.css';
import { Query } from 'src/drivers';
import { loadingIndicator } from 'src/components/LoadingIndicator';
import portfolios from '../../queries/getPortfolioList.graphql';
import PortfolioItems from './PortfolioItems';


class PortfolioList extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Query query={portfolios}>
                    {({ loading, error, data }) => {
                        if (error) return <div>Data Fetch Error :(</div>;
                        if (loading) return loadingIndicator;
                        return (
                            <PortfolioItems data={data} />
                        )
                    }}
                </Query>
            </div>
        );
    }
}




export default classify(defaultClasses)(PortfolioList);

