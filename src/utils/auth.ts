export function getAuthToken(): string | null {
  const localToken = localStorage.getItem("authToken");
  if (localToken) return localToken;

  const cookieToken = getCookie("authToken") || getCookie("clientAuthToken");
  if (cookieToken) return cookieToken;

  const userId = getUserIdNoConsole();
  if (userId && userId.includes("@") === false) {
    const tempToken = `google_${userId}`;
    localStorage.setItem("authToken", tempToken);
    return tempToken;
  }

  return null;
}

function getUserIdNoConsole(): string | null {
  const localUserId = localStorage.getItem("userId");
  if (localUserId) return localUserId;

  const cookieUserId = getCookie("userId");
  if (cookieUserId) return cookieUserId;

  const sessionData = sessionStorage.getItem("nextauth.session");
  if (sessionData) {
    try {
      const session = JSON.parse(sessionData);
      if (session?.user?.id) return session.user.id;
      if (session?.user?.email) return session.user.email;
    } catch (e) {}
  }

  return null;
}

export function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const cookieValue = parts.pop()?.split(";").shift() || null;
    return cookieValue;
  }
  return null;
}

export function getUserId(session: any): string | null {
  const localUserId = localStorage.getItem("userId");
  if (localUserId) return localUserId;

  const cookieUserId = getCookie("userId");
  if (cookieUserId) return cookieUserId;

  if (session?.user?.id) return session.user.id;
  if (session?.user?.email) return session.user.email;

  return null;
}

export function clearAuthData(): void {
  localStorage.removeItem("authToken");
  localStorage.removeItem("userId");

  document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
