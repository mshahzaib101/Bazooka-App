import React, { Component } from 'react';
import { connect } from 'react-redux';
import actionMain from '../store/actions/action-main';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import '../components/css/styles4.css';
import DisplayImg from '../components/optianal-img';



// Mapping the component's property to Redux's state
function mapStateToProps(state) {
    return {
        adPreviewFromStore : state.Ad_Preview_Updater,
     
    };
}

function mapDispatchToProps(dispatch) {
     return {
        updatingAddsDatInStore : function (dataArray){
       
            dispatch(actionMain.Adds_Data_meh(dataArray))
        }
    };
    
}


const styles = {
    
};



class AdPreviewContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

   

    render() {
        const { classes } = this.props;
        return(
            <div>
                {/* {console.log(this.props.adPreviewFromStore)} */}
             <DisplayImg displayTextonImg='Ad Preview' />
             <div className='ad-preview-container'>
                 <div className='ad-preview-container-child1'>
                 <img src={this.props.adPreviewFromStore.Ad_Preview_Data.productimg} className='responsive-preview-img' />
                 </div>
                 <div className='ad-preview-container-child2'>
                 <h2 className='ad-preview-title'>{this.props.adPreviewFromStore.Ad_Preview_Data.adTitle}</h2>
                 <p className='ad-preview-price'>Rs {this.props.adPreviewFromStore.Ad_Preview_Data.price}</p>
                 <div className='sub-ad-preview'>
                    <div className='sub-ad-preview1'>
                        <h4 className='sub-ad-preview-child1'>City:</h4>
                        <h4 className='sub-ad-preview-child2'>{this.props.adPreviewFromStore.Ad_Preview_Data.city}</h4>
                        <h4 className='sub-ad-preview-child1'>Category:</h4>
                        <h4 className='sub-ad-preview-child2'>{this.props.adPreviewFromStore.Ad_Preview_Data.category}</h4>
                    </div>
                    <div>
                        <h4 className='sub-ad-preview-child1'>Ad publisher Name:</h4>
                        <h4 className='sub-ad-preview-child2'>{this.props.adPreviewFromStore.Ad_Preview_Data.publisherName}</h4>
                        <h4 className='sub-ad-preview-child1'>Contact:</h4>
                        <h4 className='sub-ad-preview-child2'>{this.props.adPreviewFromStore.Ad_Preview_Data.phoneNumber}</h4>
                    </div>     
                </div>
                 </div>
             </div>
             {/* //ad description */}
             <div className='ad-preview-description'>
             <h4 className='ad-preview-head-2'>Ad Description:</h4>
             <p className='ad-descripton'>
             {this.props.adPreviewFromStore.Ad_Preview_Data.adDecription}
             </p>
             <h4 className='ad-preview-head-2'>Published on:</h4>
             <p className='ad-descripton'>{
                 this.props.adPreviewFromStore.Ad_Preview_Data.date
             }</p>
             </div>
            </div>
        )

    }
}


AdPreviewContainer.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(withStyles(styles)(AdPreviewContainer));