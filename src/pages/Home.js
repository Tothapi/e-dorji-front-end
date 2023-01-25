import React from "react";
import SimpleSlider from "../components/Carousel";
import RecipeReviewCard from "../components/CustomerCard";
import PrimarySearchAppBar from "../components/Header";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../slices/counterSlice";
import Paralax from "../components/paralax/Paralax";
import { Link } from "react-router-dom";

const bounceAnimation = keyframes`${bounce}`;
export const BouncyDiv = styled.div`
  animation: 2s ${bounceAnimation} infinite;
`;

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      {" "}
      <div className="App">
        <PrimarySearchAppBar
        // setOpenLogin={setOpenLogin}
        // setOpenRegister={setOpenRegister}
        >
          <div className="flex gap-10">
            <SimpleSlider />
            <div>
              <h1 className="font-extrabold">E-Dorji</h1>
              <p className="text-left px-5">
                <span className="italic text-primary font-extrabold">
                  E-dorji
                </span>{" "}
                is a dressmaking platform that provides customers online order
                and payment opportunities. Using this website an user can pick a
                dress and relative design. If the user don't like the existing
                designs , he/she may upload his/her own. To get measurements ,
                user has two options. If user select get sizes from home then a
                person from the tailor will come and get the measurement from
                home. A user has got two options to pay bill. He/she can user
                bkash or cash-on delivery to pay bill.
              </p>
              <p className="pt-3 text-right">
                <span className="italic text-primary font-extrabold">
                  E-dorji
                </span>{" "}
                provides you the most unique and customizable designs. Why
                not...give it a try<span className="text-primary">!!!!</span>
              </p>
              <Link to="/designs">
                <p className="text-right cursor-pointer hover:underline text-primary">
                  See our products
                </p>
              </Link>
            </div>
            {/* <div className="w-fit">
              <BouncyDiv>
                <h1 className="text-[40px] text-[#1976d2] font-bold tracking-wide capitalize pb-12">
                  BE OUR DELIGHTFUL CLIENTS
                </h1>
              </BouncyDiv>

              <div className="flex gap-10 ">
                <RecipeReviewCard text="Awesome" />
                <RecipeReviewCard
                  imagePath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFsmCq4bx3347abX-GCz6RlRHo4htH_e5cHGjK4BXG2QT8xZWMlR1hYIfM3_hzc00AIRM&usqp=CAU"
                  text="Fast & Secure"
                />
              </div>
            </div> */}
          </div>{" "}
          <div className="mx-auto">
            <BouncyDiv>
              <h1 className="text-[40px] text-[#1976d2] font-bold tracking-wide capitalize pt-5 pb-2">
                BE OUR DELIGHTFUL CLIENTS
              </h1>
            </BouncyDiv>

            {/* <div className="flex gap-10 ">
              <RecipeReviewCard text="Awesome" />
              <RecipeReviewCard
                imagePath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFsmCq4bx3347abX-GCz6RlRHo4htH_e5cHGjK4BXG2QT8xZWMlR1hYIfM3_hzc00AIRM&usqp=CAU"
                text="Fast & Secure"
              />
            </div> */}
          </div>
          <div className="w-full grid grid-cols-4 py-10 gap-4">
            <RecipeReviewCard text="Awesome" />
            <RecipeReviewCard
              imagePath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFsmCq4bx3347abX-GCz6RlRHo4htH_e5cHGjK4BXG2QT8xZWMlR1hYIfM3_hzc00AIRM&usqp=CAU"
              text="Fast & Secure"
            />
            <RecipeReviewCard imagePath="https://www.thedailystar.net/upload/gallery/image/arts/tailors.jpg" />

            <RecipeReviewCard imagePath="data:image/jpeg;base64,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" />
            <RecipeReviewCard
              imagePath="https://dongyi.hk/wp-content/uploads/2022/11/service_main_image.jpg"
              text="Best Tailor ever"
            />
            <RecipeReviewCard
              imagePath="https://www.tbsnews.net/sites/default/files/styles/infograph/public/images/2021/10/17/whatsapp_image_2021-08-25_at_6.02.15_am_1.jpeg"
              text="Got fastest delivery"
            />
          </div>
          <Paralax />
        </PrimarySearchAppBar>
        <div>
          {/* <div>
            <div>
              <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
              >
                Increment
              </button>
              <span>{count}</span>
              <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
              >
                Decrement
              </button>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
