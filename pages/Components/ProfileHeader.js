import React from 'react'
import classes from '../../styles/ProfileHeader.module.css'

function ProfileHeader() {
    return (
        <div className={classes.coverContainer}>
            <img  className={classes.coverpic_container} alt="" />
            <div className={`text-white ${classes.text}`}>
                <p>Hamza</p>
            </div>
            <img src="./Profilepic2.jpg" className={`rounded-circle ${classes.profilepic_container}`} alt="" />
        </div>
    )
}

export default ProfileHeader