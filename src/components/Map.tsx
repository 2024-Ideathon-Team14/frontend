import React, { useEffect, useRef, useState } from "react";

const Map = () => {
  const mapRef = useRef(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    // 더미 데이터를 사용하여 좌표 설정
    const fetchDummyCoordinates = () => {
      const dummyData = [
        {
          username: "ghdwltjq1",
          address: "안산시 어디동",
          ResPostList: {
            postId: "1",
            location_x: 126.7323, // 경도
            location_y: 37.3416, // 위도
          },
        },
        {
          username: "ghdwltjq2",
          address: "서울시 강남구",
          ResPostList: {
            postId: "2",
            location_x: 127.0276, // 경도
            location_y: 37.4979, // 위도
          },
        },
        {
          username: "ghdwltjq3",
          address: "부산시 해운대구",
          ResPostList: {
            postId: "3",
            location_x: 129.158, // 경도
            location_y: 35.1587, // 위도
          },
        },
        {
          username: "ghdwltjq4",
          address: "대구시 중구",
          ResPostList: {
            postId: "4",
            location_x: 128.5911, // 경도
            location_y: 35.8714, // 위도
          },
        },
        {
          username: "ghdwltjq5",
          address: "인천시 연수구",
          ResPostList: {
            postId: "5",
            location_x: 126.7052, // 경도
            location_y: 37.3944, // 위도
          },
        },
      ];

      const coordinates = dummyData.map((data) => ({
        lat: data.ResPostList.location_y,
        lng: data.ResPostList.location_x,
      }));

      setMarkers(coordinates);
    };

    fetchDummyCoordinates();
  }, []);

  useEffect(() => {
    const { naver } = window;
    if (mapRef.current && naver) {
      const map = new naver.maps.Map(mapRef.current, {
        center: new naver.maps.LatLng(37.5665, 126.978), // 서울 중심 좌표
        zoom: 7, // 지도 확대 정도
      });

      markers.forEach((coord) => {
        new naver.maps.Marker({
          position: new naver.maps.LatLng(coord.lat, coord.lng),
          map,
        });
      });
    }
  }, [markers]);

  return <div ref={mapRef} style={{ width: "100%", height: "100%" }}></div>;
};

export default Map;
