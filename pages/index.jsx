import Image from 'next/image'
import ProfileImage from '../public/static/images/image-jeremy.png'
import data from '../json/data.json'
import { useEffect, useState } from 'react'
import Card from '../components/Card'

export default function Home({ data }) {

  const [report, setReport] = useState([])
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setReport(data)
  }, [])

  return (
    <div className='flex my-5 2xl:my-0 2xl:h-[100vh] justify-center'>
      <section className="grid grid-rows-7-phone 2xl:grid-cols-4 2xl:grid-rows-none gap-5 2xl:max-w-[1050px] m-auto">
        <article className=" 2xl:row-span-2 h-[13rem] 2xl:h-[26rem] 2xl:mb-[30px] relative">
          <div className='bg-[#5847eb] rounded-lg 2xl:pt-[25px] 2xl:pl-[25px] 2xl:pb-14 p-[25px] relative z-20 flex 2xl:block'>
            <div className='inline-flex rounded-[50px] border-2 mr-2'>
              <Image className='object-cover' src={ProfileImage} alt="Jeremy Profile" height={80} width={80} />
            </div>
            <div>
              <p className='text-sm mt-[1rem]'>Report for</p>
              <h1 className='text-2xl 2xl:text-4xl'>Jeremy Robson</h1>
            </div>
          </div>
          <div className='bg-[#1c1f4a] pb-[15px] pt-[25px] px-[25px] 2xl:p-[25px] 2xl:pt-[50px] rounded-lg absolute w-[100%] bottom-[20px]  2xl:bottom-[-30px]'>
            <ul className='time-list select-none flex 2xl:block justify-between'>
              <li className={`2xl:pb-5 ${position === 0 && 'text-white'}`} onClick={() => setPosition(0)}><span className='hover:cursor-pointer'>Daily</span></li>
              <li className={`2xl:pb-5 ${position === 1 && 'text-white'}`} onClick={() => setPosition(1)}><span className='hover:cursor-pointer hover:text-white'>Weekly</span></li>
              <li className={`${position === 2 && 'text-white'}`} onClick={() => setPosition(2)}><span className='hover:cursor-pointer hover:text-white'>Monthly</span></li>
            </ul>
          </div>
        </article>
        {report.map((rol, index) => (
          <Card key={rol.title} rol={rol} position={position} pos={index} />
        ))}
      </section>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      data
    }
  }
}