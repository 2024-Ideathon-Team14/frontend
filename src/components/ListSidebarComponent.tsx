import React, { useState } from "react";
import Logo from "../assets/Logo.svg"; // 올바른 경로로 수정
import Icon from "../assets/Icon.svg"; // 올바른 경로로 수정
import DetailComponent from "./DetailComponent"; // DetailComponent 컴포넌트를 올바른 경로로 수정하여 임포트
import DetailComponent2 from "./DetailComponent2"; // DetailComponent2 컴포넌트를 올바른 경로로 수정하여 임포트

interface ListSidebarComponentProps {
  onCompose: () => void;
}

const ListSidebarComponent: React.FC<ListSidebarComponentProps> = ({
  onCompose,
}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDetailComponentVisible, setDetailComponentVisible] = useState(false);

  const items = [
    {
      title: "정왕역 예삐 산책 시켜주실 돌봐ZOOM 구해요",
      location: "경기도 시흥시 산기대학로 237 한국공학대학교",
      date: "2024.05.30 등록",
      details: {
        name: "예삐",
        age: "7살",
        breed: "말티즈",
        request: "산책하기",
        description:
          "강아지가 노견이라서 천천히 산책시켜주세요. 잦은 휴식도 필요하고 낮고 평탄한 길 위주로 산책 부탁드립니다. 실외 배변하는 아이이고 산책은 최소 30분 최대 1시간 부탁 드려요.",
      },
    },
    {
      title: "교대역 예삐 산책 시켜주실 돌봐ZOOM 구해요",
      location: "경기도 시흥시 산기대학로 237 한국공학대학교",
      date: "",
      details: {
        name: "예삐",
        age: "7살",
        breed: "말티즈",
        request: "산책하기",
        description:
          "강아지가 노견이라서 천천히 산책시켜주세요. 잦은 휴식도 필요하고 낮고 평탄한 길 위주로 산책 부탁드립니다. 실외 배변하는 아이이고 산책은 최소 30분 최대 1시간 부탁 드려요.",
      },
    },
    // 추가 항목들을 여기에 넣으세요
  ];

  const handleDetailClick = (item) => {
    setSelectedItem(item);
    setDetailComponentVisible(false); // DetailComponent2를 열기 위해 DetailComponent는 닫음
  };

  const handleComposeClick = () => {
    setDetailComponentVisible(true); // DetailComponent를 열기
    setSelectedItem(null); // DetailComponent2를 닫기 위해 selectedItem 초기화
  };

  return (
    <div style={styles.sidebar}>
      <img src={Logo} alt="Logo" style={styles.logo} />
      <button style={styles.composeButton} onClick={handleComposeClick}>
        돌봄 요청 작성하기 <span style={styles.arrow}>&gt;</span>
      </button>
      <div style={styles.listContainer}>
        {items.map((item, index) => (
          <div key={index} style={styles.listItem}>
            <img src={Icon} alt="Icon" style={styles.icon} />
            <div style={styles.listItemText}>
              <h3 style={styles.title}>{item.title}</h3>
              <p style={styles.location}>{item.location}</p>
              <p style={styles.date}>{item.date}</p>
              <div style={styles.links}>
                <a href="#" style={styles.link}>
                  지도로 보기
                </a>
                <a
                  href="#"
                  style={styles.link}
                  onClick={() => handleDetailClick(item)}
                >
                  상세보기
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isDetailComponentVisible && (
        <DetailComponent onClose={() => setDetailComponentVisible(false)} />
      )}
      {selectedItem && !isDetailComponentVisible && (
        <DetailComponent2
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
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
    marginLeft: "16px",
    width: "50%",
  },
  composeButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "16px auto",
    backgroundColor: "#D6CDC5",
    color: "#333333",
    border: "none",
    borderRadius: "24px",
    padding: "12px 24px",
    cursor: "pointer",
    width: "calc(100% - 32px)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    fontSize: "16px",
    fontWeight: "bold",
  },
  arrow: {
    marginLeft: "auto",
    fontSize: "20px",
  },
  listContainer: {
    padding: "16px",
    overflowY: "auto",
    height: "calc(100% - 160px)", // 버튼과 로고의 높이를 뺀 나머지 공간
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    padding: "16px",
    borderBottom: "1px solid #ddd",
  },
  icon: {
    marginRight: "16px",
    width: "40px",
    height: "40px",
  },
  listItemText: {
    flex: 1,
  },
  title: {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "0 0 8px 0",
    color: "black",
  },
  location: {
    fontSize: "14px",
    color: "#666",
    margin: "0 0 4px 0",
  },
  date: {
    fontSize: "12px",
    color: "#999",
    margin: "0 0 8px 0",
  },
  links: {
    display: "flex",
    justifyContent: "space-between",
  },
  link: {
    color: "#FF6B81",
    textDecoration: "none",
    fontSize: "14px",
  },
};

export default ListSidebarComponent;
