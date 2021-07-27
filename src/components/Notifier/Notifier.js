import React from "react";
import { ToastContainer, Zoom, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notifier = () => {
  return (
    <div style={{ height: "25px", backgroundColor: "transparent" }}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        transition={Zoom}
      />
    </div>
  );
};

export default Notifier;
