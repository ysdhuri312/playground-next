/** @format */
'use client';

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from './ui/menubar';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';

export default function Header() {
  const [user, setUser] = useState('benoit');
  const [theme, setTheme] = useState('system');

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
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>Theme</MenubarTrigger>
                <MenubarContent>
                  <MenubarRadioGroup value={theme} onValueChange={setTheme}>
                    <MenubarRadioItem value='light'>Light</MenubarRadioItem>
                    <MenubarRadioItem value='dark'>Dark</MenubarRadioItem>
                    <MenubarRadioItem value='system'>System</MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>
                  <Avatar>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                      className='grayscale'
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarRadioGroup value={user} onValueChange={setUser}>
                    <MenubarRadioItem value='andy'>Andy</MenubarRadioItem>
                    <MenubarRadioItem value='benoit'>Benoit</MenubarRadioItem>
                    <MenubarRadioItem value='luis'>Luis</MenubarRadioItem>
                  </MenubarRadioGroup>
                  <MenubarSeparator />
                  <MenubarItem inset>Edit...</MenubarItem>
                  <MenubarItem inset>Add Profile...</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </div>
    </header>
  );
}
