import { useToast } from 'vue-toast-notification';



export const showNotification = (message, type) => {
    const toast = useToast();

    switch (type) {
        case 'success':
            toast.success(message, {
                position: 'top-right',
            });
            break;
        case 'error':
            toast.error(message, {
                position: 'top-right',
            });
            break;
        case 'warning':
            toast.warning(message, {
                position: 'top-right',
            });
            break;
        case 'info':
            toast.info(message, {
                position: 'top-right',
            });
            break;
        default:
            // Default to showing success notification if the type is not recognized
            toast.success(message, {
                position: 'top-right',
            });
    }
}

