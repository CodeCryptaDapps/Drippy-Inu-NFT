import Hero from '@/components/Hero';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex flex-col   justify-between '>
      <Hero />
    </main>
  );
}