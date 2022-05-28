import React from 'react'
import Navbar from '../Components/Navbar'
import ProfileHeader from '../Components/ProfileHeader'
import styles from './profile.module.css'
import Footer from '../Components/Footer'
import MainTabsPannel from '../Components/MainTabsPannel'


export default function index() {

  return (
    <div>
      <Navbar />
      <ProfileHeader />
      <div className='main_container mx-auto my-5'>
        <div className='main_container bg_Inner'>
          <MainTabsPannel />
        </div>
      </div>
      <Footer />
    </div >
  )
}