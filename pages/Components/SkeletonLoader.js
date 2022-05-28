import React from 'react'
import { Skeleton } from '@mui/material'
import classes from '../../styles/Home.module.css'

function SkeletonLoader() {
    return (
        <div className='row g-5 my-3'>
            <div className='col-md-6'>
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
            </div>
            <div className='col-md-6 d-none d-md-block'>
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
            </div>
        </div>
    )
}

export default SkeletonLoader