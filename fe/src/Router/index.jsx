import { Routes, Route, BrowserRouter } from "react-router-dom"

import Login from "../Pages/Login"
import Home from "../Pages/Home"
import Products from "../Pages/Products"
import UnauthorizedAccess from "../Pages/UnauthorizedAccess"
import CreateAccount from "../Pages/CreateAccount"

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/401" element={<UnauthorizedAccess />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}
