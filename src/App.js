import Header from "./components/Header";
import Staff from "./components/Staff";
import Hero from "./components/Hero";
import Tools from "./components/Tools";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Header/>
            <Hero/>
            <About/>
            <Services/>
            <Portfolio/>
            <Staff/>
            <Tools/>
            {/*<Footer/>*/}
        </>
    );
}

export default App;