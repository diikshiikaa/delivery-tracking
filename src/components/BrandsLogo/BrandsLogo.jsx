import React from "react";

const BrandsLogo = () => {
  return (
    <>
      <div className="container mb-12 mt-12 sm:mt-0">
        <h1 className="text-center font-bold text-3xl">
          Empowering faster deliveries
        </h1>
        <div className="py-6 md:px-32 flex flex-wrap items-center justify-evenly gap-3">
          <div className="flex flex-col justify-center items-center">
            <h4 className="font-bold text-2xl">2.1 Bn+</h4>
            <p>Parcels shipped</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h4 className="font-bold text-2xl">99.5%</h4>
            <p>Population covered</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h4 className="font-bold text-2xl">30K+</h4>
            <p>Business served</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h4 className="font-bold text-2xl">18 Mn+</h4>
            <p>Square feet logistics covered</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandsLogo;
