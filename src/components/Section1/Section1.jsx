import React from "react";
import "./Section1.css";

const Section1 = () => {
  return (
    <>
      <div className="sec1">
        <div className="imagecontainer1">
            <img src="/rings.png" alt="rings" className="ringp"/>
            <img src="/phonef1.png" alt="phone" className="phonef"/>
        </div>

        <div className="textcontainer1">
            <p className="head">FEATURES</p>
            <h1 className="head1">Uifry Premium</h1>
            <div className="headlines"><img src="/star.png" alt="" /><span>Budgeting Intervals</span></div>
            <p className="desc">Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
            <div className="headlines"><img src="/cube1.png" alt="" /><span>Budgeting Intervals</span></div>
            <p className="desc">Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
            <div className="headlines"><img src="/cube2.png" alt="" /><span>Budgeting Intervals</span></div>
            <p className="desc">Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
        </div>
      </div>
    </>
  );
};

export default Section1;
