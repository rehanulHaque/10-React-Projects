import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/Project-1/LandingPage";
import Contactus from "./components/Project-2/Contactus";
import DiceGame from "./components/Project-3/DiceGame";
import Food from "./components/Project-4/Food";
import ContactFirebase from "./components/Project-5/ContactFirebase";
import Dashboard from "./components/Project-6/Dashboard";

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/pr1" element={<LandingPage />} />
      <Route path="/pr2" element={<Contactus />} />
      <Route path="/pr3" element={<DiceGame />} />
      <Route path="/pr4" element={<Food />} />
      <Route path="/pr5" element={<ContactFirebase />} />
      <Route path="/pr6" element={<Dashboard />} />
    </Routes>
    </>
  )
}
