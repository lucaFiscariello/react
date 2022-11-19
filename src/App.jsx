import logo from './logo.svg';
import Header from './components/ui/Header';
import Navbar from './components/ui/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Footer from './components/ui/Footer';
import ErrorBoundary from './components/ErrorBoundary';


const App = () => {

  const title = "Demo React";

  const menuItems = [
    {
      label: "Home",
      link: ""
    },
    {
      label: "Utenti",
      link: "/users"
    },
    {
      label: "Schedule",
      link: "/schedule"
    }
  ];

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Header title={title} logo={logo} />
        <Navbar links={menuItems} />
        <main className="container">
          <Router />
        </main>
        <Footer logo={logo} text={title} />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
