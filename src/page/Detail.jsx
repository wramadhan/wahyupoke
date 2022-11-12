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
                console.log(response.data.types);
            })
            .catch(function (error) {
                console.log(error);
            });

    };
    return (
        <div className='pt-[95px] px-[60px]'>
            {/* <p onClick={() => console.log(dataDetail.sprites.front_default)}>Detail</p> */}
            {dataDetail ? (<div><div className='lg:flex justify-between'>
                <div className='lgmax:flex lgmax:mb-6 justify-center'>
                    <div className="w-[380px] bg-cover bg-center h-[380px] border-primary border-4 shadow-lg shadow-tertiary/40 rounded-2xl"
                        style={{
                            backgroundImage: `url("${dataDetail.sprites.front_default}")`,
                        }}
                    >
                        <div className='w-full h-[327px] bg-primary/10'>
                        </div>
                        <div className="w-full rounded-b-xl shadow-inner duration-300 shadow-tertiary flex flex-col justify-center bg-primary h-[45px]">
                            <p className="font-bold text-secondary text-center text-2xl">{location.state.name}</p>
                        </div>
                    </div>
                </div>
                {/* Stats Start */}
                <div className='border-4 h-[381px] border-primary rounded-2xl lgmax:w-full w-[724px] shadow-lg shadow-tertiary/40'>
                    <h1 className='w-full bg-primary rounded-t-md h-50 text-center text-secondary font-bold text-[30px] shadow-inner shadow-tertiary text-2xl py-1'>Stats</h1>
                    <div className='overflow-y-auto h-[330px] rounded-b-xl bg-primary/10'>
                        {dataDetail.stats.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className='smmax:my-4 px-[15px]'>
                                        <div className='flex justify-between px-[1px]'>
                                            <h1 className='smmlmax:text-base font-bold text-primary text-[25px]'>{item.stat.name}</h1>
                                            <h1 className='font-bold text-primary smmlmax:text-base text-[25px]'>{item.base_stat}/300</h1>
                                        </div>
                                        <div className='w-full rounded-full border-2 border-primary h-[16px]'>
                                            <div className='w-full shadow-inner shadow-tertiary rounded-full bg-primary h-full' style={{ "width": item.base_stat / 3 + "%" }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                        })}
                    </div>
                </div>
                {/* Stats End */}
            </div>
                <div className='my-[25px] lg:flex justify-between text-primary'>
                    <div className='border-4 lgmax:my-6 lgmax:w-full border-primary w-[49%] h-[350px] rounded-2xl'>
                        <h1 className='w-full bg-primary rounded-t-md h-50 text-center text-secondary font-bold text-[30px] shadow-inner shadow-tertiary text-2xl py-1'>Details</h1>
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
                    <div className='border-4 lgmax:w-full border-primary w-[49%] h-[350px] rounded-2xl'>
                        <h1 className='w-full bg-primary rounded-t-md h-50 text-center text-secondary font-bold text-[30px] shadow-inner shadow-tertiary text-2xl py-1'>Skills</h1>
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
    )
}

export default Detail