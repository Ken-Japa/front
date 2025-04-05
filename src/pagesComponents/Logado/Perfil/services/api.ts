import { UserProfile, SubscriptionDetails } from "../types";

const API_URL = "https://api-servidor-yupg.onrender.com";

export const ProfileService = {
  getUserProfile: async (userId: string): Promise<UserProfile> => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) throw new Error("No authentication token found");

      // Try the correct endpoint format - using /user instead of /users
      const response = await fetch(`${API_URL}/user/read/${userId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      return data.data || data;
    } catch (error) {
      console.error("Error fetching user profile:", error);
      // Return a minimal profile to prevent UI errors
      return {
        id: userId,
        name: "",
        email: "",
        phone: null,
        preferences: {
          theme: "light",
          notifications: false,
        },
      };
    }
  },

  // Also update the updateUserProfile method
  updateUserProfile: async (
    userId: string,
    data: Partial<UserProfile>
  ): Promise<UserProfile> => {
    const token = localStorage.getItem("authToken");
    if (!token) throw new Error("No authentication token found");

    const response = await fetch(`${API_URL}/user/update/${userId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      // Try alternative endpoint
      const altResponse = await fetch(`${API_URL}/user/profile`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!altResponse.ok) {
        throw new Error("Failed to update user profile");
      }

      const responseData = await altResponse.json();
      return responseData.data || responseData;
    }

    const responseData = await response.json();
    return responseData.data || responseData;
  },

  updatePassword: async (
    userId: string,
    oldPassword: string,
    newPassword: string
  ): Promise<void> => {
    const token = localStorage.getItem("authToken");
    if (!token) throw new Error("No authentication token found");

    const response = await fetch(`${API_URL}/user/update-password/${userId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        oldPassword,
        newPassword,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update password");
    }
  },

  getSubscriptionDetails: async (
    userId: string
  ): Promise<SubscriptionDetails> => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) throw new Error("No authentication token found");

      const response = await fetch(`${API_URL}/subscriptions/${userId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch subscription details");
      }

      const data = await response.json();
      return data.data || data;
    } catch (error) {
      console.error("Error fetching subscription:", error);
      // Return placeholder subscription data
      return {
        id: "",
        planId: "",
        planName: "Plano Básico",
        status: "active",
        startDate: new Date().toISOString(),
        nextBillingDate: new Date(
          Date.now() + 30 * 24 * 60 * 60 * 1000
        ).toISOString(),
        paymentMethod: {
          type: "credit_card",
        },
      };
    }
  },

  updateSubscription: async (
    userId: string,
    planId: string
  ): Promise<SubscriptionDetails> => {
    const token = localStorage.getItem("authToken");
    if (!token) throw new Error("No authentication token found");

    const response = await fetch(`${API_URL}/subscriptions/${userId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ planId }),
    });

    if (!response.ok) {
      throw new Error("Failed to update subscription");
    }

    const data = await response.json();
    return data.data || data;
  },
};
