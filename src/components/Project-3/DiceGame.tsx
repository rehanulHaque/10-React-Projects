import { useState } from "react";

export default function DiceGame() {
    const [error, setError] = useState(false)
  const [score, setScore] = useState(0);
  const [userGuess, setUserGuess] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const imageArr = [
    "/dice_1.png",
    "/dice_2.png",
    "/dice_3.png",
    "/dice_4.png",
    "/dice_5.png",
    "/dice_6.png",
  ];

  const [diceImage, setDiceImage] = useState(imageArr[0]);

  const randValue = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const gameLogic = () => {
    if(userGuess === 0) return setError(true)
    setDiceImage(imageArr[randValue() - 1]);
    setError(false)
    setUserGuess(0)
    if (userGuess === randValue()) {
      setScore(score + 1);
    }
  };
  return (
    <main>
      <header className="flex justify-between px-5 py-3">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold">{score}</h1>
          <p>Total Score</p>
        </div>
        <div className="flex flex-col items-end">
            {error && <p className="text-red-500 text-lg mb-2">You have not selected any number</p>}
          <div className="flex gap-3 items-center">
            <button
              className={`p-4 py-2 font-bold border border-black `}
              onClick={() => setUserGuess(1)}
              style={userGuess === 1 ? { color: "white", backgroundColor: "black" } : {}}
            >
              1
            </button>
            <button
              className="p-4 py-2 font-bold border border-black "
              onClick={() => setUserGuess(2)}
              style={userGuess === 2 ? { color: "white", backgroundColor: "black" } : {}}
            >
              2
            </button>
            <button
              className="p-4 py-2 font-bold border border-black "
              onClick={() => setUserGuess(3)}
              style={userGuess === 3 ? { color: "white", backgroundColor: "black" } : {}}
            >
              3
            </button>
            <button
              className="p-4 py-2 font-bold border border-black "
              onClick={() => setUserGuess(4)}
              style={userGuess === 4 ? { color: "white", backgroundColor: "black" } : {}}
            >
              4
            </button>
            <button
              className="p-4 py-2 font-bold border border-black "
              onClick={() => setUserGuess(5)}
              style={userGuess === 5 ? { color: "white", backgroundColor: "black" } : {}}
            >
              5
            </button>
            <button
              className="p-4 py-2 font-bold border border-black "
              onClick={() => setUserGuess(6)}
              style={userGuess === 6 ? { color: "white", backgroundColor: "black" } : {}}
            >
              6
            </button>
          </div>
          <p className="mt-2 font-semibold">Select Number</p>
        </div>
      </header>
      <section className="flex flex-col items-center justify-center mt-6">
        <div>
          <img
            src={diceImage}
            alt=""
            className="w-[150px]"
            onClick={gameLogic}
          />
        </div>
        <div className="flex flex-col gap-3">
          <p>Click On dice to roll</p>
          <button
            className="px-4 py-1 rounded-md border border-black"
            onClick={() => setScore(0)}
          >
            Reset Score
          </button>
          <button
            className="px-4 py-1 rounded-md text-white bg-black"
            onClick={() => setShowRules(!showRules)}
          >
            Show Rules
          </button>
        </div>
        {showRules && (
          <div className="bg-gray-200 p-4 rounded-md mt-4">
            <h1 className="text-xl font-bold">How to play Dice game</h1>
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>
              after click on dice if selected number is equal to dice number you
              will get same point as dice{" "}
            </p>
            <p>if you get wrong guess then 2 point will be dedcuted </p>
          </div>
        )}
      </section>
    </main>
  );
}
