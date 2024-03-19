import { CompaniesLogo } from '@/services/LocalData';
import { CompanyProps } from '@/services/type';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Companies = () => {
  const [data, setData] = useState<CompanyProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setData(CompaniesLogo);
      }, 1000);
    };

    fetchData();
  }, []);

  return (
    <div className='flex flex-col lg:px-[120px] px-4 max-w-full'>
      {/*  */}
      <div className='lg:flex grid gap-5'>
        <div className="w-1/2 text-white lg:text-5xl font-medium font-['Space Grotesk'] lg:leading-[60px] text-2xl leading-loose">Trusted by 200+ companies around the world</div>
        <div className="mt-6 lg:mt-7 text-white text-opacity-60 text-base font-normal font-['Pathway Extreme'] leading-normal w-1/2">Vulputate molestie molestie amet leo blandit accumsan. Sapien sed amet tellus purus sit odio eget. Diam morbi faucibus vitae neque id in. Nullam sed et dapibus nunc, porta enim orci urna, sit. Lectus ac.</div>
      </div>

      {/* Logos */}
      <div className='flex gap-5 overflow-hidden justify-start'>
        {data.map((item, index) => (
          <div key={index} className='w-[200px] px-6 py-4 rounded-[10px] border border-slate-400 flex-col justify-center items-center gap-3'>
            <Image src={item.imagePath} alt={''} width={200} height={200} style={{ width: '100%' }} className='w-[200px]'/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
