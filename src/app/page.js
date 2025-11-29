'use client';

import React from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Eye, Globe, Video, Clock } from 'lucide-react';

const PerformanceReport = () => {
  // Key Metrics Comparison Data
  const metricsComparison = [
    {
      metric: 'Views',
      before: 6400,
      after: 73100,
      beforeLabel: '6.4K',
      afterLabel: '73.1K',
      improvement: '+1,042%',
      color: '#3b82f6'
    },
    {
      metric: 'Watch Time (Hours)',
      before: 273,
      after: 836.5,
      beforeLabel: '273',
      afterLabel: '836.5',
      improvement: '+206%',
      color: '#8b5cf6'
    },
    {
      metric: 'Subscribers',
      before: 52,
      after: 76,
      beforeLabel: '+52',
      afterLabel: '+76',
      improvement: '+46%',
      color: '#10b981'
    },
    {
      metric: 'Monthly Audience',
      before: 7700,
      after: 32900,
      beforeLabel: '7.7K',
      afterLabel: '32.9K',
      improvement: '+327%',
      color: '#f59e0b'
    }
  ];

  // Content Performance
  const contentData = [
    { period: 'Before (Oct 27-Nov 10)', videos: 24, views: 6200, avgDuration: 156 },
    { period: 'After (Nov 11-25)', videos: 34, views: 72800, avgDuration: 88 }
  ];

  // Audience Demographics Comparison
  const demographicsData = [
    { age: '18-24', before: 13.8, after: 11.1 },
    { age: '25-34', before: 28.1, after: 32.9 },
    { age: '35-44', before: 22.9, after: 19.7 },
    { age: '45-54', before: 21.1, after: 15.5 },
    { age: '55-64', before: 9.2, after: 12.3 }
  ];

  // Gender Distribution
  const genderBefore = [
    { name: 'Male', value: 89.2, color: '#3b82f6' },
    { name: 'Female', value: 10.8, color: '#ec4899' }
  ];

  const genderAfter = [
    { name: 'Male', value: 72.7, color: '#3b82f6' },
    { name: 'Female', value: 27.4, color: '#ec4899' }
  ];

  return (
    <div className="min-h-screen text-black bg-gradient-to-br from-slate-50 via-white to-slate-100 p-3 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Professional Header */}
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-10 mb-6 md:mb-8 border-l-4 md:border-l-8 border-orange-500">
          <div className="text-center">
            <div className="inline-block bg-orange-50 px-3 md:px-6 py-1 md:py-2 rounded-full mb-3 md:mb-4">
              <span className="text-orange-600 font-semibold text-xs md:text-sm tracking-wide uppercase">Performance Report</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-3 tracking-tight">Veer Bharat</h1>
            <h2 className="text-lg md:text-2xl font-medium text-gray-600 mb-4 md:mb-6">YouTube Channel Analytics</h2>
            <div className="grid md:grid-cols-2 gap-3 md:gap-4 max-w-3xl mx-auto text-left bg-gray-50 p-4 md:p-6 rounded-lg">
              <div>
                <span className="text-gray-500 text-xs md:text-sm font-medium block mb-1">Previous Period</span>
                <span className="text-gray-900 font-semibold text-sm md:text-base">October 27 - November 10, 2025</span>
              </div>
              <div>
                <span className="text-gray-500 text-xs md:text-sm font-medium block mb-1">Management Period</span>
                <span className="text-gray-900 font-semibold text-sm md:text-base">November 11 - November 25, 2025</span>
              </div>
            </div>
            {/* <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-600">Submitted by: <span className="font-semibold text-gray-800">Sanskriti Department Manager</span></p> */}
          </div>
        </div>

        {/* Executive Summary - Softer Design */}
        <div className="bg-gradient-to-br from-slate-700 via-slate-800 to-gray-900 rounded-xl shadow-lg p-6 md:p-10 mb-6 md:mb-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <TrendingUp className="w-6 h-6 md:w-10 md:h-10" />
              <h2 className="text-xl md:text-3xl font-bold">Executive Summary</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 text-black">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white border-opacity-20">
                <h3 className="text-base md:text-xl font-semibold mb-3 md:mb-4 flex items-center gap-2">
                  <span className=" bg-opacity-20 rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center text-xs md:text-sm">✓</span>
                  Key Achievements
                </h3>
                <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-900">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Views increased by over 1,000% (6.4K → 73.1K)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Watch time increased by 206% (273h → 836.5h)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Monthly audience grew by 327% (7.7K → 32.9K)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Published 34 videos (vs 24 in previous period)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>New viewers increased by 571% (4.2K → 28.2K)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white border-opacity-20">
                <h3 className="text-base md:text-xl font-semibold mb-3 md:mb-4 flex items-center gap-2">
                  <span className="bg-white bg-opacity-20 rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center text-xs md:text-sm">↑</span>
                  Strategic Improvements
                </h3>
                <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-900">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Enhanced content output by 42% (10 more videos)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Improved audience diversity and reach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Better gender balance (Female: 10.8% → 27.4%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Geographic expansion (India: 94.1% → 60.7%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Consistent upload schedule maintained</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Cards - Enhanced Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          {metricsComparison.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 md:p-6 border border-gray-100 hover:border-gray-200">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider">{item.metric}</h3>
                {index === 0 && <Eye className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />}
                {index === 1 && <Clock className="w-4 h-4 md:w-5 md:h-5 text-purple-500" />}
                {index === 2 && <Users className="w-4 h-4 md:w-5 md:h-5 text-green-500" />}
                {index === 3 && <Globe className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />}
              </div>
              <div className="flex justify-between items-end mb-3 md:mb-4">
                <div>
                  <p className="text-gray-400 text-xs font-medium mb-1">Before</p>
                  <p className="text-lg md:text-xl font-bold text-gray-600">{item.beforeLabel}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-xs font-medium mb-1">After</p>
                  <p className="text-2xl md:text-3xl font-bold" style={{color: item.color}}>{item.afterLabel}</p>
                </div>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <span className="bg-green-50 text-green-700 px-2 md:px-3 py-1 md:py-1.5 rounded-lg text-xs md:text-sm font-bold inline-block">
                  {item.improvement}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Views Comparison Chart - Modern Design */}
        <div className="bg-white rounded-xl shadow-md p-4 md:p-8 mb-6 md:mb-8 border border-gray-100">
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <div className="bg-blue-50 p-2 md:p-3 rounded-lg">
              <Eye className="w-4 h-4 md:w-6 md:h-6 text-blue-600" />
            </div>
            <h2 className="text-lg md:text-2xl font-bold text-gray-800">Views Performance Comparison</h2>
          </div>
          <ResponsiveContainer width="100%" height={250} className="md:hidden">
            <BarChart data={metricsComparison}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="metric" tick={{fill: '#6b7280', fontSize: 10}} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{fill: '#6b7280', fontSize: 10}} />
              <Tooltip contentStyle={{borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '12px'}} />
              <Legend wrapperStyle={{paddingTop: '10px', fontSize: '11px'}} />
              <Bar dataKey="before" fill="#cbd5e1" name="Before" radius={[8, 8, 0, 0]} />
              <Bar dataKey="after" fill="#3b82f6" name="After" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <ResponsiveContainer width="100%" height={350} className="hidden md:block">
            <BarChart data={metricsComparison}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="metric" tick={{fill: '#6b7280'}} />
              <YAxis tick={{fill: '#6b7280'}} />
              <Tooltip contentStyle={{borderRadius: '8px', border: '1px solid #e5e7eb'}} />
              <Legend wrapperStyle={{paddingTop: '20px'}} />
              <Bar dataKey="before" fill="#cbd5e1" name="Before (Oct 27-Nov 10)" radius={[8, 8, 0, 0]} />
              <Bar dataKey="after" fill="#3b82f6" name="After (Nov 11-25)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Content Performance - Enhanced */}
        <div className="bg-white rounded-xl shadow-md p-4 md:p-8 mb-6 md:mb-8 border border-gray-100">
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <div className="bg-purple-50 p-2 md:p-3 rounded-lg">
              <Video className="w-4 h-4 md:w-6 md:h-6 text-purple-600" />
            </div>
            <h2 className="text-lg md:text-2xl font-bold text-gray-800">Content Performance Analysis</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 md:p-6 border border-blue-200">
              <h3 className="text-xs md:text-sm font-semibold text-blue-900 mb-2 md:mb-3 uppercase tracking-wide">Videos Published</h3>
              <p className="text-3xl md:text-4xl font-bold text-blue-700 mb-1 md:mb-2">34</p>
              <p className="text-xs md:text-sm text-blue-600 font-medium">+10 videos (+42% increase)</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 md:p-6 border border-purple-200">
              <h3 className="text-xs md:text-sm font-semibold text-purple-900 mb-2 md:mb-3 uppercase tracking-wide">Average Duration</h3>
              <p className="text-3xl md:text-4xl font-bold text-purple-700 mb-1 md:mb-2">1:28</p>
              <p className="text-xs md:text-sm text-purple-600 font-medium">Optimized for viewer retention</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 md:p-6 border border-green-200">
              <h3 className="text-xs md:text-sm font-semibold text-green-900 mb-2 md:mb-3 uppercase tracking-wide">Impressions</h3>
              <p className="text-3xl md:text-4xl font-bold text-green-700 mb-1 md:mb-2">135.3K</p>
              <p className="text-xs md:text-sm text-green-600 font-medium">+3.4K (+2.6% increase)</p>
            </div>
          </div>
          
          <ResponsiveContainer width="100%" height={250} className="md:hidden">
            <BarChart data={contentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="period" tick={{fill: '#6b7280', fontSize: 9}} angle={-15} textAnchor="end" height={60} />
              <YAxis yAxisId="left" tick={{fill: '#6b7280', fontSize: 10}} />
              <YAxis yAxisId="right" orientation="right" tick={{fill: '#6b7280', fontSize: 10}} />
              <Tooltip contentStyle={{borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '12px'}} />
              <Legend wrapperStyle={{paddingTop: '10px', fontSize: '11px'}} />
              <Bar yAxisId="left" dataKey="videos" fill="#8b5cf6" name="Videos" radius={[8, 8, 0, 0]} />
              <Bar yAxisId="right" dataKey="views" fill="#3b82f6" name="Views" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <ResponsiveContainer width="100%" height={350} className="hidden md:block">
            <BarChart data={contentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="period" tick={{fill: '#6b7280', fontSize: 12}} />
              <YAxis yAxisId="left" tick={{fill: '#6b7280'}} />
              <YAxis yAxisId="right" orientation="right" tick={{fill: '#6b7280'}} />
              <Tooltip contentStyle={{borderRadius: '8px', border: '1px solid #e5e7eb'}} />
              <Legend wrapperStyle={{paddingTop: '20px'}} />
              <Bar yAxisId="left" dataKey="videos" fill="#8b5cf6" name="Videos Published" radius={[8, 8, 0, 0]} />
              <Bar yAxisId="right" dataKey="views" fill="#3b82f6" name="Total Views" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Audience Demographics - Modern Design */}
        <div className="bg-white rounded-xl shadow-md p-4 md:p-8 mb-6 md:mb-8 border border-gray-100">
          <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
            <div className="bg-green-50 p-2 md:p-3 rounded-lg">
              <Users className="w-4 h-4 md:w-6 md:h-6 text-green-600" />
            </div>
            <h2 className="text-lg md:text-2xl font-bold text-gray-800">Audience Demographics Comparison</h2>
          </div>
          
          {/* Age Distribution */}
          <div className="mb-8 md:mb-10">
            <h3 className="text-base md:text-xl font-semibold text-gray-700 mb-4 md:mb-6">Age Distribution</h3>
            <ResponsiveContainer width="100%" height={250} className="md:hidden">
              <BarChart data={demographicsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="age" tick={{fill: '#6b7280', fontSize: 10}} />
                <YAxis tick={{fill: '#6b7280', fontSize: 10}} />
                <Tooltip contentStyle={{borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '12px'}} />
                <Legend wrapperStyle={{paddingTop: '10px', fontSize: '11px'}} />
                <Bar dataKey="before" fill="#cbd5e1" name="Before (%)" radius={[8, 8, 0, 0]} />
                <Bar dataKey="after" fill="#10b981" name="After (%)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <ResponsiveContainer width="100%" height={350} className="hidden md:block">
              <BarChart data={demographicsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="age" tick={{fill: '#6b7280'}} />
                <YAxis tick={{fill: '#6b7280'}} />
                <Tooltip contentStyle={{borderRadius: '8px', border: '1px solid #e5e7eb'}} />
                <Legend wrapperStyle={{paddingTop: '20px'}} />
                <Bar dataKey="before" fill="#cbd5e1" name="Before (%)" radius={[8, 8, 0, 0]} />
                <Bar dataKey="after" fill="#10b981" name="After (%)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Gender Distribution */}
          <h3 className="text-base md:text-xl font-semibold text-gray-700 mb-4 md:mb-6">Gender Distribution</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-gray-50 rounded-xl p-4 md:p-6">
              <h4 className="text-center font-semibold text-gray-700 mb-3 md:mb-4 text-sm md:text-base">Before (Oct 27-Nov 10)</h4>
              <ResponsiveContainer width="100%" height={200} className="md:hidden">
                <PieChart>
                  <Pie
                    data={genderBefore}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({name, value}) => `${name}: ${value}%`}
                    outerRadius={70}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {genderBefore.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <ResponsiveContainer width="100%" height={250} className="hidden md:block">
                <PieChart>
                  <Pie
                    data={genderBefore}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({name, value}) => `${name}: ${value}%`}
                    outerRadius={90}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {genderBefore.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 md:p-6">
              <h4 className="text-center font-semibold text-gray-700 mb-3 md:mb-4 text-sm md:text-base">After (Nov 11-25)</h4>
              <ResponsiveContainer width="100%" height={200} className="md:hidden">
                <PieChart>
                  <Pie
                    data={genderAfter}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({name, value}) => `${name}: ${value}%`}
                    outerRadius={70}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {genderAfter.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <ResponsiveContainer width="100%" height={250} className="hidden md:block">
                <PieChart>
                  <Pie
                    data={genderAfter}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({name, value}) => `${name}: ${value}%`}
                    outerRadius={90}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {genderAfter.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="mt-4 md:mt-6 bg-pink-50 rounded-xl p-4 md:p-5 border border-pink-200">
            <p className="text-pink-800 font-semibold flex items-start gap-2 text-sm md:text-base">
              <span className="text-xl md:text-2xl">✓</span>
              <span>Significant improvement in gender diversity: Female viewership increased from 10.8% to 27.4% (+154%)</span>
            </p>
          </div>
        </div>

        {/* Geographic Reach - Enhanced */}
        <div className="bg-white rounded-xl shadow-md p-4 md:p-8 border border-gray-100">
          <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
            <div className="bg-orange-50 p-2 md:p-3 rounded-lg">
              <Globe className="w-4 h-4 md:w-6 md:h-6 text-orange-600" />
            </div>
            <h2 className="text-lg md:text-2xl font-bold text-gray-800">Geographic Reach & Language Distribution</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div>
              <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-4 md:mb-6">Top Geographies</h3>
              <div className="space-y-4 md:space-y-5">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium text-sm md:text-base">India</span>
                    <span className="text-gray-600 font-semibold text-xs md:text-sm">94.1% → 60.7%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2 md:h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 md:h-3 rounded-full transition-all duration-500" style={{width: '60.7%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium text-sm md:text-base">Nepal</span>
                    <span className="text-green-600 font-semibold text-xs md:text-sm">New: 1.2%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2 md:h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 md:h-3 rounded-full transition-all duration-500" style={{width: '1.2%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium text-sm md:text-base">Bangladesh</span>
                    <span className="text-green-600 font-semibold text-xs md:text-sm">New: 0.9%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2 md:h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 md:h-3 rounded-full transition-all duration-500" style={{width: '0.9%'}}></div>
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-3 md:p-4 mt-4 md:mt-6 border border-green-200">
                  <p className="text-green-800 font-semibold text-xs md:text-sm flex items-start gap-2">
                    <span className="text-lg md:text-xl">✓</span>
                    <span>Geographic diversification: Expanded to Nepal, Bangladesh, Pakistan, and Indonesia</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-4 md:mb-6">Language Preferences</h3>
              <div className="space-y-4 md:space-y-5">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium text-sm md:text-base">No Subtitles/CC</span>
                    <span className="text-gray-600 font-semibold text-xs md:text-sm">65.3% → 49.4%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2 md:h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-gray-500 to-gray-600 h-2 md:h-3 rounded-full transition-all duration-500" style={{width: '49.4%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium text-sm md:text-base">Hindi</span>
                    <span className="text-orange-600 font-semibold text-xs md:text-sm">32.3% → 42.1%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2 md:h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 md:h-3 rounded-full transition-all duration-500" style={{width: '42.1%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium text-sm md:text-base">English</span>
                    <span className="text-blue-600 font-semibold text-xs md:text-sm">2.3% → 7.1%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2 md:h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 md:h-3 rounded-full transition-all duration-500" style={{width: '7.1%'}}></div>
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-3 md:p-4 mt-4 md:mt-6 border border-green-200">
                  <p className="text-green-800 font-semibold text-xs md:text-sm flex items-start gap-2">
                    <span className="text-lg md:text-xl">✓</span>
                    <span>Language accessibility improved: Hindi usage increased by 30%, English by 207%</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 md:mt-8 text-center text-gray-500 text-xs md:text-sm pb-4 md:pb-6">
          <p>Report prepared for Sanskriti Department | Data Period: October 27 - November 25, 2025</p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceReport;