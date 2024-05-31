import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {   
    const [toggleState, setToggleState] = useState(1);

      const toggleTab = (index) => {
        setToggleState(index);
};

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personel journey </span>
          
          <div className="qualification__container container">
            <div className="qualification__tabs">
                <div
                 className={toggleState === 1 ?
                 "qualification__button qualification__active button--flex" :
                  "qualification__button  button--flex"}
                  onClick={() => toggleTab(1)}>


                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>

                {/* <div className={toggleState === 2 ?
                 "qualification__button qualification__active button--flex" :
                  "qualification__button  button--flex"}
                  onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Experience
                </div> */}
            </div>

            <div className="qualification__sections">
                <div 
                className={toggleState === 1 ? "qualification__content qualification__content-active" :
                     "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">B.Tech</h3>
                            <span 
                            className="qualification__subtitle">Saveetha School of Egineering</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2021 - 2025
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Higher Secondary</h3>
                            <span 
                            className="qualification__subtitle">Velammal Bodhi Campus</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2021- passed out! 
                            </div>
                        </div>     
                    </div>

                    {/* <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Development</h3>
                            <span 
                            className="qualification__subtitle">spain
                            -istitute</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2021- present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">UX expert</h3>
                            <span 
                            className="qualification__subtitle">spain
                            -istitute</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2021- present
                            </div>
                        </div>     
                    </div> */}
                </div>

                <div 
                className={toggleState === 2 
                    ? "qualification__content qualification__content-active" :
                     "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Design</h3>
                            <span 
                            className="qualification__subtitle">spain
                            -istitute</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2021- present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Art director</h3>
                            <span 
                            className="qualification__subtitle">spain
                            -istitute</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2021- present
                            </div>
                        </div>     
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Development</h3>
                            <span 
                            className="qualification__subtitle">spain
                            -istitute</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2021- present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
          </div>  
        </section>
    );
};


export default Qualification 