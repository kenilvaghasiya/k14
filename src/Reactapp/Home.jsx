import React ,{useEffect}from 'react';
import im from "./img/kkk.gif"
import "./css/home.css"
import Devpro from './Home_com/Devpro';
import Selectitm from './Home_com/Selectitm';
import Footer from './Footer';





const Home =()=>{


  
    return(<>

    <div className="container" style={{paddingTop:'100px'}}>
        <div className="row h-100">
            <div className="col-lg-6 col-sm-12 d-flex justify-content-center overflow-hidden order-lg-1 order-sm-2">
                <div className="d-flex flex-column h-100 justify-content-center m-2">
                    <p className="p1">Your Trusted Development Partner</p>
                    <p className="p2">Your imagination becomes reality</p>
                    <p className="p12">We deliver web and mobile app , Game development services to global businesses. Our User experience approach and project execution processes help you to deliver the right solutions.</p>
                    <button className="Whatwedo">What we do</button>

                </div>

            </div>
            <div className="col-lg-6 col-sm-12 d-flex justify-content-center overflow-hidden order-lg-2 order-sm-1">
                <img src={im} alt="img" style={{width: '110%', height: '110%'}}/>
            </div>
        </div>
    </div>

    <Devpro/>
    <Selectitm/>
    <Footer/>
    
</>
        
    )


}

export default Home;