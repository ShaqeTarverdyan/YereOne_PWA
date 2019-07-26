import { connect } from 'src/drivers';
import GalleryItem from './item';

const mapStateToProps = ({ cart }) => {
    return {
        isAddingItem: cart.isAddingItem
    };
};

export default connect(mapStateToProps)(GalleryItem);