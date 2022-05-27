import React, { useState } from 'react'
import classes from '../../styles/Home.module.css'
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { FaRegHeart } from "@react-icons/all-files/fa/FaRegHeart";
import { FaComment } from "@react-icons/all-files/fa/FaComment";
import { FaEye } from "@react-icons/all-files/fa/FaEye";

function CardComponent(props) {
    const [like, setLike] = useState(props.each.likes)

    const handleChange = () => {
        if (props.each.likes === like)
            setLike(props.each.likes + 1)
        else
            setLike(like - 1)
    }
    return (
        <div className={`${classes.card} d-flex h-100 flex-column`}>
            <div style={{ flex: "1 1 auto" }}>
                < p className='fs-1 text-light'>
                    <img src={props.each.userImageURL} className={`me-2 rounded-circle ${classes.avatar}`} alt="user" />
                    {props.each.user}</p>
                <img src={props.each.previewURL} className='w-100' alt='image' />
                <div className='d-inline-flex w-100 text-light'>
                    {props.each.likes === like ?
                        < p className='fs-1'><FaRegHeart className='mb-1' onClick={handleChange} /> {like}</p>
                        :
                        < p className='fs-1'><FaHeart className='mb-1' onClick={handleChange} /> {like}</p>
                    }
                    <p className='my-auto fs-1 ms-3'><FaComment className='mb-1' /> {props.each.comments}</p>
                    <p className='my-auto fs-1 ms-auto'><FaEye className='mb-1' /> {props.each.views}</p>
                </div>
            </div>
        </div>
    )
}

export default CardComponent