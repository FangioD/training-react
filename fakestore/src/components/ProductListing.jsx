import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
function ProductListing() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => console.log("Error", error));
    dispatch(setProducts(response.data));
  };

  return (
    <div className="four wide column">
      {products.map((product) => {
        return (
          <div className="ui link cards" key={product.id}>
            <div className="card">
              <div className="image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="content">
                <div className="header">{product.title}</div>
                <div className="meta price"> € {product.price}</div>
                <div className="meta">{product.category}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductListing;
