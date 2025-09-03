// const backendBaseUrl = '/api';

interface BackendService {
    /**
    * Check if the backend is running
    */
    checkBackendStatus(): Promise<boolean>;
}

// Use any network framework you want in here. You can also wrap this in SWR for frontend caching.
export const backendService: BackendService = {
    checkBackendStatus: async () => {
        const response = await fetch('/api/health');
        return response.ok;
    }
}