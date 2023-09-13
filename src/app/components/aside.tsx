"use client"
import Image from 'next/image'
import { Fjalla_One, Sarabun } from 'next/font/google'
import { useState } from 'react';

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
      { id: 1, label: 'Jogar', imageSrc: '/chess.png' },
      { id: 2, label: 'Análise', imageSrc: '/lupa.png' },
      { id: 3, label: 'Histórico', imageSrc: '/lista-de-afazeres.png' },
      { id: 4, label: 'Amigos', imageSrc: '/amigos.png' },
      { id: 5, label: 'Perfil', imageSrc: '/homem-usuario.png' },
    ];
    
    return (
        <aside className="h-full w-[20%] bg-[#141419]">
            <div className="w-full h-[10%] flex items-center pl-[30px] pt-[10px] mb-[10%]">
                <Image src="/logo.png" alt="logo" width="160" height="160"
                className='w-[20%] h-auto drop-shadow-2xl mr-2 mb-2'></Image>
                <h2 className={`${Fjalla.className} text-white text-2xl font-bold`}>JWchess</h2>
            </div>
            <div className="w-full h-[80%]">
                    <ul className='w-full h-[45%] flex flex-col justify-evenly'>
                        {menuItems.map((item) => (
                            <li key={item.id} className="flex items-center pl-[25px] h-[70px] mb-[10px]">
                                <div className="w-[90%] h-[100%] flex items-center pl-[5px] rounded-md group hover:bg-[#1D1D23]"
                                onMouseEnter={() => handleMouseEnter(item)}
                                onMouseLeave={handleMouseLeave}
                                >
                                    <div className={`rounded-md flex items-center justify-center w-[32px] h-[32px] mr-[8px] bg-[#24242B] group-hover:bg-[#26b4d4]`}>
                                        <img
                                            src={hoveredItem === item ? '/chessWhite.png' : item.imageSrc}
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
        </aside>
    )
  }