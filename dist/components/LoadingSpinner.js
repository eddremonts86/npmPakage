import { jsx as _jsx } from "react/jsx-runtime";
import { Loader2 } from "lucide-react";
import * as React from "react";
import { cn } from "../utils/cn";
const LoadingSpinner = React.forwardRef(({ className, size = "md", ...props }, ref) => {
    const sizeClasses = {
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-8 w-8",
    };
    return (_jsx("div", { ref: ref, className: cn("flex items-center justify-center", className), ...props, children: _jsx(Loader2, { className: cn("animate-spin", sizeClasses[size]) }) }));
});
LoadingSpinner.displayName = "LoadingSpinner";
export { LoadingSpinner };
