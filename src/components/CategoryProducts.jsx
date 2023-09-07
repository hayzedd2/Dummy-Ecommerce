import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const CategoryProducts = ({ category }) => {
  console.log(category);
  const products = category[0];
  return (
    <div>
       <div className="d-flex align-items-center gap-3">
       <Link to={'/categories'}><button className="btn-home">Back</button></Link>
        <h3 className="text-center amount">{products.length} {products[0].category} Products found</h3>
       </div>
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
                  <Link to={`/products/${product.id}`}>
                    {" "}
                    <button>Buy Now </button>
                  </Link>
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
};

export default CategoryProducts;
