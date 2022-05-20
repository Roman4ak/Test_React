import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { imageUrl, name, count, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`http://localhost:5000/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={imageUrl} />
              </div>
              <div className="column rp">
                <h1>{name}</h1>
                <h2>
                  <a className="ui teal tag label">Count - {count}</a>
                </h2>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
