import React from "react";
import Logo from "../assets/Logo.svg"; // 올바른 경로로 수정

interface ListSidebarComponentProps {
  onCompose: () => void;
}

const ListSidebarComponent: React.FC<ListSidebarComponentProps> = ({
  onCompose,
}) => {
  return (
    <div style={styles.sidebar}>
      <img src={Logo} alt="Logo" style={styles.logo} />
      <button style={styles.composeButton} onClick={onCompose}>
        돌봄 요청 작성하기
      </button>
      <p style={styles.content}>List Sidebar Content</p>
    </div>
  );
};

const styles = {
  sidebar: {
    position: "fixed",
    height: "100%",
    width: "25%",
    backgroundColor: "white",
    left: 0,
    top: 0,
    zIndex: 20,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  logo: {
    display: "block",
    margin: "32px auto",
    marginLeft: "16px", // 이미지를 왼쪽으로 이동
    width: "50%", // 필요에 따라 크기 조정
  },
  composeButton: {
    display: "block",
    margin: "16px auto",
    backgroundColor: "#FFC1CC", // 어두운 회색 배경
    color: "white", // 흰색 텍스트
    border: "none",
    borderRadius: "8px",
    padding: "8px 16px",
    cursor: "pointer",
    width: "calc(50% * 1.7)", // 가로 길이를 현재보다 네 배 더 길게
  },
  content: {
    padding: "16px",
  },
};

export default ListSidebarComponent;
