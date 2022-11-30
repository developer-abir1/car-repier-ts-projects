import React, { useState } from 'react';
import data from '../utils/data';
import Info from './Info';

const ServiceInfo = () => {
  return (
    <div className="   grid grid-cols-1  md:grid-cols-3 lg:md:grid-cols-3 gap-4   container m-auto   -mt-16 ">
      {data.infoData.map((service) => (
        <Info service={service} key={service._id} />
      ))}
    </div>
  );
};

export default ServiceInfo;
