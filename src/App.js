import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Products from './pages/Products'
import Services from './pages/Services'
import Signup from './pages/Signup'

import './App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
function App() {
    return (
        <>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/services" exact component={Services} />
                <Route path="/products" exact component={Products} />
                <Route path="/signup" exact component={Signup} />
        
            </Switch>
        </>
    )
}

export default App
