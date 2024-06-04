import React from "react";
import "./Section3.css"

const Section3 = () => {
  return (
    <>
      <div className="sec1">
        <div className="textcontainer1">
          <p className="head">ADVANTAGES</p>
          <h1 className="head1">Why Choose Uifry</h1>
          {/* <div className="headlines"> */}
            <img src="/bell.png" alt="" className="bell"/>
            <span>Clever Notifications</span>
          {/* </div> */}
          <p className="desc">
          Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
          </p>
        </div>

        <div className="imagecontainer1">
          <img src="/rings.png" alt="rings" className="ringp" />
          <img src="/phone2f.png" alt="phone" className="phonef" />
        </div>
      </div>
    </>
  );
};

export default Section3;
