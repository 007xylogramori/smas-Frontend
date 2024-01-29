import { useContext, useEffect } from "react";
import { LoginContext } from "../../context/loginContext";
import { useNavigate } from "react-router-dom";
import { NavbarDefault } from "../../components/navbar/Navbar";
const Dashboard = () => {
  const navigate = useNavigate();

  const { userDetails } = useContext(LoginContext);

  const handleQrGenerate = async () => {
    navigate("/generateQr");
  };
  const handleHistory = async () => {
    navigate("/history");
  };
  useEffect(() => {
    if (userDetails.id===-1 && userDetails.email==="" && userDetails.roll_no==="") {
      navigate("/login");
    }
    console.log(userDetails)
  }, []);

  return (
    <>
      <NavbarDefault />
      <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex font-medium items-center justify-center   ">
        <div className="w-[100%] max-w-[1200px] relative grid grid-cols-1 md:grid-cols-8  gap-4  ">
          <section className=" py-4 col-span-1 md:col-span-2 mx-4   bg-gray-50 dark:bg-gray-900  flex font-medium flex-col">
            <section className="  bg-[#1d2c3b] flex flex-col justify-center mx-4  items-center rounded-2xl  py-4 shadow-lg">
              <div className="w-40 my-4  rounded-full overflow-hidden">
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
            </section>
          </section>

          <div className="w-[100%] justify-center items-center col-span-1 md:col-span-6  flex overflow-x-auto  sm:rounded-lg">
            <div className="mx-4 max-w-[900px] flex flex-row flex-wrap  gap-4 md:gap-10 justify-center items-center py-2">
              <button
                onClick={handleQrGenerate}
                className="w-[90%] shadow-lg  hover:bg-yellow-500 duration-200 transition-all  md:w-[200px] bg-yellow-300 text-white px-2 py-8 font-bold  rounded-md "
              >
                GENERATE-QR
              </button>

              <button
                onClick={handleHistory}
                className="w-[90%] md:w-[200px] hover:bg-green-700 duration-200 transition-all bg-green-500 text-white px-2 py-8 font-bold shadow-xl rounded-md"
              >
                History
              </button>

              <button className="w-[90%] md:w-[200px]  hover:bg-red-700 duration-200 transition-all bg-red-500 text-white px-2 py-8 font-bold rounded-md">
                Announcements
              </button>
              <button className="w-[90%] md:w-[200px]  hover:bg-blue-700 duration-200 transition-all bg-blue-500 text-white px-2 py-8 font-bold rounded-md">
                Explore Menu
              </button>
              <button className="w-[90%] md:w-[200px]  hover:bg-orange-700 duration-200 transition-all bg-orange-500 text-white px-2 py-8 font-bold rounded-md">
                Report
              </button>
              <button className="w-[90%] md:w-[200px]  hover:bg-purple-700 duration-200 transition-all bg-purple-500 text-white px-2 py-8 font-bold rounded-md">
                Fee Details
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
