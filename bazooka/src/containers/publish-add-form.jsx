import React, { Component } from 'react';
import { connect } from 'react-redux';
import actionMain from '../store/actions/action-main';
import '../components/css/style3.css';
import TextField from "@material-ui/core/TextField";
import {
    withStyles,
    MuiThemeProvider,
    createMuiTheme
  } from "@material-ui/core/styles";
  import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import ImageUploader from 'react-images-upload';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import {storageRef} from '../index';
import * as firebase from 'firebase';
import history from '../pages/history';
import CircularProgress from '@material-ui/core/CircularProgress';





  


// Mapping the component's property to Redux's state
function mapStateToProps(state) {
    return {
        loggedInUserInfo : state.Loged_in_user_info,
        // decCounter : state.decrementCounter.decrementState
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getting_user_data : function (value){
            return dispatch(actionMain.logged_in_user_info_meh(value));
          },
        // increment: () => dispatch(CounterAction.increment()),
        
    };
}


const styles = theme => ({
    textField: {
      'margin-bottom': '10px',
      width: "100%",
      ['@media (max-width:700px)']: { // eslint-disable-line no-useless-computed-key
        'margin-bottom': '7px',
    },
    },
    dropDown: {
        width: "40%", 
        ['@media (max-width:700px)']: { // eslint-disable-line no-useless-computed-key
            'width': '70%',
        },
    },
    formGenenralInfo: {
        width: '30%',
        'margin-bottom': '7px',
        ['@media (max-width:700px)']: { // eslint-disable-line no-useless-computed-key
            'width': '70%',
            'margin-bottom': '1px',

        },
           },
    adSubmitbtn: {
        'float': 'right',
        'margin-bottom': '20px',
        'margin-top': '-20px',
        'type':'submit',
    },
    progress: {
        margin: theme.spacing.unit * 2,
        'float': 'right',
        'margin': '20px -60px 0px 0px'
      },
})

const theme = createMuiTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#2fdab8",
        dark: "#2fdab8",
        contrastText: "#fff"
      }
    }
  });



class PublishAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adTitle: '',
            adDescription: '',
            category: '',
            name: this.props.loggedInUserInfo.Loged_in_user.userName,
            phoneNumber: '',
            city: '',
            pictures: [],
            price: '',
            snackBaropen: false,
            snackBarMessage: '',
            vertical: 'top',
            horizontal: 'center',
            loaderDisplay: 'none',
        }
    }
    
    adTitlehandler = (event) => {
        this.setState({adTitle: event.target.value})
    }
    adDescriptionhandler = (event) => {
        this.setState({adDescription: event.target.value})
    }
    Namehandler = (event) => {
        this.setState({name: event.target.value})
    }
    Phonenumberhandler = (event) => {
        this.setState({phoneNumber: event.target.value})
    }
    Cityhandler = (event) => {
        this.setState({city: event.target.value})
    }
    Pricehandler = (event) => {
        this.setState({price: event.target.value})
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        // console.log(event.target.name+ event.target.value )
      };

      //UPLOAD IMAGE
    onDrop = (picture) =>  {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    //submit button
    submitBtn = () => { 
        // alert(this.state.adTitle.length)
        if(this.state.adTitle.length === 0) {
            this.setState({snackBarMessage: 'Please Enter The Ad Title'});
            this.snackBarhandleClick();
        }
        else if(this.state.adDescription.length === 0) {
            this.setState({snackBarMessage: 'Please Enter The Ad Description'});
            this.snackBarhandleClick();
        }
        else if(!this.state.name) {
            this.setState({snackBarMessage: 'Please Enter The Name'});
            this.snackBarhandleClick();
        }
        else if(this.state.phoneNumber.length === 0) {
            this.setState({snackBarMessage: 'Please Enter The PhoneNumber'});
            this.snackBarhandleClick();
        }
        else if(this.state.city.length === 0) {
            this.setState({snackBarMessage: 'Please Enter City'});
            this.snackBarhandleClick();
        }
        else if(this.state.category.length === 0) {
            this.setState({snackBarMessage: 'Please Enter Product Category'});
            this.snackBarhandleClick();
        }
        else if(this.state.price.length === 0) {
            this.setState({snackBarMessage: 'Please Enter Price of Product'});
            this.snackBarhandleClick();
        }
        else if(this.state.pictures.length === 0) {
            this.setState({snackBarMessage: 'Please Choose a Image of Product'});
            this.snackBarhandleClick();
        }
        else{

        this.setState({loaderDisplay: 'block',});
        this.setState({snackBarMessage: 'Your Ad is posting ..'});
            this.snackBarhandleClick();
        var productInfo = {
                adTitle: this.state.adTitle,
                adDescription: this.state.adDescription,
                category: this.state.category,
                name: this.state.name,
                phoneNumber: this.state.phoneNumber,
                city: this.state.city,
                pictures: this.state.pictures,
                price: this.state.price,
            }
        
        this.pushingProductImgFirebase(productInfo);
        
    }
    }
    // getting img url
    pushingProductImgFirebase = (data) => {
        let that = this;
        let currentDate = new Date();

        //generating a random num for image storage and product
        let unigueId =  Math.random()*100000000000000000;
        let productId = unigueId.toString();
        let productData = data;
        // adding img to storage
        console.log(productId);
           // generating firebase storage url for 
         let imagesRef = storageRef.child('product-images');

        
          //creating path for img
         var path = imagesRef.child(productId);
                 //sending img
                 path.put(data.pictures[0]).then(function(snapshot) {
                    console.log('Uploaded a image');
                    console.log(snapshot);
                    //getting url
                    
                    path.getDownloadURL().then(function(url) {
                        // Insert url into an <img> tag to "download"
                        console.log(' url get'+url );
                        Object.assign(productData, {productImgStorageURL: url, dateOfPublish: currentDate.toString() , userUid:that.props.loggedInUserInfo.Loged_in_user.userUID});
                        // that.sendProductInfoToFirebase(productData);
                        // sending to server
                        that.sendProductInfoToServer(productData)

                        that.setState({loaderDisplay: 'none',});
                        
                        that.pathChange();

                    
                    
                    })
                        .catch(error => console.log(error));

    })       .catch(error => console.log(error));


                
    }
    //sending data to firebase
    // sendProductInfoToFirebase = (a) => {
    //     let data = a;
    //     console.log(data);
    //        //sending data
    //     firebase.database().ref('products-info/' + data.productId).set(data);
    

    // }

    sendProductInfoToServer = (a) => {
        let data = a;
        console.log(data);
           //sending data to server
           let url = 'https://bazooka-server.herokuapp.com/api/submitProduct';
           let request = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            }
                    fetch(url, request)
                        .then((response) => {
                            console.log('RESPONSE FROM SERVER')
                            console.log({ response });
                            response.json();
                        })
                        .then((json) => {
                            console.log('RESPONSE FROM SERVER')
                            console.log({ json });
                            })
            .catch((error) => {
                console.log('FROM SERVER catching error');
                console.log(error);
            });
    

    }
    pathChange = () => {
        history.push('/');
    }


    //SnackBar
    snackBarhandleClick = () => {
        this.setState({ snackBaropen: true });
      };
    
      snackBarhandleClose = () => {
        this.setState({ snackBaropen: false });
      };

    render() {
        const { classes } = this.props;
        const { vertical, horizontal,  } = this.state;

        return(
            <div className='formAddContainer'>
            <div className='formAddContainer1'>
                <h2 className='addHeading'>Submit an <span className='subPublishHeading'>Ad</span></h2>
                <MuiThemeProvider theme={theme}>
                <form >
                 <TextField
                className={classes.textField}
                label="Ad Title"
                id="adTitle"
                color="primary"
                value={this.state.adTitle}
                onChange={this.adTitlehandler}
                required={true}
                />
                <TextField
                id="adDescription"
                label="Ad Description"
                placeholder="press enter for new line"
                multiline
                className={classes.textField}
                value={this.state.adDescription}
                onChange={this.adDescriptionhandler}
                required={true}
                />
                <div className='generalContainer'>
                <TextField
                // className={classes.textField}
                label="Name"
                id="Name"
                color="primary"
                value={this.state.name}
                onChange={this.Namehandler}
                className={classes.formGenenralInfo}
                required={true}
                />
                <TextField
                // className={classes.textField}
                label="Phone number"
                id="Phonenumber"
                color="primary"
                value={this.state.phoneNumber}
                onChange={this.Phonenumberhandler}
                className={classes.formGenenralInfo}
                required={true}
                type='number'
                />
                <TextField
                // className={classes.textField}
                label="City"
                id="City"
                color="primary"
                value={this.state.city}
                onChange={this.Cityhandler}
                className={classes.formGenenralInfo}
                required={true}
                />
                </div>


                                <br />
                                <div className='generalContainer2'>
                            <FormControl className={classes.dropDown}>
                            <InputLabel htmlFor="category"  className={classes.textField}>Category</InputLabel>
                            <Select
                                value={this.state.Category}
                                onChange={this.handleChange}
                                inputProps={{
                                name: 'category',
                                id: 'category',
                                }}
                            >
                                <MenuItem value="Vehicles">
                                Vehicles
                                </MenuItem>
                                <MenuItem value='Bikes'>Bikes </MenuItem>
                                <MenuItem value='Mobiles'>Mobiles </MenuItem>
                                <MenuItem value='Property for Sale/Rent'>Property for Sale/Rent </MenuItem>
                                <MenuItem value='Books & Sports'>Books & Sports </MenuItem>
                                <MenuItem value='Animals'>Animals </MenuItem>
                                <MenuItem value='Furniture & Home Decor'>Furniture & Home Decor </MenuItem>
                                <MenuItem value='Electronics & Home Appliances'>Electronics & Home Appliances </MenuItem>
                                <MenuItem value='Clothing'>Clothing </MenuItem>
                                <MenuItem value='Others'>Others </MenuItem>

                            </Select>
                            {/* <FormHelperText>select one category</FormHelperText> */}
                            </FormControl>
                        {/* //Price */}
                        <TextField
                // className={classes.textField}
                label="Price"
                id="Price"
                color="primary"
                value={this.state.price}
                onChange={this.Pricehandler}
                className={classes.dropDown}
                required={true}
                type='number'
                placeholder="Rs"
                />
                </div>

                {/* //Upload image */}
                <ImageUploader
                singleImage={true}
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                label='please choose a image of product'
                maxFileSize={5242880000}
                
                    />
                
                <Button variant="contained" className={classes.adSubmitbtn} color="primary" onClick={this.submitBtn}>
                 Submit
                 </Button>
                                {/* //LOADER */}
                                <div className='subitLoader' style={{'display': this.state.loaderDisplay}}>
                <CircularProgress className={classes.progress} />
                                </div>

                 <div>
                    {/* <Button onClick={this.snackBarhandleClick}>Open with Fade Transition</Button> */}
                    <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={this.state.snackBaropen}
                    onClose={this.snackBarhandleClose}
                    TransitionComponent={Fade}
                    ContentProps={{
                        'aria-describedby': 'err-message',
                    }}
                    message={<span id="err-message">{this.state.snackBarMessage}</span>}
                    />
                </div>
                </form>

            </MuiThemeProvider>
            </div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(PublishAddForm));
