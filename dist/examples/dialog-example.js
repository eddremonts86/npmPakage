import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@schilling-apps/schilling-widgets-system";
function DialogExample() {
    return (_jsxs(Dialog, { children: [_jsx(DialogTrigger, { asChild: true, children: _jsx(Button, { variant: "outline", children: "Open Dialog" }) }), _jsxs(DialogContent, { children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: "Are you sure?" }), _jsx(DialogDescription, { children: "This action cannot be undone. This will permanently delete your account and remove your data from our servers." })] }), _jsxs(DialogFooter, { children: [_jsx(Button, { variant: "outline", children: "Cancel" }), _jsx(Button, { variant: "destructive", children: "Delete Account" })] })] })] }));
}
export default DialogExample;
