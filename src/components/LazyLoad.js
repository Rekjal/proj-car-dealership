import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import PropTypes from "prop-types";

// import { baseUrl } from "./config";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  width: 250%; //less than 90 and left arrow dissapers + increased window width - best is 250
  padding: 20px; //less than 20 button dissapers
  position: relative; //absolute does crazy things
  bottom: 10px;
  left: 380px; //v g - moves coursal to right with increase in pixel (ideal 380)
  slider img { //not responsive    
    max-width: 200%; //200
    min-height: 500px; //500
    padding: 100%;
    width: 300%; //300%
    vertical-align: middle;
  }
  .slider a {
    vertical-align: middle;
    line-height: normal;
    display: inline-block;
  }
  .slider div { //not responsive    
    height: 150px;  //150
    line-height: 105px; //105
  }
  .slick-prev:before,
  .slick-next:before {
    color: blue; //effective
    font-size: 22px; //effective
  }
  .slick-track .slick-slide {
    display: flex;
    height: auto;
    align-items: center;
    justify-content: left; //effective
  }
`;

const cssStyle = {};
const Page = styled.div`
  width: 100%;
`;

function LazyLoad(props) {
  const { selectedCar } = props;
  // console.log("Inside LAZYLOAD - PORP VALEU SI ");
  // console.log(selectedCar);

  return (
    <React.Fragment>
      <div className="centerScreen wrapperNew2">
        {/* <div> */}
        <Wrapper>
          <Slider
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            // grid-template-columns={500}
            infinite={true}
            dots={true}
          >
            <Page>
              <img src={selectedCar.ImageURLs[0].value} className="image"></img>
            </Page>
            <Page>
              <img src={selectedCar.ImageURLs[1].value} className="image"></img>
            </Page>
            <Page>
              <img src={selectedCar.ImageURLs[2].value} className="image"></img>
            </Page>
            <Page>
              <img src={selectedCar.ImageURLs[3].value} className="image"></img>
            </Page>
            <Page>
              <img src={selectedCar.ImageURLs[4].value} className="image"></img>
            </Page>
          </Slider>
        </Wrapper>
      </div>
    </React.Fragment>
  );
}

export default LazyLoad;
