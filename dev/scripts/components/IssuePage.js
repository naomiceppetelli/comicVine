import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import { firebaseConfig } from '../firebase/firebase-config';
import axios from 'axios';
import Qs from 'qs';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

class IssuePage extends React.Component{
  render(){
    return(
      <h1>This is the Issue page</h1>
    )
  }
}

export default IssuePage;