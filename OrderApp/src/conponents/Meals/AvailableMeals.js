import { useEffect, useState } from "react";
import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);

      const response = await fetch(
        "https://react-orderapp-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json",
        {}
      );

      if(!response.ok){
        throw new Error('Something went wrong!');
      }
      {/* 에러 발생시 아래 코드들은 실행되지 않고 빠져나옴 */}

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      {/* - 비동기 작업은 컴포넌트가 로딩된 후에 처음으로 시작 >> 처음에는 데이터가 없음
          >> 데이터가 있을 경우, 컴포넌트 업데이트 작업을 진행해야 함
        - 데이터가 변경 > 컴포넌트 변경되어 재평가가 필요 > state 사용 */}

      setMeals(loadedMeals);
      setIsLoading(false);

    };

    { /* useEffcet는 클린업 함수를 동기적으로 제공해야 할 수 있으므로 promise나 await를 직접 받지 않음 >> 함수 선언 후     일부로서 실행 */}
    // try{
      fetchMeals().catch((error)=>{
        setIsLoading(false);
        setHttpError(error.message);
      });
      {/* fetchMeals는 비동기 함수로 promise를 반환하지만, 에러 발생 시 promise 반환을 거부당함
          >> try/catch로 래핑할 수 없음 >> promise 내부의 오류를 핸들링하는 메서드 사용 */}
    // } catch (error) {
    //   setIsLoading(false);
    //   setHttpError(error.message);
    // }

  }, []);

  { /* 만약 state인 meals를 의존성으로 추가하면, 무한루프 발생  */ }

  if (isLoading) {
    return <section className={styles.mealsLoading}>
      <p>Loading Meals... Please wait for a seconds!</p>
    </section>
  } else if (httpError) {
    return <section className={styles.mealsError}>
      <p>{httpError}</p>
    </section>
  }

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
