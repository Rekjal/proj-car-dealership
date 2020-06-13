import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import PropTypes from "prop-types";

// import { baseUrl } from "./config";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div` 
width: 200%;
padding: 32px;
slider img{
  padding: 10%;
  width: 80%;
  vertical-align: middle;
}

.slider a{
  vertical-align: middle;
  line-height:normal;
  display: inline-block;
}

.slider div{
  height: 161px;
  line-height: 161px;
}

.slick-prev:before,
.slick-next:before {
  color: blue;
  centerMode: true
.slick-track .slick-slide {
  display: flex;
  height: auto;
  align-items: center;
  justify-content: center;
}

`;


const cssStyle = {};
const Page = styled.div`
  width: 100%;
`;

function LazyLoad(props) {
  const { selectedCar } = props;
  console.log("Inside LAZYLOAD - PORP VALEU SI ");
  console.log(selectedCar);

  return (
    <React.Fragment>
      <div className="centerScreen">
      {/* <div> */}
      <Wrapper>
        <Slider
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          grid-template-columns={500}
          infinite={false}
          dots={true}
        >
          <Page>
            <img src={selectedCar.ImageURLs[0].value} class="image"></img>
          </Page>
          <Page>
            <img src={selectedCar.ImageURLs[1].value} class="image"></img>
          </Page>
          <Page>
            <img src={selectedCar.ImageURLs[2].value} class="image"></img>
          </Page>
          <Page>
            <img src={selectedCar.ImageURLs[3].value} class="image"></img>
          </Page>
          <Page>
            <img src={selectedCar.ImageURLs[4].value} class="image"></img>
          </Page>
        </Slider>
      </Wrapper>

      </div>
    </React.Fragment>
  );
}

export default LazyLoad;
