import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 3000,
    autoplay: true,
  };
  return (
    <div className="w-[50vw]">
      <Slider {...settings}>
        <div className="h-[600px] w-80">
          <img
            src="https://content.jdmagicbox.com/comp/ahmedabad/y1/079pxx79.xx79.130817155323.z5y1/catalogue/aroma-mens-wear-satellite-ahmedabad-tailors-2gfyny8.jpg"
            className="w-full h-full "
          />
        </div>
        <div className="h-[600px] w-80">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoivmI8oh02DuQkAOkuoWiSggcYUmV8oJiUA&usqp=CAU"
            className="h-full w-full "
          />
        </div>
        <div className="h-[600px] w-80">
          <img
            src="https://www.omnisend.com/blog/wp-content/uploads/2021/04/marketing-ideas-clothing-brands.jpg"
            className="h-full w-full "
          />
        </div>
        <div className="h-[600px] w-80">
          <img
            src="https://edit.org/photos/img/blog/v25-fashion-template-edit-shop-clothes-clothing-accessories-customizable-word-editor-banners-facebook-instagram-sell.jpg-1300.jpg"
            className="h-full w-full "
          />
        </div>
        <div className="h-[600px] w-80">
          <img
            src="https://www.shopoholicfashion.co.uk/wp-content/uploads/2018/11/womens-collection.png"
            className="h-full w-full "
          />{" "}
        </div>
        <div className="h-[600px] w-80">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5f4d6f99e8568266d26bb124/1652637937773-7SG1A5X30TYMAFAW0P0J/Modernize-9741-3.jpg?format=2500w"
            className="h-full w-full "
          />{" "}
        </div>
        <div className="h-[600px] w-80">
          <img
            src="https://dongyi.hk/wp-content/uploads/2022/11/slider-1.jpg"
            className="h-full w-full "
          />{" "}
        </div>
      </Slider>
    </div>
  );
}
