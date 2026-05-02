import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-teal-500 text-white hover:bg-teal-600 shadow-lg hover:shadow-glow active:scale-95",
        secondary:
          "border-2 border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white active:scale-95",
        ghost: "text-gray-300 hover:text-teal-400 hover:bg-teal-400/10",
        outline:
          "border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white",
      },
      size: {
        sm: "h-9 px-4 py-2 text-xs",
        default: "h-11 px-6 py-3 text-sm",
        lg: "h-12 px-8 py-3 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref,
  ) => {
    const isIconOnly = size === "icon";

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {leftIcon && (
          <span
            className={cn(
              "flex items-center justify-center transition-transform duration-200",
              !isIconOnly && children && "group-hover:scale-110",
            )}
          >
            {leftIcon}
          </span>
        )}
        {children && !isIconOnly && (
          <span className="flex items-center justify-center">{children}</span>
        )}
        {isIconOnly && children}
        {rightIcon && (
          <span
            className={cn(
              "flex items-center justify-center transition-transform duration-200",
              !isIconOnly && children && "group-hover:translate-x-1",
            )}
          >
            {rightIcon}
          </span>
        )}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
