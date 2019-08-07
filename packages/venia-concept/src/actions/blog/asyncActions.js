import { RestApi } from '@magento/peregrine';
import actions from './actions';

const { request } = RestApi.Magento2;

export const getPosts = () =>
    async function thunk(dispatch) {
        try {
            dispatch(actions.posts.request());
            const response = await request('/wp-json/wp/v2/posts?_embed');
            dispatch(actions.posts.receive(response));
        } catch (error) {
           await dispatch(actions.posts.receive(error));
        }
    };























