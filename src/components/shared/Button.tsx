import React from 'react';

interface Props {
  size?: "sm" | "md" | "lg";
  block?: boolean;
  style?: "outline" | "primary" | "inverted";
  className?: string;
  [x: string]: any;
}

const Button: React.FC<Props> = ({ size = "md", style = "primary", block, className, ...rest }) => {
  const sizes = {
    sm: "btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-xl xl:mt-10 md:mt-5 ml-4",
    md: "px-5 py-2.5",
    lg: "px-6 py-3",
  };

  const styles = {
    outline:
      "border-2 border-primary text-default dark:hover:bg-carbonFiber-500 hover:bg-carbonFiber-100 hover:text-white",
    primary:
      "btn btn-md lg:btn-lg rounded-xl bg-green-950 hover:bg-green-800 dark:text-grey",
    inverted: "bg-black text-white",
  };

  return (
    <button
      {...rest}
      className={[
        "rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
        block && "w-full",
        sizes[size],
        styles[style],
        className,
      ].filter(Boolean).join(' ')}
    >
      {rest.children}
    </button>
  );
};

export default Button;
