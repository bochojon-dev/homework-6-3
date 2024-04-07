import "./App.css";
import Todolist from "./components/todolist/Todolist";
// import Footer from "./components/footer/Footer";
// import Main from "./components/main/Main";
// import Form from "./components/form/Form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      {/* <Form />
      <Footer />
      <Main /> */}
      <Todolist />
      <ToastContainer />
    </div>
  );
}

export default App;
