import React, { Component } from 'react';
import './image-grid.css';
import CircularIndeterminate from '../loader';
import ImageGridText from './imagegridtext';
import image1 from '../../images/grid1.jpg';
import image2 from '../../images/grid2.jpg';
import image3 from '../../images/grid3.jpg';
import image4 from '../../images/grid4.jpg';
import image5 from '../../images/grid5.jpg';
import image6 from '../../images/grid6.jpg';
import image7 from '../../images/grid7.jpg';
import image8 from '../../images/grid8.jpg';
import image9 from '../../images/grid9.jpg';
import image10 from '../../images/grid10.jpg';
import image11 from '../../images/grid11.jpg';
import {Link} from 'react-router-dom';


class ImageGrid extends Component{
  constructor(props) {
    super(props);
    this.state = {
      loader: true,
    }
  }

  // componentWillMount() {
  //   this.setState({loader: true,})
  // }
  componentDidMount() {
    setTimeout(() => this.setState({ loader: false }), 2000);
    // this.setState({loader: false})
  }


  render() {

    if(this.state.loader === true) {
      return(<CircularIndeterminate />)
    }
    else{
    return(
        <div>        
        <ImageGridText />
        <div className="row"> 
           <div className="column">

                                <Link to="/vehicles"><div className="hovereffect">
                                <img src={image1} className="img-responsive" />
                                <div className="overlay">
                                <h2>Vehicles</h2>
                                <p>
                                    
                                </p>
                                  </div>
                                </div>
                                </Link >
                                <Link to="/furniture-&-Home-Decor"><div className="hovereffect">
                                <img src={image3} className="img-responsive" />
                                <div className="overlay">
                                <h2>Furniture & Home Decor</h2>
                                <p>
                                    
                                </p>
                                  </div>
                                </div>
                                </Link>
                                   
    
   
        </div>
        <div className="column">
                                <Link to="/clothing"><div className="hovereffect">
                                <img src={image2} className="img-responsive" />
                                <div className="overlay">
                                <h2>Clothing</h2>
                                <p>
                                    
                                </p>
                                  </div>
                                </div>
                                </Link>
                                <Link to="/bikes"><div className="hovereffect">
                                <img src={image4} className="img-responsive" />
                                <div className="overlay">
                                <h2>Bikes</h2>
                                <p>
                                    
                                </p>
                                  </div>
                                </div>
                                </Link>
                                <Link  to="/mobiles"><div className="hovereffect">
                                <img src={image5} className="img-responsive" />
                                <div className="overlay">
                                <h2>Mobiles</h2>
                                <p>
                                    
                                </p>
                                  </div>
                                </div>
                                </Link>
        
         </div> 

        <div className="column">
                               <Link to="/property"><div className="hovereffect">
                                <img src={image10} className="img-responsive" />
                                <div className="overlay">
                                <h2>Property for Sale/Rent</h2>
                                <p>
                                    
                                </p>
                                  </div>
                                </div>
                                </Link>
                                 <Link to="/electronics-&-Home-Appliances"><div className="hovereffect">
                                <img src={image6} className="img-responsive" />
                                <div className="overlay">
                                <h2>Electronics & Home Appliances</h2>
                                <p>
                                    
                                </p>
                                  </div>
                                </div>
                                </Link>
                                <Link to="/animals"><div className="hovereffect">
                                <img src={image7} className="img-responsive" />
                                <div className="overlay">
                                <h2>Animals</h2>
                                <p>
                                    
                                </p>
                                  </div>
                                </div>
                                </Link>
        
        </div>
         <div className="column">
                                
                                <Link to="/others"><div className="hovereffect">
                                <img src={image8} className="img-responsive" />
                                <div className="overlay">
                                <h2>Others</h2>
                                <p>
                                    
                                </p>
                                  </div>
                                </div>
                                </Link>
                                <Link to="/books-and-sports"><div className="hovereffect">
                                <img src={image11} className="img-responsive" />
                                <div className="overlay">
                                <h2>Books & Sports</h2>
                                <p>
                                    
                                </p>
                                  </div>
                                </div>
                                </Link>
    
        </div>
        
        </div>
        </div>
        
    )}
}
}

  

export default ImageGrid;