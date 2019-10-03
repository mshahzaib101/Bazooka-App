import actionMain from '../actions/action-main';
import * as firebase from 'firebase';
import {database} from '../../index';



export default class AddsDataMiddleware {

    static AddsDataGenerator() {
        // console.log("middleware ");
        return (dispatch) => {
            // My Business logic Here
                    //bringing data from firebase
                    let path = database.ref('products-info/');
                    path.on("value", function(dataSnapshot) {
                        var data = dataSnapshot.val();
                        //converting data to array
                        var dataArray = [];
                        for(var key in data) {
                            dataArray.push(data[key]);
                        }



                        dispatch(actionMain.Adds_Data_meh(dataArray))
                      }
               
                )
                    // .then(function(snapshot) {
                    // //   console.log(snapshot);
                    //   console.log(snapshot.val());
                    //     var data = snapshot.val();
                    //     dispatch(actionMain.Adds_Data_meh(data))
                        
                    // })
            
            //  dispatch(actionMain.Adds_Data_meh('aa'))
        }
    }  
}


    
