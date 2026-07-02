/** @format */

import MenuBar from './MenuBar';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';

export default function Header() {
  return (
    <header>
      <div className='max-w-7xl mx-auto py-4 px-6 md:px-10 lg:px-14'>
        <div className='md:flex justify-between items-center'>
          <div className='text-2xl font-heading'>TODO.</div>
          <nav className='md:flex gap-4 text-xl'>
            <Tabs defaultValue='home'>
              <TabsList variant='line'>
                <TabsTrigger value='home'>Home</TabsTrigger>
                <TabsTrigger value='archives'>Archives</TabsTrigger>
                <TabsTrigger value='about'>About</TabsTrigger>
              </TabsList>
            </Tabs>
          </nav>
          <div>
            <MenuBar />
          </div>
        </div>
      </div>
    </header>
  );
}
