import react from 'react';
import "./sliderser.css"
import A1 from"../slct/A1.png"
import A2 from"../slct/A2.png"
import A3 from"../slct/A3.png"

const SliderServices=()=>{

    return(<>
    
    
    <div className="container-fluid d-flex justify-content-center aftermobile">
   <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval={10000}>
      <img src={A3} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Mobile</h5>
        <p>We develop mobile apps that help businesses for better operational efficiency and engagement. Hire certified mobile app developers from K14 who are experts for delivering excellence in Android, iOS and cross-platform app development
          services.
        </p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval={2000}>
      <img src={A1} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Game Development</h5>
        <p>k14 is a top website design and Game development company in India</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={A2}className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Web Development</h5>
        <p>k14 is a top website design and web development company in India &amp; USA delivering the best web development services to craft bespoke websites, web applications, web-tools, etc.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>

    </>)
}

export default SliderServices