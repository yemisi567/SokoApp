import React, { Component } from 'react'
import { faWallet, faCommentAlt, faHome, faMailBulk, faEthernet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div>
                <h4 id="rcorners2">
                    WALLET BALANCE
                <br/>
                TOKEN BALANCE:
                <br/>
                NAIRA BALANCE:
                </h4>
                <p className='solid'>Select Currency: </p>
                <p className='light'> <button type="button" >TOKEN</button> 0.0000001 </p>
            
                <div class="btn-group">
                        <button type="button" class="btn btn-primary" >SEND</button>
                        <div class="btn-group">
                                 <button type="button"  class="btn btn-primary" style={{marginLeft: 10}}>RECEIVE</button>
                                 </div>
                 </div>
                 <p className='activity'>Recent Activity </p>      
                 <table>
                      <tr>
                       <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                      </tr>
                        <tr>
                            <td>1/1/21</td>
                             <td>Sent</td>
                              <td>N100.00</td>
                         </tr>
                              <tr>
                                  <td>2/2/21</td>
                                 <td>Recieved</td>
                                  <td>N200.00</td>
                               </tr>

                                   <tr>
                                       <td>3/3/21</td>
                                       <td>Sent</td>
                                       <td>N300.00</td>
                                    </tr>
              </table>

               <section style={{paddingTop: 100 }}>
               <nav class="nav">
  <a href="Home.js" class="nav__link nav__link--active">
  <FontAwesomeIcon icon={faHome} style={{ color: 'red' }} size="2x" />
    <span class="nav__text">Home</span>
  </a>
 <Link to='/Activity' class="nav__link nav__link--active">
  <FontAwesomeIcon icon={faCommentAlt} style={{ color: 'red' }} size="2x"  />
    <span class="nav__text">Activity</span></Link>
    
  <Link to='/Wallet'  class="nav__link">
  <FontAwesomeIcon icon={faWallet} style={{ color: 'red' }} size="2x"  />
    <span class="nav__text">Wallet</span>
  </Link>
  
  <Link to='/Market'  class="nav__link">
  <FontAwesomeIcon icon={faMailBulk} style={{ color: 'red' }} size="2x"  />
    <span class="nav__text">Market</span>
  </Link>

  <Link to='/Earn' class="nav__link">
  <FontAwesomeIcon icon={faEthernet} style={{ color: 'red' }} size="2x"  />
    <span class="nav__text">Earn</span>
  </Link>

</nav>            
               </section>

            </div>
            
        )
    }
}
