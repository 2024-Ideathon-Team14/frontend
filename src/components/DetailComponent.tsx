import React from "react";

interface DetailComponentProps {
  onClose: () => void;
}

const DetailComponent: React.FC<DetailComponentProps> = ({ onClose }) => {
  return (
    <div style={styles.detail}>
      <button style={styles.closeButton} onClick={onClose}>
        x
      </button>
      <p style={styles.content}>Detail Content</p>
    </div>
  );
};

const styles = {
  detail: {
    position: "fixed",
    height: "100%",
    width: "25%",
    backgroundColor: "yellow",
    left: "25%",
    top: 0,
    zIndex: 20,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  content: {
    padding: "16px",
  },
  closeButton: {
    position: "absolute",
    top: "16px",
    right: "16px",
    backgroundColor: "#333333", // 어두운 회색 배경
    color: "white", // 흰색 텍스트
    border: "none",
    borderRadius: "4px",
    padding: "8px 16px",
    cursor: "pointer",
  },
};

export default DetailComponent;
