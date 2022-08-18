import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Rodape from './components/layout/Rodape'


export default function App() {
return (
<BrowserRouter>

<Navbar />

<Container customClass="min-height">

<Routes>

<Route path= "/" element={<Home/>}/>
<Route path= "/Company" element={<Company/>}/>
<Route path= "/Contact" element={<Contact/>}/>
<Route path= "/NewProject" element={<NewProject/>}/>
<Route path= "/Projects" element={<Projects/>}/>

</Routes>

</Container>


<Rodape />

</BrowserRouter>
  );
}


