import React from 'react'
import logo from './Images/teekettextlogo.png'
import img1 from './Images/Image_one.png'
import img2 from './Images/Image_two.png'
import frame1 from './Images/Frame 159.png'
import frame2 from './Images/Frame160.png'
import frame3 from './Images/Frame161.png'
import './styles/LandingPage.css'
import {useNavigate} from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <main className="main-div w-screen h-screen flex justify-center items-center text-base text-white">
      <article className="px-8">
        <section id="logo" style={{ paddingTop: 22 }}>
          <img
            src={logo}
            alt=""
            className="d-block mx-auto my-8"
            style={{ width: '25%' }}
          />
        </section>

        <section id="images" className="grid grid-cols-5 grid-rows-2 gap-3">
          <img src={img1} alt="first" />
          <img src={frame1} alt="second" className="col-span-2" />
          <img src={frame3} alt="third" className="row-span-2 col-span-2" />
          <img src={frame2} alt="fourth" className="col-span-2" />
          <img src={img2} alt="fifth" />
        </section>

        <section id="text" className="text-center m-8">
          <p>
            Your one stop platform to create, manage and promote your events at
            your convenience.
          </p>
        </section>

        <section
          id="buttons"
          className="flex flex-col justify-center items-center"
        >
          <div className="mb-8">
            <button
              style={{ backgroundColor: '#0052F6' }}
              onClick={() => navigate('/Container')}
              type="button"
              className="btn-1 w-72 bg-primary px-8 py-4 rounded-xl"
            >
              Create an event
            </button>
          </div>
          <div>
            <button
              type="button"
              style={{ backgroundColor: '#ffffff' }}
              onClick={() => navigate('/EventListing')}
              className="btn-2 w-72 bg-white text-black px-8 py-4 rounded-xl"
            >
              Discover events
            </button>
          </div>
        </section>
      </article>
    </main>
  )
}

export default LandingPage
