import '@/styles/navbar.css';

import { Avatar } from '@mui/material';
import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/app/store';
import {
  selectSignedIn,
  selectUserData,
  setSearchInput,
  setSignedIn,
  setUserData,
} from '@/features/user/userSlice';

const Navbar = () => {
  const [inputValue, setInputValue] = useState('tech');
  const isSignedIn = useAppSelector(selectSignedIn);
  const userData = useAppSelector(selectUserData);
  const dispatch = useAppDispatch();

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setSignedIn(false));
    dispatch(setUserData(null));
  };

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputValue && inputValue.trim().length > 0) {
      dispatch(setSearchInput(inputValue));
    }
  };

  return (
    <div className="navbar">
      <h1 className="navbar__header">BlogMania 💬</h1>
      {isSignedIn && (
        <div className="blog__search">
          <input
            className="search"
            placeholder="Search for a blog"
            value={inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
          />
          <button type="submit" className="submit" onClick={handleSearch}>
            Search
          </button>
        </div>
      )}

      {isSignedIn ? (
        <div className="navbar__user__data">
          <Avatar
            className="user"
            src={userData?.picture}
            alt={userData?.name}
          />
          <h1 className="signedIn">{userData?.givenName}</h1>
          <button
            type="button"
            onClick={handleLogout}
            disabled={!isSignedIn}
            className="logout__button"
          >
            Logout 😦
          </button>
        </div>
      ) : (
        <h1 className="notSignedIn">User not available 😞</h1>
      )}
    </div>
  );
};

export default Navbar;
