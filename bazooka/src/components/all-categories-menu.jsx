import React, { Component } from 'react';
import './css/styles1.css';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import MenueImage from '../images/menu-image.jpg';
import MenueImage2 from '../images/menu-image2.jpg';
import FlippingImages from './Flipping Image/flipping';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';



const styles = theme => ({
    mainBtn: {
        color: '#fff',
        '&:hover': {
            color: '#2fdab8',
          },
    },
    menuItem : {
      'margin': '0px 0px 0px 0px',
      'padding': '0px 0px 0px 0px',
      'text-decoration': 'none',
      'font-size': '24px',
      'color': '#545454',
      'letter-spacing': '1px',
      'font-size': '15px',
      '&:hover': {
        color: '#2fdab8',
      },
      
    },
    menu:{
      'padding': '0px 0px 0px 0px',
    },
    list: {
      width: '200px',
    },
    // 
    listitem: {
      '&:hover': {
        color: '#2fdab8',
      },
    },
    listtextitem:{
      '&:hover': {
        color: '#2fdab8',
      },
    },
})


var x = window.matchMedia("(max-width: 700px)");


class AllCategoriesMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            left: false,
        }
    }
    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
      };
    
      handleClose = () => {
        this.setState({ anchorEl: null });
      };
    
      toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
      };

      render() {
        const { anchorEl } = this.state;
        const { classes } = this.props;
        const sideList = (
          <div className={classes.list}>
            <List>
               <ListItem button>
               <Link to="/"><h3>Home</h3></Link>
               </ListItem>
            </List>
            <Divider />
            <FlippingImages front={MenueImage} back={MenueImage2} />
            <List>
            {/* <Link to="/contact">Contact</Link> */}
                  <ListItem button component="a" href="#simple-list" className={classNames(classes.listitem)} >
                   <Link to="/vehicles"><h3>Vehicles</h3></Link>
                  </ListItem>
                  <ListItem button component="a" href="#simple-list" className={classNames(classes.listitem)}>
                  <Link to="/property"><h3>Property for Sale/Rent</h3></Link>
                  </ListItem>
                  <ListItem button component="a" href="#simple-list" className={classNames(classes.listitem)}>
                  <Link to="/bikes"><h3>Bikes</h3></Link>
                  </ListItem>
                  <ListItem button component="a" href="#simple-list" className={classNames(classes.listitem)}>
                  <Link to="/mobiles"><h3>Mobiles</h3></Link>
                  </ListItem>
                  <ListItem button component="a" href="#simple-list" className={classNames(classes.listitem)}>
                  <Link to="/books-and-sports"><h3>Books & Sports</h3></Link>
                  </ListItem>
                  <ListItem button component="a" href="#simple-list" className={classNames(classes.listitem)}>
                  <Link to="/animals"><h3>Animals</h3></Link>
                  </ListItem>
                  <ListItem button component="a" href="#simple-list" className={classNames(classes.listitem)}>
                  <Link to="/furniture-&-Home-Decor"><h3>Furniture & Home Decor</h3></Link>
                  </ListItem>
                  <ListItem button component="a" href="#simple-list" className={classNames(classes.listitem)}>
                  <Link to="/electronics-&-Home-Appliances"><h3>Electronics & Home Appliances</h3></Link>
                  </ListItem>
                  <ListItem button component="a" href="#simple-list" className={classNames(classes.listitem)}>
                  <Link to="/clothing"><h3>Clothing</h3></Link>
                  </ListItem>
                  <ListItem button component="a" href="#simple-list" className={classNames(classes.listitem)}>
                  <Link to="/others"><h3>Others</h3></Link>
                  </ListItem>
            </List>
          </div>
        );
    
        
          if (x.matches) {
            return(
              <div>
              <Button onClick={this.toggleDrawer('left', true)} className={classNames(classes.mainBtn)} >
              <span className='subheadBtns'>All Categories</span>    
              </Button>

              <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}  >
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('left', false)}
              onKeyDown={this.toggleDrawer('left', false)}
            >
              {sideList}
            </div>
               </Drawer>
               </div>
            )
        }
        else {
          return (<div>
            <Button
              aria-owns={anchorEl ? 'simple-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
              className={classNames(classes.mainBtn)}
            >
              <span className='subheadBtns'>All Categories</span>  
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
              className={classes.menu}
            >
              <table tabIndex='-1'>
                  <tr>
                    <td rowspan="8">
                      
                      <FlippingImages front={MenueImage} back={MenueImage2} />
                      </td>
                    <td><Link to="/vehicles"><MenuItem className={classes.menuItem}  onClick={this.handleClose}>Vehicles</MenuItem></Link></td>
                    <td><Link to="/property"><MenuItem className={classes.menuItem}  onClick={this.handleClose}>Property for Sale/Rent</MenuItem></Link></td>
                  </tr>
                  <tr>
                    <td> <Link to="/bikes"><MenuItem className={classes.menuItem}  onClick={this.handleClose}>Bikes</MenuItem></Link></td>
                    <td><Link to="/mobiles"><MenuItem className={classes.menuItem}  onClick={this.handleClose}>Mobiles</MenuItem></Link></td>
                  </tr>
                  <tr>
                    <td><Link to="/clothing"><MenuItem className={classes.menuItem}  onClick={this.handleClose}>Clothing</MenuItem></Link></td>
                    <td><Link to="/books-and-sports"><MenuItem className={classes.menuItem}  onClick={this.handleClose}>Books & Sports</MenuItem></Link></td>
                  </tr>
                  <tr>
                    <td><Link to="/animals"><MenuItem className={classes.menuItem}  onClick={this.handleClose}>Animals</MenuItem></Link></td>
                    <td><Link to="/others"><MenuItem className={classes.menuItem}  onClick={this.handleClose}>Others</MenuItem></Link></td>
                  </tr>
                  <tr>
                    <td><Link to="/furniture-&-Home-Decor"><MenuItem className={classes.menuItem}  onClick={this.handleClose}>Furniture & Home Decor</MenuItem></Link></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><Link to="/electronics-&-Home-Appliances"><MenuItem className={classes.menuItem}  onClick={this.handleClose}>Electronics & Home Appliances</MenuItem></Link></td>
                    <td></td>
                  </tr>
            </table>
            </Menu>
          </div>)
        }
      }
}

AllCategoriesMenu.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(AllCategoriesMenu);
