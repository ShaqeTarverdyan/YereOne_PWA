const isDownloadableProduct = product =>
    product.__typename === 'DownloadableProduct';

export default isDownloadableProduct;