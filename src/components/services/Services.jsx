import React, { useState } from "react";
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
         <section className="services section" id="services">
            <h2 className = "section__title">Services</h2>
            <span className= "section__subtitle">My technical level </span>

          <div className="services__container container grid">
            <div className="services__conternt">
             <div>
                <i className="uil uil services__icon"></i>
                <h3 className="services__title"></h3>
          </div>      
          
          <span className="services__button">View More 
          <i className="uil uil-arrow-right 
          services__button-icon"></i></span>


            <div className="services__modal">
                <div className="services__modal-contact">
                    <i className="uil uil-times 
                    services__modal-close"></i>

                    <h3 className="services__modal-title"></h3>
                    <p className="services__modal-description">Have Knowledge 
                    on building projects.</p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-services">
                            <i className="uil uil-check-circle 
                            services__modal-icon"></i>
                            <p className="services__modal-info"></p>
                        </li>

                    </ul>
                </div>
            </div>          
        </div>
    </div>
    </section>
    );
};



export default Services   
