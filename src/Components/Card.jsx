import React from "react";

function Card() {
  const data = [
    {
      image: "https://images.unsplash.com/photo-1624521793559-136bfe16fc86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Amazon Basics",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corrupti deleniti tempore pariatur magnam nisi.",
      instock: true
    },
    {
      image: "https://images.unsplash.com/photo-1529359744902-86b2ab9edaea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Daily Objects",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corrupti deleniti tempore pariatur magnam nisi.",
      instock:false
    },
    {
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=500&q=60",
      name: "Apple",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corrupti deleniti tempore pariatur magnam nisi.",
      instock: false
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200">
      {data.map((elem, index) => (
        <div key={index} className="w-52 bg-zinc-100 rounded-md overflow-hidden shadow-md">
          <div className="w-full h-32 bg-zinc-300">
            <img className="w-full h-full object-cover" src={elem.image} alt={elem.name} />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold">{elem.name}</h2>
            <p className="text-xs mt-3">{elem.description}</p>
            <button className={`px-4 py-1 ${elem.instock ? "bg-sky-700" : "bg-red-700"} text-xs rounded-md text-zinc-100 mt-3`}>
               {/* conditional rendering*/}
              {elem.instock ? "In Stock" : "Out Of Stock"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
