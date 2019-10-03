import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import React, { Component } from 'react';
import * as firebase from 'firebase';
import {database} from '../index';
import { withStyles } from '@material-ui/core/styles';
import axios from "axios";





const styles = {
    
    closingbtn: {
        'float': 'right',
        'color': "#0000008a"
    },
    dialogbutton2: { 
        'color': '#2fdab8',
      },
  };




class DeleteAd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }

    //dialog
    handleClickOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

      closingBtnToDelete = (adID) => {
        //closing dialog
        this.handleClose();
        //deleting ad
        console.log(adID);
        // let pathDelete = firebase.database().ref('products-info/' + adID);
        // pathDelete.set(null);
        let url = `https://bazooka-server.herokuapp.com/api/deleteAd/${adID}`
        axios.delete(url)
        .then((res) => {
          console.log(res);
          console.log('delete');
          //reloading page
          window.location.reload();
        })
       
    }

    render() {
        const { classes } = this.props;
        
        const { fullScreen } = this.props;

        return(
        <div className='closeIconBtn'>
            <IconButton  className={classes.closingbtn} onClick={this.handleClickOpen} aria-label="Close">
            <CloseIcon />
            </IconButton>

            {/* //dialog code */}
            <div>
                    <Dialog
                    fullScreen={fullScreen}
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="confirmation-to-delete"
                    >
                    <DialogTitle id="confirmation-to-delete">{"Did you want to Delete thi Ad?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                        Deleting this Ad will mean that wether the product is sold out or Ad Publisher
                        did not want it to sell..
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} className={classes.dialogbutton2}>
                        Disagree
                        </Button>
                        <Button onClick={() => {this.closingBtnToDelete(this.props.productId)}} className={classes.dialogbutton2} autoFocus>
                        Agree
                        </Button>
                    </DialogActions>
                    </Dialog>
                </div>
            </div>)
}
}


export default withStyles(styles)(DeleteAd)