import { useState } from "react";
import ReviewForm from "./ReviewForm";

function Review({ review, handleDelete, handleEdit }) {
  const [viewEditForm, toggleEditForm] = useState(false);

  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };

  const { title, rating, reviewer, content, id } = review;

  return (
    <div className="Review">
      {viewEditForm ? (
        <ReviewForm
          reviewDetails={review}
          toggleView={toggleView}
          handleEdit={handleEdit}
        />
      ) : (
        <>
          <h4>
            {title} <span>{rating}</span>
          </h4>
          <h5>{reviewer}</h5>
          <p>{content}</p>
          <button onClick={() => handleDelete(id)}>delete</button>
        </>
      )}
      <button onClick={toggleView}>edit this review</button>
    </div>
  );
}

export default Review;
