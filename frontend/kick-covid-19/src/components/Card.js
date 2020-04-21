import React from "react";

const Card = () => (
  <div className="flex justify-center mt-8 mb-4 ">
    <div className="max-w-sm  rounded overflow-hidden shadow-lg">
      <img
        className="w-full h-48"
        src="data:image/jpeg;base64,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"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4 bg-white">
        <div className="font-bold text-xl mb-2 ">Our Mission</div>
        <p className="text-gray-700  text-base">
          To provide an open-source platform for anyone across the globe who is
          affected by the Covid-19 pandemic. Kick-Covid is a space to share
          experiences, contribute to and support others, and participate in
          shaping our new world.
        </p>
      </div>
    </div>
    <div className="max-w-sm rounded overflow-hidden shadow-lg ml-8">
      <img
        className="w-full h-48"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSo_oxG7rjDbroI5R6RhMkXadx6QglV5AxTZCctsMh2vVeGazv&usqp=CAU"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4 bg-white ">
        <div className="font-bold text-xl mb-2">Vision and Values</div>
        <p className="text-gray-700 text-base">
          <ul>
            <li>• Transparency</li>
            <li>• Integrity</li>
            <li>• Community</li>
            <li>• Connection</li>
            <li>• Contribution</li>
          </ul>
        </p>
      </div>
    </div>
  </div>
);

export default Card;
