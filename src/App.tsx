import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "./components/screens/HomeScreen"
import SelectScreen from "./components/screens/SelectScreen"
import BattleScreen from "./components/screens/BattleScreen"
import ErrorScreen from "./components/screens/ErrorScreen"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path='/select' element={<SelectScreen />} />
        <Route path='/battle' element={<BattleScreen />} />
        <Route path='*' element={<ErrorScreen />} />
      </Routes>  
    </BrowserRouter>
  );
}