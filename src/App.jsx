import { Route, Routes } from "react-router"
import Navigation from "./components/app/layout/Navigation"
import HomePage from "./pages/HomePage"
import Footer from "./components/app/layout/Footer"

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<HomePage />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
