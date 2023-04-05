import Header from './components/Header';
import Footer from './components/Footer';
import { MainProvider } from './context/MainContext'

function App() {
    return (
        <MainProvider>
            <Header />
            <hr />
            <Footer />
        </MainProvider>
    );
}

export default App;
