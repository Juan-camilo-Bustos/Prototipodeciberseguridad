import { Card } from "./ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const threatData = [
  { time: "00:00", malware: 45, phishing: 23, ddos: 12 },
  { time: "04:00", malware: 52, phishing: 31, ddos: 8 },
  { time: "08:00", malware: 78, phishing: 45, ddos: 15 },
  { time: "12:00", malware: 91, phishing: 67, ddos: 22 },
  { time: "16:00", malware: 134, phishing: 89, ddos: 31 },
  { time: "20:00", malware: 98, phishing: 56, ddos: 18 },
];

const threatTypes = [
  { name: "Malware", count: 498, percentage: 45 },
  { name: "Phishing", count: 311, percentage: 28 },
  { name: "DDoS", count: 156, percentage: 14 },
  { name: "Ransomware", count: 89, percentage: 8 },
  { name: "Otros", count: 56, percentage: 5 },
];

export function ThreatAnalysis() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="p-6">
        <h3 className="mb-4">Línea de Tiempo de Detección de Amenazas</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={threatData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="malware" stroke="#ef4444" strokeWidth={2} />
            <Line type="monotone" dataKey="phishing" stroke="#f59e0b" strokeWidth={2} />
            <Line type="monotone" dataKey="ddos" stroke="#3b82f6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
        <div className="flex justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-sm">Malware</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
            <span className="text-sm">Phishing</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm">DDoS</span>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="mb-4">Distribución de Amenazas</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={threatTypes}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 space-y-2">
          {threatTypes.map((threat, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-sm">{threat.name}</span>
              <div className="flex items-center gap-2">
                <div className="w-16 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${threat.percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm text-muted-foreground">{threat.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}