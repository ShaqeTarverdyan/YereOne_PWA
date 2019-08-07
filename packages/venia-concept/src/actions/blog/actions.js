import { createActions } from 'redux-actions';

const actionMap = {
    POSTS: {
        REQUEST: null,
        RECEIVE: null
    }
};

export default createActions(actionMap);

