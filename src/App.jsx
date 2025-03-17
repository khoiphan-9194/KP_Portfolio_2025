// Todo: Bring in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
// import NavTabs from './components/NavTabs';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <>
      {/* <NavTabs /> */}
      <Header />
      {/* Todo: Fill in the appropriate component so that the user will conditionally see the appropriate view based on the URL */}
      <main className="mx-3">
        <Outlet /> 
        {/* 
         instead of doing like this:
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          we can use the Outlet component to render the child routes of the parent route 
         */}
         
      </main>
      <Footer/>
    </>
  );
}

export default App;
