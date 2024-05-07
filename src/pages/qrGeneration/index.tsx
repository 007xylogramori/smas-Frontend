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
              
            </div>

            

            <div className="flex  py-4 text-white flex-col justify-between px-4">
              <h2 className="font-semibold text-lg">General Information</h2>
              <p>Date of Joining : 20/2/2023</p>
              <p>Mess Hall : Floor 1</p>
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
