// Define a base URL constant
// const BASE_URL = "http://49.249.95.65:4061/auth/api/v1";

const BASE_URL = "http://49.249.95.65:4061/auth/api/v2";
// const BASE_URL = `http://192.168.121.82:8000/auth/api/v2`;



// Register Payload and Response Interfaces
export interface RegisterPayload {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    phone: string;
    organisation: string;
}

export interface RegisterResponse {
    success: boolean;
    message: string;
    data?: any; // Modify based on the actual API response structure
}

// Function to register an organization
export const registerOrganization = async (data: RegisterPayload): Promise<RegisterResponse> => {
    const url = `${BASE_URL}/register`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        // Check for successful response
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const responseData: RegisterResponse = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error during registration:', error);
        throw error;
    }
};

// Login Payload and Response Interfaces
export interface LoginPayload {
    email: string;
    password: string;
}

export interface LoginResponse {
    success: boolean;
    message: string;
    token?: string; // You can adjust this based on your API response
    user?: any; // Optional, depends on the structure of the API response
}

// Function to log in a user
export const loginUser = async (data: LoginPayload): Promise<LoginResponse> => {
    const url = `${BASE_URL}/login`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        // Check if response is ok
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const responseData: LoginResponse = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

export const sendOtp = async (payload: { email: string; otp: number }) => {
    const url = `${BASE_URL}/verifyOTP`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: payload.email,
                otp: payload.otp,
            }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return response.json();
    } catch (error) {
        console.error('Error sending OTP:', error);
        throw error;
    }
};

export interface CompleteProfilePayload {
    email: string;
    role: string;
    interests: string[];
    team_size: string;
    subscriptions: {
        ambiguity_checkcer: boolean;
        mind_maps: boolean;
        test_scenarios: boolean;
    };
    org_name: string;
}

export interface CompleteProfileResponse {
    success: boolean;
    message: string;
    data?: any; // Modify based on the actual API response structure
}

// Function to complete the user profile
export const completeProfile = async (data: CompleteProfilePayload): Promise<CompleteProfileResponse> => {
    const url = `${BASE_URL}/completeProfile`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        // Check for successful response
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const responseData: CompleteProfileResponse = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error during completing profile:', error);
        throw error;
    }
};

