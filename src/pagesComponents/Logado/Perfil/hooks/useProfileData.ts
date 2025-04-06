import { useState, useEffect, useCallback } from "react";
import { Session } from "next-auth";
import { UserProfile } from "../types";
import { ProfileService } from "../services/api";
import { getUserId } from "@/utils/auth";

type NotificationType = {
  open: boolean;
  message: string;
  type: "success" | "error";
};

export const useProfileData = (session: Session | null) => {
  const [userData, setUserData] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notification, setNotification] = useState<NotificationType>({
    open: false,
    message: "",
    type: "success",
  });

  const formatDate = useCallback((dateString: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  }, []);

  useEffect(() => {
    if (session?.user) {
      if (session.user.name) {
        localStorage.setItem("userName", session.user.name);
        sessionStorage.setItem("userName", session.user.name);
      }
      if (session.user.email) {
        localStorage.setItem("userEmail", session.user.email);
        sessionStorage.setItem("userEmail", session.user.email);
      }
      if (session.user.id) {
        localStorage.setItem("userId", session.user.id);
        sessionStorage.setItem("userId", session.user.id);
      }
    }
  }, [session]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        const userId = getUserId(session);
        
        if (!userId) {
          throw new Error("User ID not found");
        }
        
        const data = await ProfileService.getUserProfile(userId);
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setNotification({
          open: true,
          message: "Erro ao carregar dados do perfil",
          type: "error",
        });
      } finally {
        setIsLoading(false);
      }
    };

    if (session) {
      fetchUserData();
    }
  }, [session]);

  const getDisplayValues = useCallback(() => {
    if (!userData && !session)
      return { name: "", email: "", phone: null, cpf: null };

    return {
      name: userData?.name || session?.user?.name || "",
      email: userData?.email || session?.user?.email || "",
      phone: userData?.phone || null,
      cpf: (userData as any)?.cpf || null,
    };
  }, [userData, session]);

  const displayValues = getDisplayValues();

  const displayCreatedAt = (userData as any)?.createdAt
    ? formatDate((userData as any).createdAt)
    : null;
  const displayUpdatedAt = (userData as any)?.updatedAt
    ? formatDate((userData as any).updatedAt)
    : null;
  const isActiveUser =
    (userData as any)?.isActive !== undefined
      ? (userData as any).isActive
      : true;

  const handleCloseNotification = () => {
    setNotification((prev) => ({ ...prev, open: false }));
  };

  return {
    userData,
    setUserData,
    isLoading,
    notification,
    setNotification,
    displayValues,
    displayCreatedAt,
    displayUpdatedAt,
    isActiveUser,
    handleCloseNotification,
  };
};
