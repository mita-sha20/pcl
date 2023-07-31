import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Button from '@mui/material/Button';
import "./style.css";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useSelector } from 'react-redux';
import { useState } from 'react';
const Voting = () => {

    const [info, setInfo] = useState({
        name:"",
        password:"",
      });
    const db = getDatabase();
    const handlecount=()=>{ 
     set(push(ref(db, "vote")), {
      name:info.name,
      password:info.password,
     }).then(
        toast.success("Voting successful",{
            autoClose:1000,
            pauseOnHover:false,
            theme:"dark", 
          })
     )
    }

    const handlecount2=()=>{ 
        set(push(ref(db, "vote2")), {
         name:info.name,
         password:info.password,
        }).then(
           toast.success("Voting successful",{
               autoClose:1000,
               pauseOnHover:false,
               theme:"dark", 
             })
        )
       }

       const handlecount3=()=>{ 
        set(push(ref(db, "vote3")), {
         name:info.name,
         password:info.password,
        }).then(
           toast.success("Voting successful",{
               autoClose:1000,
               pauseOnHover:false,
               theme:"dark", 
             })
        )
       }

       const handlecount4=()=>{ 
        set(push(ref(db, "vote4")), {
         name:info.name,
         password:info.password,
        }).then(
           toast.success("Voting successful",{
               autoClose:1000,
               pauseOnHover:false,
               theme:"dark", 
             })
        )
       }

console.log(info)
         
  return (
    <>
     <div class="headline">
            <marquee width="80%" direction="right" height="100px" scrollamount="16">
                welcome to smart voting system
                </marquee>
        </div>
        <div class="container">
    <section id="vote-main">
                 <div class="Voting">

                    <div class="profile">
                     <div class="pro-msg">
                        <p>The voting administrators must not disclose any information about the identity of the voters or any other information which isn’t contained in the published voting results.</p>
                     </div>
                        <div class="pro-item">
                              <picture>
                        <img src="../images/voting.jpg" alt=""/>
                    </picture>
                        </div>
                    </div>
                
                    <div class="vote-right">
                    <div class="cand-item">
    
                            <div class="col-lg-3">
                                <div class="vote-item">
                                    <p>1</p>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="vote-item">
                                    <h3>Book</h3>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="vote-item">
                                    <picture>
                                        <img src="images/bookstack_libr_3024.png" alt=""/>
                                    </picture>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="vote-button">
                                 
                                   <Button onClick={handlecount} variant="contained" className="btn">Vote</Button>
  <ToastContainer/>
                                </div>
                            </div>
                        
                    </div>
                    <div class="cand-item">
                        
                            <div class="col-lg-3">
                                <div class="vote-item">
                                    <p>2</p>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="vote-item">
                                    <h3>Computer</h3>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="vote-item">
                                    <picture>
                                        <img src="images/mac_icon-icons.com_54610.png" alt=""/>
                                    </picture>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="vote-button">
                                <Button onClick={handlecount2} variant="contained" className="btn">Vote</Button>
  <ToastContainer/>
                                </div>
                            </div>
                        
                    </div>
                    <div class="cand-item">
                        
                            <div class="col-lg-3">
                                <div class="vote-item">
                                    <p>3</p>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="vote-item">
                                    <h3>Clock</h3>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="vote-item">
                                    <picture>
                                        <img src="images/3586375-clock-hour-timer-watch_107942.png" alt=""/>
                                    </picture>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="vote-button">
                                <Button onClick={handlecount3} variant="contained" className="btn">Vote</Button>
  <ToastContainer/>
                                </div>
                            </div>
                        
                    </div>
                    <div class="cand-item">
                        
                        <div class="col-lg-3">
                            <div class="vote-item">
                                <p>4</p>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="vote-item">
                                <h3>MOBILE</h3>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="vote-item">
                                <picture>
                                    <img src="images/mobile.png" alt=""/>
                                </picture>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="vote-button">
                            <Button onClick={handlecount4} variant="contained" className="btn">Vote</Button>
  <ToastContainer/>
                            </div>
                        </div>
                    
                </div>
                
                   
                </div>    
                
            </div>
    </section>
</div>
    </>
       

    
  )
}

export default Voting
