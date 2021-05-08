import { Redirect, Route, Switch } from "react-router";
import About from "./components/about/about";
import ContactUs from "./components/contactUs/contactUs";
import Main from "./components/home/main";
import Footer from "./components/shared/footer";
import Media from "./components/shared/media";
import NavBar from "./components/shared/navBar";
import NotFound from "./NotFound";


function App() {
  return (
    <>
      <NavBar/>
      <Media/>
        <Switch>
          <Route path="/home" component={Main}/>
          <Route path="/about" component={About}/> 
          <Route path="/contact-us" component={ContactUs}/> 
          <Route path="/notFound" component={NotFound}/>
          <Redirect from="/" exact to= "/home"/> 
          <Redirect from="*"  to= "/notFound"/>      
        </Switch>
      <Footer/>
    </>
  
  );
}

export default App;
