import React, { Component } from "react";
import "./css/styles1.css";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import AllCategoriesMenu from "./all-categories-menu";
import LoginButton from "./login-button";
import { connect } from "react-redux";
import actionMain from "../store/actions/action-main";
import PublishAdd from "./publishadd";
import history from '../pages/history';
import SearchBar from '../components/search';



// Mapping the component's property to Redux's state
function mapStateToProps(state) {
  return {
    loggedInUserInfo: state.Loged_in_user_info,
    tokenInfo: state.Token_info,
    // decCounter : state.decrementCounter.decrementState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getting_user_data: function(value) {
      return dispatch(actionMain.logged_in_user_info_meh(value));
    }
    // increment: () => dispatch(CounterAction.increment()),
  };
}

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
  lastHeaderBtn: {
    color: "#fff",
    "&:hover": {
      color: "#2fdab8"
    }
  }
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

class HeaderTop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //sending user info to redux
  gettingCurrentUserDataFromComponent = data => {
    this.props.getting_user_data(data);
  };
  movingtoHome = () => {
    history.push('/');
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* top header */}
        <div className="header flex-container1">
          <ul className="flex-container1">
            <li className="first-li">Pakistan's </li>
            <li className="first-li">Largest</li>
            <li className="first-li">Marketplace</li>
          </ul>
        </div>

        <div className="flex-container2">
          <div className="flex-container2childs">
            <h1 className="logo-display">
              bazoo
              <span className="k-logo">K</span>a
            </h1>
          </div>

          {/* bottom header */}
          
            <SearchBar />
        
        </div>
        {/* last header */}
        <div>
          <ul className="flex-container3">
            <li className="second-li home-btn l1">
              <Button className={classNames(classes.lastHeaderBtn)} onClick={this.movingtoHome}>
                Home
              </Button>
            </li>
            <li className="second-li l2">
              <AllCategoriesMenu />
            </li>
            <li className="second-li l3">
              <PublishAdd
                sendingUserInfoToComponent={this.props.loggedInUserInfo}
              />
            </li>
            <li className="second-li l4">
              <LoginButton
                gettingUserData={this.gettingCurrentUserDataFromComponent}
                sendingUserInfoToComponent={this.props.loggedInUserInfo}
                sendingTokenInfo={this.props.tokenInfo}
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

HeaderTop.propTypes = {
  classes: PropTypes.object.isRequired
};

// export default withStyles(styles)(HeaderTop);
// connect function will wrap component and attached properties
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(HeaderTop));
