// import { p } from "@mui/icons-material";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Footer from "../components/Footer";
import PrimarySearchAppBar from "../components/Header";
import SingleFaq from "../components/SingleFaq";

export default function Faq({
  faqContainer = "pt-[56px] mb-[115px] w-full px-[50px] 2xl:px-0 2xl:w-[1318px] mx-auto gill-regular",
}) {
  return (
    <>
      <PrimarySearchAppBar
      // setOpenLogin={setOpenLogin}
      // setOpenRegister={setOpenRegister}
      >
        <h1 className="text-4xl font-extrabold text-primary">E-Dorji</h1>
        <div className={faqContainer}>
          <p
            // value=""
            className="text-xl md text-base:md:text-2xl xl:text-[32px] 2xl:text-[35px] text-[#333333] gill-medium mt-12 md:mt-0 "
          >
            How can we help?
          </p>
          <div className="flex items-center bg-[#FBFBFB] mt-3 md:mt-[37px] rounded-xl border border-[#E6E6E6] w-8/12 2xl:w-[650px]">
            <AiOutlineSearch className="text-[20px] text-[#999999] mx-2 my-2 ml-[15px] 2xl:text-[25px]" />

            <input
              type="text"
              className="text-[#333333] outline-none placeholder-[#B9B9B9] w-full text-sm 2xl:text-base pl-4 px-4 py-4 rounded-xl gill-regular bg-[#FBFBFB]"
              placeholder="Have a question? Enter a search term here..."
            />
          </div>

          <div className="mt-5 md:mt-[60px] grid grid-cols-2 md:flex w-full xl:justify-between flex-wrap xl:flex-nowrap gap-x-[25px] gap-y-[16px] xl:gap-y-0">
            <div className="p-8 bg-[#FBFBFB] w-full lg:w-[365px] border text-base md:text-2xl flex items-center justify-center gill-medium rounded-xl h-[175px]">
              <div className="">
                <p
                  //   value=""
                  className="text-[#333333] mt-3 whitspace-wrap text-center md:whitespace-nowrap"
                >
                  Getting Started
                </p>
              </div>
            </div>
            <div className="p-8 bg-[#FBFBFB] w-full lg:w-[365px] border text-base md:text-2xl flex items-center justify-center gill-medium rounded-xl h-[175px]">
              <div className="">
                <p
                  //   value=" "
                  className="text-[#333333] mt-3 whitspace-wrap text-center md:whitespace-nowrap"
                >
                  Knowledge Base
                </p>
              </div>
            </div>
            <div className="p-8 bg-[#FBFBFB] w-full lg:w-[365px] border text-base md:text-2xl flex items-center justify-center gill-medium rounded-xl h-[175px]">
              <div className="">
                <p className="text-[#333333] mt-3">Forum</p>
              </div>
            </div>
            <div className="p-8 bg-[#FBFBFB] w-full lg:w-[365px] border text-base md:text-2xl flex items-center justify-center gill-medium rounded-xl h-[175px]">
              <div className="">
                <p className="text-[#333333] mt-3">News</p>
              </div>
            </div>
          </div>
          <div className="mt-[42px] rounded-xl">
            <p className="text-xl xl:text-[24px] gill-medium text-[#333333] border-b pb-6">
              Frequently Asked Questions
            </p>

            <div className="w-full mt-5 grid grid-cols-1 md:grid-cols-3 gap-12 gill-regular">
              <SingleFaq
                header="Shipping"
                questions={[
                  {
                    question: "How will my prodcts be shipped to me? ",
                    answer:
                      "You have access to a recognized third-party manufacturer. the detils on shipping can be concluded with them. ",
                  },
                ]}
              />
              <SingleFaq
                header="Top questions"
                questions={[
                  {
                    question: "How can i make money from E-Dorji? ",
                    answer:
                      "There are two ways to make money from E-Dorji. Through desigining and selling your hardware design, or by manufactuting yur designs and selling them as real products.  ",
                  },
                ]}
              />
              <SingleFaq
                header="Your payout status"
                questions={[
                  {
                    question: "How will i be paid out? ",
                    answer:
                      "Your crypto wallet is connected to E-Dorji, and once you sell your product or part as an NFT, you will be paid directly to your wallet. ",
                  },
                ]}
              />
              <SingleFaq
                header="Pricing & availability"
                questions={[
                  {
                    question: "How is E-Dorji’s pricing like? ",
                    answer:
                      "Information on Pricing can be seen on the Price page. ",
                  },
                ]}
              />
              <SingleFaq
                header="Popular questions"
                questions={[
                  {
                    question:
                      "Can i use E-Dorji without any knowledg of hardware product design? ",
                    answer:
                      "Yes. The goal of E-Dorji is to bring your ideas to life in the easiest method for you.  We look to build a system where you say it, we make it, and you won’t need any idea of coding before you can design items. ",
                  },
                ]}
              />
              <SingleFaq
                header="Electronics"
                questions={[
                  {
                    question:
                      "I’m not familiar with the Electronic part. How do i go about it?",
                    answer:
                      "The Electronic, Code, and cover are for profesional hardware designers. If your aim is to input your idea and get a design made, you need not worry about those. ",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </PrimarySearchAppBar>

      <Footer />
    </>
  );
}
