import React, {useEffect, useState} from "react";
import Card from "../ui/Card";
import MealItem from "./MealItem";
import './AvailableMeals.css';



function AvailableMeals() {

    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();
    const url = 'https://tasks-fdf69-default-rtdb.firebaseio.com/meals.json';

    useEffect(() => {

        async function fetchMeals() {
            const response = await fetch(url);

            if ( !response.ok) {
                throw new Error("Error which loading data")
            }

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

            setMeals(loadedMeals);
            setIsLoading(false);
        };

        fetchMeals().catch( (error) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, []);

    if ( isLoading ) {
        return (
        <section className="MealsLoading">
            <p>Loading...</p>
        </section>
        );
    }
    if (httpError) {
        return (
            <section className="MealsError">
                <p>{httpError}</p>
            </section>
        );
    }
    return (
        <Card className="meals">
            <ul className="meals">
                { meals.map( (meal) => (<MealItem key={meal.id}    meal={meal}/>)) }
            </ul>
        </Card>
    )
}

export default AvailableMeals;