import React from 'react'
import Navbar from '../Components/Navbar'
import ProfileHeader from '../Components/ProfileHeader'
import styles from './profile.module.css'
import Footer from '../Components/Footer'
import MainTabsPannel from '../Components/MainTabsPannel'


export default function index() {
  // const [about, setAbout] = useState(false)
  // const [photos, setPhotos] = useState(true)
  // console.log(about);

  // const handleAbout = () => {
  //   setAbout(true)
  //   setPhotos(false)
  // }
  // const handlePhotos = () => {
  //   setPhotos(true)
  //   setAbout(false)
  // }

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