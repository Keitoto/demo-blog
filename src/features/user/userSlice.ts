import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

import type { RootState } from '@/app/store';
import type { BlogType, UserType } from '@/features/user/type';

interface UserStateType {
  isSignedIn: boolean;
  userData: UserType | null;
  searchInput: string;
  blogData: BlogType[] | null;
}
const initialState: UserStateType = {
  isSignedIn: false,
  userData: null,
  searchInput: 'tech',
  blogData: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSignedIn: (state, action: PayloadAction<boolean>) => {
      state.isSignedIn = action.payload;
    },
    setUserData: (state, action: PayloadAction<UserType | null>) => {
      state.userData = action.payload;
    },
    setSearchInput: (state, action: PayloadAction<string>) => {
      state.searchInput = action.payload;
    },
    setBlogData: (state, action: PayloadAction<BlogType[] | null>) => {
      state.blogData = action.payload;
    },
  },
});

export const { setSignedIn, setUserData, setSearchInput, setBlogData } =
  userSlice.actions;

export const selectSignedIn = (state: RootState) => state.user.isSignedIn;
export const selectUserData = (state: RootState) => state.user.userData;
export const selectSearchInput = (state: RootState) => state.user.searchInput;
export const selectBlogData = (state: RootState) => state.user.blogData;

export default userSlice.reducer;
