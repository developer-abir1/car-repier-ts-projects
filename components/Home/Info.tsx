import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Info = ({ service }: any) => {
  return (
    <div className="flex   space-x-8 bg-white items-center  h-28  z-10">
      <div className="bg-red-600 h-[100%] flex items-center w-24 justify-center rounded-tr-full">
        <FontAwesomeIcon
          icon={service.icon}
          className=" text-3xl  text-white "
        />
      </div>
      <div>
        <h1 className="text-xl font-bold">{service.title}</h1>
        <p className="text-gray-500 text-sm">{service.description}</p>
      </div>
    </div>
  );
};

export default Info;
