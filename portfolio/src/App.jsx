import Introduction from "./components/introduction/Introduction";
import TopBar from "./components/topbar/TopBar";
import "./app.scss"
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="app">
      <TopBar/>
      <div className="sections">
        <Introduction/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
