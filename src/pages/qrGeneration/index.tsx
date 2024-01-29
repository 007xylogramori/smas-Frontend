import { useContext, useState, useEffect } from "react";
import { LoginContext } from "../../context/loginContext";
import QrCode from "../../components/qrCode/QrCode";
import { useNavigate } from "react-router-dom";
import { NavbarDefault } from "../../components/navbar/Navbar";

const QrGen = () => {

  const navigate = useNavigate();

  const date = new Date();
  const currentDay = String(date.getDate()).padStart(2, "0");
  const currentMonth = String(date.getMonth() + 1).padStart(2, "0");
  const currentYear = date.getFullYear();
  const currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
 

  const { userDetails } = useContext(LoginContext);


  // const [qrVisible, setQrVisible] = useState(false);
  const [hash, setHash] = useState<string>("");
  const [meal, setMeal] = useState("");
  const handleQrGenerate = async () => {
    const response = await fetch(
      import.meta.env.VITE_API_URL + "/user/generate/",
      {
        method: "GET",

        credentials: "include",
      }
    );

    const data = await response.json();

    setHash(data.hash);
    setMeal(data.meal);

    
}

useEffect(() => {
    if (Object.keys(userDetails).length == 0) {
      navigate("/login");
    }
    handleQrGenerate();
  }, []);




  return (
    <div className='w-100   bg-gray-900 min-h-[100vh]'>
       <NavbarDefault/>

       <div className='grid grid-cols-1 md:grid-cols-7  md:gap-4 lg:gap-10 py-5 justify-around items-center'>

       <section className=" col-span-1 md:col-span-2  mx-4   bg-gray-50 dark:bg-gray-900  flex font-medium flex-col">
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


       <div className='col-span-1 md:col-span-5 flex flex-col justify-center gap-4 items-center'>
       <div className="w-[100%] text-center text-yellow-500 font-bold">
              <div>Date : {currentDate}</div>
              <div>Meal : {meal.toLocaleUpperCase()}</div>
        </div>

            <div className='shadow-xl  px-4 py-4 w-[300px] h-[300px] border-gray-700 bg-gray-600 '>
            <QrCode hash={hash}  />
            </div>
       </div>
       </div>
       
    </div>
  )
}


export default QrGen;
