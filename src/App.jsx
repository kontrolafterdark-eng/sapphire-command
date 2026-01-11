import React, { useState } from 'react';
import { ChevronRight, Plus, Download, Share2, Calendar, TrendingUp, Lock, Sparkles } from 'lucide-react';

export default function LuxuryDashboardSuite() {
  const [activeDashboard, setActiveDashboard] = useState('onboarding');
  const [clientData] = useState({
    name: 'Margaret Chen',
    status: 'Active Retainer',
    investmentTotal: '$485,000',
  });

  const dashboards = [
    { id: 'onboarding', name: 'Style Profile', icon: '✦' },
    { id: 'wardrobe', name: 'Wardrobe Audit', icon: '◆' },
    { id: 'event', name: 'Event Prep', icon: '●' },
    { id: 'lookbook', name: 'Private Lookbook', icon: '■' },
    { id: 'evolution', name: 'Brand Evolution', icon: '▲' },
    { id: 'concierge', name: 'Style Intelligence', icon: '★' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <div className="border-b border-blue-900/30 bg-slate-900/50 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-light text-white tracking-wide">Sapphire Command</h1>
              <p className="text-blue-300/60 text-sm mt-1">Luxury styling & brand consultancy</p>
            </div>
            <div className="text-right">
              <p className="text-white font-light">{clientData.name}</p>
              <p className="text-blue-300/60 text-xs">{clientData.status}</p>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {dashboards.map((dash) => (
              <button
                key={dash.id}
                onClick={() => setActiveDashboard(dash.id)}
                className={`px-4 py-2 rounded-sm text-sm font-light whitespace-nowrap transition-all ${
                  activeDashboard === dash.id
                    ? 'bg-blue-600/80 text-white border border-blue-400/50'
                    : 'bg-slate-800/40 text-blue-300/70 border border-slate-700/50 hover:bg-slate-800/60'
                }`}
              >
                {dash.icon} {dash.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <KPICard label="Active Projects" value="6" color="blue" />
          <KPICard label="Total Value" value="$485K" color="amber" />
          <KPICard label="Client Status" value="Premium" color="emerald" />
          <KPICard label="Next Session" value="Feb 14" color="purple" />
        </div>
        
        <div className="mt-8 bg-slate-800/30 border border-slate-700/50 rounded-sm p-8">
          <h2 className="text-white text-2xl font-light mb-4">Sapphire Command Dashboard</h2>
          <p className="text-slate-300 font-light">Luxury fashion styling & personal brand consultancy platform for ultra-high-net-worth individuals</p>
        </div>
      </div>
    </div>
  );
}

function KPICard({ label, value, color }) {
  const colorMap = {
    blue: 'from-blue-900/40 to-blue-900/20 border-blue-700/30 text-blue-300',
    emerald: 'from-emerald-900/40 to-emerald-900/20 border-emerald-700/30 text-emerald-300',
    purple: 'from-purple-900/40 to-purple-900/20 border-purple-700/30 text-purple-300',
    amber: 'from-amber-900/40 to-amber-900/20 border-amber-700/30 text-amber-300',
  };

  return (
    <div className={`bg-gradient-to-br ${colorMap[color]} border rounded-sm p-4`}>
      <p className="text-slate-400 text-xs tracking-wide mb-2">{label}</p>
      <p className="text-xl font-light text-white">{value}</p>
    </div>
  );
}
