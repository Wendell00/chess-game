"use client"
import Image from 'next/image'
import { Fjalla_One, Sarabun } from 'next/font/google'
import { useState } from 'react';
import isEqual from 'lodash/isEqual';

const Fjalla = Fjalla_One({
    weight: '400',
    subsets: ['latin'],
})

const SarabunFont = Sarabun({
    weight: '600',
    subsets: ['latin'],
})

export default function Aside() {
    const [hoveredItem, setHoveredItem] = useState({});

    const handleMouseEnter = (item: object) => {
        setHoveredItem(item);
      };
    
    const handleMouseLeave = () => {
        setHoveredItem({});
    };
  
    const menuItems = [
      { id: 1, label: 'Jogar', imageSrc: '/chess.png', imageSrcWhite: '/chessWhite.png' },
      { id: 2, label: 'Análise', imageSrc: '/lupa.png', imageSrcWhite: '/lupaWhite.png' },
      { id: 3, label: 'Histórico', imageSrc: '/lista-de-afazeres.png', imageSrcWhite: '/lista-de-afazeresWhite.png' },
      { id: 4, label: 'Amigos', imageSrc: '/amigos.png', imageSrcWhite: '/amigosWhite.png' },
      { id: 5, label: 'Perfil', imageSrc: '/homem-usuario.png', imageSrcWhite: '/homem-usuarioWhite.png' },
    ];

    const menuItems2 = [
        { id: 1, label: 'Ajustes', imageSrc: '/config.png', imageSrcWhite: '/configWhite.png' },
        { id: 2, label: 'Tema', imageSrc: '/tema.png', imageSrcWhite: '/temaWhite.png' },
    ];

    const menuItems3 = [
        { id: 1, label: 'Colapsar', imageSrc: '/seta-esquerda.png', imageSrcWhite: '/seta-esquerdaWhite.png' },
    ];
    
    return (
        <aside className="h-full w-[20%] bg-[#141419]">
            <div className="w-full h-[10%] flex items-center pl-[30px] pt-[10px] mb-[10%]">
                <Image src="/logo.png" alt="logo" width="160" height="160"
                className='w-[20%] h-auto drop-shadow-2xl mr-2 mb-2'></Image>
                <h2 className={`${Fjalla.className} text-white text-2xl font-bold`}>JWchess</h2>
            </div>
            <div className="w-full h-[85%] flex flex-col justify-between">
                    <div className='w-full h-auto'>
                        <ul className='w-full h-[268px] flex flex-col justify-evenly'>
                            {menuItems.map((item) => (
                                <li key={item.id} className="flex items-center pl-[25px] h-[70px] mb-[10px] cursor-pointer">
                                    <div className="w-[90%] h-[100%] flex items-center pl-[5px] rounded-md group hover:bg-[#1D1D23]"
                                    onMouseEnter={() => handleMouseEnter(item)}
                                    onMouseLeave={handleMouseLeave}
                                    >
                                        <div className={`rounded-md flex items-center justify-center w-[32px] h-[32px] mr-[8px] bg-[#24242B] group-hover:bg-[#6d92ac]`}>
                                            <img
                                                src={isEqual(hoveredItem, item) ? item.imageSrcWhite : item.imageSrc}
                                                alt="logo"
                                                width="160"
                                                height="160"
                                                className="w-[20px] h-auto"
                                            />
                                        </div>
                                        <p
                                        className={`${SarabunFont.className} text-[#818692] group-hover:text-[#E9E9E9]`}
                                        >
                                        {item.label}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="w-[90%] h-[1px] bg-[#818692] mx-auto mt-[5px] opacity-[0.4] mb-[20px]"></div>
                        <ul className='w-full h-[108px] flex flex-col justify-evenly'>
                            {menuItems2.map((item) => (
                                <li key={item.id} className="flex items-center pl-[25px] h-[70px] mb-[10px] cursor-pointer">
                                    <div className="w-[90%] h-[100%] flex items-center pl-[5px] rounded-md group hover:bg-[#1D1D23]"
                                    onMouseEnter={() => handleMouseEnter(item)}
                                    onMouseLeave={handleMouseLeave}
                                    >
                                        <div className={`rounded-md flex items-center justify-center w-[32px] h-[32px] mr-[8px] bg-[#24242B] group-hover:bg-[#6d92ac]`}>
                                            <img
                                                src={isEqual(hoveredItem, item) ? item.imageSrcWhite : item.imageSrc}
                                                alt="logo"
                                                width="160"
                                                height="160"
                                                className="w-[20px] h-auto"
                                            />
                                        </div>
                                        <p
                                        className={`${SarabunFont.className} text-[#818692] group-hover:text-[#E9E9E9]`}
                                        >
                                        {item.label}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='w-full h-auto'>
                        <div className="w-[90%] h-[1px] bg-[#818692] mx-auto mt-[5px] opacity-[0.4] mb-[20px]"></div>
                        <ul className='w-full h-[54px] flex flex-col justify-evenly'>
                            {menuItems3.map((item) => (
                                <li key={item.id} className="flex items-center pl-[25px] h-[70px] mb-[10px] cursor-pointer">
                                    <div className="w-[90%] h-[100%] flex items-center pl-[5px] rounded-md group hover:bg-[#1D1D23]"
                                    onMouseEnter={() => handleMouseEnter(item)}
                                    onMouseLeave={handleMouseLeave}
                                    >
                                        <div className={`rounded-md flex items-center justify-center w-[32px] h-[32px] mr-[8px] bg-[#24242B] group-hover:bg-[#6d92ac]`}>
                                            <img
                                                src={isEqual(hoveredItem, item) ? item.imageSrcWhite : item.imageSrc}
                                                alt="logo"
                                                width="160"
                                                height="160"
                                                className="w-[20px] h-auto"
                                            />
                                        </div>
                                        <p
                                        className={`${SarabunFont.className} text-[#818692] group-hover:text-[#E9E9E9]`}
                                        >
                                        {item.label}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
            </div>

        </aside>
    )
  }