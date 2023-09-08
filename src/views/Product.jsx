import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import 'react-lazy-load-image-component/src/effects/blur.css';
function Product({ products }) {
  return (
    <div>
      <div className="products-container">
        {products.map((product) => {
          return (
            <div key={product.id} className="product-box">
              <div className="upper-part">
                <div className="image-container">
              
                  <LazyLoadImage
                    alt="LOADING"
                    height={225}
                    src={product.images[0]}
                    width={245}
                    effect="blur"
                    opacity={1.2}
                    placeholderSrc="black-and-white"
                  />
                  <span className="percentage">
                    {" "}
                    -{product.discountPercentage}%
                  </span>
                </div>
              </div>
              <h1 className="props">{product.title}</h1>
              <div className="price-discount-row">
                <div className="button">
                 
                    <Link to={`/products/${product.id}`}> <button>Buy Now </button></Link>
                  
                </div>
                <div>
                  <h5>${product.price} </h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
