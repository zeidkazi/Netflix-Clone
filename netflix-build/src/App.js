import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import {useDispatch,useSelector} from 'react-redux'
import {logout, login, selectUser} from './features/userSlice'
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth){ //if userAuth exists
        //logged in\
        dispatch(
          login({  //sends data from firebase to redux
          uid: userAuth.uid,
          email: userAuth.email
          })
        )
      } else{
        //logged out
        dispatch(logout())
      }
    })

    return unsubscribe;

  },[dispatch]);

  return (
    <div className="app">
      <>
        <Router>
          {!user ? (
            <LoginScreen />

          ) : (
            <Routes>
              <Route exact path="/profile" element={<ProfileScreen/>}/>

              <Route exact path="/" element={<HomeScreen />} />
            </Routes>

          )
          }

        </Router>
      </>
    </div>
  );
}

export default App;
