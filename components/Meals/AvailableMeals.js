import React, { Fragment, useState } from "react";
import MealItem from "./MealItem";
import MealNav from "./MealNav";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

const AvailableMeals = (props) => {
  const [selectedFilters, setSelectedFilters] = useState("");
  const handleFilterClick = (filter) => {
    setSelectedFilters(filter);
  };
  const filteredMenuItems = props.meals.filter((item) => {
    if (!selectedFilters) {
      return true;
    } else {
      return item.category === selectedFilters;
    }
  });

  return (
    <Fragment>
      <MealNav filter={handleFilterClick} />
      <div className=" w-[67rem] lg:mt-4 pt-[3rem]   lg:ml-[2rem] lg:pl-0 ml-[3rem] grid  md:gap-x-[3rem] md:grid-cols-4 md:grid-rows-3 md:gap-y-[5rem] md:w-[90%]  grid-cols-1 gap-y-[5rem] ">
        {filteredMenuItems.map((meal) => (
          <MealItem
            key={meal.id}
            id={meal.id}
            img={meal.image}
            gen={meal.general}
            price={meal.price}
            title={meal.title}
            category={meal.category}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default AvailableMeals;
