import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Activity, Wifi, Server, Users } from "lucide-react";

interface NetworkDevice {
  id: string;
  name: string;
  ip: string;
  status: "online" | "offline" | "warning";
  type: "server" | "workstation" | "router" | "firewall";
  lastSeen: string;
  traffic: number;
}

const networkDevices: NetworkDevice[] = [
  {
    id: "1",
    name: "Firewall Principal",
    ip: "192.168.1.1",
    status: "online",
    type: "firewall",
    lastSeen: "Ahora",
    traffic: 85
  },
  {
    id: "2",
    name: "Servidor Web",
    ip: "192.168.1.10",
    status: "online", 
    type: "server",
    lastSeen: "Ahora",
    traffic: 92
  },
  {
    id: "3",
    name: "Servidor de Base de Datos",
    ip: "192.168.1.11",
    status: "warning",
    type: "server",
    lastSeen: "hace 2 min",
    traffic: 67
  },
  {
    id: "4",
    name: "Estación de Trabajo Admin",
    ip: "192.168.1.100",
    status: "online",
    type: "workstation",
    lastSeen: "Ahora",
    traffic: 23
  },
  {
    id: "5",
    name: "Router Principal",
    ip: "192.168.1.2",
    status: "offline",
    type: "router",
    lastSeen: "hace 15 min",
    traffic: 0
  }
];

const getStatusColor = (status: NetworkDevice["status"]) => {
  switch (status) {
    case "online": return "bg-green-500";
    case "warning": return "bg-yellow-500";
    case "offline": return "bg-red-500";
  }
};

const getStatusBadge = (status: NetworkDevice["status"]) => {
  switch (status) {
    case "online": return <Badge className="bg-green-100 text-green-800">En línea</Badge>;
    case "warning": return <Badge className="bg-yellow-100 text-yellow-800">Advertencia</Badge>;
    case "offline": return <Badge className="bg-red-100 text-red-800">Desconectado</Badge>;
  }
};

const getDeviceIcon = (type: NetworkDevice["type"]) => {
  switch (type) {
    case "server": return <Server className="h-4 w-4" />;
    case "workstation": return <Users className="h-4 w-4" />;
    case "router": return <Wifi className="h-4 w-4" />;
    case "firewall": return <Activity className="h-4 w-4" />;
  }
};

export function NetworkMonitor() {
  const onlineDevices = networkDevices.filter(d => d.status === "online").length;
  const totalDevices = networkDevices.length;
  const networkHealth = Math.round((onlineDevices / totalDevices) * 100);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <Activity className="h-8 w-8 text-blue-600" />
            <div>
              <p className="text-sm text-muted-foreground">Estado de la Red</p>
              <h3 className="text-2xl">{networkHealth}%</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3">
            <Server className="h-8 w-8 text-green-600" />
            <div>
              <p className="text-sm text-muted-foreground">Dispositivos Activos</p>
              <h3 className="text-2xl">{onlineDevices}/{totalDevices}</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3">
            <Wifi className="h-8 w-8 text-purple-600" />
            <div>
              <p className="text-sm text-muted-foreground">Uso de Ancho de Banda</p>
              <h3 className="text-2xl">847 MB/s</h3>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="mb-6">Dispositivos de Red</h3>
        <div className="space-y-4">
          {networkDevices.map((device) => (
            <div key={device.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(device.status)}`}></div>
                  {getDeviceIcon(device.type)}
                  <div>
                    <h4 className="font-medium">{device.name}</h4>
                    <p className="text-sm text-muted-foreground">{device.ip}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm">Carga de Tráfico</p>
                    <div className="flex items-center gap-2">
                      <Progress value={device.traffic} className="w-20" />
                      <span className="text-sm text-muted-foreground">{device.traffic}%</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Última Vez Visto</p>
                    <p className="text-sm">{device.lastSeen}</p>
                  </div>
                  
                  {getStatusBadge(device.status)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}