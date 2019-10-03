import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CustomRoutes from './pages/router';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
// importing for redux
import { Provider } from 'react-redux'
import store from './store/index';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';


////////////////////////////

////////////////////////

//registering service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
    .then(function(registration) {
      console.log('Service worker Registration successful, scope is:', registration.scope);
    }).catch(function(err) {
      console.log('Service worker registration failed, error:', err);
    } );
  }


  

// firebase intilizing

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA62YsB_1xv1lSXKAjiE6udkrj9ekmKXd8",
    authDomain: "shahzaib-com-app7.firebaseapp.com",
    databaseURL: "https://shahzaib-com-app7.firebaseio.com",
    projectId: "shahzaib-com-app7",
    storageBucket: "shahzaib-com-app7.appspot.com",
    messagingSenderId: "49885491584"
  };
  firebase.initializeApp(config);
  export const storageRef  = firebase.storage().ref(); 
  export const database = firebase.database();
  
  export const messaging = firebase.messaging();
//for cloud messaging
  // messaging.usePublicVapidKey("BLraD4WP9C3qbNTPl0VGlNhii26WEOKuVoLHiV-1SmHpfAiu7527_rpNhlKfnK2ffKq9QrbTQ0uNXTKH68MKFxI");
// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker

messaging.onMessage(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.icon,        
  };

  if (!("Notification" in window)) {
      console.log("This browser does not support system notifications");
  }
  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    console.log("system notifications arrived");
      // If it's okay let's create a notification
      var notification = new Notification(notificationTitle,notificationOptions);
      notification.onclick = function(event) {
          event.preventDefault(); // prevent the browser from focusing the Notification's tab
          window.open(payload.notification.click_action , '_blank');
          notification.close();
      }
  }
});




ReactDOM.render(
    <div>
        {/* //Wraping up in Provider */}
        <Provider store={store}>
        
            <CustomRoutes />
        </Provider>
    </div>
, document.getElementById('root'));
registerServiceWorker();

