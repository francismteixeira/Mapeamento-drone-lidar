import React from "react";

const CardAplicabilidade = ({ img, text }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden">
      <img src={img} alt="" className="w-full h-48 object-cover" />
      <div className="p-4 text-left">
        <div className="border-l-1 border-green-500 pl-3 text-xl text-gray-800  ">
          {text}
        </div>
      </div>
    </div>
  );
};

export default CardAplicabilidade;
