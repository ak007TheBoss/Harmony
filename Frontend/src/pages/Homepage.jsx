import React from 'react'
import buil1 from '../testimgs/randomb1.jpg'
import buil2 from '../testimgs/randomb2.avif'
import buil3 from '../testimgs/randomb3.jpg'
import verb1 from '../testimgs/verb1.jpg'
import verb2 from '../testimgs/verb2.jpg'
import verb3 from '../testimgs/verb3.jpg'
import second from '../imgs/dblshare.jpg'
import '../css/index.css'
import Navbarcomponent from '../components/Navbarcomponent'
import { Link } from 'react-router-dom'
const Homepage = () => {
  return (
    <>

  <Navbarcomponent/>
  {/* horiz carousel */}
  <div className='container my-3'>
      <div id="carouselExampleCaptions" className="carousel slide z-0">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={second} className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
            <Link to="/book"><button className='btn btn-success btn-lg'>Book Now!</button></Link>

          </div>
        </div>
        <div className="carousel-item">
          <img src={buil2} className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
            <Link to="/book"><button className='btn btn-success btn-lg'>Book Now!</button></Link>

          </div>
        </div>
        <div className="carousel-item">
          <img src={buil3} className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
            <Link to="/book"><button className='btn btn-success btn-lg'>Book Now!</button></Link>

          </div>
        </div>
      </div>
      <button className="carousel-control-prev z-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next z-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      </div>
  </div>

  {/*card carousel  */}
  <div className="container shadow-lg p-3">
    <h1 className="text-white">Life at Harmony</h1>
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-inner my-5">
        <div className="carousel-item active container">
          <div className="d-flex mar">
            <div className="cardpos">
              <div className="card" style={{width: "18rem"}}>
                <img src={verb1} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  

                </div>
              </div>
            </div>
            <div className="cardpos mar">
              <div className="card" style={{width: "18rem"}}>
                <img src={verb2} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  

                </div>
              </div>
            </div>
            <div className="cardpos mar">
              <div className="card" style={{width: "18rem"}}>
                <img src={verb3} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item container">
          <div className="d-flex mar">
            <div className="cardpos">
              <div className="card" style={{width: "18rem"}}>
                <img src={verb3} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  
                </div>
              </div>
            </div>
            <div className="cardpos mar">
              <div className="card" style={{width: "18rem"}}>
                <img src={verb2} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  

                </div>
              </div>
            </div>
            <div className="cardpos mar">
              <div className="card" style={{width: "18rem"}}>
                <img src={verb1} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item container">
          <div className="d-flex mar">
            <div className="cardpos">
              <div className="card" style={{width: "18rem"}}>
                <img src={verb2} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  

                </div>
              </div>
            </div>
            <div className="cardpos mar">
              <div className="card" style={{width: "18rem"}}>
                <img src={verb3} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  

                </div>
              </div>
            </div>
            <div className="cardpos mar">
              <div className="card" style={{width: "18rem"}}>
                <img src={verb1} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev z-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next z-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>  
  </div>

    </>
  )
}

export default Homepage