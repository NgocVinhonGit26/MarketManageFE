import React from 'react'
import HeaderTour from './Header'
import TopTour from './TopTour'
import Recommend from './Recommend'
import Review from './Review'
import Blog from './Blog'
import TourLayout from 'layouts/CustomerLayout/TourLayout'
const TourService = () => {
    return (
        <TourLayout>
            <div className="tour-service">
                <HeaderTour />
                <TopTour />
                <Recommend />
                <Review />
                <Blog />
            </div>
        </TourLayout>
    )
}

export default TourService