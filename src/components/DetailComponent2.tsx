import React, { useState } from "react";

interface DetailComponentProps {
  onClose: () => void;
}

const DetailComponent2: React.FC<DetailComponentProps> = ({ onClose }) => {
  return <div style={styles.detail}>ㅇㄹㅎ</div>;
};

const styles = {
  detail: {
    position: "fixed",
    height: "100%",
    width: "25%",
    backgroundColor: "white", // 어두운 배경색
    color: "white", // 흰색 텍스트
    left: "25%",
    top: 0,
    zIndex: 20,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflowY: "auto",
    padding: "16px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "16px",
    color: "#5E5E5E",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "8px",
    color: "white", // 흰색 텍스트
  },
  input: {
    width: "100%",
    padding: "8px",
    margin: "4px 0",
    boxSizing: "border-box",
    borderRadius: "4px",
    border: "1px solid #ccc",
    backgroundColor: "#555555", // 어두운 입력 배경색
    color: "white", // 흰색 텍스트
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "8px",
    margin: "4px 0",
    boxSizing: "border-box",
    borderRadius: "4px",
    border: "1px solid #ccc",
    backgroundColor: "#555555", // 어두운 입력 배경색
    color: "white", // 흰색 텍스트
  },
  closeButton: {
    position: "absolute",
    top: "16px",
    right: "16px",
    backgroundColor: "white", // 흰색 배경
    color: "#333333", // 어두운 텍스트
    border: "none",
    borderRadius: "4px",
    padding: "8px 16px",
    cursor: "pointer",
  },
  subTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "16px 0 8px 0",
    color: "white", // 흰색 텍스트
  },
};

export default DetailComponent2;
