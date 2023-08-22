import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import UrlArgsBundle from '../../../core/url_args_bundle';
import '../../../css/main.6120d571.css';
import './reviews.css';
import user from '../../../images/male-02.jpg';
import axios from 'axios';
import BASE_URL from '../../../BASE_URL';

function Reviews(props) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = () => {
    axios
      .get(`${BASE_URL}rider/rider/getReviews/getAll`)
      .then((res) => {
        console.log(res.data);
        setReviews(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className={'login-activity'}>
      <div className="">
        <div className="container-fluid p-5">
          <div className="page-titles">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/react/demo/table-bootstrap-basic">Vheelo</a>
              </li>
              <li className="breadcrumb-item active">
                <a href="/react/demo/table-bootstrap-basic">Reviews</a>
              </li>
            </ol>
          </div>
          <div className="row">
            {/* {reviews.map((review) => (
              <div key={review.id} className="col-md-5 mx-auto rounded bg-white mt-4">
                <div className="reviews">
                  <div className="reviews-inner p-3">
                    <div className="user_images">
                      <img src={user} width="60px" height="60px" alt="" />
                    </div>
                    <h5>
                      {review.user_first_name + ' ' + review.user_last_name}
                    </h5>
                    <p className="desc">{review.review}</p>
                    <hr />
                    <div className="row">
                      <div className="col-md-5">
                        <div className="rating">
                          <Rating text={review.rating} />
                        </div>
                      </div>
                      <div className="col-md-7 text-right">
                        <span>{review.created_at}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default  Reviews;