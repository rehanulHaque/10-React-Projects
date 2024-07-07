import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register({
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
})

export default function Dashboard() {
  const options = {
  }
  const datas = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {label: "Steps", data: [30, 40, 20, 50, 30, 10, 40], backgroundColor: 'rgba(255, 99, 132, 0.5)'},
    ]
  }

  return (
    <main className="w-full min-h-screen">
      <header className="flex justify-between px-5 py-4">
        <div>
          <h1 className="text-xl font-bold">Dashboard</h1>
        </div>
        <div>
          <div className="flex items-center justify-center text-sm rounded-full border border-black w-8 h-8">
            U
          </div>
        </div>
      </header>
      <div className="grid grid-cols-4">
        <section className="flex flex-col gap-3">
          <div>
            <p className="text-xl font-semibold w-full bg-slate-200 rounded-sm py-3 px-2">
              Dashboard
            </p>
          </div>
          <div>
            <p className="text-xl w-full bg-slate-200 rounded-sm py-3 px-2">
              Transation
            </p>
          </div>
        </section>
        <section className="col-span-3 bg-slate-100 min-h-screen w-full px-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 flex items-center justify-between gap-3 bg-white rounded-md">
              <div className=" p-4 rounded-md">
                <h2>Total Portfolio value</h2>
                <h2 className="font-semibold text-lg">$123,120</h2>
              </div>
              <div className=" p-4 rounded-md">
                <h2>Wallet Balance</h2>
                <h2 className="font-semibold text-lg">$12,54,621</h2>
              </div>
              <div className=" p-4 rounded-md">
                <h2 className="font-semibold text-lg mt-6">$1300</h2>
              </div>
              <div className=" p-4 rounded-md flex gap-4">
                <button className="bg-blue-700 text-white px-4 py-2 rounded-md">
                  Deposit
                </button>
                <button className="bg-blue-700 text-white px-4 py-2 rounded-md">
                  Withdraw
                </button>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between bg-white mt-3 px-3 rounded-md">
                <div>
                  <p>Current Price</p>
                  <h2 className="font-semibold text-lg">$12,354</h2>
                </div>
                <div className=" p-4 rounded-md flex gap-4">
                  <button className="bg-blue-700 text-white px-4 py-2 rounded-md">
                    Buy
                  </button>
                  <button className="bg-blue-700 text-white px-4 py-2 rounded-md">
                    Sell
                  </button>
                </div>
              </div>
              <div className="bg-white">
                <Line options={options} data={datas}/>
              </div>
            </div>
            <div className="bg-white mt-3 px-3 rounded-md py-4">
              <p className="text-sm text-slate-400 py-2 px-3">
                Recent Transaction
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3 my-2">
                  <div className="bg-slate-200 w-8 h-8 rounded-full flex items-center justify-center">
                    i
                  </div>
                  <div>
                    <h2 className="font-semibold">INR Deposit</h2>
                    <p className="text-sm">2022-12-12 7:00</p>
                  </div>
                </div>
                <div>
                  <h1 className="text-lg font-semibold">-$100</h1>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3 my-2">
                  <div className="bg-slate-200 w-8 h-8 rounded-full flex items-center justify-center">
                    i
                  </div>
                  <div>
                    <h2 className="font-semibold">INR Deposit</h2>
                    <p className="text-sm">2022-12-12 7:00</p>
                  </div>
                </div>
                <div>
                  <h1 className="text-lg font-semibold">-$100</h1>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3 my-2">
                  <div className="bg-slate-200 w-8 h-8 rounded-full flex items-center justify-center">
                    i
                  </div>
                  <div>
                    <h2 className="font-semibold">INR Deposit</h2>
                    <p className="text-sm">2022-12-12 7:00</p>
                  </div>
                </div>
                <div>
                  <h1 className="text-lg font-semibold">-$100</h1>
                </div>
              </div>

              <div className="mt-3">
                <button className="bg-slate-200 text-gray-700 w-full py-2 rounded-md">
                  View All
                </button>
              </div>
            </div>
            <div className="bg-white mt-3 px-3 rounded-md p-4">
              <span className="text-sm px-2 py-1 bg-purple-700 text-white rounded-md">
                Loans
              </span>
              <h2 className="mt-2">
                Learn more about Loans – Keep your Bitcoin,
                <br /> access it’s value without selling it
              </h2>
            </div>
            <div className=" mt-3 px-3 rounded-md p-4 bg-purple-700">
              <span className="text-sm px-2 py-1 rounded-md text-black bg-white">
                Contact
              </span>
              <h2 className="text-white mt-2">
                Learn more about Loans – Keep your Bitcoin,
                <br /> access it’s value without selling it
              </h2>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
