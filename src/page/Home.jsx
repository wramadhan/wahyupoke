import React from "react";
import Card from "../component/Card";
import { Icon } from '@iconify/react';
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/Store";

const Home = () => {
  const navigate = useNavigate();
  const { dark, datas, page, status, setPage } =
    useAppContext(useAppContext);

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
        {status ? (status.previous ? (<div className="flex flex-col justify-center dark:text-darkprime text-primary fixed inset-y-0 left-0 text-7xl" ><button className="rounded-full"><Icon className="rounded-full" onClick={() => setPage(page - 20)} icon="icon-park-outline:handle-triangle" rotate={3} /></button></div>) : null) : null}
        {status ? (status.next ? (<div className="flex flex-col justify-center dark:text-darkprime text-primary fixed inset-y-0 right-0 text-7xl" ><button className="rounded-full"><Icon onClick={() => setPage(page + 20)} icon="icon-park-outline:handle-triangle" className="rounded-full" rotate={1} /></button></div>) : null) : null}
      </div>
    </div>
  );
};

export default Home;
