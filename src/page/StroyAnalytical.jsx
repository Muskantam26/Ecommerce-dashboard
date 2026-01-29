import { AreaChart,
   Area, 
   BarChart,
    Bar,
     XAxis,
      YAxis, 
      CartesianGrid,
       Tooltip, Legend, ResponsiveContainer } from 'recharts';


const AnalyticsCard = ({ title, children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
    <h2 className="text-xl font-bold mb-6">{title}</h2>
    {children}
  </div>
);


const EmptyState = ({ message = "No Data found" }) => (
  <div className="flex items-center justify-center h-48 text-gray-500">
    {message}
  </div>
);


const DataTable = ({ columns, data, emptyMessage }) => {
  if (!data || data.length === 0) {
    return <EmptyState message={emptyMessage} />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row, idx) => (
            <tr key={idx}>
              {columns.map((col, colIdx) => (
                <td key={colIdx} className="px-4 py-3 text-sm text-gray-900">
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const StoreAnalytical = ({ 
  visitorData = [],
  topUrlData = [],
  platformData = [],
  deviceData = [],
  browserData = []
}) => {
  // Sample data 
  const defaultVisitorData = [
    { date: '27-Dec', series1: 10, series2: 8 },
    { date: '28-Dec', series1: 8, series2: 12 },
    { date: '29-Dec', series1: 18, series2: 22 },
    { date: '30-Dec', series1: 35, series2: 30 },
    { date: '31-Dec', series1: 45, series2: 42 },
    { date: '01-Jan', series1: 15, series2: 44 },
    { date: '02-Jan', series1: 35, series2: 20 },
    { date: '03-Jan', series1: 22, series2: 18 },
    { date: '04-Jan', series1: 28, series2: 40 },
    { date: '05-Jan', series1: 38, series2: 12 },
    { date: '06-Jan', series1: 42, series2: 18 },
    { date: '07-Jan', series1: 48, series2: 22 },
  ];

   

  const defaultPlatformData = [
    { name: 'Windows', value: 8, color: '#86D293' },
    { name: 'Ubuntu', value: 10, color: '#F5B041' },
    { name: 'OS X', value: 25, color: '#EC7063' },
    { name: 'Linux', value: 3, color: '#AED6F1' },
    { name: 'iOS', value: 3, color: '#ABEBC6' },
    { name: 'AndroidOS', value: 6, color: '#F5B041' },
  ];

  const chartVisitorData = visitorData.length > 0 ? visitorData : defaultVisitorData;
  const chartPlatformData = platformData.length > 0 ? platformData : defaultPlatformData;

  const urlColumns = [
    { header: 'PAGE URL', key: 'url' },
    { header: 'VIEWS', key: 'views', render: (row) => <span className="font-medium">{row.views}</span> }
  ];

  return (
    <div className="min-h-screen  bg-(--bs-white) mt-20">
      {/* Header */}
      <div className="bg-(--bs-white) ">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-semibold text-(--text-main)">Store Analytics</h1>
          <button className='text-(--bs-info) text-sm mt-1"'>Home</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        
        {/* Visitor Chart */}
        <AnalyticsCard title="Visitor">
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={chartVisitorData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 12 }}
                label={{ value: 'Days', position: 'insideBottom', offset: -5 }}
              />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="series1" 
                stroke="#F5B041" 
                fill="#F5B041" 
                fillOpacity={0.3}
                strokeWidth={2}
              />
              <Area 
                type="monotone" 
                dataKey="series2" 
                stroke="#86D293" 
                fill="#86D293" 
                fillOpacity={0.3}
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </AnalyticsCard>

        {/* Top URL and Platform Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
          {/* Top URL Table */}
         
          <AnalyticsCard title="Top URL">
            
             <DataTable 
              columns={urlColumns}
              data={topUrlData}
              emptyMessage="No Data found"
            />
           
          </AnalyticsCard>
      

          {/* Platform Chart */}
          <AnalyticsCard title="Platform">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={chartPlatformData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 12, fill: '#9CA3AF' }}
                  label={{ value: 'Platform', position: 'insideBottom', offset: -5 }}
                />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend 
                  verticalAlign="bottom" 
                  height={36}
                  iconType="square"
                  formatter={(value, entry) => (
                    <span style={{ color: entry.color }}>{value}</span>
                  )}
                />
                {chartPlatformData.map((platform, idx) => (
                  <Bar 
                    key={idx}
                    dataKey="value" 
                    fill={platform.color}
                    name={platform.name}
                    radius={[8, 8, 0, 0]}
                    maxBarSize={60}
                  />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </AnalyticsCard>
        </div>

        {/* Device and Browser Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Device */}
          <AnalyticsCard title="Device">
            {(!deviceData || deviceData.length === 0) ? (
              <EmptyState message="No Data Found" />
            ) : (
              <DataTable 
                columns={[
                  { header: 'DEVICE', key: 'device' },
                  { header: 'COUNT', key: 'count' }
                ]}
                data={deviceData}
              />
            )}
          </AnalyticsCard>

          {/* Browser */}
          <AnalyticsCard title="Browser">
            {(!browserData || browserData.length === 0) ? (
              <EmptyState message="No Data Found" />
            ) : (
              <DataTable 
                columns={[
                  { header: 'BROWSER', key: 'browser' },
                  { header: 'COUNT', key: 'count' }
                ]}
                data={browserData}
              />
            )}
          </AnalyticsCard>
        </div>

      </div>
    </div>
  );
};

export default StoreAnalytical;