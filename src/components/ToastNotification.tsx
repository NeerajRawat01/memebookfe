// import React from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// type NotificationProps = {
//   notificationMessage: string;
//   notificationType:
//     | "toastDark"
//     | "toastInfo"
//     | "toastSuccess"
//     | "toastWarn"
//     | "toastError";
// };

// const ToastNotification: React.FC<NotificationProps> = ({
//   notificationType,
//   notificationMessage,
// }) => {
//   const showToast = () => {
//     if (notificationType === "toastDark") {
//       toast.dark(notificationMessage);
//     }
//     if (notificationType === "toastError") {
//       toast.error(notificationMessage);
//     }
//     if (notificationType === "toastInfo") {
//       toast.info(notificationMessage);
//     }
//     if (notificationType === "toastSuccess") {
//       toast.success(notificationMessage);
//     }
//     if (notificationType === "toastWarn") {
//       toast.warn(notificationMessage);
//     }
//   };

//   return (
//     <div>
//       <h3>Toast Notification in React </h3>
//       <button className="btn" onClick={showToast}>
//         {notificationMessage}
//       </button>
//       <ToastContainer
//         position="bottom-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />
//     </div>
//   );
// };

// export default ToastNotification;
