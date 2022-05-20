import React from 'react'

const Rest = ({restaurents}) => {
  return (
    <div key={restaurents.id} className="card">
                <img width="254" height="160px" src={restaurents.image} />
                <div className="restaurant-details">
                    <div className="restaurant-title">{restaurents.name}</div>
                    <div className="restaurant-subtitle">{restaurents.category.join(', ')}</div>
                </div>
                <div className="restaurant-info">
                    <div className="restaurant-ratings">
                        <i className="material-icons star-icon">star</i> {restaurents.ratings}
                    </div>
                     .<div className="restaurant-delivery-timings">{restaurents.deliveryTimings} MINS</div> .
                    <div className="restaurant-cost-for-two">₹{restaurents.costForTwo} FOR TWO</div>
                </div>
                <div className="offer-banner">
                    <span className="material-icons"> local_offer </span>
                    <span className="offer-text">{restaurents.offer.join(' | ')}</span>
                </div>
            </div>
  )
}

export default Rest