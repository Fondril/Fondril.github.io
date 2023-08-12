import React from 'react';
import './App.css';

import Multimedia from './pages/multimediaPage/multimediaPage.js';
import Members from './pages/membersPage/membersPage';
import HomePage from './pages/homePage/homePage';
import InterestingShit from './pages/interestingShitPage/interestingShitPage';
import Profile from './pages/profilePage/profilePage';
import SignIn from './pages/signInPage/signInPage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
      {
            path: '/home',
            element:  <HomePage/>
      },
      {
            path: 'members',
            element: <Members/>
      },
      {
            path: 'multimedia',
            element: <Multimedia/>
      },
      {
            path: 'interestingShit',
            element: <InterestingShit />
      },
      {
            path: 'profile',
            element: <Profile />
      },
      {
            path: 'signIn',
            element: <SignIn />
      },

])

const App = () => {
      return (
            <RouterProvider router={router} />
      );
}

export default App;
