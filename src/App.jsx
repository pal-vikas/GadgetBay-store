import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Intro from './Intro/Intro';
import Home from './pages/Home/Home'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';


function App() {

  return (
    <>
      <Header/>
       <SignedIn>
        <Home/>
        <Footer/>
      </SignedIn> 

      <SignedOut>
        <Intro/>
      </SignedOut>
    </>
  )
}

export default App
