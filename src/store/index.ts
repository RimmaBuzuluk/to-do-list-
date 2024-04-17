import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { issuesReduser } from './ruduser/issueesReduser.ts';

const rootReduser = combineReducers({
	issues: issuesReduser,
});

export const store = configureStore({
	reducer: rootReduser,
});

export default store;
