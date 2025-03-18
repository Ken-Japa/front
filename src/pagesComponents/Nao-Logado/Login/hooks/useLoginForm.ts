import { useState, useEffect } from "react";
import { validateLoginForm } from "../utils/validation";
import { FormData, FormErrors } from "../types";
import { signIn } from "next-auth/react";

export const useLoginForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const [blockTimer, setBlockTimer] = useState(0);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    const newErrors = validateLoginForm(formData.email, formData.password);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isBlocked) return;

    if (validateForm()) {
      try {
        const searchParams = new URLSearchParams(window.location.search);
        const callbackUrl = searchParams.get("callbackUrl") || "/visao-economia";

        const result = await signIn("credentials", {
          email: formData.email,
          password: formData.password,
          redirect: false,
          callbackUrl,
          remember: rememberMe,
        });

        if (result?.error) {
          setLoginAttempts((prev) => {
            const newAttempts = prev + 1;
            if (newAttempts >= 5) {
              const blockDuration = 5 * 60 * 1000;
              const blockedUntil = Date.now() + blockDuration;
              localStorage.setItem(
                "loginBlockedUntil",
                blockedUntil.toString()
              );
              setIsBlocked(true);
              setBlockTimer(300);
              return 0;
            }
            return newAttempts;
          });
        } else {
          window.location.href = result?.url || "/visao-economia";
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const callbackUrl = searchParams.get("callbackUrl") || "/visao-economia";

      await signIn("google", {
        callbackUrl,
        redirect: true,
      });
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  useEffect(() => {
    const blockedUntil = localStorage.getItem("loginBlockedUntil");
    if (blockedUntil) {
      const timeLeft = parseInt(blockedUntil) - Date.now();
      if (timeLeft > 0) {
        setIsBlocked(true);
        setBlockTimer(Math.ceil(timeLeft / 1000));
      } else {
        localStorage.removeItem("loginBlockedUntil");
      }
    }
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isBlocked && blockTimer > 0) {
      interval = setInterval(() => {
        setBlockTimer((prev) => {
          if (prev <= 1) {
            setIsBlocked(false);
            localStorage.removeItem("loginBlockedUntil");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isBlocked, blockTimer]);

  return {
    formData,
    errors,
    isBlocked,
    blockTimer,
    rememberMe,
    handleChange,
    handleSubmit,
    setRememberMe,
    handleGoogleSignIn,
  };
};
