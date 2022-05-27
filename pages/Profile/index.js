import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import SecondNav from '../Components/SecondNav'
import ProfileHeader from '../Components/ProfileHeader'
import styles from './profile.module.css'
import Footer from '../Components/Footer'
import ImagesList from '../Components/ImagesList'
import { FaRegEnvelope } from "@react-icons/all-files/fa/FaRegEnvelope";
import { FaRegUser } from "@react-icons/all-files/fa/FaRegUser";
import { FaMapMarker } from "@react-icons/all-files/fa/FaMapMarker";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaBirthdayCake } from "@react-icons/all-files/fa/FaBirthdayCake";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { FaRegStar } from "@react-icons/all-files/fa/FaRegStar";


export default function index() {
  const [about, setAbout] = useState(false)
  const [photos, setPhotos] = useState(true)
  console.log(about);

  const handleAbout = () => {
    setAbout(true)
    setPhotos(false)
  }
  const handlePhotos = () => {
    setPhotos(true)
    setAbout(false)
  }

  return (
    <div>
      <Navbar />
      <ProfileHeader />
      <div className='main_container mx-auto my-5'>
        <SecondNav handleAbout={handleAbout} handlePhotos={handlePhotos} />
        <div className='main_container bg_Inner'>
          {about ?
            <div className='container-fluid row py-5 px-3'>
              <h1 className='fw_bolder text-light m-3'>About</h1>
              <>
                <div className='text-white fw-bold p-5'>
                  <h1 className='mb-3'>Basic info</h1>
                  <h1><FaRegUser className='m-4' /> Hamza Saleem</h1>
                  <h1><FaHeart className='m-4' /> Single</h1>
                  <h1><FaBirthdayCake className='m-4' /> January 8th, 1996</h1>
                  <h1 className='mb-3'>Contact Info</h1>
                  <h1><FaRegEnvelope className='m-4' /> hamza.shaikh3533@gmail.com</h1>
                  <h1><FaHome className='m-4' /> Lahore, Pakistan</h1>
                  <h1 className='mb-3'>Overview</h1>
                  <h1><FaMapMarker className='m-4' /> Lahore, Pakistan</h1>
                  <h1><FaRegStar className='m-4' /> No life events to show</h1>
                </div>
              </>
            </div>
            :
            <div className='container-fluid row py-5 px-3'>
              <h1 className='fw_bolder text-light m-3'>Photos</h1>
              <ImagesList />
            </div>
          }
        </div>
      </div>
      <Footer />
    </div >
  )
}