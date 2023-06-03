import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "@/components/NavBar/Nav";
import { Fragment, useState } from "react";
import Icons from "@/components/NavBar/Icons";
import Header from "@/components/Header/Header";
import AvailableMeals from "@/components/Meals/AvailableMeals";
import { MongoClient } from "mongodb";
import MyOrders from "@/components/myOrders/MyOrders";
import MobileHeader from "@/components/MobileHeader/MobileHeader";
import MobileCart from "@/components/MobileCart/MobileCart";
import { useDispatch } from "react-redux";
import { inputActions } from "@/store/input-slice";
import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });

export default function HomePage(props) {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const openModalHandler = () => {
    setOpenModal(true);
  };
  const closeModalHandler = () => {
    setOpenModal(false);
    dispatch(inputActions.onHideForm());
  };
  return (
    <Fragment>
      <Head>
        <title>Food Delivery</title>
        <meta
          name="description"
          content="Here we have all food of your choice"
        />
      </Head>
      <MobileHeader openModal={openModalHandler} />
      {openModal && <MobileCart closeModal={closeModalHandler} />}
      <div className="md:flex hidden ">
        <Nav />
        <Header />
        <MyOrders />
      </div>
      <AvailableMeals meals={props.meals} />
    </Fragment>
  );
}
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://Joseph:JS77kTkxN3xLqMRK@cluster0.vscza9l.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db("All-Meals");
  const mealsCollection = db.collection("meals");
  const finalMeals = mealsCollection.find().toArray();
  return {
    props: {
      meals: (await finalMeals).map((finalMeal) => ({
        title: finalMeal.title,
        price: finalMeal.price,
        general: finalMeal.general,
        image: finalMeal.image,
        category: finalMeal.category,
        id: finalMeal._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
