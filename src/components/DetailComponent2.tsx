import React, { useState } from "react";

interface DetailComponentProps {
  onClose: () => void;
}

const DetailComponent2: React.FC<DetailComponentProps> = ({ onClose }) => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>돌봄 요청 상세 정보</h2>
        <span role="img" aria-label="paws">
          🐾
        </span>
      </div>
      <div style={styles.subHeader}>
        <h3>000 님의 게시글</h3>
        <span>2024.05.30 등록</span>
      </div>
      <div style={styles.title}>정왕역 예삐 산책 시켜주실 돌봐ZOOM구해요</div>
      <div style={styles.info}>
        <div style={styles.row}>
          <span>일시</span>
          <span>2024.06.01 - 2024.06.01</span>
        </div>
        <div style={styles.row}>
          <span>주소</span>
          <span>경기도 시흥시 산기대학로 237 한국공학대학교</span>
        </div>
      </div>
      <div style={styles.section}>
        <h4>반려견 정보</h4>
        <div style={styles.row}>
          <span>이름</span>
          <span>예삐</span>
        </div>
        <div style={styles.row}>
          <span>나이</span>
          <span>7살</span>
        </div>
        <div style={styles.row}>
          <span>견종</span>
          <span>말티즈</span>
        </div>
      </div>
      <div style={styles.section}>
        <h4>요청</h4>
        <div style={styles.row}>
          <span>산책하기</span>
        </div>
      </div>
      <div style={styles.section}>
        <h4>요청 사항</h4>
        <p>
          강아지가 노견이라서 천천히 산책시켜주세요. 잦은 휴식도 필요하고 낮고
          평탄한 길 위주로 산책 부탁드립니다. 실외 배변하는 아이이고 산책은 최소
          30분 최대 1시간 부탁드려요.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    height: "100%",
    width: "25%",
    backgroundColor: "white",
    color: "black",
    left: "25%",
    top: 0,
    zIndex: 20,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflowY: "auto",
    padding: "16px",
    boxSizing: "border-box",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "16px",
    marginBottom: "8px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "16px",
  },
  info: {
    marginBottom: "16px",
  },
  section: {
    marginBottom: "16px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
  },
};

export default DetailComponent2;
