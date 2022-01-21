import SweetAlert from "react-bootstrap-sweetalert";
//      {errorAlert && alertSweet('error', alertMessage, false, false, setErrorAlert(!errorAlert), '', 2500)}

export const alertSweet = (type, title, showCancel, showConfirm, onConfirm, confirmValue, onCancel, cancelValue, timeOut, confirmBtnText, confirmBtnBsStyle) => {
  return (
    <SweetAlert
      showCancel={showCancel}
      type={type}
      showConfirm={showConfirm}
      title={title}
      onConfirm={() => onConfirm(confirmValue)}
      onCancel={() => onCancel(cancelValue)}
      timeout={timeOut}
      confirmBtnText={confirmBtnText}
      confirmBtnBsStyle={confirmBtnBsStyle}
    ></SweetAlert>
  );
};

