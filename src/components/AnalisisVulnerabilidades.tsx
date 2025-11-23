import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Shield, 
  AlertTriangle, 
  Search,
  Server,
  Globe,
  Database,
  CheckCircle,
  XCircle,
  Clock,
  TrendingDown,
  Activity
} from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const vulnerabilidades = [
  {
    id: 'CVE-2024-9876',
    titulo: 'Vulnerabilidad de ejecución remota de código en Apache',
    severidad: 'critica',
    cvss: 9.8,
    activo: 'Servidor Web Principal',
    tipoActivo: 'servidor',
    estado: 'pendiente',
    fechaDeteccion: '2024-11-20',
    descripcion: 'Permite ejecución arbitraria de código sin autenticación',
    solucion: 'Actualizar a versión 2.4.58 o superior',
    referencias: 'https://nvd.nist.gov/vuln/detail/CVE-2024-9876'
  },
  {
    id: 'CVE-2024-8765',
    titulo: 'Inyección SQL en aplicación de gestión',
    severidad: 'alta',
    cvss: 8.1,
    activo: 'App Gestión Interna',
    tipoActivo: 'aplicacion',
    estado: 'en_remediacion',
    fechaDeteccion: '2024-11-15',
    descripcion: 'Permite acceso no autorizado a base de datos mediante parámetros no sanitizados',
    solucion: 'Implementar prepared statements y validación de entrada',
    referencias: 'Reporte interno de pentest'
  },
  {
    id: 'CVE-2024-7654',
    titulo: 'Contraseñas débiles en dispositivos de red',
    severidad: 'media',
    cvss: 6.5,
    activo: 'Switches red corporativa',
    tipoActivo: 'red',
    estado: 'mitigado',
    fechaDeteccion: '2024-11-10',
    descripcion: 'Configuración por defecto en varios switches de red',
    solucion: 'Cambiar credenciales por defecto, implementar política de contraseñas',
    referencias: 'Auditoría interna Q4 2024'
  },
  {
    id: 'CVE-2024-6543',
    titulo: 'Falta de cifrado en transmisión de datos sensibles',
    severidad: 'alta',
    cvss: 7.5,
    activo: 'API Pagos',
    tipoActivo: 'aplicacion',
    estado: 'resuelto',
    fechaDeteccion: '2024-11-05',
    descripcion: 'Transmisión de datos de tarjetas sin TLS',
    solucion: 'Implementar TLS 1.3 en todos los endpoints',
    referencias: 'Compliance PCI DSS'
  },
  {
    id: 'CVE-2024-5432',
    titulo: 'Configuración insegura de CORS',
    severidad: 'media',
    cvss: 5.8,
    activo: 'API REST Corporativa',
    tipoActivo: 'aplicacion',
    estado: 'resuelto',
    fechaDeteccion: '2024-10-28',
    descripcion: 'Política CORS permite cualquier origen',
    solucion: 'Configurar whitelist de dominios autorizados',
    referencias: 'Revisión de código automatizada'
  },
  {
    id: 'CVE-2024-4321',
    titulo: 'Componente desactualizado con vulnerabilidades conocidas',
    severidad: 'baja',
    cvss: 3.7,
    activo: 'Biblioteca JavaScript legacy',
    tipoActivo: 'aplicacion',
    estado: 'resuelto',
    fechaDeteccion: '2024-10-20',
    descripcion: 'jQuery 1.x con múltiples CVEs conocidos',
    solucion: 'Actualizar a versión 3.x o migrar a framework moderno',
    referencias: 'Snyk dependency scan'
  },
  {
    id: 'INTERNAL-001',
    titulo: 'Permisos excesivos en sistema de archivos compartido',
    severidad: 'media',
    cvss: 6.2,
    activo: 'NAS Corporativo',
    tipoActivo: 'servidor',
    estado: 'pendiente',
    fechaDeteccion: '2024-11-18',
    descripcion: 'Usuarios con permisos de escritura innecesarios',
    solucion: 'Revisar y aplicar principio de mínimo privilegio',
    referencias: 'Auditoría de accesos'
  },
  {
    id: 'INTERNAL-002',
    titulo: 'Falta de autenticación multifactor en sistema crítico',
    severidad: 'alta',
    cvss: 7.8,
    activo: 'Portal Administración',
    tipoActivo: 'aplicacion',
    estado: 'en_remediacion',
    fechaDeteccion: '2024-11-12',
    descripcion: 'Sistema crítico solo requiere usuario/contraseña',
    solucion: 'Implementar MFA obligatorio para todos los administradores',
    referencias: 'Evaluación de controles ISO 27001'
  }
];

const tendenciaVulnerabilidades = [
  { mes: 'Jun', criticas: 3, altas: 8, medias: 12, bajas: 5 },
  { mes: 'Jul', criticas: 2, altas: 6, medias: 10, bajas: 4 },
  { mes: 'Ago', criticas: 1, altas: 5, medias: 8, bajas: 6 },
  { mes: 'Sep', criticas: 2, altas: 7, medias: 9, bajas: 5 },
  { mes: 'Oct', criticas: 1, altas: 4, medias: 7, bajas: 3 },
  { mes: 'Nov', criticas: 1, altas: 3, medias: 4, bajas: 2 },
];

const distribucionActivos = [
  { tipo: 'Servidores', cantidad: 12, vulnerabilidades: 5 },
  { tipo: 'Aplicaciones', cantidad: 28, vulnerabilidades: 15 },
  { tipo: 'Bases de Datos', cantidad: 8, vulnerabilidades: 3 },
  { tipo: 'Dispositivos Red', cantidad: 45, vulnerabilidades: 8 },
  { tipo: 'Estaciones Trabajo', cantidad: 58, vulnerabilidades: 12 },
];

const estadoVulnerabilidades = [
  { estado: 'Pendiente', cantidad: 2, color: '#ef4444' },
  { estado: 'En Remediación', cantidad: 2, color: '#f59e0b' },
  { estado: 'Mitigado', cantidad: 1, color: '#3b82f6' },
  { estado: 'Resuelto', cantidad: 3, color: '#10b981' },
];

const SEVERITY_COLORS = {
  critica: '#dc2626',
  alta: '#f97316',
  media: '#eab308',
  baja: '#3b82f6'
};

export function AnalisisVulnerabilidades() {
  const [filtroSeveridad, setFiltroSeveridad] = useState('todas');
  const [filtroEstado, setFiltroEstado] = useState('todos');

  const vulnerabilidadesFiltradas = vulnerabilidades.filter(vuln => {
    const cumpleSeveridad = filtroSeveridad === 'todas' || vuln.severidad === filtroSeveridad;
    const cumpleEstado = filtroEstado === 'todos' || vuln.estado === filtroEstado;
    return cumpleSeveridad && cumpleEstado;
  });

  const estadisticas = {
    total: vulnerabilidades.length,
    criticas: vulnerabilidades.filter(v => v.severidad === 'critica').length,
    altas: vulnerabilidades.filter(v => v.severidad === 'alta').length,
    pendientes: vulnerabilidades.filter(v => v.estado === 'pendiente').length,
    resueltas: vulnerabilidades.filter(v => v.estado === 'resuelto').length
  };

  const getSeveridadBadge = (severidad: string) => {
    switch (severidad) {
      case 'critica':
        return <Badge className="bg-red-600">Crítica</Badge>;
      case 'alta':
        return <Badge className="bg-orange-600">Alta</Badge>;
      case 'media':
        return <Badge className="bg-yellow-600">Media</Badge>;
      case 'baja':
        return <Badge className="bg-blue-600">Baja</Badge>;
      default:
        return <Badge variant="outline">{severidad}</Badge>;
    }
  };

  const getEstadoBadge = (estado: string) => {
    switch (estado) {
      case 'resuelto':
        return <Badge className="bg-green-600"><CheckCircle className="w-3 h-3 mr-1" />Resuelto</Badge>;
      case 'mitigado':
        return <Badge className="bg-blue-600"><Shield className="w-3 h-3 mr-1" />Mitigado</Badge>;
      case 'en_remediacion':
        return <Badge className="bg-amber-600"><Clock className="w-3 h-3 mr-1" />En Remediación</Badge>;
      case 'pendiente':
        return <Badge className="bg-red-600"><XCircle className="w-3 h-3 mr-1" />Pendiente</Badge>;
      default:
        return <Badge variant="outline">{estado}</Badge>;
    }
  };

  const getCVSSColor = (cvss: number) => {
    if (cvss >= 9.0) return 'text-red-600';
    if (cvss >= 7.0) return 'text-orange-600';
    if (cvss >= 4.0) return 'text-yellow-600';
    return 'text-blue-600';
  };

  const getCVSSBg = (cvss: number) => {
    if (cvss >= 9.0) return 'bg-red-100 border-red-300';
    if (cvss >= 7.0) return 'bg-orange-100 border-orange-300';
    if (cvss >= 4.0) return 'bg-yellow-100 border-yellow-300';
    return 'bg-blue-100 border-blue-300';
  };

  const getTipoActivoIcon = (tipo: string) => {
    switch (tipo) {
      case 'servidor':
        return <Server className="w-4 h-4" />;
      case 'aplicacion':
        return <Globe className="w-4 h-4" />;
      case 'red':
        return <Activity className="w-4 h-4" />;
      default:
        return <Database className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header con Estadísticas */}
      <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Search className="w-6 h-6" />
            Análisis de Vulnerabilidades
          </CardTitle>
          <CardDescription className="text-purple-100">
            Escaneo automatizado y continuo con evaluación CVSS
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-5">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-purple-100">Total</div>
              <div className="text-white">{estadisticas.total}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-purple-100">Críticas</div>
              <div className="text-white">{estadisticas.criticas}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-purple-100">Altas</div>
              <div className="text-white">{estadisticas.altas}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-purple-100">Pendientes</div>
              <div className="text-white">{estadisticas.pendientes}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-purple-100">Resueltas</div>
              <div className="text-white">{estadisticas.resueltas}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Gráficos Analíticos */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-green-600" />
              Tendencia de Vulnerabilidades
            </CardTitle>
            <CardDescription>Evolución mensual por severidad</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={tendenciaVulnerabilidades}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="mes" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }} />
                <Legend />
                <Line type="monotone" dataKey="criticas" name="Críticas" stroke="#dc2626" strokeWidth={2} />
                <Line type="monotone" dataKey="altas" name="Altas" stroke="#f97316" strokeWidth={2} />
                <Line type="monotone" dataKey="medias" name="Medias" stroke="#eab308" strokeWidth={2} />
                <Line type="monotone" dataKey="bajas" name="Bajas" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-600" />
              Estado de Remediación
            </CardTitle>
            <CardDescription>Distribución por estado actual</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={estadoVulnerabilidades}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ estado, cantidad }) => `${estado}: ${cantidad}`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="cantidad"
                >
                  {estadoVulnerabilidades.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {estadoVulnerabilidades.map((estado, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: estado.color }} />
                    <span className="text-slate-700">{estado.estado}</span>
                  </div>
                  <span className="text-slate-900">{estado.cantidad}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Activos Escaneados */}
      <Card>
        <CardHeader>
          <CardTitle>Distribución por Tipo de Activo</CardTitle>
          <CardDescription>42 activos escaneados en total</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={distribucionActivos}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="tipo" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }} />
              <Legend />
              <Bar dataKey="cantidad" name="Total de Activos" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              <Bar dataKey="vulnerabilidades" name="Con Vulnerabilidades" fill="#ef4444" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Filtros */}
      <Card>
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
          <CardDescription>Refinar lista de vulnerabilidades</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-slate-700">Severidad</label>
              <Select value={filtroSeveridad} onValueChange={setFiltroSeveridad}>
                <SelectTrigger>
                  <SelectValue placeholder="Todas las severidades" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">Todas las severidades</SelectItem>
                  <SelectItem value="critica">Crítica</SelectItem>
                  <SelectItem value="alta">Alta</SelectItem>
                  <SelectItem value="media">Media</SelectItem>
                  <SelectItem value="baja">Baja</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-slate-700">Estado</label>
              <Select value={filtroEstado} onValueChange={setFiltroEstado}>
                <SelectTrigger>
                  <SelectValue placeholder="Todos los estados" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos los estados</SelectItem>
                  <SelectItem value="pendiente">Pendiente</SelectItem>
                  <SelectItem value="en_remediacion">En Remediación</SelectItem>
                  <SelectItem value="mitigado">Mitigado</SelectItem>
                  <SelectItem value="resuelto">Resuelto</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-4 text-sm text-slate-600">
            Mostrando {vulnerabilidadesFiltradas.length} de {vulnerabilidades.length} vulnerabilidades
          </div>
        </CardContent>
      </Card>

      {/* Lista de Vulnerabilidades */}
      <div className="space-y-4">
        {vulnerabilidadesFiltradas.map((vuln) => (
          <Card key={vuln.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="outline" className="font-mono">{vuln.id}</Badge>
                    {getSeveridadBadge(vuln.severidad)}
                    {getEstadoBadge(vuln.estado)}
                  </div>
                  <CardTitle className="text-slate-900 mb-2">{vuln.titulo}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                      {getTipoActivoIcon(vuln.tipoActivo)}
                      <span>{vuln.activo}</span>
                    </div>
                    <span>•</span>
                    <span>Detectado: {vuln.fechaDeteccion}</span>
                  </div>
                </div>
                <div className={`px-4 py-2 rounded-lg border-2 ${getCVSSBg(vuln.cvss)}`}>
                  <div className="text-xs text-slate-600 text-center">CVSS Score</div>
                  <div className={`text-2xl text-center ${getCVSSColor(vuln.cvss)}`}>
                    {vuln.cvss}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="descripcion" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="descripcion">Descripción</TabsTrigger>
                  <TabsTrigger value="solucion">Solución</TabsTrigger>
                  <TabsTrigger value="referencias">Referencias</TabsTrigger>
                </TabsList>
                <TabsContent value="descripcion" className="pt-4">
                  <div className="space-y-2">
                    <h4 className="text-slate-700">Detalles Técnicos</h4>
                    <p className="text-slate-900">{vuln.descripcion}</p>
                  </div>
                </TabsContent>
                <TabsContent value="solucion" className="pt-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="text-blue-900 mb-2">Remediación Recomendada</h4>
                      <p className="text-slate-700">{vuln.solucion}</p>
                    </div>
                    {vuln.estado === 'resuelto' && (
                      <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center gap-2 text-green-700">
                          <CheckCircle className="w-4 h-4" />
                          <span>Vulnerabilidad remediada exitosamente</span>
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="referencias" className="pt-4">
                  <div className="space-y-2">
                    <h4 className="text-slate-700">Enlaces y Documentación</h4>
                    <a 
                      href={vuln.referencias} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline block"
                    >
                      {vuln.referencias}
                    </a>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Información CVSS */}
      <Card>
        <CardHeader>
          <CardTitle>Escala CVSS (Common Vulnerability Scoring System)</CardTitle>
          <CardDescription>Sistema estándar de evaluación de severidad de vulnerabilidades</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4">
            <div className="p-4 bg-red-50 rounded-lg border-2 border-red-300">
              <div className="text-red-900">Crítica</div>
              <div className="text-red-700">9.0 - 10.0</div>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg border-2 border-orange-300">
              <div className="text-orange-900">Alta</div>
              <div className="text-orange-700">7.0 - 8.9</div>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg border-2 border-yellow-300">
              <div className="text-yellow-900">Media</div>
              <div className="text-yellow-700">4.0 - 6.9</div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-300">
              <div className="text-blue-900">Baja</div>
              <div className="text-blue-700">0.1 - 3.9</div>
            </div>
          </div>
          <div className="mt-4 text-sm text-slate-600">
            <p>Las puntuaciones CVSS se calculan en base a métricas de explotabilidad e impacto, proporcionando una evaluación objetiva del riesgo.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
