import toast from "react-hot-toast";

export function success(message) {
  toast.success(message);
}

export function error(message) {    
    toast.error(message);
}

export function loading(message) {
    toast.loading(message);
}