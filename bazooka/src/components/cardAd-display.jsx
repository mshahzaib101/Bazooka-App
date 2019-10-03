import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './css/styles4.css';
import IconButton from '@material-ui/core/IconButton';
import MessagesContainer from '../containers/message';
import FavoriteIcon from '@material-ui/icons/FavoriteOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import actionMain from '../store/actions/action-main';
import {Link} from 'react-router-dom';




const styles = {
    icon: {
        
        'color': '#2fdab8',
      },
        
          
    iconbutton: {
        '&:hover': {
            'color': '#2fdab8',
            'background-color': '#f3bbbe',
          },
    },
    progress: {
        color: '#2fdab8;',
        'size': '20 !important',
        'margin': '10px auto',
        
      },
};


// Mapping the component's property to Redux's state
function mapStateToProps(state) {
    return {
        // addsDataFromStore : state.Adds_Data_Updater,
   
    };
}

function mapDispatchToProps(dispatch) {
     return {
        updatigDataInAdPreview : function (data){
           
            dispatch(actionMain.Ad_Preview_meh(data))
        }
        
    };
    
}


class AdCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgDisplay: 'none',
            loaderDisplay: 'block',
        }
    }
    changeImgtoLoader = () => {
        // console.log('runing')
        this.setState({imgDisplay: 'inline',loaderDisplay: 'none',});
    }
    cardAdDataSender = () => {
        // console.log('running')
        //creating date
        let publishDate = new Date(this.props.date);
        publishDate = this.formatDate(publishDate);

        let adPreviewData = {
            adTitle: this.props.adTitle,
            adDecription: this.props.adDecription,
            city: this.props.city,
            date: publishDate,
            publisherName: this.props.publisherName,
            phoneNumber: this.props.phoneNumber,
            price: this.props.price,
            productId: this.props.productId,
            productimg: this.props.productimg,
            userUid: this.props.userUid,
            category: this.props.category,
        }
        // console.log(adPreviewData)
        //sending to redux
        this.props.updatigDataInAdPreview(adPreviewData);
    }
    formatDate = (date) => {
        let monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
          ];
          let day = date.getDate();
          let monthIndex = date.getMonth();
          let year = date.getFullYear();
        
          return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }

    render() {
        const { classes } = this.props;
        return(
            
            <div>

                {/* material in props */}
                {/* {console.log(this.props.adTitle)}
                {console.log(this.props.adDecription)}
                {console.log(this.props.city)}
                {console.log(this.props.date)}
                {console.log(this.props.publisherName)}
                {console.log(this.props.phoneNumber)}
                {console.log(this.props.price)}
                {console.log(this.props.productId)}
                {console.log(this.props.productimg)}
                {console.log(this.props.userUid)}
                {console.log(this.props.category)} */}
               
                <div className='AdCardContainer'>
                <Paper  elevation={1}>
                <div className='AdCardSubContainer'>
                <Link to="/ad-preview" className='link-card' onClick={this.cardAdDataSender}>
             
                
                    <div className='hovereffect2'>
                    <img src={this.props.productimg} class="img-responsive-ad-card" style={{display: this.state.imgDisplay}} onLoad={this.changeImgtoLoader} />
                    <CircularProgress  size={80} className={classes.progress} thickness={2} style={{display: this.state.loaderDisplay}}  />

                    <div class="overlay">
                   <h2>{this.props.city}</h2>
                    </div>
                    </div>


                    <h2 className='ad-title-style'>{this.props.adTitle}</h2>
                    <p className='price-style'>Rs {this.props.price}</p>
                    </Link>
                    <div className='Ad-bottom-btns'>
                    <div className='subBtnsDistribution'>
                    <MessagesContainer adPublisherUid={this.props.userUid} />
                      </div>
                      <div className='subBtnsDistribution'>
                      <IconButton className={classes.iconbutton} aria-label="Delete">
                    <FavoriteIcon className={classes.icon} />
                      </IconButton>
                      </div>
                    </div>
                    </div>
                </Paper>
                </div>
            </div>
        )
    }
}


    AdCard.propTypes = {
        classes: PropTypes.object.isRequired,
    };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(withStyles(styles)(AdCard));