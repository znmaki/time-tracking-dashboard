import React from 'react'
import { menuChange } from '../helpers'
import { ArrayLogo, ArrayColor } from '../constans'
import Image from "next/image";

const Card = ({ rol, position, pos }) => {

    return (
        <article className='relative'>
            <div className='light-orange soft-blue light-red lime-green violet-f soft-orange'></div>
            <div className={`flex flex-row-reverse rounded-lg ${ArrayColor[pos]}`}>
                <Image src={ArrayLogo[pos].src} alt={`${rol.title} logo`} width={60} height={60} />
            </div>
            <div className='bg-[#1c1f4a] hover:bg-[#34397B] absolute w-full p-[25px] rounded-lg select-none hover:cursor-pointer flex items-center justify-between top-[2rem] 2xl:block'>
                <div>
                    <h2 className='font-bold 2xl:mb-5 2xl:text-lg'>{rol.title}</h2>
                    <p className='text-3xl 2xl:text-6xl font-light'>{`${menuChange(position, rol).current}`}hrs</p>
                </div>
                <div>
                    <p className='text-[#6f76c8]'>{`${menuChange(position, rol).text} - ${menuChange(position, rol).previous}hrs`}</p>
                </div>
            </div>
        </article>
    )

}

export default Card