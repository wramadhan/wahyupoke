import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { useAppContext } from "../context/Store";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

const Detail = () => {
    const [dataDetail, setDataDetail] = useState();
    const location = useLocation();
    const { dark } =
        useAppContext(useAppContext);

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
                console.log(response.data.types);
            })
            .catch(function (error) {
                console.log(error);
            });

    };
    return (
        <div className={dark}>
            <div className='pt-[95px] duration-200 pb-[20px] h-full px-[60px] dark:bg-primary'>
                <Link to="/"><button><h1 className={`mb-2 flex dark:text-darkprime text-primary`}><Icon icon="clarity:home-solid" className='text-5xl' />&nbsp;<span className='text-xl font-bold flex flex-col justify-center'>Back to Home</span></h1></button></Link>
                {dataDetail ? (<div>
                    <div className='lg:flex justify-between'>
                        <div className='lgmax:flex lgmax:mb-6 justify-center'>
                            <div className="w-[380px] bg-cover bg-center h-[380px] dark:border-darkprime border-primary border-4 shadow-lg shadow-tertiary/40 rounded-2xl"
                                style={{
                                    backgroundImage: `url("${dataDetail.sprites.front_default}")`,
                                }}
                            >
                                <div className='w-full h-[327px] bg-primary/10'>
                                </div>
                                <div className="w-full dark:bg-[#ababab] rounded-b-xl shadow-inner duration-200 shadow-tertiary flex flex-col justify-center bg-primary h-[45px]">
                                    <p className="font-bold text-secondary dark:text-primary text-center text-2xl">{location.state.name}</p>
                                </div>
                            </div>
                        </div>
                        {/* Stats Start */}
                        <div className='border-4 h-[381px] dark:border-darkprime border-primary rounded-2xl lgmax:w-full w-[724px] shadow-lg shadow-tertiary/40'>
                            <h1 className='w-full bg-primary dark:bg-darkprime rounded-t-md h-50 dark:text-primary text-center text-secondary font-bold text-[30px] shadow-inner shadow-tertiary text-2xl py-1'>Stats</h1>
                            <div className='overflow-y-auto h-[330px] rounded-b-xl bg-primary/10'>
                                {dataDetail.stats.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <div className='smmax:my-4 px-[15px]'>
                                                <div className='flex justify-between px-[1px]'>
                                                    <h1 className='smmlmax:text-base font-bold text-primary dark:text-darkprime text-[25px]'>{item.stat.name}</h1>
                                                    <h1 className='dark:text-darkprime font-bold text-primary smmlmax:text-base text-[25px]'>{item.base_stat}/200</h1>
                                                </div>
                                                <div className='dark:border-darkprime w-full rounded-full border-2 border-primary h-[16px]'>
                                                    <div className='w-full shadow-inner dark:bg-darkprime shadow-tertiary rounded-full bg-primary h-full' style={{ "width": item.base_stat / 2 + "%" }}>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)
                                })}
                            </div>
                        </div>
                        {/* Stats End */}
                    </div>
                    <div className='my-[25px] lg:flex justify-between dark:text-darkprime text-primary'>
                        <div className='border-4 lgmax:my-6 lgmax:w-full dark:border-darkprime border-primary w-[49%] h-[350px] rounded-2xl'>
                            <h1 className='w-full dark:bg-darkprime dark:text-primary bg-primary rounded-t-md h-50 text-center text-secondary font-bold text-[30px] shadow-inner shadow-tertiary text-2xl py-1'>Details</h1>
                            <div className='overflow-y-auto overflow-x-auto px-[15px] font-bold smmlmax:text-2xl text-[30px] w-full h-[305px] rounded-b-lg bg-primary/10'>
                                <h1>Species: {dataDetail.species.name}</h1>
                                <h2 className='flex my-4'>Types:&nbsp;</h2>
                                <div className=''>
                                    {dataDetail.types ? (dataDetail.types.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <li>{item.type.name};</li>
                                            </div>
                                        )
                                    })) : (<h1>not yet known</h1>)}</div>
                                <h2 className='my-4'>Height:&nbsp;{dataDetail.height}</h2>
                                <h2>Weight:&nbsp;{dataDetail.weight}</h2>
                                <div className='mt-4'>
                                    <h2>Ability:&nbsp;</h2>
                                    {dataDetail.abilities ? (dataDetail.abilities.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <li>{item.ability.name};</li>
                                            </div>
                                        )
                                    })) : (<h1>not yet known</h1>)}
                                </div>
                            </div>
                        </div>
                        <div className='border-4 dark:border-darkprime lgmax:w-full border-primary w-[49%] h-[350px] rounded-2xl'>
                            <h1 className='w-full bg-primary dark:bg-darkprime dark:text-primary rounded-t-md h-50 text-center text-secondary font-bold text-[30px] shadow-inner shadow-tertiary text-2xl py-1'>Skills</h1>
                            <div className='overflow-y-auto px-[15px] font-bold text-[30px] w-full h-[305px] rounded-b-lg bg-primary/10'>
                                {dataDetail.moves ? (dataDetail.moves.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <li>{item.move.name};</li>
                                        </div>
                                    )
                                })) : (<h1>not yet known</h1>)}
                            </div>
                        </div>
                    </div>
                </div>) : null}
            </div>
        </div>
    )
}

export default Detail