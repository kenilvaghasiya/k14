import react, { useState, useEffect } from 'react'
import "./selectitm.css"

import a1 from "../slct/1.png"
import a2 from "../slct/2.png"
import a3 from "../slct/3.png"
import a4 from "../slct/4.png"
import a5 from "../slct/5.png"
import a6 from "../slct/6.png"
import a7 from "../slct/7.png"
import a8 from "../slct/8.png"
import a9 from "../slct/9.png"
import a10 from "../slct/10.png"
import a11 from "../slct/11.png"
import a12 from "../slct/12.png"
import a13 from "../slct/13.png"
import a14 from "../slct/14.png"
import a16 from "../slct/16.png"
import a17 from "../slct/17.png"
import a18 from "../slct/18.png"




const imgall =
{
    mobile: [ a1,a2,a3,a7],
    game: [a4,a10],
    frontend: [a3,a5,a6,a9],
    database: [a16,a18,a17],
    backend: [a13,a11,a12,a14]

}


const Selectitm = () => {
    const[dataarr,set2]=useState([])
    const [name, set] = useState('mobile')

    useEffect(() => {
            set2(()=>{
                return(imgall[name])
            })
    });

    const change = (e) => {
        set(e)
    }




    return (<>


        <div className="container mt-5 mb-5">
            <div className="col">
                <div className="row d-flex justify-content-center maintec">Technology</div>
                <div className="row d-flex justify-content-center m-0 listbox">
                    <ul className="d-flex flex-lg-row m-0 flex-wrap justify-content-center" >
                        <li className=" mb-0 hili" onMouseEnter={() => { change('mobile') }}  >Mobile</li>
                        <li className=" mb-0 hili" onMouseEnter={() => { change('game') }}>Game</li>
                        <li className=" mb-0 hili" onMouseEnter={() => { change('frontend') }}>Front End</li>
                        <li className=" mb-0 hili" onMouseEnter={() => { change('backend') }}>Backend</li>
                        <li className=" mb-0 hili" onMouseEnter={() => { change('database') }}>Database</li>
                    </ul>
                </div>
                <div className="row d-flex justify-content-center mt-4 flex-wrap">


                    { dataarr.map((val, index) => {
                        return (
                            <img src={val} className="imgicon p-0" alt="img" key={index} />
                        )
                    })}



                </div>
            </div>
        </div>





    </>)


}

export default Selectitm