import React, { Component } from 'react';
import { Query } from 'src/drivers';
import { loadingIndicator } from 'src/components/LoadingIndicator';
import portfolios from '../../queries/getPortfolioList.graphql';
import PortfolioItem from './PortfolioItem';
import defaultClasses from './PortfolioHomePage.css'
class PortfolioHomePage extends Component {

    render() {
        return (
            <div style={{maxWidth:'1280px'}}>

            
                    <Query query={portfolios}>
                        {({ loading, error, data }) => {
                            if (error) return <div>Data Fetch Error :(</div>;
                            if (loading) return loadingIndicator;
                            const filteredId = data.portfolios.items.filter(item => item.id < 5);
                         
                            return (
                                <div className={defaultClasses.portfolioItem}>
                                    {
                                        filteredId.map(item => 
                                            <PortfolioItem  key={item.id} portfolio={item}/>
                                            )
                                    }
                                </div>
                            )
                        }}
                    </Query>
            </div>
        );
    }
}

export default PortfolioHomePage;