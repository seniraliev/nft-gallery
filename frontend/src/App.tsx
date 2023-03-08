import React from "react";
import "./styles/styles.scss";
import Home from "src/pages/Home";
import AppHeader from "src/layout/AppHeader";
import { ToastContainer } from "react-toastify";
import { useAppSelector } from "./hooks/useAppSelector";
import { Loading } from "./components/Loading";

function App() {
  const loading = useAppSelector((state) => state.viewState.loading);

  return (
    <div className="App">
      <AppHeader />
      <div className="body-content">
        <Home />
        {loading && <Loading />}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
