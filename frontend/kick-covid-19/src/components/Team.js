import React from "react";

const Team = () => (
  <div class="relative bg-gray-500 pt-16 pb-20 px-4 sm:px-6 lg:pt-8 lg:pb-8 lg:px-8 ">
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3"></div>
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2 class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
          Meet the Team!
        </h2>
      </div>
      <div class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
        <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0  flex justify-center ">
            <img
              class="h-48 w-48 object-cover"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQFmGLyUaXSqhQ/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=1GqiVEch4T2m5Nbk7aiGsCKBTd91A47Wz2MTKna6SiU"
              alt=""
            />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <a
                href="https://smogil12.github.io/Pet-Project/"
                target="_blank"
                class="block"
              >
                <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900 text-center">
                  Spencer Mogil
                </h3>
                <p class="mt-3 text-base leading-6 text-gray-500">
                  Spencer is a part time-developer and part time Technical
                  Account Manager at a SaaS company. In his free time he enjoys
                  watching the Jets lose, playing Call of Duty, and playing
                  around with Front-End code.
                </p>
              </a>
            </div>
          </div>
        </div>
        <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0 flex justify-center">
            <img
              class="h-48 w-48 object-cover"
              src="https://media-exp1.licdn.com/dms/image/C4E03AQG4g2hU41BXJw/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=nuM0rdllc7BLDmwvMCsYgif99M_FkkE0bWqh-Hg9waw"
              alt=""
            />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm leading-5 font-medium text-indigo-600"></p>
              <a
                href="https://smogil12.github.io/giftastic/ "
                target="_blank"
                class="block"
              >
                <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900 text-center">
                  Liz Levine
                </h3>
                <p class="mt-3 text-base leading-6 text-gray-500">
                  Liz is a Web Developer with a passion for dreaming up
                  impossible apps. She's also the managing director for a
                  corporate training & consulting company in NYC and, the proud
                  mom of an AKC Champion Basenji.
                </p>
              </a>
            </div>
          </div>
        </div>
        <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0 flex justify-center">
            <img
              class="h-48 w-48 object-cover"
              src="https://media-exp1.licdn.com/dms/image/C5603AQGXzA7967WH4w/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=yJwZBbGucPZ9Ll5iSChQ_uRXVZ-rfPGFpVT3RqDTD7I"
              alt=""
            />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <a
                href="https://expressfriendfinderspencer.herokuapp.com"
                target="_blank"
                class="block"
              >
                <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900 text-center">
                  Ben Florentino
                </h3>
                <p class="mt-3 text-base leading-6 text-gray-500">
                  Ben is a part-time Full-Stack Develper, world renowned Twitch
                  Streamer, and Coordinator for Window Treatment Installation.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Team;
