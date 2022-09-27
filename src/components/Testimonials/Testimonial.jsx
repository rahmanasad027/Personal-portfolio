import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        'I could not be happier with my choice of using Rahman for my new ERP. He was easy to work with and helped me make a terrific software in a short amount of time. Thanks again Rahman for all your hard work I will recommend you to all my friends!',
    },
    {
      img: profilePic2,
      review:
        "Rahman has done a fantastic job for Cafe Courier. Going through a complete website overhaul can be very difficult process, however Rahman organized and disciplined approach lead our company through it easily. We had high expectations for the functionality of CafeCourier.com and they met and exceeded our expectations. We look forward to working with them in the near future on another project.Thanks Guys",
    },
    {
      img: profilePic3,
      review:
        "I am really happy with your service, it is exceptional, Rahman is just great. When I have a question he answers it at once. After having a bad experience with my old freelancer, I would say that Rahman is very professional and his knowledge is incredible, he also solve problems very fast, I am impressed. I recommend him to all my customers, friends and clients.Thank you for your patience and your great job.Anabella Vassaux (President)www.etankless.comPh: (786) 263-2108",
    },
    {
      img: profilePic4,
      review:
        "We just wanted to say that we were very impressed with the customer service, skills and dedication of Mr. Rahman.  We had our website done at another very expensive person and we were shown more attention and efficiency as we received at the other company, also for a fraction of the price.We want to thank you for your professionalism and help through the the chat line, it really helped that you were able to log into our computer and do the set up for us, once again, I highly recommend you for all website needs,Thank you,",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
