import React from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Reviews from './components/Reviews.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
    this.get = this.get.bind(this);

  }

  componentDidMount() {
    this.get()
  }

  get() {
    let id = Math.floor(Math.random() * (2000000));

    $.ajax({
      type: 'GET',
      url: '/reviews/' + id,
      success: (reviews => {
        this.setState({
          reviews: reviews
        })

      }),
      error: (err => {
        console.log('this is an src/components/index error:', err)
      })
    })

  }


  render () {
    return (
      <div>
        <h3 className="review-header">Ratings & Reviews</h3>
        <div className="review-sort-on">SORT ON</div>
        <div className="review-button-container">
          <button className="review-clicked-on">RELEVANT</button>
          <button className="review-unclicked">HELPFUL</button>
          <button className="review-unclicked">NEWEST</button>
        </div>
        <Reviews reviews={this.state.reviews} update={this.updateYesorNo}/>
        <div className="review-button-container">
          <button className="review-load-more">LOAD MORE<span className="review-arrow">&#8594;</span></button>
          <button className="review-write">WRITE A REVIEW<span className="review-arrow">&#8594;</span></button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));