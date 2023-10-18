import { useContext, useState, useEffect } from "react";
import { LoginContext } from "../../context/loginContext";
import QrCode from "../../components/qrCode/QrCode";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();

  const date = new Date();
  const currentDay = String(date.getDate()).padStart(2, "0");
  const currentMonth = String(date.getMonth() + 1).padStart(2, "0");
  const currentYear = date.getFullYear();
  const currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
 

  const { userDetails } = useContext(LoginContext);

  const [qrVisible, setQrVisible] = useState(false);
  const [hash, setHash] = useState("");
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
    console.log(data);
    setQrVisible(true);

    setHash(data.hash);
    setMeal(data.meal);
  };
  const handleHistory = async () => {
    navigate("/history");
  };
  useEffect(() => {
    if (Object.keys(userDetails).length == 0) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 h-screen flex font-medium items-center justify-center flex-col">
        <div className="text-white font-bold text-2xl my-4">
          Central Mess IIITDMJ
        </div>

        <section className="w-64 mx-auto bg-[#1d2c3b] rounded-2xl px-8 py-4 shadow-lg">
          <div className=" flex flex-col justify-center items-center ">
            <h2 className="text-white font-bold text-2xl tracking-wide">
              {userDetails.name}
            </h2>
            <h2 className="text-white text-sm tracking-wide">
              {userDetails.email}
            </h2>
          </div>
          {qrVisible == true ? (
            <div className="w-[100%] text-center text-yellow-500 font-bold">
              <div>Date : {currentDate}</div>
              <div>Meal : {meal.toLocaleUpperCase()}</div>
            </div>
          ) : (
            ""
          )}
          <div className="mt-3 text-white flex flex-col gap-2 text-sm items-center">
            {qrVisible == true ? (
              <QrCode hash={hash}  />
            ) : (
              <button
                onClick={handleQrGenerate}
                className="w-[100%] bg-yellow-400 text-white px-2 py-2 font-bold rounded-md"
              >
                GENERATE-QR
              </button>
            )}
            <button
              onClick={handleHistory}
              className="w-[100%] bg-green-400 text-white px-2 py-2 font-bold rounded-md"
            >
              VIEW HISTORY
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default Dashboard;
