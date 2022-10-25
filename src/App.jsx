import { Main, SharedLayout, About, Contact, Projects } from './pages';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<SharedLayout />}>
                <Route index element={<Main />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='projects' element={<Projects />} />
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

export default App;
