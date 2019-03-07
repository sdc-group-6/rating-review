import React from 'react'
import sampleReviews from '../sample_reviews'
import moment from 'moment'
import StarRatings from 'react-star-ratings';

const Reviews = (props) => {
  return (<div>
      {props.reviews.map(review => {
        return (
          <div>
            <div className="review-date-stars">
              <div className="review-stars">
                <StarRatings
                  rating={review.rating >5? 5:review.rating}
                  starRatedColor="black"
                  numberOfStars={5}
                  name='rating'
                  starSpacing='2px'
                  starDimension='15px'
                />
              </div>
              <div className="review-date">{moment(review.createdat).format("MMMM D, YYYY")}</div>
            </div>
            <div className="review-opinion">{review.opinion}</div>
            <div className="review-review">{review.review}</div>
            <div className="review-recommend">
              {review.rating >= 3 ? <div><span className="review-checkmark">&#10003;</span> <span>I recommend this product</span></div> : ''}
            </div>
            <div className="review-nickname-verify">
              <div className="review-nickname">{review.nickname}</div>
              <div className="review-verify">{Math.random() < 0.5? '- Verified Purchaser':''}</div>
            </div>
            <div className="review-reply-helpful">
              <span className="review-reply">Reply</span>
              <div className="review-helpful">
                <span className="review-helpful-text">Was this review helpful?</span>
                <button className={`review-boolean yes`} onClick ={props.update}><u id={review.id}>Yes</u>{review.h_yes? `(${review.h_yes})` : `(${Math.floor(Math.random()*40)})`}</button>
                <button className={`review-boolean no`}><u  id={review.id}>No</u>{review.h_no? `(${review.h_yes})` : `(${Math.floor(Math.random()*40)})`}</button>
              </div>
            </div>
          </div>
        )
      })}
  </div>)
}

export default Reviews;