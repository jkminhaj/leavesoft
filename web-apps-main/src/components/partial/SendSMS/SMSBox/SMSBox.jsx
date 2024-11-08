import React from "react";

function SMSBox({ item }) {
  return (
    <div className="p-5 rounded border-gray-500 border-2 border-dotted w-full">
      <div className="flex items-start">
        <span>{item.message}</span>
      </div>
      <div className="flex items-center pt-15">
        <span className="p-1 mt-2 bg-green-700 text-white">Sent</span>
        <span className="pl-5">Send On: {item.date}</span>
      </div>
    </div>
  );
}

export default SMSBox;
