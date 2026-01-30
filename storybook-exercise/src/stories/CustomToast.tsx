type Status = "SUCCESS" | "WARNING" | "ERROR";

type Props = {
  status: Status;
  text: string;
  hasIcon?: boolean;
};

const CustomToast = ({ status, text, hasIcon = true }: Props) => {
  const toastStyle = {
    padding: "12px 16px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontFamily: "Arial, sans-serif",
    minWidth: "260px",
  };

  const successStyle = {
    backgroundColor: "#90EE90",
  };

  const warningStyle = {
    backgroundColor: "#ffd8a8",
  };

  const errorStyle = {
    backgroundColor: "#ffc9c9",
  };

  const getStyle = () => {
    if (status === "SUCCESS") return successStyle;
    if (status === "WARNING") return warningStyle;
    return errorStyle;
  };

  const getIcon = () => {
    if (!hasIcon) return null;
    if (status === "SUCCESS") return "✅";
    if (status === "WARNING") return "⚠️";
    return "❌";
  };

  return (
    <div
      style={{
        ...toastStyle,
        ...getStyle(),
      }}
    >
      {hasIcon && <span>{getIcon()}</span>}
      <span>{text}</span>
    </div>
  );
};

export default CustomToast;
