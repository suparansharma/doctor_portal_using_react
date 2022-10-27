import React from "react";
import treatment from "../../assets/images/treatment.png"

const ServiceDetails = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      
      <figure>
        <img src={treatment} className="h-70 w-50 d-inline-block max-w-sm rounded-lg shadow-2xl" alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
