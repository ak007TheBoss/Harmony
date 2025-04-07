import React from 'react'
import verb1 from '../testimgs/verb1.jpg'
import verb2 from '../testimgs/verb2.jpg'
import verb3 from '../testimgs/verb3.jpg'
import random1 from '../testimgs/random1.jpg'
import "../css/about.css"
import Navbarcomponent from '../components/Navbarcomponent'
import { Link } from 'react-router-dom'
import Footercomponent from '../components/Footercomponent'
const Aboutpage = () => {
  return (
    <>  
    <Navbarcomponent/>  
    {/* discription */}
    <div className="container shadow-lg mb-3 p-3 rounded">
    <div className="row">
      <h1 className="container text-white fade-in">Harmony Girls Hostel,</h1>
      <div className="col-md-6">
        <p className="fade-in
        ">
          Welcome to the newly constructed Harmony Girls Hostel, a place where coziness blends with community and
          friendships flourish into everlasting bonds that go beyond the present. Situated in Gokarneshwor-8, Kathmandu
          and within walking distance to Nepal Medical College, Harmony hostel is more than just a mere accommodation;
          it’s a safe and supportive environment for every girl on her educational journey.
        </p>
        <p className="fade-in">
          Harmony is dedicated to forging a sense of belonging for each and every resident regardless of the hurdles
          that
          may be present along the path, it’s a place which the girls call their ‘second home’. No matter the trials and
          tribulations that may be faced by the residents, Harmony hostel as well as the other staff will always provide
          them with great reassurance and support. This warm sense of community nurtured by the girls on a similar
          journey
          encourages personal growth for everyone at Harmony Girls Hostel.
        </p>
        <p className="fade-in">
          Choose to enjoy the privacy of a single room or opt for a shared room with one or two other girls, Harmony
          ensures that every resident receives a masterful blend of modernity and freshness while mutual respect is
          maintained. The value of unity is reflected across every corner of Harmony Girls hostel, it’s a place uniting
          individuals from various groups and cultures and allowing them to express themselves without any limitations.
        </p>
      </div>
      <div className="col-md-6">
        <p className="fade-in">
          Explore inviting and fully furnished rooms, each featuring either an attached or non-attached bathroom. Enjoy
          the continuous accessibility to both cold and hot water, uninterrupted electricity, high-speed internet, and
          savor the well-prepared hygienic meals along with pure drinking water.
        </p>
        <p className="fade-in">
          Discover Harmony hostel, which not only provides great accommodation but also cultivates a sisterhood that
          builds genuine connections with like-minded individuals on similar journeys. Every resident's time at Harmony
          Girls Hostel will be unforgettable, distinguished by the everlasting valuable connections and the communal
          experiences. A humble invitation is extended with open arms to any girl looking to be a part of the Harmony
          Girls Hostel community not just as a resident, but as a beloved sister in the rapidly growing family.
          Regardless
          of background, culture and personal beliefs, Harmony Girls Hostel warmly welcomes all.
        </p>
      </div>
    </div>
  </div>
  
     {/* facilites carousel */}
      <div className="container shadow-lg p-3">
      <h1 className="text-white">The facilites we provide</h1>
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
                      <Link to="/facilites"> <button className='btn btn-success btn-lg'>Book Now!</button></Link>
  
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
                      <Link to="/facilites"> <button className='btn btn-success btn-lg'>Book Now!</button></Link>
  
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
                      <Link to="/facilites"> <button className='btn btn-success btn-lg'>Book Now!</button></Link>
  
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
                    <Link to="/facilites"> <button className='btn btn-success btn-lg'>Book Now!</button></Link>
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
                    <Link to="/facilites"> <button className='btn btn-success btn-lg'>Book Now!</button></Link>
  
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
                    <Link to="/facilites"> <button className='btn btn-success btn-lg'>Book Now!</button></Link>
  
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
                    <Link to="/facilites"> <button className='btn btn-success btn-lg'>Book Now!</button></Link>
  
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
                    <Link to="/facilites"> <button className='btn btn-success btn-lg'>Book Now!</button></Link>
  
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
                    <Link to="/facilites"> <button className='btn btn-success btn-lg'>Book Now!</button></Link>
  
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

    <div className='container shadow-lg p-3'>
      <div className='row'>
          <div className='col-md-6 teamimg'>
              <img src={random1} alt="" />
          </div>

          <div className='col-md-6'>
          <h3>Prabha Kuinkel</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero atque quaerat at corporis vitae rerum, quisquam enim, id velit iusto voluptas temporibus consectetur minus neque incidunt! Autem voluptate eligendi porro, placeat ipsam quisquam dolores esse officia at doloribus, quam obcaecati.</p>
          </div>
      </div>
    </div>
    {/* map */}
  <div className="container my-3 shadow-lg p-3 rounded">
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque debitis ut cumque, amet quo magnam culpa eius
      sunt, odio labore asperiores quasi illo aliquam consectetur nihil quibusdam et molestias iste!</p>
    <div className="row">
      <div className="col-md-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1233.6598731839092!2d85.3795017425705!3d27.731266318079946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b0076472793%3A0xa4168803f0804c28!2sHarmony%20Girls%20Hostel%2C%20Gokarneshor-8!5e0!3m2!1sen!2snp!4v1741072249458!5m2!1sen!2snp"
          width="600" height="450" style={{border : 0}} allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" className="map"></iframe>
      </div>
      <div className="col-md-6">
        <div className="mb-3 d-flex mx-3">
          <button className="btn btn-secondary btn-lg round"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
              fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg></button>
          <h3 className="text-white mx-3">Gokarneshwor-8, Namuna Basti,KTM </h3>
        </div>
        <div className="mb-3 d-flex mx-3">
          <button className="btn btn-secondary btn-lg round"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
              fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
            </svg></button>
          <h3 className="text-white mx-3">Contact : 9841832261,9768982324 </h3>
        </div>
        <div className="mb-3 d-flex mx-3">
          <button className="btn btn-secondary btn-lg round"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
              fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
            </svg></button>
          <h3 className="text-white mx-3">Open: Sun-Fri 10 AM-5 PM</h3>
        </div>
        <div className="mb-3 d-flex mx-3">
          <button className="btn btn-secondary btn-lg round"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
          </svg></button>
          <h3 className="text-white mx-3">girlshostelharmony@gmail.com</h3>
        </div>
      </div>
    </div>
  </div>

  {/* <Footercomponent/> */}
    </>
  )
}

export default Aboutpage