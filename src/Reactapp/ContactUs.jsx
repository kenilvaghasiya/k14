import React, { useState } from 'react';
import f1 from "./img/Frame 1.png"
import f2 from "./img/Frame 2.png"
import "./css/contect.css"

const ContactUS =()=>{

    const [data, set]=useState({
        fname:"",
        lname:"",
        email:"",
        number:"",
        service:"",
        about:""
          });
        
        const getstarted=(e)=>{
        alert(data.service)
          e.preventDefault()
          
        }
        
        const getdata=(e)=>{
        
          const name=e.target.name
          const value=e.target.value
        
          set((data2)=>{
            return{
              ...data2,
              [name]:value
            }
          })
        }
        
        
        
        
        
        
        
        
        
        
            return(<>
              <div className="container-fluid" style={{paddingTop:'100px'}}>
          <div className="row ">
            <div className="col-lg-6 col-sm-12 mainbox kenil order-2 order-lg-1">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={f1} alt="Avatar" style={{width: 263, height: 460}}  />
                  </div>
                  <div className="flip-card-back">
                    <img src={f2} alt="Avatar" style={{width: 263, height: 460}} />
                  </div>
                </div>
              </div>
            </div>
         
        
         <div className="col-lg-6 col-sm-12 order-1 order-lg-2">
          <div className="container d-flex justify-content-center align-items-center frmk ">
            <form  className="formsize" onSubmit={getstarted}>
              <label className="form-label">Name</label>
              <div className="row">
                <div className="col-md-6 col-sm-12 mb-2">
                  <input type="text" className="form-control" placeholder="First name" name="fname" value={data.fname} onChange={getdata} required />
                </div>
                <div className="col-md-6 col-sm-12 mb-2">
                  <input type="text" className="form-control" placeholder="Last name"  name="lname" value={data.lname}  onChange={getdata} required />
                </div>
              </div>
              <label className="form-label">Emial</label>
              <div className="row">
                <div className="col-md-12 col-sm-12 mb-2">
                  <input type="email" className="form-control" placeholder="email"  name="email" value={data.email}  onChange={getdata} required  />
                </div>
              </div>
              <label className="form-label">Mobile No</label>
              <div className="row">
                <div className="col-md-12 col-sm-12 mb-2">
                  <input type="text" className="form-control" placeholder={+91} required  name="number" value={data.number}  onChange={getdata} />
                </div>
              </div>
              <label className="form-label"> Select a Service</label>
              <div className="row">
                <div className="col-md-12 col-sm-12 mb-2">
                  <select className="form-select form-control  col-md-12 col-sm-12  "   name="service" value={data.service}  onChange={getdata} required  >
                    <option selected>Select </option>
                    <option value="app">Mobile app development</option>
                    <option value="website">Website development</option>                                  
                    <option value="game">Game</option>
                    <option value="ui/ux">UI/UX</option>
                    <option value="logo">Logo</option>
        
                  </select>
                </div>
              </div>
              <label className="form-label">Brief about the project</label>
              <div className="row">
                <div className="col-md-12 col-sm-12 mb-2">
                  <textarea className="form-control" name id rows={3} defaultValue={""} required name="about" value={data.about}  onChange={getdata} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12 mb-2">
                  <button className="btn rounded-pill" >Get Started</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        
        
        
        </div>
        
             
                
                
        
        
        
        
          </div>
        
        </>
        
            )


}

export default ContactUS;