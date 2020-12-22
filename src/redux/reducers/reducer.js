import { createReducer } from '../createReducer';
import { MENU } from '../actiontypes';

const { SHOW_MENU } = MENU;

const isShow = createReducer(false, (state, { value }) => {
    // console.log("value:", value);
    return {
        [SHOW_MENU]: value,
    };
});

export default {
    isShow,
};