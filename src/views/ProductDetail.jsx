import { Link } from "react-router-dom";

function ProductDetail({ item }) {
  return (
    <div>
      <Link to={"/"}>
        <button className="btn-home"> Back</button>
      </Link>

      <div class="single-product-grid">
        {item.map((item, index) => {
          return (
            <div key={index} className="productdetails-grid">
              <div class="single-product-img">
                <img src={item.images[0]} alt="" class="main-img" />
              </div>
              <div class="single-product-text">
                <div class="first-text">
                  <h1>Name : {item.title}</h1>
                  <h4>Price : ${item.price}</h4>
                  <h4>In Stock : {item.stock}</h4>
                  <h4>Rating : {item.rating}</h4>
                  <h4>category : {item.category}</h4>
                </div>

                <div class="second-text">
                  <p>{item.description}</p>
                  <div class="quantity-flex">
                    <p>Quantity</p>
                    <input type="number" name="" id="quantity" value="1" />
                  </div>
                  <button class="cart-add">add to cart</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductDetail;
