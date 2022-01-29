import React from 'react'
import './Fruit.css'

export default function Fruit(props) {
    return (
      <div className="main">
        <img src={props.data.img} alt='rasm' className="rasm"/>
       
        <div className="details">
          <div className="top">
            <h2>{props.data.title}</h2>
            <button>Add</button>
          </div>
          <div className="bottom">
            <div className="data">
              <p className="title">UOM</p>
              <p className="value">{props.data.uom}</p>
            </div>
            <div className="data">
              <p className="title">Pack Size</p>
              <p className="value">{props.data.size}</p>
            </div>
            <div className="data">
              <p className="title">Per Unit</p>
              <p className="value">{props.data.unit}</p>
            </div>
            <div className="data">
              <p className="title">Total</p>
              <p className="value">{props.data.siz}</p>
            </div>
          </div>
        </div>
      </div>
    );
}
