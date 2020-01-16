import React from "react";
import "./Comment.scss";

const Comment = ({ className }) => {
  return (
    <div className={`comment ${className}`}>
      <div className="comment__author">
        <div className="comment__img"></div>
        <div className="comment__author-info">
          <p>13 days ago</p>
          <h3>MINKUK SEO</h3>
          <span>
            <i className="fas fa-check"></i> verified review
          </span>
        </div>
      </div>

      <div className="comment__info">
        <div className="comment__rating">
          <i className="fas fa-heart active"></i>
          <i className="fas fa-heart active"></i>
          <i className="fas fa-heart active"></i>
          <i className="fas fa-heart active"></i>
          <i className="fas fa-heart active"></i>
        </div>

        <h4>Awesome movie</h4>
        <p>
          Lorelm ipsum dolor sit amet, consectetur a'dilpiscing elit. lnteger
          volutpat enim non ante egestas veh,icu'la. Su'spendisse potenti. Fuse
          malesuada hi,ngilla lectus venenatis pomitor
        </p>

        <ul className="comment__footer">
          <li className="comment__likes">
            <i className="far fa-thumbs-up"></i> (8)
          </li>
          <li className="comment__dislikes">
            <i className="far fa-thumbs-down"></i> (0)
          </li>
          <li>report abuse</li>
        </ul>
      </div>
    </div>
  );
};

export default Comment;
