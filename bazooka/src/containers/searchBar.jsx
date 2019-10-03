import React, { Component } from 'react';
import { connect } from 'react-redux';
import actionMain from '../store/actions/action-main';
import AddsDataMiddleware from '../store/middlewares/Middleware_Adds_Data';
import DisplayImg from '../components/optianal-img';
import AdCard from '../components/cardAd-display';
import * as firebase from 'firebase';
import {database} from '../index';
import '../components/css/styles4.css';
import axios from "axios";




// Mapping the component's property to Redux's state
function mapStateToProps(state) {
    return {
        addsDataFromStore : state.Adds_Data_Updater,
        gettingSearchData: state.SearchData,
        // decCounter : state.decrementCounter.decrementState
    };
}

function mapDispatchToProps(dispatch) {
     return {
        updatingAddsDatInStore : function (dataArray){
            // console.log("dispatch running");
            // Update in counter 13 -- commented out below line and used middleware for call
            //return dispatch(CounterAction.incrementWithValue(value));
            //return dispatch(AddsDataMiddleware.AddsDataGenerator());
            dispatch(actionMain.Adds_Data_meh(dataArray))
        }

    //     getting_user_data : function (value){
    //         return dispatch(actionMain.logged_in_user_info_meh(value));
    //       },
        
        
    };
    
}



class SearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentadData: [],
        }
    }

    componentDidMount() {

        let that = this;
        if(this.props.addsDataFromStore.adds_data_avalibility === false)
            {
                //bringing data from server
                console.log('DATA FROM SERVER')
                let url = 'https://bazooka-server.herokuapp.com/api/viewProducts';
                axios.get(url).then((res) => {
                   console.log( res.data)
                   var dataFromServer = res.data;
                   dataFromServer.sort(function(a,b){
                    let c = new Date(a.dateOfPublish);
                    let d = new Date(b.dateOfPublish);
                    return d-c;
                    });
                 
                  console.log(dataFromServer);
                  that.props.updatingAddsDatInStore(dataFromServer);
                    
                  }).catch((error) => {
                    console.log( error)
                  })
                
            
                //bringing data from firebase
                // let path = database.ref('products-info/');
                // let that=this;
                // path.on("value", function(dataSnapshot) {
                //     var data = dataSnapshot.val();
                //     console.log('DATA FROM FIREBASE')
                //     console.log(data)
                //     //converting data to array
                //     var dataArray = [];
                //     for(var key in data) {
                //         dataArray.push(data[key]);
                       
                //     }
                    // { console.log(dataArray)}
                    // {console.log('1 array toredux')}
                    //sorting with date
                    // dataArray.sort(function(a,b){
                    //     let c = new Date(a.dateOfPublish);
                    //     let d = new Date(b.dateOfPublish);
                    //     return d-c;
                    //     });
                     
                    //  { console.log(dataArray)}
            //    {console.log('2 array toredux')}
                    // that.props.updatingAddsDatInStore(data);
                // }) 
                
            }   
       
    }

    render() {
        return(
            <div>
                <div className='searchMarginDiv'>
                <DisplayImg displayTextonImg='Search'  />
                </div>
                

                <div className='ad-cards-container-main'>
             
                {
                    
                    this.props.addsDataFromStore.Adds_Data.map(
                        (data, index) => {
                            var a = data;
                            // console.log(a.name)
                            // console.log('5 data in state')
                           if(this.props.gettingSearchData.searchData !== '') {
                                if(a.adTitle.toUpperCase().indexOf(this.props.gettingSearchData.searchData.toUpperCase()) > -1) {
                                    return(
                                        <AdCard key={a.productId} adTitle={a.adTitle} adDecription={a.adDescription} city={a.city} date={a.dateOfPublish} publisherName={a.name} phoneNumber={a.phoneNumber} price={a.price} productId={a.productId} productimg={a.productImgStorageURL} userUid={a.userUid} category={a.category} />
                                    )
                                }
                           }
                           else{
                            return(
                                <AdCard key={a.productId} adTitle={a.adTitle} adDecription={a.adDescription} city={a.city} date={a.dateOfPublish} publisherName={a.name} phoneNumber={a.phoneNumber} price={a.price} productId={a.productId} productimg={a.productImgStorageURL} userUid={a.userUid} category={a.category} />
                            )
                           }
                           
                    }
                        
                        )
                }
                     </div>      
                        
                    
                
        
            </div>
        )
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(SearchContainer);