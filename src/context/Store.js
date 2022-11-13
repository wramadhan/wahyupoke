import axios from "axios";
import React, { useState, useEffect, createContext, useContext } from "react";
const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  const [dark, setDark] = context.dark;
  const [datas, setDatas] = context.datas;
  const [page, setPage] = context.page;
  const [status, setStatus] = context.status;

  useEffect(() => {
    handleGetData();
  }, [page]);

  const handleGetData = () => {
    var config = {
      method: "get",
      url: "https://pokeapi.co/api/v2/pokemon?offset=" + page + "&limit=20",
    };

    axios(config)
      .then(function (response) {
        setDatas(response.data.results);
        setStatus(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleDark = () => {
    if (dark === "dark") {
      setDark("");
    }
    if (dark === "") {
      setDark("dark");
    }
  };
  return {
    handleDark,
    setPage,
    page,
    datas,
    status,
    dark,
  };
};

export const Store = ({ children }) => {
  const [dark, setDark] = useState("");
  const [datas, setDatas] = useState();
  const [page, setPage] = useState(0);
  const [status, setStatus] = useState();
  return (
    <AppContext.Provider
      value={{
        dark: [dark, setDark],
        datas: [datas, setDatas],
        page: [page, setPage],
        status: [status, setStatus],
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
