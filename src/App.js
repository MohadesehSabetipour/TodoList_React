import React from "react";
import styles from './App.module.css';
import Header from "./components/Header";
import Lists from "./components/Lists";

function App() {
  return (
    <div className={styles.App}>
      <Header/>
      <Lists/>
    </div>
  );
}

export default App;
