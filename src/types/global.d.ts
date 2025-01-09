interface Window {
    google?: {
        accounts: {
            id: {
                initialize: (options: {
                    client_id: string;
                    callback: (response: { credential: string }) => void;
                    cancel_on_tap_outside?: boolean;
                    context?: string;
                }) => void;
                renderButton: (element: HTMLElement | null, options: { type?: string; theme: string; size: string }) => void;
                prompt: () => void;
            };
        };
    };
}
