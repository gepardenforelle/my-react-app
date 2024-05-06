import React from "react";

class Product extends React.Component {

  state = {}
  render() {
    return <div className="card" styles={{ width: '18rem' }}>
      <img src={"/assets/img/" + this.props.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="/" className="btn btn-primary">Hinzufügen</a>
        </div>
    </div>

  }
}
export default Product
