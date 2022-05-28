import React from 'react'
import classes from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import GetData from './api/GetData'
import CardComponent from './Components/CardComponent'
import Navbar from './Components/Navbar'
import ProfileHeader from './Components/ProfileHeader'
import Footer from './Components/Footer'
import InfiniteScroll from "react-infinite-scroll-component";
import { FaRegSadTear } from "@react-icons/all-files/fa/FaRegSadTear";
import SkeletonLoader from './Components/SkeletonLoader'


export default function Home() {

  const [imageList, setImageList] = useState([])
  const [imageVisible, setImageVisible] = useState(6)
  const [hasMore, sethasMore] = useState(true)
  // const [isLoading, setIsLoading] = useState(true)
  // const [items, setItems] = useState(Array.from({ length: 20 }))

  // state = {
  //   items: Array.from({ length: 20 })
  // };



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
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 3000);
  // })


  useEffect(() => {
    GetData.ImagesData().then(res => {
      console.log({ res })
      setImageList(res.data.hits)
    })

  }, [])

  const fetchMoreData = () => {
    if (imageVisible >= 20) {
      sethasMore(false);
      return;
    }

    setTimeout(() => {
      setImageVisible(imageVisible + 4)
    }, 3000)
  };
  return (
    <>
      <Navbar />
      <ProfileHeader />
      <div className='main_container mx-auto my-5 p-3 bg_Inner'>
        <div className='container w-100 d-flex my-5'>
          <h1 className='mx-auto text-light'>Images Loaded with the API from pixabay.com (website)</h1>
        </div>
        <div className='my-5'>
          <InfiniteScroll
            dataLength={imageVisible}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={
              <SkeletonLoader />
            }
            endMessage={<h1 className='text-center my-5 fw-bolder text-warning'>No more Images to Load <FaRegSadTear /></h1>}
          >


            <div className='row g-5'>
              {
                imageList.slice(0, imageVisible).map(each => {
                  return (
                    <div className='col-md-6'>
                      <CardComponent each={each} />
                    </div>
                  )
                })
              }
            </div>

          </InfiniteScroll>
        </div >
      </div >
      <Footer />
    </>
  )
}
