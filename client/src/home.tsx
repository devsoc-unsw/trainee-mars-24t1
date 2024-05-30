import React, { useState } from 'react';
import './App.css';
import Logo from './assets/marsWhite.png';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

const HomePage = () => {
  const [options, setOptions] = useState([
    { id: 1, text: 'Question 1', content: 'This is the content for Question 1' },
  ]);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isEditing, setIsEditing] = useState(false);
  const [newQuestionText, setNewQuestionText] = useState('');

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsEditing(false);
  };

  const handleAddQuestion = () => {
    const newQuestion = {
      id: options.length + 1,
      text: `Question ${options.length + 1}`,
      content: `This is the content for Question ${options.length + 1}`,
    };
    setOptions([...options, newQuestion]);
  };

  const handleEditContent = (event: any) => {
    setSelectedOption({ ...selectedOption, content: event.target.value });
    setOptions(options.map(opt => opt.id === selectedOption.id ? { ...opt, content: event.target.value } : opt));
  };

  return (
    <main className='bg-white flex flex-col h-screen'>
      <div className='fixed w-full h-auto top-0 flex items-center justify-between p-6 bg-white shadow-md z-10'>
        <div className='flex items-center gap-4'>
          <img src={Logo} alt="Logo" className='h-16 w-auto' />
          <p className='poetsen-one-regular text-3xl text-[#FE6A01]'>MARS</p>
        </div>

        <div className='flex items-center gap-4'>
          <p>Your Name</p>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className='flex w-full h-full pt-32'>
        <div className='w-1/3 h-full p-6 overflow-y-auto border-r'>
          <div className='flex items-center justify-between mb-4'>
            <p className='text-xl font-semibold'>Questions</p>
            <button className='text-xl text-[#FE6A01]' onClick={handleAddQuestion}>+</button>
          </div>
          <ScrollArea className="h-full">
            {options.map(option => (
              <div 
                key={option.id} 
                className={`p-4 mb-2 cursor-pointer rounded border ${selectedOption.id === option.id ? 'border-[#FE6A01]' : 'border-gray-300'}`}
                onClick={() => handleOptionClick(option)}
              >
                {option.text}
              </div>
            ))}
          </ScrollArea>
        </div>

        <div className='w-2/3 h-full p-6'>
          <div className='h-full border rounded-md p-6'>
            <div className='flex justify-between items-center mb-4'>
              <p className='text-2xl font-semibold'>{selectedOption.text}</p>
              <button className='text-xl text-gray-400 hover:text-black' onClick={() => setIsEditing(!isEditing)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className='h-6 w-6'>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 12v3h3l7.536-7.536a2 2 0 00-2.828-2.828L9 12z" />
                </svg>
              </button>
            </div>
            {isEditing ? (
              <textarea 
                className='w-full h-64 p-2 border rounded'
                value={selectedOption.content}
                onChange={handleEditContent}
              />
            ) : (
              <p>{selectedOption.content}</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;