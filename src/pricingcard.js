import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
function Pricingcard({data}) {
  return (
    <div className="col-lg-4">
    <div className="card mb-5 mb-lg-0">
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">{data.plan}</h5>
        <h6 className="card-price text-center">{data.currency}{data.price}<span className="period">/{data.period}</span></h6>
        <hr/>
        <ul className="fa-ul">
          {data.features.map((item)=> <li className={item.isEnable?"":"text-muted"}><span className="fa-li"><i className={item.isEnable?"fas fa-check":"fas fa-times"}></i></span>{item.title}</li> )}
          
        </ul>
        <div className="d-grid">
          <a href="#" className="btn btn-primary text-uppercase">Button</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Pricingcard;