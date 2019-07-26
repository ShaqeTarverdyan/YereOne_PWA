import React, { Component } from 'react';
import getUrlKey from 'src/util/getUrlKey';
import { loadingIndicator } from 'src/components/LoadingIndicator';
import { Query } from 'src/drivers';
import service from '../../queries/service.graphql'
import ServiceFullDetail from 'src/components/ServiceItems/ServiceFullDetail';

class Service extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <Query
                    query={service}
                    variables={{ url_key: getUrlKey() }}
                >
                    {({ loading, error, data }) => {
                        if (error) return <div>Data Fetch Error :(</div>;
                        if (loading) return loadingIndicator;

                        return (
                        
                            <ServiceFullDetail 
                                service={data.service}
                            />
                        )
                    }}
                </Query>
            </div>
        ); 
    }
}

export default Service;  
