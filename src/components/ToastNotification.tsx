import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type NotificationProps = {
  notificationMessage: string;
  notificationType: () => void;
};

const ToastNotification = ({
  notificationType,
  notificationMessage,
}: NotificationProps) => {
  // const toastDark = () => toast.dark("This is Toast Notification for Dark");
  // const toastInfo = () => toast.info("This is Toast Notification for Info");
  // const toastSuccess = () =>
  //   toast.success("This is Toast Notification for Success");
  // const toastWarn = () => toast.warn("This is Toast Notification for Warn");
  // const toastError = () => toast.error("This is Toast Notification for Error");
  return (
    <div>
      <h3>Toast Notification in React </h3>
      <button className="btn" onClick={notificationType}>
        {notificationMessage}
      </button>
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
      />
    </div>
  );
};

export default ToastNotification;
