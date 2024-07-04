import React from "react";
import { Routes , Route} from 'react-router-dom'

import Home from './pages/Home'
import Movie from './pages/Movie'
import Search from './pages/Search'

export function AppRoutes(){

    return(
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='movie/:id' element={<Movie />}/>
            <Route path='search' element={<Search />}/>
        </Routes>
    )
}