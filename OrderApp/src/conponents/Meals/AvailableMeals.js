import { useEffect, useState } from "react";
import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

// {/* 아래 더미 데이터는 firebase에서 가져오는 것으로 변경 */}
// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
  const[meals, setMeals] = useState([]);
  useEffect(()=>{
    const fetchMeals = async () => {
      const response = await fetch('https://react-orderapp-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json', {})
      const responseData = await response.json();

      const loadedMeals = [];
      for(const key in responseData){
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        })
      }
      {/* - 비동기 작업은 컴포넌트가 로딩된 후에 처음으로 시작 >> 처음에는 데이터가 없음
          >> 데이터가 있을 경우, 컴포넌트 업데이트 작업을 진행해야 함
        - 데이터가 변경 > 컴포넌트 변경되어 재평가가 필요 > state 사용 */}

      setMeals(loadedMeals);
    }
    {/* useEffcet는 클린업 함수를 동기적으로 제공해야 할 수 있으므로 promise나 await를 직접 받지 않음 >> 함수 선언 후     일부로서 실행 
        */}
    fetchMeals();
  }, [meals])
  
  

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul className={styles["meals-ul"]}>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
