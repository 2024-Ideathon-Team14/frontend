import React, { useEffect, useRef } from "react";

const Map = () => {
  const mapRef = useRef(null);
  const lat = 37.3416; // 위도 값을 여기에 넣어주세요
  const lng = 126.7323; // 경도 값을 여기에 넣어주세요

  useEffect(() => {
    const { naver } = window;
    if (mapRef.current && naver) {
      const location = new naver.maps.LatLng(lat, lng);
      const map = new naver.maps.Map(mapRef.current, {
        center: location,
        zoom: 17, // 지도 확대 정도
      });
      new naver.maps.Marker({
        position: location,
        map,
      });
    }
  }, [lat, lng]);

  return <div ref={mapRef} style={{ width: "100%", height: "100%" }}></div>;
};

export default Map;
