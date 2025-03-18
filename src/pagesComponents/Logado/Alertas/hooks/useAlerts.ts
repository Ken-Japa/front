import { useState, useEffect, useCallback } from "react";
import { Alert } from "../types";
import { alertsService } from "../services/alertsService";

export const useAlerts = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAlerts = useCallback(async () => {
    try {
      setLoading(true);
      const data = await alertsService.getAlerts();
      setAlerts(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch alerts");
    } finally {
      setLoading(false);
    }
  }, []);

  const createAlert = async (alertData: Omit<Alert, "id">) => {
    try {
      const newAlert = await alertsService.createAlert(alertData);
      setAlerts((prev) => [...prev, newAlert]);
      return newAlert;
    } catch (err) {
      setError("Failed to create alert");
      throw err;
    }
  };

  const updateAlert = async (alert: Alert) => {
    try {
      const updatedAlert = await alertsService.updateAlert(alert);
      setAlerts((prev) =>
        prev.map((a) => (a.id === alert.id ? updatedAlert : a))
      );
      return updatedAlert;
    } catch (err) {
      setError("Failed to update alert");
      throw err;
    }
  };

  const deleteAlert = async (id: number) => {
    try {
      await alertsService.deleteAlert(id);
      setAlerts((prev) => prev.filter((a) => a.id !== id));
    } catch (err) {
      setError("Failed to delete alert");
      throw err;
    }
  };

  const toggleAlert = async (id: number, active: boolean) => {
    try {
      await alertsService.toggleAlert(id, active);
      setAlerts((prev) =>
        prev.map((a) => (a.id === id ? { ...a, active } : a))
      );
    } catch (err) {
      setError("Failed to toggle alert");
      throw err;
    }
  };

  useEffect(() => {
    fetchAlerts();
  }, [fetchAlerts]);

  return {
    alerts,
    loading,
    error,
    createAlert,
    updateAlert,
    deleteAlert,
    toggleAlert,
    refreshAlerts: fetchAlerts,
  };
};
