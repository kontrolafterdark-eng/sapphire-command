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
        {activeDashboard === 'onboarding' && <StyleProfileBuilder />}
        {activeDashboard === 'wardrobe' && <WardrobeAudit />}
        {activeDashboard === 'event' && <EventPrepCommand />}
        {activeDashboard === 'lookbook' && <PrivateLookbook />}
        {activeDashboard === 'evolution' && <BrandEvolution />}
        {activeDashboard === 'concierge' && <StyleIntelligence />}
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
    rose: 'from-rose-900/40 to-rose-900/20 border-rose-700/30 text-rose-300',
  };

  return (
    <div className={`bg-gradient-to-br ${colorMap[color]} border rounded-sm p-4`}>
      <p className="text-slate-400 text-xs tracking-wide mb-2">{label}</p>
      <p className="text-xl font-light text-white">{value}</p>
    </div>
  );
}

function StyleProfileBuilder() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <KPICard label="Profile Completion" value="92%" color="emerald" />
        <KPICard label="Brand Affinities" value="23" color="blue" />
        <KPICard label="Pain Points" value="7" color="rose" />
        <KPICard label="Recommendations" value="Ready" color="amber" />
      </div>
      <div className="bg-slate-800/30 border border-slate-700/50 rounded-sm p-6">
        <h3 className="text-white font-light text-sm">Style Profile Builder</h3>
        <p className="text-slate-300 mt-3">Comprehensive intake & visual identity mapping for personalized styling.</p>
      </div>
    </div>
  );
}

function WardrobeAudit() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <KPICard label="Total Pieces" value="155" color="blue" />
        <KPICard label="Total Value" value="$355K" color="amber" />
        <KPICard label="Completion" value="100%" color="emerald" />
        <KPICard label="Gaps Found" value="4" color="rose" />
      </div>
      <div className="bg-slate-800/30 border border-slate-700/50 rounded-sm p-6">
        <h3 className="text-white font-light text-sm">Wardrobe Audit</h3>
        <p className="text-slate-300 mt-3">Inventory analysis & strategic gap identification for capsule expansion.</p>
      </div>
    </div>
  );
}

function EventPrepCommand() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <KPICard label="Upcoming Events" value="2" color="blue" />
        <KPICard label="Looks Curated" value="5" color="purple" />
        <KPICard label="Days to Event" value="66" color="amber" />
      </div>
      <div className="bg-slate-800/30 border border-slate-700/50 rounded-sm p-6">
        <h3 className="text-white font-light text-sm">Event Prep Command</h3>
        <p className="text-slate-300 mt-3">Red carpet to boardroom styling strategy with multi-look curation.</p>
      </div>
    </div>
  );
}

function PrivateLookbook() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <KPICard label="Collections" value="4" color="blue" />
        <KPICard label="Total Looks" value="48" color="purple" />
        <KPICard label="Protected" value="✓" color="emerald" />
        <KPICard label="Updated" value="Feb 2026" color="slate" />
      </div>
      <div className="bg-slate-800/30 border border-slate-700/50 rounded-sm p-6">
        <h3 className="text-white font-light text-sm">Private Lookbook</h3>
        <p className="text-slate-300 mt-3">Password-protected outfit archives & styling notes for ongoing reference.</p>
      </div>
    </div>
  );
}

function BrandEvolution() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <KPICard label="Stage" value="3/5" color="blue" />
        <KPICard label="Sentiment" value="+38%" color="emerald" />
        <KPICard label="Mentions" value="12" color="amber" />
        <KPICard label="Next Phase" value="Q2 2026" color="purple" />
      </div>
      <div className="bg-slate-800/30 border border-slate-700/50 rounded-sm p-6">
        <h3 className="text-white font-light text-sm">Brand Evolution</h3>
        <p className="text-slate-300 mt-3">Personal brand milestones & public sentiment analysis over time.</p>
      </div>
    </div>
  );
}

function StyleIntelligence() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <KPICard label="Status" value="Active" color="emerald" />
        <KPICard label="Briefings" value="3" color="blue" />
        <KPICard label="Items Curated" value="24" color="amber" />
        <KPICard label="Member Since" value="Q2 2025" color="purple" />
      </div>
      <div className="bg-slate-800/30 border border-slate-700/50 rounded-sm p-6">
        <h3 className="text-white font-light text-sm">Style Intelligence</h3>
        <p className="text-slate-300 mt-3">Monthly trend briefings & curated recommendations for top-tier members.</p>
      </div>
    </div>
  );
}q!
^O WriteOut
exit
q
Q
wq
q
:q

