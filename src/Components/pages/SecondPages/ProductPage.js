import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Four04 from "../Four04";

function ProductPage() {
  const [iphoneProduct, setIphoneProduct] = useState([]);

  // ///////
  const { productID } = useParams();
  console.log(productID);

  useEffect(() => {
    // fetch("http://localhost:2004/iphones")
    fetch("/iphone.json")
      .then((res) => res.json())
      .then((data) => {
        const singleProduct = data.products.filter(
          (product) => product.product_url === productID
        );
        setIphoneProduct(singleProduct);
      })
      .catch(() => console.log("error"));
  }, [productID]);

  // console.log(iphoneProduct);

  if (iphoneProduct.length) {
    return (
      <div>
        <section className="internal-wrapper">
          <div className="container">
            {/* //// */}
            {iphoneProduct?.map((productInfo) => {
              let iphoneDiv = (
                <div key={productInfo.product_id}>
                  <div className="row justify-content-center text-center">
                    <div className="col-12 mt-5 pt-5">
                      <h1 className="title-wrapper font-weight-bold">
                        {productInfo.product_name}
                      </h1>
                      <div className="brief-description">
                        {productInfo.product_brief_description}
                      </div>
                      <div className="description">
                        {productInfo.product_description}
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center text-center product-holder h-100 m-5">
                    <img src={productInfo.product_img} />
                  </div>
                </div>
              );
              return iphoneDiv;
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return <Four04 />;
  }
}

export default ProductPage;
