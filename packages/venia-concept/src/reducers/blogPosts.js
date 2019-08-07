import { handleActions } from 'redux-actions';
import actions from 'src/actions/blog';


const initialState = [];
const reducerMap = {
    [actions.posts.request]: ( state ) => {
        return {
            ...state,
            isLoading: true
        };
    },
    [actions.posts.receive]: (state, { payload, error }) => {
        if (error) {
            return {
                ...state,
                posts: payload,
                cartId: null,
                isLoading: false
            };
        }

        return {
            ...state,
            posts: payload,
            isLoading: false
        };
    }
};

export default handleActions(reducerMap, initialState);
