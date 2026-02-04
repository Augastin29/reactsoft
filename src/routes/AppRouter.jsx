// total app value change by him
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage } from '../pages/Homepage';
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { Navbar } from '../component/Navbar'
import {Login} from '../pages/Login'
export const AppRouter = () => {
    return (
        <BrowserRouter basename="/reactsoft">
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route  path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}
