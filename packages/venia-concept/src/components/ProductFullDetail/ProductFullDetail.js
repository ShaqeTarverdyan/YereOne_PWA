import React, { Component } from 'react';
import { arrayOf, bool, number, shape, string } from 'prop-types';
import classify from 'src/classify';
import RichText from 'src/components/RichText';
import defaultClasses from './productFullDetail.css';
import staticImages from './staticImages';
import FrontendDemo from './LInkIcons/FrontEndDemo';
import BackEndDemo from './LInkIcons/BackEndDemo';
import UserGuide from './LInkIcons/UserGuide';
import isProductConfigurable from 'src/util/isProductConfigurable';
import appendOptionsToPayload from 'src/util/appendOptionsToPayload';


class ProductFullDetail extends Component {
    static propTypes = {
        classes: shape({
            cartActions: string,
            description: string,
            descriptionTitle: string,
            details: string,
            detailsTitle: string,
            imageCarousel: string,
            options: string,
            productName: string,
            productPrice: string,
            quantity: string,
            quantityTitle: string,
            root: string,
            title: string
        }),
        product: shape({
            __typename: string,
            id: number,
            sku: string.isRequired,
            price: shape({
                regularPrice: shape({
                    amount: shape({
                        currency: string.isRequired,
                        value: number.isRequired
                    })
                }).isRequired
            }).isRequired,
            media_gallery_entries: arrayOf(
                shape({
                    label: string,
                    position: number,
                    disabled: bool,
                    file: string.isRequired
                })
            ),
            description: string
        }).isRequired,
    };
    state = {
        showdetails: true,
        showReviews: false,
        quantity: 1
    }
    setQuantity = quantity => this.setState({ quantity });
    addToCart = () => {

        const { props, state } = this;
        const { quantity } = state;
        const { addToCart, product } = props;

        const payload = {
            item: product,
            productType: product.__typename,
            quantity
        };

        if (isProductConfigurable(product)) {
            appendOptionsToPayload(payload);
        }

        addToCart(payload);
    };

    handleToggleDetails = () => {
        this.setState({
            showdetails: !this.state.showdetails,
            showReviews: !this.state.showReviews
        })
    }
    handleToggleReviews = () => {
        this.setState({
            showdetails: !this.state.showdetails,
            showReviews: !this.state.showReviews
        })
    }

    render() {
        const { props, addToCart } = this;
        const { product, classes } = props;
        const { name, sku, small_image, short_description } = product
        const details = this.state.showdetails ? <RichText content={product.description} /> : <h2>there will be reviews</h2>;

        return (
            <div className={classes.root}>
                <h1>{name} | {sku}</h1>
                <div className={classes.content}>
                    <div className={classes.leftContent}>
                        <div className={classes.TestimonialImage}>
                            <img src={small_image.url} alt="logo" />
                        </div>
                        <div className={classes.review}>
                            <p> starts</p>
                        </div>
                        <div className={classes.magentoLogo}>
                            <img src={staticImages.magentoLogo} alt="logo" />
                        </div>
                    </div>

                    <div className={classes.middleContent}>
                        <RichText content={short_description.html} />
                    </div>

                    <div className={classes.rightContent}>
                        <div className={classes.icons}>
                            <FrontendDemo product={product} />
                            <BackEndDemo product={product} />
                            <UserGuide product={product} />
                        </div>
                        <div className={classes.buttonGroup}>
                            <button className={classes.freeButton}>free</button>
                            <button className={classes.AddToCardButton} onClick={addToCart}>Add to Card</button>
                        </div>
                    </div>
                </div>
                <div className={classes.Details}>
                    {/* <div className={classes.toggleButtonGroup}>
                        <button onClick={this.handleToggleDetails}>Detail</button>
                        <button onClick={this.handleToggleReviews}>Reviews</button>
                    </div> */}
                    <hr style={{ margin: '0', padding: '0' }} />
                    <div className={classes.detailContent}>{details}</div>
                </div>
            </div>
        );
    }
}
export default classify(defaultClasses)(ProductFullDetail);
