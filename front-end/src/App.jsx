import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ApplicationRoutes } from "./routes";

function App() {
  return (
    <div className="App">
      <ApplicationRoutes />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
