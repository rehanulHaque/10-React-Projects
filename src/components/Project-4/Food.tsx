import { useState } from "react";

const foodData = [
  {
    name: "Boilded Egg",
    price: 10,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/project-4/egg.png",
    type: "breakfast",
  },
  {
    name: "RAMEN",
    price: 25,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/project-4/ramen.png",
    type: "lunch",
  },
  {
    name: "GRILLED CHICKEN",
    price: 45,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/project-4/chicken.png",
    type: "dinner",
  },
  {
    name: "CAKE",
    price: 18,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/project-4/cake.png",
    type: "breakfast",
  },
  {
    name: "BURGER",
    price: 23,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/project-4/burger.png",
    type: "lunch",
  },
  {
    name: "PANCAKE",
    price: 25,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/project-4/pancake.png",
    type: "dinner",
  },
];

export default function Food() {
    const [foodlist, setFoodList] = useState(foodData)
  const [selectBtn, setSelectBtn] = useState("all");

  const filterFood = (type: string) => {
    if (type === "all") {
        setSelectBtn("all");
      setFoodList(foodData);
    } else {
      const filtered = foodData.filter((item) => item.type === type);
      setSelectBtn(type);
      setFoodList(filtered);
    }
  };

  return (
    <main>
      <header className="flex items-center justify-between px-4 py-2">
        <h1 className="font-bold text-2xl">FoodyZone</h1>

        <div className="flex gap-3">
          <button
            className="px-4 py-1 border border-black rounded-md"
            onClick={() => filterFood("all")}
            style={{
              backgroundColor: selectBtn === "all" ? "black" : "white",
              color: selectBtn === "all" ? "white" : "black",
            }}
          >
            All
          </button>
          <button
            className="px-4 py-1 border border-black rounded-md"
            onClick={() => filterFood("breakfast")}
            style={{
                backgroundColor: selectBtn === "breakfast" ? "black" : "white",
                color: selectBtn === "breakfast" ? "white" : "black",
              }}
          >
            Breakfast
          </button>
          <button
            className="px-4 py-1 border border-black rounded-md"
            onClick={() => filterFood("lunch")}
            style={{
                backgroundColor: selectBtn === "lunch" ? "black" : "white",
                color: selectBtn === "lunch" ? "white" : "black",
              }}
          >
            Lunch
          </button>
          <button
            className="px-4 py-1 border border-black rounded-md"
            onClick={() => filterFood("dinner")}
            style={{
                backgroundColor: selectBtn === "dinner" ? "black" : "white",
                color: selectBtn === "dinner" ? "white" : "black",
              }}
          >
            Dinner
          </button>
        </div>

        <div>
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-1 border border-black rounded-md"
          />
        </div>
      </header>
      <section className="grid grid-cols-3 gap-4 m-4">
              {foodlist.map((item, idx)=>(
                <div key={idx} className="w-[300px] h-[150px] flex border border-black p-4 rounded-md">
                  <img src={item.image} alt={item.name} className="w-[80px] h-[80px]"/>
                  <div>
                  <p className="text-lg font-semibold">{item.name}</p>
                  <p className="text-sm">{item.text}</p>
                  <button className="px-4 mt-2 text-white py-1 rounded-md bg-red-600 text-sm">{item.price}</button>
                  </div>
                </div>
              ))}
      </section>
    </main>
  );
}
