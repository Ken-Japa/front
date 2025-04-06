import { UserProfile, SubscriptionDetails } from "../types";
import { getAuthToken } from "@/utils/auth";

const API_URL = "https://api-servidor-yupg.onrender.com";

export const ProfileService = {
  getUserProfile: async (userId: string): Promise<UserProfile> => {
    try {
      const token = getAuthToken();
      const isGoogleId = userId.includes("@") === false && userId.length > 20;

      if (!token && !isGoogleId) {
        throw new Error("No authentication token found");
      }

      if (isGoogleId) {
        try {
          const response = await fetch(`${API_URL}/user/read/${userId}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (response.ok) {
            const data = await response.json();
            return data.data || data;
          }
        } catch (error) {
          console.error("Error with direct profile access:", error);
        }
      }

      if (token) {
        const response = await fetch(`${API_URL}/user/read/${userId}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          return data.data || data;
        }
      }

      return {
        id: userId,
        name:
          localStorage.getItem("userName") ||
          sessionStorage.getItem("userName") ||
          "",
        email:
          localStorage.getItem("userEmail") ||
          sessionStorage.getItem("userEmail") ||
          "",
        phone: null,
        preferences: {
          theme: "light",
          notifications: false,
        },
      };
    } catch (error) {
      console.error("Error fetching user profile:", error);
      return {
        id: userId,
        name:
          localStorage.getItem("userName") ||
          sessionStorage.getItem("userName") ||
          "",
        email:
          localStorage.getItem("userEmail") ||
          sessionStorage.getItem("userEmail") ||
          "",
        phone: null,
        preferences: {
          theme: "dark",
          notifications: false,
        },
      };
    }
  },

  updateUserProfile: async (
    userId: string,
    data: Partial<UserProfile>
  ): Promise<UserProfile> => {
    try {
      const token = getAuthToken();
      const isGoogleId = userId.includes("@") === false && userId.length > 20;

      if (!token && !isGoogleId) {
        throw new Error("No authentication token found");
      }

      if (isGoogleId) {
        try {
          const response = await fetch(`${API_URL}/user/update/${userId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          if (response.ok) {
            const responseData = await response.json();
            return responseData.data || responseData;
          }
        } catch (error) {
          console.error("Error with direct profile access:", error);
        }
      }

      if (token) {
        const response = await fetch(`${API_URL}/user/update/${userId}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          const responseData = await response.json();
          return responseData.data || responseData;
        }
      }

      throw new Error("Failed to update user profile");
    } catch (error) {
      console.error("Error updating user profile:", error);
      throw error;
    }
  },

  updatePassword: async (
    userId: string,
    oldPassword: string,
    newPassword: string
  ): Promise<void> => {
    const token = getAuthToken();
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
      const token = getAuthToken();
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
    const token = getAuthToken();
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
