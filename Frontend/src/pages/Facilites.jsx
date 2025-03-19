import React from 'react'
import '../css/facilites.css'
import Navbarcomponent from '../components/Navbarcomponent'
import buil1 from '../testimgs/randomb1.jpg'
import second from '../imgs/dblshare.jpg'
import buil2 from '../testimgs/randomb2.avif'
import buil3 from '../testimgs/randomb3.jpg'
import { Link } from 'react-router-dom'
const Facilites = () => {
  return (
    <>
        <Navbarcomponent/>
        {/* rooms */}
        <div className='container my-3 shadow-lg'>
          <h1>Rooms</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis facilis obcaecati consequuntur inventore tempora quod et ab ut nisi labore asperiores dolorem, recusandae dicta illum optio quibusdam velit sed alias.</p>

      <div id="carouselExampleCaptions" className="carousel slide z-0">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={second} className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={buil2} className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={buil3} className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
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
          <h3>Double Sharing</h3>
          
        </div>
        <div className='container shadow-lg my-3'>
          <h1>Hygenic and nutritious meals</h1>
        </div>
        <div className='container shadow-lg my-3'>
            <h1>Laundry Services</h1>
        </div>

        {/* all services */}
        <div className='container shadow-lg'>
        <h1 className='text-center mb-3'>Services We Provide</h1>
        <div className='row mars'>

            <div className='col-md-4 mb-4'>
            <div className="card" style={{width: "18rem"}}>
            <img src={buil3} className="card-img-top" alt={buil3}/>
            <div className="card-body cardedit">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
            </div>

            <div className='col-md-4 mb-4'>
            <div className="card" style={{width: "18rem"}}>
            <img src={buil3} className="card-img-top" alt={buil3}/>
            <div className="card-body cardedit">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
            </div>

            <div className='col-md-4 mb-4'>
            <div className="card" style={{width: "18rem"}}>
            <img src={buil3} className="card-img-top" alt={buil3}/>
            <div className="card-body cardedit">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
            </div>

            <div className='col-md-4 mb-4'>
            <div className="card" style={{width: "18rem"}}>
            <img src={buil3} className="card-img-top" alt={buil3}/>
            <div className="card-body cardedit">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
            </div>

            <div className='col-md-4 mb-4'>
            <div className="card" style={{width: "18rem"}}>
            <img src={buil3} className="card-img-top" alt={buil3}/>
            <div className="card-body cardedit">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
            </div>

            <div className='col-md-4 mb-4'>
            <div className="card" style={{width: "18rem"}}>
            <img src={buil3} className="card-img-top" alt={buil3}/>
            <div className="card-body cardedit">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
            </div>
            
        </div>
        </div>
    </>
  )
}

export default Facilites