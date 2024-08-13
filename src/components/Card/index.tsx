'use client';

import { useState, useEffect } from 'react';
import { Button } from '../Button';
import HorizontalDiv from '../HorizontalDiv';
import VerticalDiv from '../VerticalDiv';
import { fetchAdvice } from '@/app/api/client';

export function Card() {
  const [adviceData, setAdviceData] = useState({ id: '', advice: '' });

  useEffect(() => {
    async function getAdvice() {
      const advice = await fetchAdvice();
      setAdviceData(advice);
    }

    getAdvice();
  }, []);

  const handleNewAdvice = async () => {
    const newAdvice = await fetchAdvice();
    console.log(newAdvice);
    setAdviceData(newAdvice);
  };

  return (
    <section className="relative flex max-w-[540px] flex-col items-center rounded-2xl bg-dark-grayish-blue px-6 pb-16 pt-10 font-extrabold">
      <h2 className="text-sm tracking-md text-neon-green">
        ADVICE #{adviceData.id}
      </h2>
      <h1 className="mb-10 mt-6 text-center text-md tracking-sm text-light-cyan">
        {adviceData.advice}
      </h1>
      <Button onClick={handleNewAdvice} />
      <div className="flex items-center gap-4">
        <HorizontalDiv />
        <div className="flex items-center gap-2">
          <VerticalDiv />
          <VerticalDiv />
        </div>
        <HorizontalDiv />
      </div>
    </section>
  );
}
