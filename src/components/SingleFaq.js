import { Label } from "@mui/icons-material";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const SingleFaq = ({ header, questions }) => {
  return (
    <div className="h-[302px] md:h-[460px] lg:h-[400px] 2xl:h-[302px] relative">
      <p className="md:text-xl text-lg xl:text-2xl font-normal text-[#333333]  ">
        {header}
      </p>
      <hr className="my-4" />
      <div className="md:mt-2 mt-1">
        {questions?.map((qu) => (
          <div key={qu?.question}>
            <p className="text-sm xl:text-[16px] custom-line-height-28 text-[#787878] gill-heavy">
              {qu?.question}
            </p>
            <p className="text-sm xl:text-[16px]  text-[#787878]  mt-10 leading-[180%] tracking-wide	">
              {qu?.answer}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center text-primary absolute bottom-0">
        <AiOutlineArrowRight className="text-xl mr-2 gill-heavy" />
        <p className="text-base text-primary gill-regular cursor-pointer hover:underline">
          View all
        </p>
      </div>
    </div>
  );
};

export default SingleFaq;
