import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

// import { baseUrl } from "./config";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div` 
.slides .slick-prev,
.slides .slick-next {
  position: absolute;
  top: 50%;
  z-index: 1;
}

.slides {
  position: relative;
}

.slides .slick-prev {
  left: 5%;
  color: blue; //effective
    font-size: 22px; //effective
}

.slides .slick-next {
  right: 5%;
}

.slick-prev:hover, .slick-prev:focus, .slick-next:hover, .slick-next:focus {
  color: yellow;
  outline: none;
  font-size: 34px; //effective
  // background: transparent;
}

.slides .slick-prev,
.slides .slick-next {
  position: absolute;
  top: 50%;
  z-index:1;
  color: blue; //effective
    font-size: 22px; //effective
}
`;


const Page = styled.div`
width: 100%; 
`;

function LazyLoad(props) {
  const { selectedCar } = props;
  // console.log("Inside LAZYLOAD - PORP VALEU SI ");
  // console.log(selectedCar);

  return (
    <React.Fragment>
      {/* <br></br><br></br>  <br></br><br></br>  <br></br><br></br>  <br></br><br></br> */}

      <div className="App-logo thumbnail">
        {/* <div> */}

        <Wrapper>
          <Slider
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            dots={true}
          // className={"slides"}

          // grid-template-columns={500}

          >
            <Page>
              <img src={selectedCar.ImageURLs[0].value} alt = "" className="image"></img>
            </Page>
            <Page>
              <img src={selectedCar.ImageURLs[1].value} alt = "" className="image"></img>
            </Page>
            <Page>
              <img src={selectedCar.ImageURLs[2].value} alt = "" className="image"></img>
            </Page>
            <Page>
              <img src={selectedCar.ImageURLs[3].value} alt = "" className="image"></img>
            </Page>
            <Page>
              <img src={selectedCar.ImageURLs[4].value} alt = "" className="image"></img>
            </Page>
          </Slider>
        </Wrapper>
        <br></br><br></br>  <br></br><br></br>  <br></br><br></br>
      </div>
    </React.Fragment>
  );
}

export default LazyLoad;
