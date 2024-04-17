import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { issuesReduser } from './ruduser/issueesReduser.ts';
import { repoReduser } from './ruduser/repoReduser.ts';

const rootReduser = combineReducers({
	issues: issuesReduser,
	repo: repoReduser,
});

export const store = configureStore({
	reducer: rootReduser,
});

export default store;
export type RootState = ReturnType<typeof rootReduser>;
