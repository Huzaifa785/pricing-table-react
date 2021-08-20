import React from "react";
import './Price.css';

export default function PriceCard(props) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">{props.data.packageName}</h5>
          <h6 className="card-price text-center">{props.data.currency}{props.data.price}<span className="period">/month</span></h6>
          <hr />
          <ul className="fa-ul">
            {
              props.data.features.map((feature) => {
                return <li className={feature.isEnabled ? "" : 'text-muted'}>
                  <span className="fa-li"><i className={`fas ${feature.isEnabled ? "fa-check" : "fa-times"}`}></i></span>
                  {feature.isBold ? <strong>{feature.featureName}</strong> : <span>{feature.featureName}</span>}
                </li>
              })
            }
          </ul>
          <div className="d-grid">
            <button onClick={() => props.handleSubscribe(props.data.packageName)} className="btn btn-primary text-uppercase">subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}