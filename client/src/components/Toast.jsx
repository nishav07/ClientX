import { useEffect } from "react";

export default function Toast({ msg, type = "success", onClose }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onClose]);

  const styles = {
    success: "bg-green-500 border-green-700",
    error: "bg-red-500 border-red-700",
    warning: "bg-yellow-500 border-yellow-700 text-black",
    info: "bg-blue-500 border-blue-700",
  };

  return (
    <div className="fixed top-5 right-5 z-50 animate-bounce">
      <div
        className={`min-w-[280px] max-w-sm px-4 py-3 rounded-xl border shadow-lg text-white flex items-center justify-between gap-3 ${styles[type]}`}
      >
        <p className="text-sm font-medium">{msg}</p>

        <button
          onClick={onClose}
          className="text-lg font-bold opacity-70 hover:opacity-100"
        >
          ×
        </button>
      </div>
    </div>
  );
}
