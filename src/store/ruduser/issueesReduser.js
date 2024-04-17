import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchIssues = createAsyncThunk('issues/fetchIssues', async (param, thunkAPI) => {
	try {
		const response = await axios.get(`https://api.github.com/repos/${param.owner}/${param.repo}/issues/2`);
		return response.data;
	} catch (error) {
		throw new Error('Error fetching issues');
	}
});

const initialState = {
	issues: [],
};

const issuesSlice = createSlice({
	name: 'issues',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetch);
	},
});

export const issuesReduser = issuesSlice.reducer;
