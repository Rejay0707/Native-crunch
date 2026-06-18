// src/components/common/Button.jsx

const Button = ({ children, className = "", variant = "primary" }) => {
  const variants = {
    primary: "bg-[#C97A34] text-white hover:bg-[#b56d2f]",

    secondary: "bg-white border border-gray-300 text-black",
  };

  return (
    <button
      className={`
      px-5
      py-3
      rounded-full
      text-sm
      font-medium
      transition
      ${variants[variant]}
      ${className}
    `}
    >
      {children}
    </button>
  );
};

export default Button;
