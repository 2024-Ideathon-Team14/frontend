import React from "react";
import Map from "../components/Map";
import "./MainPage.css"; // 스타일을 포함하는 CSS 파일을 import 합니다

const MainPage = () => {
  return (
    <div className="map-container">
      <Map />
    </div>
  );
};

export default MainPage;
