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

             
              <a target="_blank" href="https://drive.google.com/file/d/1E1lP1fuKAXD3qJ20QtZRYKytNAiPaedC/view?usp=drivesdk" className="w-[90%] md:w-[200px]  hover:bg-blue-700 duration-200 transition-all bg-blue-500 text-white px-2 py-8 font-bold rounded-md text-center">
                Explore Menu
              </a>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
