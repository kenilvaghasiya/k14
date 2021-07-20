import react from "react";
import { NavLink } from "react-router-dom";
import "./css/footer.css"
import im from "./img/logo 1.png"


const Footer = () => {

    return (<>
        <div className="container  boxasd mb-5">
            <div className="row boxasd">
                <div className="col col-md-4  col-sm-12 col-xs-12 p-4 d-flex flex-column pt-5">
                    <img src={im} alt="asd" className="logoimgk14" />
                    <p className="development">Developers</p>
                    <p className="mb-1">kenilvaghasiya704@gmail.com</p>
                    <p className="mb-1">+919601714264</p>
                </div>
                <div className="col col-md-4 col-sm-12 col-xs-12 flex-column pt-5 ">
                    <p className="footerhed">Company</p>
                    <ul style={{ listStyle: 'none' }} className="p-0">
                        <li><NavLink to="/home" className="linkfooter">Home</NavLink></li>
                        <li><NavLink to="/services" className="linkfooter">Services</NavLink></li>
                        <li><NavLink to="/about" className="linkfooter">About</NavLink></li>
                        <li><NavLink to="/contactus" className="linkfooter">Contact Us</NavLink></li>
                    </ul>
                </div>
                <div className="col col-md-4 col-sm-12  col-xs-12 flex-column pt-5 ">
                    <p className="footerhed"> Services</p>
                    <ul style={{ listStyle: 'none' }} className="p-0">
                        <li><NavLink to="" className="linkfooter">Android App Development</NavLink></li>
                        <li><NavLink to="" className="linkfooter">iOS App Development</NavLink></li>
                        <li><NavLink to="" className="linkfooter">ReactJS Development</NavLink></li>
                        <li><NavLink to="" className="linkfooter">AngularJS Development</NavLink></li>
                        <li><NavLink to="" className="linkfooter">.Net Development</NavLink></li>
                        <li><NavLink to="" className="linkfooter">Firebase Development</NavLink></li>
                        <li><NavLink to="" className="linkfooter">PHP Development</NavLink></li>
                        <li><NavLink to="" className="linkfooter">Java Development</NavLink></li>
                        <li><NavLink to="" className="linkfooter">MongoDB Development</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>


    </>)
}


export default Footer