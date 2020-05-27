/* eslint-disable react/display-name */
// import Head from '../components/head';
import Builder from '../components/Builder';
import { Message } from '../components/Message';
import style from './styled.module.css';
import { useState } from "react";
import { AlertContext } from "../contexts/AlertContext";

export default () => {
  
  const [alert, setAlert] = useState({});

  return(
    <div className={style.mainContent}>
      <AlertContext.Provider value={{ alert, setAlert }}>
        <Builder />
      </AlertContext.Provider>
      {
        alert.message && (
          <Message 
            alert={alert} 
            onClick={setAlert}
          />
        )
      }
    </div>
  )
};
