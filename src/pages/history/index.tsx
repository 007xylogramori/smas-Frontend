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
                
              </div>

             

              <div className="flex  py-4 text-white flex-col justify-between px-4">
                <h2 className="font-semibold text-lg">General Information</h2>
                <p>Date of Joining : 20/2/2023</p>
                <p>Mess Hall : Floor 1</p>
                
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
