/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

const ProductListingPage = () => {
  const [data, setData] = useState({});
  const [filter, setFilter] = useState({});
  const [loading, setLoading] = useState({});

  let componentMound = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const responce = await fetch("https://fakestoreapi.com/products");
      if (componentMound) {
        setData(await responce.clone().json());
        setFilter(await responce.clone().json());
        setLoading(false);
      }
      return () => {
        componentMound = false;
      };

      getProducts();
    };
  }, []);
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton hieght={350} />
        </div>
        <div className="col-md-3">
          <Skeleton hieght={350} />
        </div>
        <div className="col-md-3">
          <Skeleton hieght={350} />
        </div>
        <div className="col-md-3">
          <Skeleton hieght={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updateList = data.filter((x) => x.category === cat);
    setFilter(updateList);
  };

  const showProducts = () => {
    <>
      <div className=" buttons d-flex justify-content-center mb-5 pb-5">
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => setFilter(data)}
        >
          All
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("men's clothing")}
        >
          Mens
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("women's clothing")}
        >
          Women
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct(" jewelery")}
        >
          Jewelery
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("electronics")}
        >
          Electronics
        </button>
      </div>
      {filter.map((product) => {
        return (
          <>
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center p-4" key={product.id}>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card- text lead fw-bold">${product.price}</p>
                  <NavLink
                    to={`/product/${product.id}`}
                    className="btn btn-outline-dark"
                  >
                    {" "}
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>;
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">
              {" "}
              Latest Products
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <showProducts />}
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;
