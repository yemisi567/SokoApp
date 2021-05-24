import React, { Component } from 'react'
import { faWallet,  faHome, faMapMarker, faSuitcase, 
  faCartPlus, faSearch, faFire, faThumbsUp, faPodcast, faBars, faBook,
    } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link } from "react-router-dom";
import Slideshow from './Slideshow';



export default class Home extends Component {
    render() {
        return (
              <div>

                      <h2 style={{fontSize:14,
                      marginTop: 20}}>Trollbasket</h2>
              <table>
                    <tbody>
                      <tr>
                         <td>
                         <FontAwesomeIcon icon={faMapMarker} style={{ color: '#227EFF'}}  /> Lagos
                        </td>
                      <td>
                      <FontAwesomeIcon icon={faSuitcase} style={{ color:'#7E42F5'}}  /> My Orders
                      </td>
                        <td>
                        <FontAwesomeIcon icon={faCartPlus}/>Cart</td>
                      </tr>
                    </tbody>
            </table>
        <hr />
        <div className="searchContainer"> 
            <input className="searchBox" style={{backgroundColor:"#edf2f7",
          border: 'none'}} type="search"  placeholder="Search merchbuy" />
            <FontAwesomeIcon icon={faSearch} style={{ marginTop: 10}}  />
                </div>

             
              <Slideshow />


      <section className="card-container2" >

        <div className="card " >
           <div
           style={{borderRadius: 4,
            backgroundColor:'#227EFF',
            height: 48,
            width: 50}}>
            <span
           ><FontAwesomeIcon icon={faBook} style={{marginTop: 15}}/></span>
        </div>
        <p style={{color: 'black',
           marginLeft: -10}}> Product
            <br/> categories</p>
            
        </div>
    
        <div className="card " >
           <div
           style={{borderRadius: 4,
            backgroundColor:' #EE6F44',
            height: 48,
            width: 50}}>
            <span
           ><FontAwesomeIcon icon={faFire} style={{marginTop: 15}}/></span>
        </div>
        <p style={{color: 'black',
           }}> Product
            <br/> categories</p>
            
        </div>
    
        <div className="card">
           <div
           style={{borderRadius: 4,
            backgroundColor: '#7E42F5',
            height: 48,
           width: 48}}>
           <span
            ><FontAwesomeIcon icon={faThumbsUp} style={{marginTop: 15}}/></span>
           
           </div>
           <p style={{color: 'black'}}
            > Recommended<br/>Products</p>
        </div>

        <div className="card">
            <div
            style={{borderRadius: 4,
              backgroundColor: '#05944F',
              height: 48,
             width: 48}}>
            <span
            ><FontAwesomeIcon icon={faHome}  style={{marginTop: 15}}/></span>
            </div>
            <p style={{color: 'black'}}
            > Shops</p>
        </div>
        
    </section>

         
          <section className="card-container">

            <div className="card">
               <div className="card-items">
                <img src="https://i.pinimg.com/originals/de/9f/fa/de9ffa45ce2ed2071d62bbefdc745476.jpg" 
                alt="alternatetext"
                width="150" 
               height="150"
               style={{borderRadius: 4}}
               />
               </div>
               <p style={{color: '#718596'}}
               >Free sample small</p>
               <p style={{color: '#718596'}}
                >tote bag gucci fen....</p>
               <p style={{color: 'black',
               fontWeight: 700}}>#900 - #1,500</p>
               <p style={{color: '#718596'}}>MOQ 4(pieces)</p>
                
            </div>
        
            <div className="card">
                <div className="card-items">
                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/eaorr1snaoqwpjnceij2/air-monarch-iv-mens-training-shoe-lPtRrS.png" 
                alt="alternatetext"
                width="150" 
               height="100"
               style={{borderRadius: 4}}/>
               <p style={{color: '#718596'}}
               >Free sample small</p>
               <p style={{color: '#718596'}}
                >tote bag gucci fen....</p>
               <p style={{color: 'black',
                  fontWeight: 700}}>#900 - #1,500</p>
               <p style={{color: '#718596'}}
               >MOQ 4(pieces)</p>
                </div>
            </div>
        
            <div className="card">
               <div className="card-items">
                <img src="https://i.pinimg.com/originals/de/9f/fa/de9ffa45ce2ed2071d62bbefdc745476.jpg" 
                alt="alternatetext"
                width="150" 
               height="150"
               style={{borderRadius: 4}}
               />
               </div>
               <p style={{color: '#718596'}}
               >Free sample small</p>
               <p style={{color: '#718596'}}
                >tote bag gucci fen....</p>
               <p style={{color: 'black',
               fontWeight: 700}}>#900 - #1,500</p>
               <p style={{color: '#718596'}}>MOQ 4(pieces)</p>
                
            </div>
            
            <div className="card">
                <div className="card-items">
                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/eaorr1snaoqwpjnceij2/air-monarch-iv-mens-training-shoe-lPtRrS.png" 
                alt="alternatetext"
                width="150" 
               height="100"
               style={{borderRadius: 4}}/>
               <p style={{color: '#718596'}}
               >Free sample small</p>
               <p style={{color: '#718596'}}
                >tote bag gucci fen....</p>
               <p style={{color: 'black',
                  fontWeight: 700}}>#900 - #1,500</p>
               <p style={{color: '#718596'}}
               >MOQ 4(pieces)</p>
                </div>
            </div>
        
            <div className="card">
               <div className="card-items">
               <img src="https://image.freepik.com/free-vector/grey-open-box-with-realistic-shadows-grey-background-vector-illustration_1085-145.jpg" 
                alt="alternatetext"
                width="150" 
               height="400"
               style={{borderRadius: 4}}/>
               <p style={{color: '#718596'}}
               >Free sample small</p>
               <p style={{color: '#718596'}}
                >tote bag gucci fen....</p>
               <p style={{color: 'black', 
               fontWeight: 700}}>#900 - #1,500</p>
               <p style={{color: '#718596'}}
               >MOQ 4(pieces)</p>
            </div>
               </div>
        
            <div className="card">
               <div className="card-items">
               <img src="https://image.freepik.com/free-vector/grey-open-box-with-realistic-shadows-grey-background-vector-illustration_1085-145.jpg" 
                alt="alternatetext"
                width="150" 
               height="150"
               style={{borderRadius: 4}}/>
               <p style={{color: '#718596'}}
               >Free sample small</p>
               <p style={{color: '#718596'}}
                >tote bag gucci fen....</p>
               <p style={{color: 'black', 
               fontWeight: 700}}>#900 - #1,500</p>
               <p style={{color: '#718596'}}
               >MOQ 4(pieces)</p>
            </div>
               </div>
        
        </section>
          

               <section>
               <nav class="nav">
  <a href="Home.js" class="nav__link nav__link--active">
  <FontAwesomeIcon icon={faHome} style={{ color:"#E5E5E5" }} size="2x" />
    <span class="nav__text">Home</span>
  </a>
 <Link to='/Buy' class="nav__link">
  <FontAwesomeIcon icon={faCartPlus} style={{color: '#227EFF'}} size="2x"  />
    <span class="nav__text" style={{color: '#227EFF'}}>Buy</span></Link>
    
  <Link to='/Deal'  class="nav__link">
  <FontAwesomeIcon icon={faPodcast} style={{ color:"#E5E5E5" }} size="2x"  />
    <span class="nav__text">Deals</span>
  </Link>
  
  <Link to='/Wallet'  class="nav__link">
  <FontAwesomeIcon icon={faWallet} style={{ color:"#E5E5E5"}} size="2x"  />
    <span class="nav__text">Wallet</span>
  </Link>

  <Link to='/More' class="nav__link">
  <FontAwesomeIcon icon={faBars} style={{ color:"#E5E5E5"}} size="2x"  />
    <span class="nav__text">More</span>
  </Link>
</nav>           
               </section>
            </div>
            
        )
    }
}
