import React from "react";

export default function Footer() {
  return (
    <div className=" text-[#ffffff] w-full">
      <section className="red">
        <div className="pt-10">
          <h1 className="text-[#ffffff] font-bold text-[24px]">Nice Curves!</h1>
          <p className="invisible">
            A website is like a road. The more curves it has the more
            interesting it is.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 pl-[270px] pr-20">
            <div className="mb-5">
              <h4 className="py-2 text-xl font-bold text-[#ffffff]">Company</h4>
              A123 uttar street<br></br>
              Baridhara, Dhaka<br></br>
              Bangladesh <br></br>
              <strong>Phone:</strong>+1 232 2321 4543 <br></br>
              <strong>Email:</strong>info@example.com<br></br>
            </div>
            <div className="mb-5">
              <h4 className="py-2 text-xl font-bold">Useful links</h4>
              <ul className="text-[#ffffff]">
                <li className="pb-4">
                  <i className="fa fa.chevron.right"></i> Home
                </li>
                <li className="pb-4">
                  <i className="fa fa.chevron.right"></i>About us
                </li>
                <li className="pb-4">
                  <i className="fa fa.chevron.right"></i>Services
                </li>
                <li className="pb-4">
                  <i className="fa fa.chevron.right"></i>Terms of Services{" "}
                </li>
                <li className="pb-4">
                  <i className="fa fa.chevron.right"></i>Privacy policy
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="py-2 text-xl font-bold">Services</h4>
              <ul className="text-[#ffffff]">
                <li className="pb-4">
                  <i className="fa fa.chevron.right"></i> Ready Suits
                </li>
                <li className="pb-4">
                  <i className="fa fa.chevron.right"></i>School & College dress
                </li>
                <li className="pb-4">
                  <i className="fa fa.chevron.right"></i>Stylish or formal shirt
                </li>
                <li className="pb-4">
                  <i className="fa fa.chevron.right"></i>Marketing{" "}
                </li>
                <li className="pb-4">
                  <i className="fa fa.chevron.right"></i>Many More
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="pb-4 py-2 text-xl font-bold">
                Join our Newsletter
              </h4>
              <p className="text-[#ffffff]">
                Join our 25,000+ others and never miss out on tips,tutorials and
                more
              </p>
              <form className=" flex flex-row flex-wrap">
                <input
                  type="text"
                  className="text-[#ffffff] w-2/3 p-2 focus-border-yellow-500"
                  placeholder="email@example.com"
                ></input>
                <button className="p-2 w-1/3 bg-primary text-[#ffffff] hover:bg-yellow-600 font-extrabold">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="wave">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
      </section>
      <div className="w-full bg-gray-900 text-[#ffffff] px-10 h-10">
        <div className="max-w-7xl flex flex-col sm:row py-4 mx-auto">
          <div className="text-center">
            <a href="#" className="text-primary">
              Developed By Tasnuva
            </a>
          </div>
        </div>
      </div>
      {/* <div>
        <a
          href="#"
          className=" w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline block pt-1"
        >
          <i className="fa fa-twitter"></i>
        </a>
        <a
          href="#"
          className=" w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline block pt-1"
        >
          <i className="fa fa-instagram"></i>
        </a>
        <a
          href="#"
          className=" w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline block pt-1"
        >
          <i className="fa fa-facebook"></i>
        </a>
        <a
          href="#"
          className=" w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline block pt-1"
        >
          <i className="fa fa-skype"></i>
        </a>
        <a
          href="#"
          className=" w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline block pt-1"
        >
          <i className="fa fa-linkedin"></i>
        </a>
      </div> */}
    </div>
  );
}
