import React, { forwardRef } from "react";

const Button = forwardRef(
  (
    { variant = "default", size = "md", children, className = "", ...props },
    ref
  ) => {
    const baseStyles =
      "font-medium rounded-lg transition-all duration-200 inline-flex items-center justify-center";

    const variantStyle = {
      default:
        "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:from-blue-700 hover:to-purple-700",
      outline:
        "border-2 border-[#9175dd] text-[#9175dd] hover:bg-[#9175dd] hover:text-black transition-colors",
      ghost: "text-gray-700 hover:bg-gray-100",
      new: "bg-gradient-to-tr from-gray-900 to-[#9175dd] text-black hover:from-black hover:to-[#9175dd] transition-colors",
    };

    const sizeStyles = {
      sm: "text-sm px-3 py-1.5",
      md: "text-base px-5 py-2.5",
      lg: "text-lg px-6 py-3",
    };

    const combinedClassName = `${baseStyles} ${variantStyle[variant]} ${sizeStyles[size]} ${className}`;

    return (
      <button className={combinedClassName} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

export default Button;
