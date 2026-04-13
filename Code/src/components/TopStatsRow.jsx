import React from 'react';
import { Users, CheckCircle2, DollarSign, TrendingUp } from 'lucide-react';
import StatCard from './StatCard';

const TopStatsRow = () => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
    <StatCard title="Total Leads" value="1,248" icon={Users} color="bg-blue-400" trend="+5%" trendLabel="vs Target" />
    <StatCard title="Closing Deals" value="45" icon={CheckCircle2} color="bg-emerald-500" trend="+5%" trendLabel="vs Target" />
    <StatCard title="Total Revenue" value="RP 245,6M" icon={DollarSign} color="bg-amber-400" trend="-2%" trendLabel="vs Target" />
    <StatCard title="Marketing Spend" value="RP 48,2M" icon={TrendingUp} color="bg-indigo-500" trend="+8%" trendLabel="vs Target" />
  </div>
);

export default TopStatsRow;
