"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface Stats {
  totalViews: number;
  viewsByDay: { _id: string; count: number }[];
  topPages: { _id: string; count: number }[];
  viewsByDevice: { _id: string; count: number }[];
  trafficSources: { _id: string; count: number }[];
  contactsByDay: { _id: string; count: number }[];
  conversionRate: string;
  totalContacts: number;
}

export default function AnalyticsAdminPage() {
  const router = useRouter();
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState("30");

  useEffect(() => {
    fetchStats();
  }, [period]);

  const fetchStats = async () => {
    try {
      const response = await fetch(`/api/analytics/stats?period=${period}`);
      const data = await response.json();
      if (data.success) {
        setStats(data.stats);
      }
    } catch (error) {
      console.error("Erreur lors du chargement des stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/admin", { method: "DELETE" });
      router.push("/admin-login");
    } catch (error) {
      console.error("Erreur de déconnexion:", error);
    }
  };

  const COLORS = ["#31ade1", "#f9c81c", "#222359", "#4ade80", "#f87171"];

  const deviceLabels: Record<string, string> = {
    mobile: "Mobile",
    tablet: "Tablette",
    desktop: "Ordinateur",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative w-32 h-12">
                <div className="absolute inset-0 bg-primary rounded-2xl -rotate-1" />
                <Image
                  src="/logo-white.png"
                  alt="Vanland Voyage"
                  fill
                  className="object-contain p-2 relative z-10"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-navy">Analytics</h1>
                <p className="text-sm text-gray-600">Statistiques du site</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <select
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                className="px-4 py-2 border-2 border-gray-200 rounded-2xl text-navy font-semibold focus:border-secondary focus:outline-none"
              >
                <option value="7">7 derniers jours</option>
                <option value="30">30 derniers jours</option>
                <option value="90">90 derniers jours</option>
              </select>
              <a
                href="/administration"
                className="px-4 py-2 text-gray-700 hover:text-secondary transition-colors"
              >
                ← Retour
              </a>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-2xl hover:bg-red-600 transition-colors"
              >
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 lg:px-8 py-8">
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-secondary"></div>
            <p className="mt-4 text-gray-600">Chargement des statistiques...</p>
          </div>
        ) : stats ? (
          <div className="space-y-6">
            {/* Cartes de résumé */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-100"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-gray-500">Vues totales</h3>
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <p className="text-4xl font-bold text-navy">{stats.totalViews.toLocaleString()}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-100"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-gray-500">Contacts reçus</h3>
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-4xl font-bold text-navy">{stats.totalContacts}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-100"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-gray-500">Taux de conversion</h3>
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <p className="text-4xl font-bold text-navy">{stats.conversionRate}%</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-100"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-gray-500">Moy. par jour</h3>
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="text-4xl font-bold text-navy">
                  {Math.round(stats.totalViews / parseInt(period))}
                </p>
              </motion.div>
            </div>

            {/* Graphiques */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Vues par jour */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-100"
              >
                <h3 className="text-xl font-bold text-navy mb-4">Vues par jour</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={stats.viewsByDay}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="_id" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="count" stroke="#31ade1" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </motion.div>

              {/* Appareils */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-100"
              >
                <h3 className="text-xl font-bold text-navy mb-4">Répartition par appareil</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={stats.viewsByDevice.map(d => ({ name: deviceLabels[d._id] || d._id, value: d.count }))}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={(props: unknown) => {
                        const { name, percent } = props as { name: string; percent: number };
                        return `${name} ${(percent * 100).toFixed(0)}%`;
                      }}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {stats.viewsByDevice.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </motion.div>
            </div>

            {/* Pages populaires */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-100"
            >
              <h3 className="text-xl font-bold text-navy mb-4">Pages les plus visitées</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={stats.topPages}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="_id" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#31ade1" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Sources de trafic */}
            {stats.trafficSources.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-100"
              >
                <h3 className="text-xl font-bold text-navy mb-4">Sources de trafic</h3>
                <div className="space-y-3">
                  {stats.trafficSources.map((source, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl">
                      <span className="text-sm text-navy truncate flex-1">{source._id}</span>
                      <span className="text-sm font-bold text-secondary ml-4">{source.count} visites</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Contacts par jour */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-100"
            >
              <h3 className="text-xl font-bold text-navy mb-4">Demandes de contact par jour</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={stats.contactsByDay}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="_id" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="count" stroke="#f9c81c" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500">Aucune donnée disponible</p>
          </div>
        )}
      </main>
    </div>
  );
}

