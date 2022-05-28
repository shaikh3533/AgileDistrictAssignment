import React from 'react'
import classes from '../styles/Home.module.css'
import Link from "next/link"
import { useEffect, useState } from 'react'
import GetData from './api/GetData'
import CardComponent from './Components/CardComponent'
import Navbar from './Components/Navbar'
import ProfileHeader from './Components/ProfileHeader'
import { Skeleton } from '@mui/material'
import Footer from './Components/Footer'

export default function Home() {

  const [imageList, setImageList] = useState([])
  const [imageVisible, setImageVisible] = useState(6)
  const [isLoading, setIsLoading] = useState(true)

  // state = {
  //   items: Array.from({ length: 20 })
  // };
  
  // setTimeout(() => {
  //   this.setState({
  //     items: this.state.items.concat(Array.from({ length: 20 }))
  //   });
  // }, 100);

//   <InfiniteScroll
//   dataLength={this.state.items.length}
//   next={this.fetchMoreData}
//   hasMore={true}
//   loader={<h4>Loading...</h4>}
// >
//   {this.state.items.map((i, index) => (
//     <div style={style} key={index}>
//       div - #{index}
//     </div>
//   ))}
// </InfiniteScroll>


  useEffect(() => {
    GetData.ImagesData().then(res => {
      console.log({ res })
      setImageList(res.data.hits)
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 3000);
    })
    console.log(isLoading, 'dnmflk')

  }, [])
  return (
    <>
      <Navbar />
      <ProfileHeader />
      <div className='main_container mx-auto my-5 p-3 bg_Inner'>
        <div className='container w-100 d-flex my-5'>
          <h1 className='mx-auto text-light'>Images Loaded with the API from pixabay.com (website)</h1>
        </div>
        <div className='row g-5'>
          {
            imageList.slice(0, imageVisible).map(each => {
              return (
                <>
                  <div className='col-md-6'>
                    {isLoading ?
                      <div className={`${classes.card} d-flex h-100 flex-column`}>
                        <div style={{ flex: "1 1 auto" }}>
                          <div className='d-inline-flex my-3'>
                            <Skeleton variant="circular" width={60} height={60} />
                            <Skeleton variant="text" width={200} height={60} className='mx-4' />
                          </div>
                          <Skeleton variant="rectangular" style={{ width: 'fitContent', height: '350px' }} />
                          <Skeleton variant="text" style={{ width: 'fitContent' }} height={60} className='mx-4' />
                        </div>
                      </div>
                      :
                      <CardComponent each={each} />
                    }
                  </div>
                </>
              )
            })
          }
        </div>
        <div className="text-center my-5">
          {imageList.length > 3 && (
            imageVisible < imageList.length ? (
              <button className="btn bg_Insta fs-2 text-light p-2 m-3" onClick={(() => setImageVisible(imageVisible + 6))}>
                load More
              </button>
            ) : (
              <button className="btn bg_Insta fs-2 text-light p-2 m-3" onClick={(() => setImageVisible(6))}>
                Show Less
              </button>
            )
          )}
        </div>
      </div >
      <Footer />
    </>
  )
}
