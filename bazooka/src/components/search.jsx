import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import classNames from "classnames";
import "./css/styles1.css";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import '../components/css/styles4.css';
import history from '../pages/history';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import actionMain from '../store/actions/action-main';



const styles = theme => ({
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: "80%"
    },
    iconbtn: {
      "background-color": "#2fdab8",
      "border-radius": "4px 4px 4px 4px",
      height: "25%",
      "margin-top": "10px"
    },
    searchiconbtn: {
      color: "black"
    },
    
  });
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#2fdab8",
        contrastText: "#fff"
      }
    }
  });

  

// Mapping the component's property to Redux's state
function mapStateToProps(state) {
    return {
        // addsDataFromStore : state.Adds_Data_Updater,
        // decCounter : state.decrementCounter.decrementState
    };
}

function mapDispatchToProps(dispatch) {
     return {
        PassingsearchData : function (search){
            // console.log("dispatch running");
            // Update in counter 13 -- commented out below line and used middleware for call
            //return dispatch(CounterAction.incrementWithValue(value));
            //return dispatch(AddsDataMiddleware.AddsDataGenerator());
            dispatch(actionMain.Search_What_meh(search))
        }

    };
    
}




class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textFieldValue: '',
        }
    }

    changingRouteinSearch = () => {
        if(this.props.location.pathname !== '/search-ads'){
            history.push('/search-ads');
            // Focus to the input as html5 autofocus
            
        }
    }
    searchFieldHandler = (event) => {
        this.setState({textFieldValue: event.target.value})
    }
    submitSearch = () => {
        console.log(this.state.textFieldValue);
        this.props.PassingsearchData(this.state.textFieldValue);
        // this.setState({textFieldValue: ''});
    }

    render() {
        const { classes } = this.props;

        if(this.props.location.pathname !== '/search-ads') {

        return(
            <div className="flex-container2child">
        {console.log(this.props.location.pathname)}
                <MuiThemeProvider theme={theme}>
              <TextField
                className={classes.textField}
                label="Search here..."
                id="mui-theme-provider-input"
                color="primary"
                onFocus={this.changingRouteinSearch}
             
              />
            </MuiThemeProvider>
            <Button aria-label="Search" className={classes.iconbtn}>
              <SearchIcon className={classes.searchiconbtn} />
            </Button>
            </div>
        )}
        else{
            return(
                <div className="flex-container2child">
            {console.log(this.props.location.pathname)}
                    <MuiThemeProvider theme={theme}>
                  <TextField
                    className={classes.textField}
                    label="Search here..."
                    id="mui-theme-provider-input"
                    color="primary"
                    autoFocus
                    value={this.state.textFieldValue}
                    onChange={this.searchFieldHandler}
                 
                  />
                </MuiThemeProvider>
                <Button aria-label="Search" className={classes.iconbtn} onClick={this.submitSearch}>
                  <SearchIcon className={classes.searchiconbtn} />
                </Button>
                </div>
            )
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(withRouter(withStyles(styles)(SearchBar)));
