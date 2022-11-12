import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';

const Detail = () => {
    const [dataDetail, setDataDetail] = useState();
    const location = useLocation()
    useEffect(() => {
        getDetail();
    }, []);
    const getDetail = () => {

        var config = {
            method: 'get',
            url: location.state.url,
            headers: {}
        };

        axios(config)
            .then(function (response) {
                setDataDetail(response.data);
                console.log(response.data.sprites.front_default);
            })
            .catch(function (error) {
                console.log(error);
            });

    };
    // console.log(dataDetail.sprites.front_default)
    return (
        <div className='pt-[95px] px-[25px]'>
            {/* <p onClick={() => console.log(dataDetail.sprites.front_default)}>Detail</p> */}
            {dataDetail ? (<><div className="m-[25px] w-[380px] bg-cover bg-center h-[380px] border-primary border-4 hover:rotate-6 hover:scale-95 shadow-lg shadow-tertiary/40 rounded-2xl"
                style={{
                    backgroundImage: `url("${dataDetail.sprites.front_default}")`,
                }}
            >
                <div className='w-full h-5/6 bg-primary/10'>
                </div>
                <div className="w-full rounded-b-md shadow-inner duration-300 shadow-tertiary flex flex-col justify-center bg-primary h-1/6">
                    <p className="font-bold text-secondary text-center text-2xl">Bulbasaur</p>
                </div>
            </div>
                <div>
                    <p>Stats</p>
                </div>
            </>) : null}

        </div>
    )
}

export default Detail