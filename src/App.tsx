import React, { useState } from "react";
import MainPage from "./pages/MainPage";
import ListSidebarComponent from "./components/ListSidebarComponent";
import DetailComponent from "./components/DetailComponent";

const App: React.FC = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isDetailVisible, setDetailVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const openDetail = () => {
    setDetailVisible(true);
  };

  const closeDetail = () => {
    setDetailVisible(false);
  };

  return (
    <div style={styles.app}>
      <MainPage />
      {isSidebarVisible && <ListSidebarComponent onCompose={openDetail} />}
      {isDetailVisible && <DetailComponent onClose={closeDetail} />}
      <button
        style={{
          ...styles.button,
          left: isSidebarVisible ? "25%" : "16px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
        onClick={toggleSidebar}
      >
        {isSidebarVisible ? "<" : ">"}
      </button>
    </div>
  );
};

const styles = {
  app: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  },
  button: {
    position: "absolute",
    zIndex: 10,
    padding: "8px 16px",
    backgroundColor: "#d3d3d3", // 밝은 회색 배경
    color: "black",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    transition: "left 0.3s",
  },
};

export default App;
