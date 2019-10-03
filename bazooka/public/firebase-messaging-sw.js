// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');


// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    apiKey: "AIzaSyA62YsB_1xv1lSXKAjiE6udkrj9ekmKXd8",
    authDomain: "shahzaib-com-app7.firebaseapp.com",
    databaseURL: "https://shahzaib-com-app7.firebaseio.com",
    projectId: "shahzaib-com-app7",
    storageBucket: "shahzaib-com-app7.appspot.com",
    messagingSenderId: "49885491584"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();



// //SERVICE WORKER CODE

// var dynamicCache = 'dynamicCache-v2';


// self.addEventListener('install', function(e) {
//   console.log('[ServiceWorker] Install');

 
  
// });

// self.addEventListener('activate', function(e) {
//     console.log('[ServiceWorker] Activate');
//   });



// self.addEventListener('fetch', function(e) {
//     console.log('FETCH OF SERVICE WORKER IS RUNNING')

   
//     console.log('[ServiceWorker] Fetch');
//     console.log(e.request.url)
 
//   // //  console.log(e.request.url)
//   //   if (e.request.url.indexOf('shahzaib-com-app7.appspot.com') > -1) {
//   //     // if(
//   //       console.log('matching')
//   //       caches.match(e.request.url).then((a)=>{
//   //         console.log(a)
//   //         if(a === undefined) {
//   //           ////
//   //           console.log('if running')
//   //           console.log(e.request.url)
//   //            e.respondWith(
//   //              caches.open(dynamicCache).then(function(cache) {
//   //                return fetch(e.request).then(function(response){
//   //                  console.log('response')
//   //                  cache.put(e.request.url, response.clone());
//   //                  return response;
//   //                });
//   //              }
//   //            )
//   //            );
//   //           ///
//   //         }
//   //         else{
//   //              console.log('matched')
//   //              caches.match(e.request).then(function(response) {
//   //           return response})
     
//   //         }
//   //       })
//   //     }
     
      
     
  
//   //   else {
//     e.respondWith(
//                    caches.open(dynamicCache).then(function(cache) {
//                      return fetch(e.request).then(function(response){
//                        console.log('response')
//                        cache.put(e.request.url, response.clone());
//                        return response;
//                      })}))
//                     })
     
//       // e.respondWith(
//       //   caches.match(e.request).then(function(response) {
//       //     return response || fetch(e.request);
//       //   })
//       // );}
    
//   // }

