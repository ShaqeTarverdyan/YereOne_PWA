import React, { Component } from 'react';
import { loadingIndicator } from 'src/components/LoadingIndicator';
import { Query } from 'src/drivers';
import getUrlKey from 'src/util/getUrlKey';
import portfolio from '../../queries/getPortfolio.graphql';
import PortfolioFullDetail from 'src/components/PortfolioItems/PortfolioFullDetail';


class Portfolio extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>

                <Query
                    query={portfolio}
                    variables={{ url_key: getUrlKey() }}
                >
                    {({ loading, error, data }) => {
                        if (error) return <div>Data Fetch Error :(</div>;
                        if (loading) return loadingIndicator;
                        return (
                            <>
                                <PortfolioFullDetail portfolio={data.portfolio} />
                            </>
                        )
                    }}
                </Query>
            </div>
        );
    }
}
export default Portfolio;