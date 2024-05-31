import React, { useState } from "react";

interface DetailComponentProps {
  onClose: () => void;
}

const DetailComponent2: React.FC<DetailComponentProps> = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
  const [petName, setPetName] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [details, setDetails] = useState("");

  return (
    <div style={styles.detail}>
      <button style={styles.closeButton} onClick={onClose}>
        x
      </button>
      <h2 style={styles.title}>
        돌봄 요청 작성하기{" "}
        <span role="img" aria-label="paw">
          🐾
        </span>
      </h2>
      <form style={styles.form}>
        <label style={styles.label}>
          제목
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          날짜 선택
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          주소 입력
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          카테고리
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={styles.input}
          >
            <option value="" disabled>
              필수 선택입니다.
            </option>
            <option value="산책">산책</option>
            <option value="돌봄">돌봄</option>
            <option value="기타">기타</option>
          </select>
        </label>
        <h3 style={styles.subTitle}>반려견 정보</h3>
        <label style={styles.label}>
          이름
          <input
            type="text"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          나이
          <input
            type="text"
            value={petAge}
            onChange={(e) => setPetAge(e.target.value)}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          견종
          <input
            type="text"
            value={petBreed}
            onChange={(e) => setPetBreed(e.target.value)}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          상세 정보 입력
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            style={styles.textarea}
          />
        </label>
      </form>
    </div>
  );
};

const styles = {
  detail: {
    position: "fixed",
    height: "100%",
    width: "25%",
    backgroundColor: "#333333", // 어두운 배경색
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
