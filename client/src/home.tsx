import React, { useState } from 'react';
import './App.css'
import Logo from './assets/marsWhite.png'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

const HomePage = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
  };

  const options = [
    { id: 1, text: 'Option 1', content: 'This is the content for Option 1' },
    { id: 2, text: 'Option 2', content: 'This is the content for Option 2' },
    { id: 3, text: 'Option 3', content: 'This is the content for Option 3' },
    // Add more options as needed
  ];

  return (
    <main className='bg-white flex flex-col h-screen'>
      <div className='fixed w-full h-auto top-0 flex items-center justify-between p-10'>
        <div className='flex items-center gap-8'>
          <img src={Logo} alt="Logo" className='h-32 w-auto' />
          <p className='poetsen-one-regular text-5xl text-[#FE6A01]'>MARS</p>
        </div>

        <div className='flex items-center gap-8'>
          <p>Hellen</p>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className='flex w-full h-full pt-40'>
        <div className='w-1/3 h-full p-10 overflow-y-auto'>
          <ScrollArea className="h-full rounded-md border p-4">
            {options.map(option => (
              <div 
                key={option.id} 
                className='p-4 cursor-pointer hover:bg-gray-200'
                onClick={() => handleOptionClick(option.content)}
              >
                {option.text}
              </div>
            ))}
          </ScrollArea>
        </div>

        <div className='w-2/3 h-full p-10'>
          <div className='h-full border rounded-md p-4'>
            {selectedOption ? (
              <p>{selectedOption}</p>
            ) : (
              <p>Please select an option from the left.</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;