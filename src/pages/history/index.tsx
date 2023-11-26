import React from "react";
import { NavbarDefault } from "../../components/navbar/Navbar";
import { useContext, useEffect } from "react";
import { LoginContext } from "../../context/loginContext";
import { useNavigate } from "react-router-dom";
const History = () => {
  const navigate = useNavigate();
  const { userDetails } = useContext(LoginContext);
  useEffect(() => {
    if (Object.keys(userDetails).length == 0) {
      navigate("/login");
    }
  }, []);

  return (
    <>

    <NavbarDefault/>


    <div className="px-6 py-10 min-h-[100vh]  min-w-[100%] flex flex-col  md:flex-row bg-gray-900 md:gap-2">
      <div className="w-[100%] relative grid grid-cols-1 md:grid-cols-8 h-[100%] gap-10 ">
        <section className=" col-span-1 md:col-span-2 mx-4   bg-gray-50 dark:bg-gray-900  flex font-medium flex-col">
          <section className=" sticky top-6 bg-[#1d2c3b] flex flex-col justify-center  items-center rounded-2xl  py-4 shadow-lg">
            <div className="w-40 my-4 h-40 rounded-full overflow-hidden">
              <img src="/assets/user.png" alt="" />
            </div>

            <div className=" flex flex-col justify-center items-center ">
              <h2 className="text-white font-bold text-2xl tracking-wide">
                {userDetails.name}
              </h2>
              <h2 className="text-white text-sm tracking-wide">
                {userDetails.email}
              </h2>
              <h2 className="flex flex-row items-center justify-center gap-2 hover:text-blue-500 text-blue-700 text-sm cursor-pointer tracking-wide">
                <span>change password </span>
                <span>
                  <svg
                    fill="#1d49c2"
                    className=""
                    height="10px"
                    width="10px"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 348.882 348.882"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path d="M333.988,11.758l-0.42-0.383C325.538,4.04,315.129,0,304.258,0c-12.187,0-23.888,5.159-32.104,14.153L116.803,184.231   c-1.416,1.55-2.49,3.379-3.154,5.37l-18.267,54.762c-2.112,6.331-1.052,13.333,2.835,18.729c3.918,5.438,10.23,8.685,16.886,8.685   c0,0,0.001,0,0.001,0c2.879,0,5.693-0.592,8.362-1.76l52.89-23.138c1.923-0.841,3.648-2.076,5.063-3.626L336.771,73.176   C352.937,55.479,351.69,27.929,333.988,11.758z M130.381,234.247l10.719-32.134l0.904-0.99l20.316,18.556l-0.904,0.99   L130.381,234.247z M314.621,52.943L182.553,197.53l-20.316-18.556L294.305,34.386c2.583-2.828,6.118-4.386,9.954-4.386   c3.365,0,6.588,1.252,9.082,3.53l0.419,0.383C319.244,38.922,319.63,47.459,314.621,52.943z" />
                      <path d="M303.85,138.388c-8.284,0-15,6.716-15,15v127.347c0,21.034-17.113,38.147-38.147,38.147H68.904   c-21.035,0-38.147-17.113-38.147-38.147V100.413c0-21.034,17.113-38.147,38.147-38.147h131.587c8.284,0,15-6.716,15-15   s-6.716-15-15-15H68.904c-37.577,0-68.147,30.571-68.147,68.147v180.321c0,37.576,30.571,68.147,68.147,68.147h181.798   c37.576,0,68.147-30.571,68.147-68.147V153.388C318.85,145.104,312.134,138.388,303.85,138.388z" />
                    </g>
                  </svg>
                </span>
              </h2>
            </div>

            <div className=" py-2 w-[100%] font-semibold justify-center flex flex-row gap-3">
              <button className="hover:bg-yellow-500 transition-all duration-100 bg-yellow-400 w-[90px] py-[2px] text-white px-4 rounded">
                REBATE
              </button>
              <button className="hover:bg-blue-500 bg-blue-400 w-[90px] py-[2px] text-white px-4 rounded">
                REPORT
              </button>
            </div>
            <div className=" py-1 font-semibold w-[100%] justify-center flex flex-row gap-3">
              <button className="hover:bg-green-700 bg-green-600 w-[90px] py-[2px] text-white px-4 rounded">
                REBATE
              </button>
              <button className="hover:bg-red-600 bg-red-500 w-[90px] py-[2px] text-white px-4 rounded">
                REPORT
              </button>
            </div>

            <div className="flex  py-4 text-white flex-col justify-between px-4">
              <h2 className="font-semibold text-lg">General Information</h2>
              <p>Date of Joining : 20/2/2023</p>
              <p>Mess Hall : Floor 1</p>
              <p>Last Payment : 20/10/2023</p>
            </div>
          </section>
        </section>

        <div className="w-[100%] col-span-1 md:col-span-6  relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="border-t w-full min-w-[100%] rounded-t-lg px-2 border-r border-l my-0 mx-0 dark:border-gray-700 flex flex-row justify-between items-center">
            <h2 className="text-white font-semibold py-2 text-lg px-2">
              HISTORY
            </h2>

            <div className="flex justify-center items-center flex-row gap-1 text-white font-semibold py-2 px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
              Month :{" "}
              <select
                className=" bg-gray-900 border border-white px-2 rounded-md"
                title="monthName"
                name="month"
                id="month"
              >
                <option value="january">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="August">August</option>
              </select>
            </div>
          </div>

          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  BREAKFAST
                </th>
                <th scope="col" className="px-6 py-3">
                  LUNCH
                </th>
                <th scope="col" className="px-6 py-3">
                  DINNER
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  27 August 2023
                </th>
                <td className="px-6 py-4 flex items-center w-[100%]  ">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#40C057" }}
                  >
                    <path d="M 3 3 L 3 21 L 21 21 L 21 13 L 21 6.4140625 L 11 16.414062 L 6.2929688 11.707031 L 7.7070312 10.292969 L 11 13.585938 L 21 3.5859375 L 21 3 L 3 3 z"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#40C057" }}
                  >
                    <path d="M 3 3 L 3 21 L 21 21 L 21 13 L 21 6.4140625 L 11 16.414062 L 6.2929688 11.707031 L 7.7070312 10.292969 L 11 13.585938 L 21 3.5859375 L 21 3 L 3 3 z"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 122.879 122.879"
                    enableBackground="new 0 0 122.879 122.879"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#FF4141"
                        d="M61.44,0c33.933,0,61.439,27.507,61.439,61.439 s-27.506,61.439-61.439,61.439C27.507,122.879,0,95.372,0,61.439S27.507,0,61.44,0L61.44,0z M73.451,39.151 c2.75-2.793,7.221-2.805,9.986-0.027c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.076,12.249 c2.729,2.77,2.689,7.257-0.08,10.022c-2.773,2.765-7.23,2.758-9.955-0.013L61.446,71.54L49.428,83.728 c-2.75,2.793-7.22,2.805-9.986,0.027c-2.763-2.776-2.776-7.293-0.027-10.084L51.48,61.434L39.403,49.185 c-2.728-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.953,0.013l11.997,12.165L73.451,39.151L73.451,39.151z"
                      />
                    </g>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    2/3
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  27 August 2023
                </th>
                <td className="px-6 py-4 flex items-center w-[100%]  ">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#40C057" }}
                  >
                    <path d="M 3 3 L 3 21 L 21 21 L 21 13 L 21 6.4140625 L 11 16.414062 L 6.2929688 11.707031 L 7.7070312 10.292969 L 11 13.585938 L 21 3.5859375 L 21 3 L 3 3 z"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#40C057" }}
                  >
                    <path d="M 3 3 L 3 21 L 21 21 L 21 13 L 21 6.4140625 L 11 16.414062 L 6.2929688 11.707031 L 7.7070312 10.292969 L 11 13.585938 L 21 3.5859375 L 21 3 L 3 3 z"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 122.879 122.879"
                    enableBackground="new 0 0 122.879 122.879"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#FF4141"
                        d="M61.44,0c33.933,0,61.439,27.507,61.439,61.439 s-27.506,61.439-61.439,61.439C27.507,122.879,0,95.372,0,61.439S27.507,0,61.44,0L61.44,0z M73.451,39.151 c2.75-2.793,7.221-2.805,9.986-0.027c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.076,12.249 c2.729,2.77,2.689,7.257-0.08,10.022c-2.773,2.765-7.23,2.758-9.955-0.013L61.446,71.54L49.428,83.728 c-2.75,2.793-7.22,2.805-9.986,0.027c-2.763-2.776-2.776-7.293-0.027-10.084L51.48,61.434L39.403,49.185 c-2.728-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.953,0.013l11.997,12.165L73.451,39.151L73.451,39.151z"
                      />
                    </g>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    2/3
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  27 August 2023
                </th>
                <td className="px-6 py-4 flex items-center w-[100%]  ">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#40C057" }}
                  >
                    <path d="M 3 3 L 3 21 L 21 21 L 21 13 L 21 6.4140625 L 11 16.414062 L 6.2929688 11.707031 L 7.7070312 10.292969 L 11 13.585938 L 21 3.5859375 L 21 3 L 3 3 z"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#40C057" }}
                  >
                    <path d="M 3 3 L 3 21 L 21 21 L 21 13 L 21 6.4140625 L 11 16.414062 L 6.2929688 11.707031 L 7.7070312 10.292969 L 11 13.585938 L 21 3.5859375 L 21 3 L 3 3 z"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 122.879 122.879"
                    enableBackground="new 0 0 122.879 122.879"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#FF4141"
                        d="M61.44,0c33.933,0,61.439,27.507,61.439,61.439 s-27.506,61.439-61.439,61.439C27.507,122.879,0,95.372,0,61.439S27.507,0,61.44,0L61.44,0z M73.451,39.151 c2.75-2.793,7.221-2.805,9.986-0.027c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.076,12.249 c2.729,2.77,2.689,7.257-0.08,10.022c-2.773,2.765-7.23,2.758-9.955-0.013L61.446,71.54L49.428,83.728 c-2.75,2.793-7.22,2.805-9.986,0.027c-2.763-2.776-2.776-7.293-0.027-10.084L51.48,61.434L39.403,49.185 c-2.728-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.953,0.013l11.997,12.165L73.451,39.151L73.451,39.151z"
                      />
                    </g>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    2/3
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  27 August 2023
                </th>
                <td className="px-6 py-4 flex items-center w-[100%]  ">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#40C057" }}
                  >
                    <path d="M 3 3 L 3 21 L 21 21 L 21 13 L 21 6.4140625 L 11 16.414062 L 6.2929688 11.707031 L 7.7070312 10.292969 L 11 13.585938 L 21 3.5859375 L 21 3 L 3 3 z"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#40C057" }}
                  >
                    <path d="M 3 3 L 3 21 L 21 21 L 21 13 L 21 6.4140625 L 11 16.414062 L 6.2929688 11.707031 L 7.7070312 10.292969 L 11 13.585938 L 21 3.5859375 L 21 3 L 3 3 z"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 122.879 122.879"
                    enableBackground="new 0 0 122.879 122.879"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#FF4141"
                        d="M61.44,0c33.933,0,61.439,27.507,61.439,61.439 s-27.506,61.439-61.439,61.439C27.507,122.879,0,95.372,0,61.439S27.507,0,61.44,0L61.44,0z M73.451,39.151 c2.75-2.793,7.221-2.805,9.986-0.027c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.076,12.249 c2.729,2.77,2.689,7.257-0.08,10.022c-2.773,2.765-7.23,2.758-9.955-0.013L61.446,71.54L49.428,83.728 c-2.75,2.793-7.22,2.805-9.986,0.027c-2.763-2.776-2.776-7.293-0.027-10.084L51.48,61.434L39.403,49.185 c-2.728-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.953,0.013l11.997,12.165L73.451,39.151L73.451,39.151z"
                      />
                    </g>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    2/3
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  27 August 2023
                </th>
                <td className="px-6 py-4 flex items-center w-[100%]  ">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#40C057" }}
                  >
                    <path d="M 3 3 L 3 21 L 21 21 L 21 13 L 21 6.4140625 L 11 16.414062 L 6.2929688 11.707031 L 7.7070312 10.292969 L 11 13.585938 L 21 3.5859375 L 21 3 L 3 3 z"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#40C057" }}
                  >
                    <path d="M 3 3 L 3 21 L 21 21 L 21 13 L 21 6.4140625 L 11 16.414062 L 6.2929688 11.707031 L 7.7070312 10.292969 L 11 13.585938 L 21 3.5859375 L 21 3 L 3 3 z"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 122.879 122.879"
                    enableBackground="new 0 0 122.879 122.879"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#FF4141"
                        d="M61.44,0c33.933,0,61.439,27.507,61.439,61.439 s-27.506,61.439-61.439,61.439C27.507,122.879,0,95.372,0,61.439S27.507,0,61.44,0L61.44,0z M73.451,39.151 c2.75-2.793,7.221-2.805,9.986-0.027c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.076,12.249 c2.729,2.77,2.689,7.257-0.08,10.022c-2.773,2.765-7.23,2.758-9.955-0.013L61.446,71.54L49.428,83.728 c-2.75,2.793-7.22,2.805-9.986,0.027c-2.763-2.776-2.776-7.293-0.027-10.084L51.48,61.434L39.403,49.185 c-2.728-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.953,0.013l11.997,12.165L73.451,39.151L73.451,39.151z"
                      />
                    </g>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    2/3
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  27 August 2023
                </th>
                <td className="px-6 py-4 flex items-center w-[100%]  ">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#40C057" }}
                  >
                    <path d="M 3 3 L 3 21 L 21 21 L 21 13 L 21 6.4140625 L 11 16.414062 L 6.2929688 11.707031 L 7.7070312 10.292969 L 11 13.585938 L 21 3.5859375 L 21 3 L 3 3 z"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#40C057" }}
                  >
                    <path d="M 3 3 L 3 21 L 21 21 L 21 13 L 21 6.4140625 L 11 16.414062 L 6.2929688 11.707031 L 7.7070312 10.292969 L 11 13.585938 L 21 3.5859375 L 21 3 L 3 3 z"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 122.879 122.879"
                    enableBackground="new 0 0 122.879 122.879"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#FF4141"
                        d="M61.44,0c33.933,0,61.439,27.507,61.439,61.439 s-27.506,61.439-61.439,61.439C27.507,122.879,0,95.372,0,61.439S27.507,0,61.44,0L61.44,0z M73.451,39.151 c2.75-2.793,7.221-2.805,9.986-0.027c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.076,12.249 c2.729,2.77,2.689,7.257-0.08,10.022c-2.773,2.765-7.23,2.758-9.955-0.013L61.446,71.54L49.428,83.728 c-2.75,2.793-7.22,2.805-9.986,0.027c-2.763-2.776-2.776-7.293-0.027-10.084L51.48,61.434L39.403,49.185 c-2.728-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.953,0.013l11.997,12.165L73.451,39.151L73.451,39.151z"
                      />
                    </g>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    2/3
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  27 August 2023
                </th>
                <td className="px-6 py-4 flex items-center w-[100%]  ">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#40C057" }}
                  >
                    <path d="M 3 3 L 3 21 L 21 21 L 21 13 L 21 6.4140625 L 11 16.414062 L 6.2929688 11.707031 L 7.7070312 10.292969 L 11 13.585938 L 21 3.5859375 L 21 3 L 3 3 z"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#40C057" }}
                  >
                    <path d="M 3 3 L 3 21 L 21 21 L 21 13 L 21 6.4140625 L 11 16.414062 L 6.2929688 11.707031 L 7.7070312 10.292969 L 11 13.585938 L 21 3.5859375 L 21 3 L 3 3 z"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 122.879 122.879"
                    enableBackground="new 0 0 122.879 122.879"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#FF4141"
                        d="M61.44,0c33.933,0,61.439,27.507,61.439,61.439 s-27.506,61.439-61.439,61.439C27.507,122.879,0,95.372,0,61.439S27.507,0,61.44,0L61.44,0z M73.451,39.151 c2.75-2.793,7.221-2.805,9.986-0.027c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.076,12.249 c2.729,2.77,2.689,7.257-0.08,10.022c-2.773,2.765-7.23,2.758-9.955-0.013L61.446,71.54L49.428,83.728 c-2.75,2.793-7.22,2.805-9.986,0.027c-2.763-2.776-2.776-7.293-0.027-10.084L51.48,61.434L39.403,49.185 c-2.728-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.953,0.013l11.997,12.165L73.451,39.151L73.451,39.151z"
                      />
                    </g>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    2/3
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  27 August 2023
                </th>
                <td className="px-6 py-4 flex items-center w-[100%]  ">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#40C057" }}
                  >
                    <path d="M 3 3 L 3 21 L 21 21 L 21 13 L 21 6.4140625 L 11 16.414062 L 6.2929688 11.707031 L 7.7070312 10.292969 L 11 13.585938 L 21 3.5859375 L 21 3 L 3 3 z"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#40C057" }}
                  >
                    <path d="M 3 3 L 3 21 L 21 21 L 21 13 L 21 6.4140625 L 11 16.414062 L 6.2929688 11.707031 L 7.7070312 10.292969 L 11 13.585938 L 21 3.5859375 L 21 3 L 3 3 z"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 122.879 122.879"
                    enableBackground="new 0 0 122.879 122.879"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#FF4141"
                        d="M61.44,0c33.933,0,61.439,27.507,61.439,61.439 s-27.506,61.439-61.439,61.439C27.507,122.879,0,95.372,0,61.439S27.507,0,61.44,0L61.44,0z M73.451,39.151 c2.75-2.793,7.221-2.805,9.986-0.027c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.076,12.249 c2.729,2.77,2.689,7.257-0.08,10.022c-2.773,2.765-7.23,2.758-9.955-0.013L61.446,71.54L49.428,83.728 c-2.75,2.793-7.22,2.805-9.986,0.027c-2.763-2.776-2.776-7.293-0.027-10.084L51.48,61.434L39.403,49.185 c-2.728-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.953,0.013l11.997,12.165L73.451,39.151L73.451,39.151z"
                      />
                    </g>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    2/3
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  27 August 2023
                </th>
                <td className="px-6 py-4 flex items-center w-[100%]  ">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#40C057" }}
                  >
                    <path d="M 3 3 L 3 21 L 21 21 L 21 13 L 21 6.4140625 L 11 16.414062 L 6.2929688 11.707031 L 7.7070312 10.292969 L 11 13.585938 L 21 3.5859375 L 21 3 L 3 3 z"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#40C057" }}
                  >
                    <path d="M 3 3 L 3 21 L 21 21 L 21 13 L 21 6.4140625 L 11 16.414062 L 6.2929688 11.707031 L 7.7070312 10.292969 L 11 13.585938 L 21 3.5859375 L 21 3 L 3 3 z"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 122.879 122.879"
                    enableBackground="new 0 0 122.879 122.879"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#FF4141"
                        d="M61.44,0c33.933,0,61.439,27.507,61.439,61.439 s-27.506,61.439-61.439,61.439C27.507,122.879,0,95.372,0,61.439S27.507,0,61.44,0L61.44,0z M73.451,39.151 c2.75-2.793,7.221-2.805,9.986-0.027c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.076,12.249 c2.729,2.77,2.689,7.257-0.08,10.022c-2.773,2.765-7.23,2.758-9.955-0.013L61.446,71.54L49.428,83.728 c-2.75,2.793-7.22,2.805-9.986,0.027c-2.763-2.776-2.776-7.293-0.027-10.084L51.48,61.434L39.403,49.185 c-2.728-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.953,0.013l11.997,12.165L73.451,39.151L73.451,39.151z"
                      />
                    </g>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    2/3
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  27 August 2023
                </th>
                <td className="px-6 py-4 flex items-center w-[100%]  ">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#40C057" }}
                  >
                    <path d="M 3 3 L 3 21 L 21 21 L 21 13 L 21 6.4140625 L 11 16.414062 L 6.2929688 11.707031 L 7.7070312 10.292969 L 11 13.585938 L 21 3.5859375 L 21 3 L 3 3 z"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#40C057" }}
                  >
                    <path d="M 3 3 L 3 21 L 21 21 L 21 13 L 21 6.4140625 L 11 16.414062 L 6.2929688 11.707031 L 7.7070312 10.292969 L 11 13.585938 L 21 3.5859375 L 21 3 L 3 3 z"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 122.879 122.879"
                    enableBackground="new 0 0 122.879 122.879"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#FF4141"
                        d="M61.44,0c33.933,0,61.439,27.507,61.439,61.439 s-27.506,61.439-61.439,61.439C27.507,122.879,0,95.372,0,61.439S27.507,0,61.44,0L61.44,0z M73.451,39.151 c2.75-2.793,7.221-2.805,9.986-0.027c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.076,12.249 c2.729,2.77,2.689,7.257-0.08,10.022c-2.773,2.765-7.23,2.758-9.955-0.013L61.446,71.54L49.428,83.728 c-2.75,2.793-7.22,2.805-9.986,0.027c-2.763-2.776-2.776-7.293-0.027-10.084L51.48,61.434L39.403,49.185 c-2.728-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.953,0.013l11.997,12.165L73.451,39.151L73.451,39.151z"
                      />
                    </g>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    2/3
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  27 August 2023
                </th>
                <td className="px-6 py-4 flex items-center w-[100%]  ">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#40C057" }}
                  >
                    <path d="M 3 3 L 3 21 L 21 21 L 21 13 L 21 6.4140625 L 11 16.414062 L 6.2929688 11.707031 L 7.7070312 10.292969 L 11 13.585938 L 21 3.5859375 L 21 3 L 3 3 z"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#40C057" }}
                  >
                    <path d="M 3 3 L 3 21 L 21 21 L 21 13 L 21 6.4140625 L 11 16.414062 L 6.2929688 11.707031 L 7.7070312 10.292969 L 11 13.585938 L 21 3.5859375 L 21 3 L 3 3 z"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 122.879 122.879"
                    enableBackground="new 0 0 122.879 122.879"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#FF4141"
                        d="M61.44,0c33.933,0,61.439,27.507,61.439,61.439 s-27.506,61.439-61.439,61.439C27.507,122.879,0,95.372,0,61.439S27.507,0,61.44,0L61.44,0z M73.451,39.151 c2.75-2.793,7.221-2.805,9.986-0.027c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.076,12.249 c2.729,2.77,2.689,7.257-0.08,10.022c-2.773,2.765-7.23,2.758-9.955-0.013L61.446,71.54L49.428,83.728 c-2.75,2.793-7.22,2.805-9.986,0.027c-2.763-2.776-2.776-7.293-0.027-10.084L51.48,61.434L39.403,49.185 c-2.728-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.953,0.013l11.997,12.165L73.451,39.151L73.451,39.151z"
                      />
                    </g>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    2/3
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  27 August 2023
                </th>
                <td className="px-6 py-4 flex items-center w-[100%]  ">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#40C057" }}
                  >
                    <path d="M 3 3 L 3 21 L 21 21 L 21 13 L 21 6.4140625 L 11 16.414062 L 6.2929688 11.707031 L 7.7070312 10.292969 L 11 13.585938 L 21 3.5859375 L 21 3 L 3 3 z"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#40C057" }}
                  >
                    <path d="M 3 3 L 3 21 L 21 21 L 21 13 L 21 6.4140625 L 11 16.414062 L 6.2929688 11.707031 L 7.7070312 10.292969 L 11 13.585938 L 21 3.5859375 L 21 3 L 3 3 z"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 122.879 122.879"
                    enableBackground="new 0 0 122.879 122.879"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#FF4141"
                        d="M61.44,0c33.933,0,61.439,27.507,61.439,61.439 s-27.506,61.439-61.439,61.439C27.507,122.879,0,95.372,0,61.439S27.507,0,61.44,0L61.44,0z M73.451,39.151 c2.75-2.793,7.221-2.805,9.986-0.027c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.076,12.249 c2.729,2.77,2.689,7.257-0.08,10.022c-2.773,2.765-7.23,2.758-9.955-0.013L61.446,71.54L49.428,83.728 c-2.75,2.793-7.22,2.805-9.986,0.027c-2.763-2.776-2.776-7.293-0.027-10.084L51.48,61.434L39.403,49.185 c-2.728-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.953,0.013l11.997,12.165L73.451,39.151L73.451,39.151z"
                      />
                    </g>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    2/3
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  27 August 2023
                </th>
                <td className="px-6 py-4 flex items-center w-[100%]  ">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#40C057" }}
                  >
                    <path d="M 3 3 L 3 21 L 21 21 L 21 13 L 21 6.4140625 L 11 16.414062 L 6.2929688 11.707031 L 7.7070312 10.292969 L 11 13.585938 L 21 3.5859375 L 21 3 L 3 3 z"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#40C057" }}
                  >
                    <path d="M 3 3 L 3 21 L 21 21 L 21 13 L 21 6.4140625 L 11 16.414062 L 6.2929688 11.707031 L 7.7070312 10.292969 L 11 13.585938 L 21 3.5859375 L 21 3 L 3 3 z"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 122.879 122.879"
                    enableBackground="new 0 0 122.879 122.879"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#FF4141"
                        d="M61.44,0c33.933,0,61.439,27.507,61.439,61.439 s-27.506,61.439-61.439,61.439C27.507,122.879,0,95.372,0,61.439S27.507,0,61.44,0L61.44,0z M73.451,39.151 c2.75-2.793,7.221-2.805,9.986-0.027c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.076,12.249 c2.729,2.77,2.689,7.257-0.08,10.022c-2.773,2.765-7.23,2.758-9.955-0.013L61.446,71.54L49.428,83.728 c-2.75,2.793-7.22,2.805-9.986,0.027c-2.763-2.776-2.776-7.293-0.027-10.084L51.48,61.434L39.403,49.185 c-2.728-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.953,0.013l11.997,12.165L73.451,39.151L73.451,39.151z"
                      />
                    </g>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    2/3
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

export default History;
