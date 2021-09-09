import Introduction from "./components/introduction/Introduction";
import TopBar from "./components/topbar/TopBar";
import "./app.scss"
import Contact from "./components/contact/Contact";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div className="app">
      <TopBar/>
      <SideBar/>
      <div className="sections">
        <Introduction/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
