import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { 
  Shield, 
  Lock, 
  Network, 
  Key, 
  FileKey,
  Database,
  Settings,
  CheckCircle,
  AlertTriangle,
  Clock
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useState } from 'react';

const componentesSeguridad = [
  {
    id: 1,
    nombre: 'Autenticación Multifactor (MFA)',
    descripcion: 'Sistema de autenticación de dos o más factores',
    estado: 'activo',
    cobertura: 95,
    usuarios: '55 de 58',
    icono: Key,
    color: 'green',
    detalles: {
      metodos: ['SMS', 'App Authenticator', 'Biométrico'],
      ultimaActualizacion: '2024-11-20',
      proveedor: 'Auth0'
    }
  },
  {
    id: 2,
    nombre: 'Registro de Incidentes',
    descripcion: 'Sistema centralizado de registro y trazabilidad',
    estado: 'activo',
    cobertura: 100,
    registros: '1,247 eventos',
    icono: FileKey,
    color: 'green',
    detalles: {
      integraciones: ['SIEM', 'Email', 'Slack'],
      retencion: '90 días',
      almacenamiento: 'AWS S3'
    }
  },
  {
    id: 3,
    nombre: 'Análisis de Vulnerabilidades',
    descripcion: 'Escaneo automatizado y continuo de vulnerabilidades',
    estado: 'activo',
    cobertura: 85,
    activos: '42 activos escaneados',
    icono: Shield,
    color: 'green',
    detalles: {
      herramientas: ['Nessus', 'OpenVAS'],
      frecuencia: 'Semanal',
      ultimoEscaneo: '2024-11-22'
    }
  },
  {
    id: 4,
    nombre: 'Segmentación de Red',
    descripcion: 'Aislamiento lógico de segmentos de red',
    estado: 'activo',
    cobertura: 100,
    segmentos: '4 segmentos',
    icono: Network,
    color: 'green',
    detalles: {
      segmentos: ['DMZ', 'Interno', 'Servidores', 'IoT'],
      tecnologia: 'VLANs + Firewall',
      reglas: '87 reglas activas'
    }
  },
  {
    id: 5,
    nombre: 'Cifrado de Datos',
    descripcion: 'Cifrado de datos en reposo y en tránsito',
    estado: 'parcial',
    cobertura: 68,
    volumenes: '24 de 35 volúmenes',
    icono: Lock,
    color: 'amber',
    detalles: {
      enReposo: 'AES-256',
      enTransito: 'TLS 1.3',
      pendiente: '11 volúmenes legacy'
    }
  },
  {
    id: 6,
    nombre: 'Control de Accesos (RBAC)',
    descripcion: 'Control de acceso basado en roles',
    estado: 'desarrollo',
    cobertura: 45,
    roles: '8 roles definidos',
    icono: Database,
    color: 'blue',
    detalles: {
      roles: ['Admin', 'Usuario', 'Auditor', 'SOC', 'DevOps', 'RRHH', 'Finanzas', 'Guest'],
      integracion: 'Active Directory',
      estimacion: '2 sprints'
    }
  }
];

const segmentosRed = [
  { nombre: 'DMZ', dispositivos: 8, estado: 'activo', firewall: 'Activo', ips: '192.168.1.0/24' },
  { nombre: 'Red Interna', dispositivos: 45, estado: 'activo', firewall: 'Activo', ips: '10.0.1.0/24' },
  { nombre: 'Servidores', dispositivos: 12, estado: 'activo', firewall: 'Activo', ips: '10.0.2.0/24' },
  { nombre: 'IoT/Dispositivos', dispositivos: 18, estado: 'advertencia', firewall: 'Parcial', ips: '10.0.3.0/24' }
];

export function ArquitecturaTecnologica() {
  const [mfaEnabled, setMfaEnabled] = useState(true);
  const [cifradoEnabled, setCifradoEnabled] = useState(true);

  const getEstadoBadge = (estado: string) => {
    switch (estado) {
      case 'activo':
        return <Badge className="bg-green-600">Activo</Badge>;
      case 'parcial':
        return <Badge className="bg-amber-600">Parcial</Badge>;
      case 'desarrollo':
        return <Badge className="bg-blue-600">En Desarrollo</Badge>;
      default:
        return <Badge variant="outline">Inactivo</Badge>;
    }
  };

  const getEstadoIcon = (estado: string) => {
    switch (estado) {
      case 'activo':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'parcial':
        return <AlertTriangle className="w-5 h-5 text-amber-600" />;
      case 'desarrollo':
        return <Clock className="w-5 h-5 text-blue-600" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Network className="w-6 h-6" />
            Arquitectura Tecnológica
          </CardTitle>
          <CardDescription className="text-blue-100">
            Gestión de componentes de seguridad implementados de forma incremental
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-blue-100">Componentes Activos</div>
              <div className="text-white">4 / 6</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-blue-100">Cobertura Promedio</div>
              <div className="text-white">82%</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-blue-100">En Desarrollo</div>
              <div className="text-white">2 componentes</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Componentes de Seguridad */}
      <div className="grid gap-6 md:grid-cols-2">
        {componentesSeguridad.map((componente) => {
          const IconComponent = componente.icono;
          return (
            <Card key={componente.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-${componente.color}-100`}>
                      <IconComponent className={`w-5 h-5 text-${componente.color}-600`} />
                    </div>
                    <div>
                      <CardTitle className="text-slate-900">{componente.nombre}</CardTitle>
                      <CardDescription>{componente.descripcion}</CardDescription>
                    </div>
                  </div>
                  {getEstadoBadge(componente.estado)}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">Cobertura</span>
                    <span className="text-slate-900">{componente.cobertura}%</span>
                  </div>
                  <Progress value={componente.cobertura} />
                  <p className="text-slate-600">
                    {componente.usuarios || componente.registros || componente.activos || componente.segmentos || componente.volumenes || componente.roles}
                  </p>
                </div>

                <Tabs defaultValue="detalles" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="detalles">Detalles</TabsTrigger>
                    <TabsTrigger value="configuracion">Configuración</TabsTrigger>
                  </TabsList>
                  <TabsContent value="detalles" className="space-y-2 pt-2">
                    {Object.entries(componente.detalles).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-start text-sm">
                        <span className="text-slate-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                        <span className="text-slate-900 text-right">
                          {Array.isArray(value) ? value.join(', ') : value}
                        </span>
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="configuracion" className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor={`enable-${componente.id}`} className="text-slate-700">
                        Habilitar componente
                      </Label>
                      <Switch 
                        id={`enable-${componente.id}`} 
                        checked={componente.estado === 'activo'}
                        disabled={componente.estado === 'desarrollo'}
                      />
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <Settings className="w-4 h-4 mr-2" />
                      Configuración Avanzada
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Segmentación de Red */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Network className="w-5 h-5 text-purple-600" />
            Segmentación de Red
          </CardTitle>
          <CardDescription>
            Topología de red segmentada con aislamiento lógico
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {segmentosRed.map((segmento, index) => (
              <div 
                key={index} 
                className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {getEstadoIcon(segmento.estado)}
                    <div>
                      <h4 className="text-slate-900">{segmento.nombre}</h4>
                      <p className="text-slate-600">{segmento.ips}</p>
                    </div>
                  </div>
                  <Badge variant={segmento.firewall === 'Activo' ? 'default' : 'outline'}>
                    Firewall: {segmento.firewall}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-slate-600">Dispositivos:</span>
                    <span className="ml-2 text-slate-900">{segmento.dispositivos}</span>
                  </div>
                  <div>
                    <span className="text-slate-600">Estado:</span>
                    <span className="ml-2 text-slate-900 capitalize">{segmento.estado}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Timeline de Implementación */}
      <Card>
        <CardHeader>
          <CardTitle>Roadmap de Implementación (Sprints)</CardTitle>
          <CardDescription>Desarrollo incremental siguiendo metodología ágil</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white">
                  ✓
                </div>
                <div className="w-0.5 h-full bg-green-600" />
              </div>
              <div className="flex-1 pb-8">
                <h4 className="text-slate-900">Sprint 1-2: Base de Seguridad</h4>
                <p className="text-slate-600">MFA, Registro de Incidentes, Segmentación de Red</p>
                <Badge className="mt-2 bg-green-600">Completado</Badge>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white">
                  ✓
                </div>
                <div className="w-0.5 h-full bg-amber-600" />
              </div>
              <div className="flex-1 pb-8">
                <h4 className="text-slate-900">Sprint 3-4: Análisis y Protección</h4>
                <p className="text-slate-600">Análisis de Vulnerabilidades, Cifrado de Datos</p>
                <Badge className="mt-2 bg-amber-600">En Progreso</Badge>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-slate-900">Sprint 5-6: Control de Accesos</h4>
                <p className="text-slate-600">RBAC, Integración con AD, Políticas avanzadas</p>
                <Badge className="mt-2 bg-blue-600">Planificado</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
