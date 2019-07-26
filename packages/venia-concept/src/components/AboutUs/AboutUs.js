import React from 'react';
import classify from 'src/classify';
import defaultClasses from './AboutUs.css';
import { infotext } from './aboutUsData';
import Team from './Team/index';
import { employees } from 'src/queries/getEmployees.graphql';
import { Query } from 'src/drivers';
import { loadingIndicator } from 'src/components/LoadingIndicator';

class AboutUs extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <h1>About Us</h1>
                <div className={classes.content}>
                    <div className={classes.info}>
                        <p>{infotext.info}</p>
                        <div>
                            <img src={infotext.mainImage} alt='aboutUs' />
                        </div>
                    </div>
                    <div>
                        <h1>Meet Our Team</h1>
                        <Query query={employees}>
                            {({ loading, error, data }) => {
                                if (error) return <div>Data Fetch Error :(</div>;
                                if (loading) return loadingIndicator;
                                console.log('about', data.employees.items)
                                return (
                                    <Team members={data.employees.items} />
                                )
                            }}
                        </Query>

                    </div>
                </div>
            </div>
        );
    }
}


export default classify(defaultClasses)(AboutUs);