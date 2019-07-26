import React, { Component } from 'react';
import { string, number, shape } from 'prop-types';
import { Link, resourceUrl } from 'src/drivers';
import classify from 'src/classify';
import defaultClasses from './item.css';
import isProductConfigurable from 'src/util/isProductConfigurable';
import appendOptionsToPayload from 'src/util/appendOptionsToPayload';

const imageWidth = '300';
const imageHeight = '372';

const ItemPlaceholder = ({ children, classes }) => (
    <div className={classes.root_pending}>
        <div className={classes.images_pending}>{children}</div>
        <div className={classes.name_pending} />
        <div className={classes.price_pending} />
    </div>
);

// // TODO: get productUrlSuffix from graphql when it is ready
// const productUrlSuffix = '.html';

class GalleryItem extends Component {
    static propTypes = {
        classes: shape({
            image: string,
            image_pending: string,
            imagePlaceholder: string,
            imagePlaceholder_pending: string,
            images: string,
            images_pending: string,
            name: string,
            name_pending: string,
            price: string,
            price_pending: string,
            root: string,
            root_pending: string
        }),
        item: shape({
            id: number.isRequired,
            name: string.isRequired,
            small_image: string.isRequired,
            url_key: string.isRequired,
            price: shape({
                regularPrice: shape({
                    amount: shape({
                        value: number.isRequired,
                        currency: string.isRequired
                    }).isRequired
                }).isRequired
            }).isRequired
        })
    };
    
    state = {
        quantity: 1
    };
   
    setQuantity = quantity => this.setState({ quantity });
    addToCart = () => {
        const { props, state } = this;
        const {  quantity } = state;
        const { addToCart, item } = props;

        const payload = {
            item: item,
            productType: item.__typename,
            quantity
        };

        if (isProductConfigurable(item)) {
            appendOptionsToPayload(payload);
        }

        addToCart(payload);
    };

    handleSelectionChange = (optionId, selection) => {
        this.setState(({ optionSelections }) => ({
            optionSelections: new Map(optionSelections).set(
                optionId,
                Array.from(selection).pop()
            )
        }));  
    };

    get fallback() {
        return loadingIndicator;
    }

    get productOptions() {
        const { fallback, handleSelectionChange, props } = this;
        const { configurable_options } = props.product;
        const isConfigurable = isProductConfigurable(props.product);

        if (!isConfigurable) {
            return null;
        }

        return (
            <Suspense fallback={fallback}>
                <Options
                    options={configurable_options}
                    onSelectionChange={handleSelectionChange}
                />
            </Suspense>
        );
    }

    get mediaGalleryEntries() {
        const { props, state } = this;
        const { product } = props;
        const { optionCodes, optionSelections } = state;
        const { media_gallery_entries, variants } = product;

        const isConfigurable = isProductConfigurable(product);

        if (
            !isConfigurable ||
            (isConfigurable && optionSelections.size === 0)
        ) {
            return media_gallery_entries;
        }

        const item = findMatchingVariant({
            optionCodes,
            optionSelections,
            variants
        });

        if (!item) {
            return media_gallery_entries;
        }

        return [
            ...item.product.media_gallery_entries,
            ...media_gallery_entries
        ];
    }
     get isMissingOptions() {
        const { product } = this.props;

        // Non-configurable products can't be missing options
        if (!isProductConfigurable(product)) {
            return false;
        }

        // Configurable products are missing options if we have fewer
        // option selections than the product has options.
        const { configurable_options } = product;
        const numProductOptions = configurable_options.length;
        const numProductSelections = this.state.optionSelections.size;

        return numProductSelections < numProductOptions;
    }



    render() {
        const { classes, item, isAddingItem, isMissingOptions} = this.props;
        const { addToCart } = this
        if (!item) {
            return (
                <ItemPlaceholder classes={classes}>
                    {this.renderImagePlaceholder()}
                </ItemPlaceholder>
            );
        };
        

        const { name, url_key } = item;
        const productLink = `/${url_key}`;
        return (
            <div className={classes.root}>
                <div className={classes.images}>
                    <Link to={resourceUrl(productLink)} >
                        {this.renderImagePlaceholder()}
                    </Link>
                </div>

                <div className={classes.content}>
                    <Link to={resourceUrl(productLink)} >
                        <p>{name}</p>
                    </Link>
                </div>
                <div className={classes.buttonGroup}>
                    <button className={classes.buttonFree}>FREE</button>

                    <button
                        className={classes.buttonAddToCard}
                        onClick={addToCart}
                        disabled={isAddingItem || isMissingOptions}
                    >Add to Card
                    </button>
                </div>
            </div>
        );
    }

    renderImagePlaceholder = () => {
        const { classes, item } = this.props;
        const className = item
            ? classes.imagePlaceholder
            : classes.imagePlaceholder_pending;

        return (
            <img
                className={className}
                src={item.small_image}
                alt={name}
                width={imageWidth}
                height={imageHeight}
            />
        );
    };

    /**
     * TODO: Product images are currently broken and pending a fix from the `graphql-ce` project
     * https://github.com/magento/graphql-ce/issues/88
     */
    renderImage = () => {
        const { classes, item } = this.props;

        if (!item) {
            return null;
        }

        const { small_image, name } = item;

        return (
            <img
                className={classes.image}
                src={resourceUrl(small_image, {
                    type: 'image-product',
                    width: imageWidth
                })}
                alt={name}
                width={imageWidth}
                height={imageHeight}
            />
        );
    };
}

export default classify(defaultClasses)(GalleryItem);


