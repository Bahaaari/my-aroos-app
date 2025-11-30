import { useState } from 'react';

function AddInfo() {
  const [text, setText] = useState<string>('');

  const handleSubmit = () => {
    if (!text.trim()) return;

    setText('');
  };

  return (
    <div className="w-190 flex flex-row items-center place-content-around text-xs my-8">
      <div className='w-120'>
        <input
          type="text"
          placeholder="عنوان رویداد"
          value={text}
          onChange={e => setText(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-[45%] me-10 
        focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="تاریخ رویداد"
          value={text}
          onChange={e => setText(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-[45%]  
        focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <button
        onClick={handleSubmit}
        disabled={!text.trim()}
        className={`px-8 py-2 rounded-full border border-[#ee4466]  ${
          text.trim() ? 'bg-blue-500 hover:bg-blue-600' : 'cursor-not-allowed'
        }`}
      >
        اضافه کن
      </button>
    </div>
  );
}

export default AddInfo;
