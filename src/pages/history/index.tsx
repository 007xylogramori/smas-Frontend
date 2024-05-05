import { NavbarDefault } from "../../components/navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/loginContext";
import { useNavigate } from "react-router-dom";
import Checkbox from "../../components/checkbox/Checkbox";

interface Meal {
  id: number;
  meal_date: string;
  has_breakfast: boolean;
  has_lunch: boolean;
  has_dinner: boolean;
  breakfast_time: string | null;
  lunch_time: string | null;
  dinner_time: string | null;
}

interface MealRecord {
  meal_count: {
    breakfast: number;
    lunch: number;
    dinner: number;
  };
  month: number;
  year: number;
}

const History = () => {
  const [mealsData, setMealsData] = useState<MealRecord[]>([]);
  const getdetails = async () => {
    const response = await fetch(
      import.meta.env.VITE_API_URL + "/user/meals-stats/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const data = await response.json();
    console.log(data);
    if (response.status >= 400) {
      console.log(data.detail);
    } else {
      setMealsData(data);
    }
  };

  const [mealDetails, setMealDetails] = useState<Meal[]>([]);
  const getMealsDetails = async () => {
    const response = await fetch(
      import.meta.env.VITE_API_URL + "/user/meals/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    const data = await response.json();
    setMealDetails(data);
  };

  const navigate = useNavigate();
  const { userDetails } = useContext(LoginContext);

  useEffect(() => {
    if (
      userDetails.id === -1 &&
      userDetails.email === "" &&
      userDetails.roll_no === ""
    ) {
      navigate("/login");
    }
    getMealsDetails();
    getdetails();
  }, []);

  return (
    <>
      <NavbarDefault />

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
                  MENU
                </button>
                <button className="hover:bg-red-600 bg-red-500 w-[90px] py-[2px] text-white px-4 rounded">
                  FEE
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

            <div className="mb-4 border-t w-full min-w-[100%] rounded-lg  border-r border-l my-0 mx-0 dark:border-gray-700 ">

            <div className="">
                <h2 className="text-white font-semibold py-2 text-lg px-2">
                 MEAL STATS of last 4 Months
                </h2>
              </div>

            <table className="w-full rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    YEAR
                  </th>
                  <th scope="col" className="px-6 py-3">
                    MONTH
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
                    TOTAL
                  </th>
                  
                </tr>
              </thead>
              <tbody>
                 
                   
                  
                    {
                      mealsData.map((data)=>{
                        console.log(data)
                        return (
                          <tr key={data.month}
                      
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      
                        
                      
                      <td className="px-6 py-4 flex items-center w-[100%]  ">
                      {data.year}
                      </td>
                      <td className="px-6 py-4">
                        {data.month}
                      </td>
                      <td className="px-6 py-4">
                        {data.meal_count.breakfast}
                      </td>
                      <td className="px-6 py-4">
                        {data.meal_count.lunch}
                      </td>
                      <td className="px-6 py-4">
                        {data.meal_count.dinner}
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          {
                            data.meal_count.breakfast+data.meal_count.lunch+data.meal_count.dinner
                          }
                        </a>
                      </td>
                    </tr>
                        )
                      })
                    }
                
               
              </tbody>
            </table>
            </div>

            <div>
              <div className="border-t w-full min-w-[100%] rounded-t-lg px-2 border-r border-l my-0 mx-0 dark:border-gray-700 flex flex-row justify-between items-center">
                <h2 className="text-white font-semibold py-2 text-lg px-2">
                  HISTORY
                </h2>
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
                  {mealDetails.length > 0 ? (
                    mealDetails.map((meal) => {
                      return (
                        <tr
                          key={meal.id}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {meal.meal_date}
                          </th>
                          <td className="px-6 py-4 flex items-center w-[100%]  ">
                            <Checkbox flag={meal.has_breakfast} />
                          </td>
                          <td className="px-6 py-4">
                            <Checkbox flag={meal.has_lunch} />
                          </td>
                          <td className="px-6 py-4">
                            <Checkbox flag={meal.has_dinner} />
                          </td>
                          <td className="px-6 py-4">
                            <a
                              href="#"
                              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              {Number(meal.has_breakfast ? 1 : 0) +
                                Number(meal.has_lunch ? 1 : 0) +
                                Number(meal.has_dinner ? 1 : 0)}
                              /3
                            </a>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr className="">No meal details available</tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
