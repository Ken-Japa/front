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
      setError("Falha ao buscar alertas");
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
      setError("Falha ao criar alerta");
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
      setError("Falha ao atualizar alerta");
      throw err;
    }
  };

  const deleteAlert = async (id: number) => {
    try {
      await alertsService.deleteAlert(id);
      setAlerts((prev) => prev.filter((a) => a.id !== id));
    } catch (err) {
      setError("Falha ao deletar alerta");
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
      setError("Falha ao vizualizar alerta");
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
