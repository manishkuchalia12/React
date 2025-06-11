import React from "react";

function Song() {
const data = [
  { name: "Mahiye Ve", description: "A soulful Punjabi love track that touches the heart." },
  { name: "Kesariya", description: "A romantic Bollywood song with beautiful melodies from the movie Brahmastra." },
  { name: "Pasoori", description: "A viral Coke Studio song blending classical and modern vibes from Pakistan." },
  { name: "Apna Bana Le", description: "A soothing love ballad from the movie Bhediya." },
  { name: "Jhoome Jo Pathaan", description: "An energetic dance number from the movie Pathaan." },
  { name: "Raataan Lambiyan", description: "A romantic song perfect for long night conversations." },
  { name: "Tum Hi Ho", description: "An emotional love anthem from the movie Aashiqui 2." },
  { name: "Zaalima", description: "A smooth romantic song starring Shah Rukh Khan and Mahira Khan." },
  { name: "Excuses", description: "A trending heartbreak Punjabi song by A.P. Dhillon." },
  { name: "Shayad", description: "A soulful romantic track from the movie Love Aaj Kal." }
];

const handleClickDownload = ()=>{alert("Chal Rha hai")};

  return (
    <div className="w-full h-full p-10 bg-zinc-300 flex flex-col gap-5 justify-center items-center ">
    {data.map((item, index)=>(
       <div className="w-90 px-3 py-2 bg-zinc-100 rounded-md">
        <h3 className="font-semibold text-xl">{item.name}</h3>
        <p className="text-xs mt-2">
          {item.description}
        </p>
        <button onClick={handleClickDownload} className="px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded mt-3">Download Now</button>
      </div>
    ))}
    </div>
  );
}

export default Song;
