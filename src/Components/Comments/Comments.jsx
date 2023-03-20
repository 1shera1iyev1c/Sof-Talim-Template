import React from "react";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import './Comments.scss'
import rasm1 from '../../assets/Image/comment.svg'
import rasm2 from '../../assets/Image/retweetgreen.svg'
import rasm3 from '../../assets/Image/likered.svg'
import rasm4 from '../../assets/Image/statistics.svg'
import rasm5 from '../../assets/Image/share.png'

export const Comments = () => {
  const [comment, setComment] = React.useState({
    loading: true,
    error: false,
    comment: [],
  });

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) =>
        setComment({
          ...comment,
          comment: data,
          loading: false,
        })
      )
      .catch((err) =>
        setComment({
          ...comment,
          error: err,
          loading: false,
        })
      );
  }, []);

  return ( 
    <div className="container">
      <h1 className="text-center mb-5">Comments</h1>
      {comment.loading && <Loading />}
      {comment.error && <Error />}

      {comment.comment.length > 0 && (
        <ul className="intro__content4">
          {comment.comment.map((com) => (
            <li key={com.id} className="intro__box">
              <h3 className="intro__title3">{com.name}</h3>
              <p className="intro__text4">{com.body}</p>
              <ul className="intro__list3">
                <li className="intro__item3">
                  <img
                    src={rasm1}
                    alt="comment"
                    width="24"
                    height="24"
                  />
                  <p className="text-dark mt-3">10</p>
                </li>
                <li className="intro__item3">
                  <img
                    src={rasm2}
                    alt="retweet"
                    width="24"
                    height="24"
                  />
                  <p className="text-success mt-3">1</p>
                </li>
                <li className="intro__item3">
                  <img
                    src={rasm3}
                    alt="like"
                    width="24"
                    height="24"
                  />
                  <p className="text-danger mt-3">8</p>
                </li>
                <li className="intro__item3">
                  <img src={rasm5} alt="share" width="24" height="24" />
                </li>
                <li className="intro__item3">
                  <img
                    src={rasm4}
                    alt="comment"
                    width="24"
                    height="24"
                  />
                </li>
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
