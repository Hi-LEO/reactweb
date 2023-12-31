import React from 'react'


function Cart(props) {
  return (
    <>
      <div className="col-md-4  mx-auto">
        <div className="card" >
          <img src={props.Img} className="imgsec" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart