import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FooterYereone from './FooterYereone/footeryereone';
import classify from 'src/classify';
import defaultClasses from './footer.css';
import storeConfigDataQuery from '../../queries/getStoreConfigData.graphql';
import { Query } from 'src/drivers';

class Footer extends Component {
    static propTypes = {
        classes: PropTypes.shape({
            copyright: PropTypes.string,
            root: PropTypes.string,
            tile: PropTypes.string,
            tileBody: PropTypes.string,
            tileTitle: PropTypes.string
        })
    };


    render() {
        const { classes } = this.props;

        return (
            <>

                <footer>
                    <div><FooterYereone /></div>
                    <div className={classes.copyright}>
                        <Query query={storeConfigDataQuery}>
                            {({ loading, error, data }) => {
                                if (error) {
                                    return (
                                        <span className={classes.fetchError}>
                                            Data Fetch Error:{' '}
                                            <pre>{error.message}</pre>
                                        </span>
                                    );
                                }
                                if (loading) {
                                    return (
                                        <span className={classes.fetchingData}>
                                            Fetching Data
                                    </span>
                                    );
                                }
                                return <span>{data.storeConfig.copyright}</span>;
                            }}
                        </Query>
                    </div>
                </footer>
            </>
        );
    }
}

export default classify(defaultClasses)(Footer);
