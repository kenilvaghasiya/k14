import react from 'react'
import "./devpro.css"
import img from "../img/barreirofreddy_tv_machine.jpg"

const data = [
    {
        name: "Discover",
        value: "We shape brands through exploration, applying in-depth research to challenge assumptions at every turn."
    },
    {
        name: "Design",
        value: "Our design approach is to simplify. We embrace the joy in creating something unique that is easy for end users."
    },
    {
        name: "Build",
        value: "Using modern technologies, we build with efficiency and skill, creating flexible and scalable business-driven solutions."
    },
    {
        name: "Deliver",
        value: "We take an iterative approach to both our work and our practice, always looking for ways to improve what we do."
    }
]





const Devpro = () => {


    return (
        <>
            <div className="container mt-5">
                <div className="col">
                    <div className="col devpro pl-0">Development Process </div>
                    <div className="col-12 d-flex justify-content-center">
                        <img src={img} style={{ width: '80%', height: '80%',zIndex:"-1"}} alt />
                    </div>
                    <div className="row">

                        {data.map((val,index) => {
                            return (<>
                                <div className="col-lg-3 col-sm-12" key={index}>
                                    <div className="col">
                                        <p className="proname">{val.name}</p>
                                        <p>{val.value}</p>
                                    </div>
                                </div>
                            </>)
                        })}
                    </div>
                </div>
            </div>






        </>
    )

}


export default Devpro