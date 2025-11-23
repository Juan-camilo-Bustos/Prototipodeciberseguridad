import { Card } from "./ui/card";
import { Shield, AlertTriangle, Eye, Lock } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  color: string;
}

const MetricCard = ({ title, value, change, icon, color }: MetricCardProps) => (
  <Card className="p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-muted-foreground">{title}</p>
        <h3 className="text-2xl mt-2">{value}</h3>
        <p className={`text-sm mt-1 ${color}`}>{change}</p>
      </div>
      <div className={`p-3 rounded-lg ${color === 'text-green-600' ? 'bg-green-100' : color === 'text-red-600' ? 'bg-red-100' : 'bg-yellow-100'}`}>
        {icon}
      </div>
    </div>
  </Card>
);

export function SecurityMetrics() {
  const metrics = [
    {
      title: "Amenazas Bloqueadas",
      value: "2,847",
      change: "+12% desde ayer",
      icon: <Shield className="h-6 w-6 text-green-600" />,
      color: "text-green-600"
    },
    {
      title: "Alertas Activas",
      value: "23",
      change: "-5 desde la última hora",
      icon: <AlertTriangle className="h-6 w-6 text-red-600" />,
      color: "text-red-600"
    },
    {
      title: "Monitoreo de Red",
      value: "Activo",
      change: "99.9% disponibilidad",
      icon: <Eye className="h-6 w-6 text-blue-600" />,
      color: "text-blue-600"
    },
    {
      title: "Vulnerabilidades",
      value: "7",
      change: "2 críticas, 5 medias",
      icon: <Lock className="h-6 w-6 text-yellow-600" />,
      color: "text-yellow-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
}