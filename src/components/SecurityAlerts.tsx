import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { AlertTriangle, Shield, Zap, Eye, Clock } from "lucide-react";

interface Alert {
  id: string;
  title: string;
  description: string;
  severity: "critical" | "high" | "medium" | "low";
  type: "malware" | "intrusion" | "anomaly" | "policy";
  timestamp: string;
  source: string;
}

const alerts: Alert[] = [
  {
    id: "1",
    title: "Posible Malware Detectado",
    description: "Ejecutable sospechoso encontrado en carpeta de descargas",
    severity: "critical",
    type: "malware",
    timestamp: "hace 2 min",
    source: "192.168.1.105"
  },
  {
    id: "2", 
    title: "Actividad de Red Inusual",
    description: "Alto volumen de conexiones salientes detectado",
    severity: "high",
    type: "anomaly",
    timestamp: "hace 5 min",
    source: "10.0.0.23"
  },
  {
    id: "3",
    title: "Intentos de Login Fallidos",
    description: "Múltiples intentos fallidos de login SSH desde IP externa",
    severity: "medium",
    type: "intrusion",
    timestamp: "hace 12 min",
    source: "203.0.113.42"
  },
  {
    id: "4",
    title: "Violación de Política",
    description: "Instalación de software no autorizado detectada",
    severity: "medium",
    type: "policy",
    timestamp: "hace 18 min",
    source: "192.168.1.87"
  },
  {
    id: "5",
    title: "Escaneo de Puertos Detectado",
    description: "IP externa escaneando múltiples puertos",
    severity: "high",
    type: "intrusion",
    timestamp: "hace 23 min",
    source: "198.51.100.15"
  }
];

const getSeverityColor = (severity: Alert["severity"]) => {
  switch (severity) {
    case "critical": return "bg-red-500";
    case "high": return "bg-orange-500";
    case "medium": return "bg-yellow-500";
    case "low": return "bg-green-500";
  }
};

const getTypeIcon = (type: Alert["type"]) => {
  switch (type) {
    case "malware": return <Shield className="h-4 w-4" />;
    case "intrusion": return <AlertTriangle className="h-4 w-4" />;
    case "anomaly": return <Zap className="h-4 w-4" />;
    case "policy": return <Eye className="h-4 w-4" />;
  }
};

export function SecurityAlerts() {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3>Alertas de Seguridad</h3>
        <Button variant="outline" size="sm">
          Ver Todas
        </Button>
      </div>
      
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div key={alert.id} className="border rounded-lg p-4 hover:bg-accent/50 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3 flex-1">
                <div className={`w-2 h-2 rounded-full mt-2 ${getSeverityColor(alert.severity)}`}></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {getTypeIcon(alert.type)}
                    <h4 className="font-medium">{alert.title}</h4>
                    <Badge variant="outline" className="capitalize">
                      {alert.severity}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {alert.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {alert.timestamp}
                    </div>
                    <div>Origen: {alert.source}</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  Investigar
                </Button>
                <Button size="sm" variant="outline">
                  Descartar
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}