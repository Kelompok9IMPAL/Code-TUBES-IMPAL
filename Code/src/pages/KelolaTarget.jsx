import React from 'react';
import { MoreVertical } from 'lucide-react';
import TopStatsRow from '../components/TopStatsRow';
import { TARGETS_DATA } from '../data/mockData';

const KelolaTarget = () => {
  return (
    <div className="animate-in fade-in duration-300">
      <TopStatsRow />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden p-6">
          <h3 className="font-bold text-lg text-slate-800 mb-6">Daftar Staff dan Target Individu</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 rounded-lg">
                <tr className="text-slate-700">
                  <th className="px-4 py-3 font-semibold rounded-l-lg">Nama Staff</th>
                  <th className="px-4 py-3 font-semibold">Role</th>
                  <th className="px-4 py-3 font-semibold">Target Lead</th>
                  <th className="px-4 py-3 font-semibold">Target Closing</th>
                  <th className="px-4 py-3 font-semibold">Target Revenue</th>
                  <th className="px-4 py-3 font-semibold">ROAS Target</th>
                  <th className="px-4 py-3 font-semibold">Progress bar</th>
                  <th className="px-4 py-3 font-semibold rounded-r-lg">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {TARGETS_DATA.map((t, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-4 py-4 flex items-center gap-2">
                      <img src={`https://ui-avatars.com/api/?name=${t.name}&background=random`} alt={t.name} className="w-6 h-6 rounded-full" />
                      <span className="font-medium text-slate-700">{t.name}</span>
                    </td>
                    <td className="px-4 py-4 text-slate-600">{t.role}</td>
                    <td className="px-4 py-4 text-slate-600">{t.leads}</td>
                    <td className="px-4 py-4 text-slate-600">{t.closing}</td>
                    <td className="px-4 py-4 text-slate-600">{t.revenue}</td>
                    <td className="px-4 py-4 text-slate-600">{t.roas}</td>
                    <td className="px-4 py-4">
                      <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#2D2B52]" style={{width: `${t.progress}%`}}></div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <button className="text-slate-400 hover:text-slate-600">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-lg text-slate-800 mb-4">Tambah Cepat Staff Baru</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Name</label>
                <input type="text" placeholder="Name" className="w-full p-2 border border-slate-300 rounded-lg text-sm outline-none focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Role</label>
                <select className="w-full p-2 border border-slate-300 rounded-lg text-sm outline-none focus:border-indigo-500 bg-white">
                  <option>Role</option>
                  <option>Hacker</option>
                  <option>Hustler</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Target Assigment</label>
                <select className="w-full p-2 border border-slate-300 rounded-lg text-sm outline-none focus:border-indigo-500 bg-white">
                  <option>Target Assigment</option>
                  <option>Default KPI</option>
                </select>
              </div>
              <button type="button" className="w-full bg-[#2D2B52] hover:bg-indigo-900 text-white font-medium py-2.5 rounded-lg text-sm transition-colors mt-2">
                Tambah
              </button>
            </form>
          </div>
          <div className="bg-slate-100 rounded-2xl flex-1 border border-slate-200 min-h-[150px]"></div>
        </div>
      </div>
    </div>
  );
};

export default KelolaTarget;
