import React from 'react';
import ServiceItem from './ServiceItem';
import { Query } from 'src/drivers';
import classify from 'src/classify';
import defaultClasses from './Services.css';
import services from '../../queries/services.graphql';
import { loadingIndicator } from 'src/components/LoadingIndicator';



class MainServices extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <>
                <div className={classes.servicesRoot}>
                    <div className={classes.ServiceContent}>
                        <Query query={services}
                             variables={{ category: "main" }}
                        >
                            {({ loading, error, data }) => {
                                if (error) return <div>Data Fetch Error :(</div>;
                                if (loading) return loadingIndicator;
                                return (
                                    data.services.items.map(service => (
                                        <ServiceItem service={service} key={service.url_key} />
                                    ))
                                )
                            }}
                        </Query>
                    </div>

                </div>
            </>
        );
    }

}
export default classify(defaultClasses)(MainServices);