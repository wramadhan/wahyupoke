import React, { useState, useEffect } from "react";
import Card from "../component/Card";
import axios from "axios";
import { Icon } from '@iconify/react';
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/Store";

const Home = () => {
  const [datas, setDatas] = useState();
  const [page, setPage] = useState(0);
  const [status, setStatus] = useState();
  const navigate = useNavigate();
  const { dark } =
    useAppContext(useAppContext);

  useEffect(() => {
    handleGetData();
  }, [page]);

  const handleGetData = () => {
    var config = {
      method: 'get',
      url: 'https://pokeapi.co/api/v2/pokemon?offset=' + page + '&limit=20',
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
  const handleDetailPage = (item, index) => {
    navigate(`/detail/${index + page + 1}`, {
      state: {
        url: item.url,
        name: item.name
      },
    });
  }
  return (
    <div className={dark}>
      <div className="pt-[95px] duration-100 dark:bg-primary px-[50px]">
        <div className="flex justify-center flex-wrap">
          {datas ? (datas.map((item, index) => {
            return (
              <div key={index}>
                <Card klik={() => handleDetailPage(item, index)} name={item.name} id={page + 1 + index} />
              </div>)
          })) : (<p>Loading...</p>)}
        </div>
        {status ? (status.previous ? (<button className="dark:text-darkprime text-primary fixed inset-y-0 left-0 text-7xl" ><Icon onClick={() => setPage(page - 20)} icon="icon-park-outline:handle-triangle" rotate={3} /></button>) : null) : null}
        {status ? (status.next ? (<button className="dark:text-darkprime text-primary fixed inset-y-0 right-0 text-7xl" ><Icon onClick={() => setPage(page + 20)} icon="icon-park-outline:handle-triangle" rotate={1} /></button>) : null) : null}
      </div>
    </div>
  );
};

export default Home;
