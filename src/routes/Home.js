import { useState, useEffect } from "react";
import styles from "./Home.module.css";

function Home({ children, setHandleFunction, handleFunction }) {
  const [showModal, setShowModal] = useState(false);
  const [showAni, setShowAni] = useState(false);

  useEffect(() => {
    console.log("A");
    const handleShowModal = () => {
      if (!showAni) {
        setShowModal(true);
        setTimeout(() => setShowAni(true), 0);
      } else {
        setShowAni(false);
        setTimeout(() => setShowModal(false), 500);
      }
    };
    setHandleFunction(() => handleShowModal);
  }, [setHandleFunction, showAni]);
  return (
    <div id={styles.container}>
      {showModal ? (
        <div className={showAni ? styles.open : styles.close} id={styles.modal}>
          <button onClick={handleFunction}>{showAni ? "Close" : "Open"}</button>
          {children}
        </div>
      ) : null}
    </div>
  );
}

export default Home;
