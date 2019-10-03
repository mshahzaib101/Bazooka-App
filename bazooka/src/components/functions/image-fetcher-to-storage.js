import {storageRef} from '../../index';


const imageFetcherToStorage = (inWhichFolder, fileName, imageUrl) => {
  //creating a promise..
  console.log('1 promise created');
  return new Promise(function(resolve, reject) {

         // generating firebase storage url for 
      let imagesRef = storageRef.child(inWhichFolder);
        //creating path for img
      var spaceRef = imagesRef.child(fileName);
        // File path is 'images/space.jpg'
        // let path = spaceRef.fullPath
        // console.log(path);
        //sending img
        console.log('2 fetch running');
         fetch(imageUrl)
          .then(response => response.blob())
            .then(result => {
         spaceRef.put(result).then(function(snapshot) {
         console.log('Uploaded a image');
         console.log('3 image uploaded');
         // getting img url
         resolve(spaceRef);
         console.log('4 resoolvr');
         });
           })
       .catch(error => console.log(error));

        
      });
}


export default imageFetcherToStorage;