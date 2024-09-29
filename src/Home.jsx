import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import traveller from "../src/assets/Traveller1.png"
import backbg from "../src/assets/Decore.png"
import Card from 'react-bootstrap/Card';

import pic1 from '../src/assets/pic1.png'
import pic2 from '../src/assets/pic2.png'
import pic4 from '../src/assets/pic4.png'

import axon from '../src/assets/axon.png'
import qantas from '../src/assets/qantas.png'
import Alitalia from '../src/assets/Alitalia.png'
import expedia from '../src/assets/expedia.png'
import jetstar from '../src/assets/jetstar.png'


import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import fitaly from '../src/assets/fitaly.png'
import flondon from '../src/assets/flondon.png'
import feurope from '../src/assets/feurope.png'


const Home = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    < >
  <div id='hme' className='d-flex bg-black'>
            <div className="mt-3">
                <h4 style={{textAlign:'center'}}><span style={{margin:'20px',paddingLeft:'20px'}} className='text-danger fw-bold text-center'>BEST DESTINATIONS AROUND THE WORLD</span></h4>
                <h1 id='tvl' style={{fontSize:'80px'}} className=' fw-bold text-white sm-10'>Travel,enjoy and live a new full life</h1> 
               <div className="butt d-flex">
                            <div className="but1 " style={{marginLeft:'500px'}}>
                            <button style={{border:'none'}} className='bg-warning rounded p-3 text-white fw-bold'>Find out more</button>
                            <Button onClick={handleShow} style={{ width: '60px', height: '60px', borderRadius: '50%' }} className='p-3 rounded-circle ms-3'><i class="fa-solid fa-play fa-xl"></i></Button>
                            </div>
                            <div className="but2">
                            <p style={{marginLeft:'10px',marginTop:'20px'}} className='text-info'>Play Demo</p>
                            </div>
               </div>
            </div>
            <div id='picss'>
                <div className="girl" style={{position:'relative'}}>
                        <img style={{height:'500px',marginLeft:'-70px' }}  src={backbg} alt="" />
                        <img style={{height:'600px' ,position:'absolute', marginLeft:'-650px'}} src={traveller} alt="" />
                </div>
            </div>


    </div>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="450 " height="514" src="https://www.youtube.com/embed/ti39UJYgc5s" title="Kerala’s Most Beautiful Place | Munnar | South India | Kolukkumalai" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"  allow="autoplay;"></iframe></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Exit
          </Button>
          
        </Modal.Footer>
      </Modal>

      {/* Cards */}

      <div style={{backgroundColor:'#F7F7F7'}} className="hmemain ">
      <div className='mt-5'>
        <h5 className='text-center text-success fw-bolder'>CATEGORY</h5>
        <h1 className='text-center fw-bolder'>We offers best services</h1>
        <div style={{gap:'7rem'}} className="crds d-flex  justify-content-center mt-5 ">

          <div className="crd ">
          <Card className='rounded' style={{ width: '18rem',height:'22rem',border:'none',backgroundColor:'#F7F7F7' }}>
           <Card.Img variant="top" src={pic1} />
           <Card.Body>
          <Card.Title className='fw-bolder text-center'>Calculated weather</Card.Title>
          <Card.Text className='text-center'>
          Build Wicket longer admire do barton vanity itself do in it.
          </Card.Text>
          </Card.Body>
          </Card>
          </div>
          <div className="crd">
          <Card style={{ width: '18rem',height:'22rem',border:'none',backgroundColor:'#F7F7F7' }}>
           <Card.Img variant="top" src={pic2} />
           <Card.Body>
          <Card.Title className='fw-bolder text-center'>Best Flights</Card.Title>
          <Card.Text className='text-center -mt-6'>
          Engrossed listening.Park gate sell they west hard for the.
          </Card.Text>
          </Card.Body>
          </Card>
          </div>
          
          <div className="crd">
            <Card style={{ width: '18rem',height:'22rem',border:'none',backgroundColor:'#F7F7F7' }}>
           <Card.Img  variant="top" src={pic4}/>
           <Card.Body>
          <Card.Title className='fw-bolder text-center'>Customization</Card.Title>
          <Card.Text className='text-center'>
          We deliver outsourced aviation services fror militiary customers.
          </Card.Text>
          </Card.Body>
          </Card>
          </div>

        </div>
      </div>

      {/* Cards section 2 */}
      <div className='mt-5' style={{marginTop:'30px'}}>
        <h5 className='text-center text-success fw-bolder mt-5'>TOP SELLING</h5>
        <h1 className='text-center fw-bolder'>Top Destinations</h1>
        <div style={{gap:'5rem'}} className="cds d-flex justify-content-center mt-5" >
                <div className="ccD ">
                <Card style={{ width: '18rem',border:'none',height:'22rem',backgroundColor:'#F7F7F7'}}>
                <Card.Img  style={{height:'25rem'}} variant="top" src={fitaly} />
                </Card>
                </div>
                <div className="ccD">
                <Card style={{ width: '18rem',border:'none',backgroundColor:'#F7F7F7' }}>
                <Card.Img  style={{height:'25rem'}} variant="top" src={flondon}/>
                </Card>
                </div>
                <div className="ccD">
                <Card style={{ width: '18rem',border:'none',height:'22rem',backgroundColor:'#F7F7F7' }}>
                <Card.Img style={{height:'25rem'}} variant="top" src={feurope} />
                </Card>
                </div>

        </div>
      </div>
      </div>
      <div className="collaborating-companies-container text-center">
  <h1 className="fw-bold my-5">Companies that collaborate with us</h1>
  <div className="logos-grid">
    <div className="logo-item ">
      <img src={axon}alt="Company 1" className="company-logo" />
    </div>
    <div className="logo-item">
      <img src={qantas} alt="Company 2" className="company-logo" />
    </div>
    <div className="logo-item">
      <img src={expedia} alt="Company 3" className="company-logo" />
    </div>
    <div className="logo-item">
      <img src={jetstar} alt="Company 4" className="company-logo" />
    </div>
    <div className="logo-item">
      <img src={Alitalia} alt="Company 5" className="company-logo" />
    </div>
  </div>
</div>
<div className="subscribe-section">
  <div className="subscribe-content">
    <h2>Subscribe to get information, latest news and other interesting offers about Travel World</h2>
    <div className="subscribe-input-container">
      <input type="email" placeholder="Your email" className="subscribe-input" />
      <button className="subscribe-button">Subscribe</button>
    </div>
  </div>
  <div className="icon-container">
    <i className="fa fa-paper-plane"></i> {/* Replace with your actual icon */}
  </div>
</div>


    </>
  )
}

export default Home
