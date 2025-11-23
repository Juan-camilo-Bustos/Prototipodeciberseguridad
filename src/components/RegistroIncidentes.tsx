import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  AlertTriangle, 
  Shield, 
  Clock,
  CheckCircle,
  XCircle,
  Search,
  Plus,
  Filter
} from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const incidentes = [
  {
    id: 'INC-2024-001',
    titulo: 'Intento de acceso no autorizado a servidor de base de datos',
    categoria: 'Acceso no autorizado',
    severidad: 'alta',
    estado: 'resuelto',
    fecha: '2024-11-01 14:23',
    reportadoPor: 'Sistema SIEM',
    asignadoA: 'Ana Torres',
    descripcion: 'Detección de múltiples intentos de login fallidos desde IP externa',
    accionesTomadas: 'IP bloqueada, revisión de logs, fortalecimiento de reglas firewall',
    tiempoResolucion: '4 horas'
  },
  {
    id: 'INC-2024-002',
    titulo: 'Campaña de phishing detectada en correos corporativos',
    categoria: 'Phishing',
    severidad: 'media',
    estado: 'resuelto',
    fecha: '2024-11-05 09:15',
    reportadoPor: 'Juan Pérez (Usuario)',
    asignadoA: 'Carlos Ramírez',
    descripcion: 'Email sospechoso suplantando identidad de proveedor bancario',
    accionesTomadas: 'Emails bloqueados, alerta a usuarios, actualización filtros anti-spam',
    tiempoResolucion: '2 horas'
  },
  {
    id: 'INC-2024-003',
    titulo: 'Malware detectado en estación de trabajo',
    categoria: 'Malware',
    severidad: 'alta',
    estado: 'resuelto',
    fecha: '2024-11-10 16:45',
    reportadoPor: 'Antivirus Corporativo',
    asignadoA: 'Luis Martínez',
    descripcion: 'Troyano detectado en equipo de área de marketing',
    accionesTomadas: 'Equipo aislado, eliminación de malware, restauración desde backup',
    tiempoResolucion: '6 horas'
  },
  {
    id: 'INC-2024-004',
    titulo: 'Fuga de información por configuración incorrecta',
    categoria: 'Fuga de datos',
    severidad: 'critica',
    estado: 'en_investigacion',
    fecha: '2024-11-18 11:30',
    reportadoPor: 'Auditoría Interna',
    asignadoA: 'María González (CISO)',
    descripcion: 'Repositorio cloud configurado como público accidentalmente',
    accionesTomadas: 'Repositorio asegurado, evaluación de exposición en progreso',
    tiempoResolucion: 'En curso'
  },
  {
    id: 'INC-2024-005',
    titulo: 'Ataque DDoS contra portal web corporativo',
    categoria: 'DDoS',
    severidad: 'alta',
    estado: 'mitigado',
    fecha: '2024-11-20 08:00',
    reportadoPor: 'Monitoreo de Red',
    asignadoA: 'Ana Torres',
    descripcion: 'Tráfico anómalo saturando ancho de banda',
    accionesTomadas: 'Activación CDN anti-DDoS, filtrado de tráfico malicioso',
    tiempoResolucion: '3 horas'
  },
  {
    id: 'INC-2024-006',
    titulo: 'Dispositivo USB no autorizado conectado',
    categoria: 'Violación de política',
    severidad: 'baja',
    estado: 'resuelto',
    fecha: '2024-11-22 13:20',
    reportadoPor: 'DLP System',
    asignadoA: 'Carlos Ramírez',
    descripcion: 'USB personal conectado en equipo de área sensible',
    accionesTomadas: 'Dispositivo bloqueado, capacitación al usuario, recordatorio de políticas',
    tiempoResolucion: '1 hora'
  }
];

const estadisticas = {
  total: incidentes.length,
  resueltos: incidentes.filter(i => i.estado === 'resuelto').length,
  enInvestigacion: incidentes.filter(i => i.estado === 'en_investigacion').length,
  mitigados: incidentes.filter(i => i.estado === 'mitigado').length,
  criticos: incidentes.filter(i => i.severidad === 'critica').length,
};

export function RegistroIncidentes() {
  const [filtroSeveridad, setFiltroSeveridad] = useState('todos');
  const [filtroEstado, setFiltroEstado] = useState('todos');
  const [busqueda, setBusqueda] = useState('');
  const [nuevoIncidente, setNuevoIncidente] = useState({
    titulo: '',
    categoria: '',
    severidad: '',
    descripcion: '',
    reportadoPor: ''
  });

  const incidentesFiltrados = incidentes.filter(incidente => {
    const cumpleSeveridad = filtroSeveridad === 'todos' || incidente.severidad === filtroSeveridad;
    const cumpleEstado = filtroEstado === 'todos' || incidente.estado === filtroEstado;
    const cumpleBusqueda = busqueda === '' || 
      incidente.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      incidente.id.toLowerCase().includes(busqueda.toLowerCase());
    
    return cumpleSeveridad && cumpleEstado && cumpleBusqueda;
  });

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
        return (
          <Badge className="bg-green-600">
            <CheckCircle className="w-3 h-3 mr-1" />
            Resuelto
          </Badge>
        );
      case 'en_investigacion':
        return (
          <Badge className="bg-amber-600">
            <Clock className="w-3 h-3 mr-1" />
            En Investigación
          </Badge>
        );
      case 'mitigado':
        return (
          <Badge className="bg-blue-600">
            <Shield className="w-3 h-3 mr-1" />
            Mitigado
          </Badge>
        );
      default:
        return <Badge variant="outline">{estado}</Badge>;
    }
  };

  const getSeveridadIcon = (severidad: string) => {
    const baseClass = "w-5 h-5";
    switch (severidad) {
      case 'critica':
        return <XCircle className={`${baseClass} text-red-600`} />;
      case 'alta':
        return <AlertTriangle className={`${baseClass} text-orange-600`} />;
      case 'media':
        return <AlertTriangle className={`${baseClass} text-yellow-600`} />;
      case 'baja':
        return <Shield className={`${baseClass} text-blue-600`} />;
      default:
        return <Shield className={`${baseClass} text-slate-600`} />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header con Estadísticas */}
      <Card className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Shield className="w-6 h-6" />
            Sistema de Registro de Incidentes
          </CardTitle>
          <CardDescription className="text-red-100">
            Trazabilidad completa y gestión centralizada de eventos de seguridad
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-5">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-red-100">Total Incidentes</div>
              <div className="text-white">{estadisticas.total}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-red-100">Resueltos</div>
              <div className="text-white">{estadisticas.resueltos}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-red-100">En Investigación</div>
              <div className="text-white">{estadisticas.enInvestigacion}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-red-100">Mitigados</div>
              <div className="text-white">{estadisticas.mitigados}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-red-100">Críticos</div>
              <div className="text-white">{estadisticas.criticos}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Controles de Filtrado */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-blue-600" />
                Filtros y Búsqueda
              </CardTitle>
              <CardDescription>Filtrar incidentes por criterios específicos</CardDescription>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-blue-600">
                  <Plus className="w-4 h-4 mr-2" />
                  Nuevo Incidente
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Registrar Nuevo Incidente</DialogTitle>
                  <DialogDescription>
                    Complete el formulario para registrar un nuevo incidente de seguridad
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="titulo">Título del Incidente</Label>
                    <Input 
                      id="titulo" 
                      placeholder="Descripción breve del incidente"
                      value={nuevoIncidente.titulo}
                      onChange={(e) => setNuevoIncidente({...nuevoIncidente, titulo: e.target.value})}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="categoria">Categoría</Label>
                      <Select 
                        value={nuevoIncidente.categoria}
                        onValueChange={(value) => setNuevoIncidente({...nuevoIncidente, categoria: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar categoría" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="phishing">Phishing</SelectItem>
                          <SelectItem value="malware">Malware</SelectItem>
                          <SelectItem value="acceso_no_autorizado">Acceso no autorizado</SelectItem>
                          <SelectItem value="fuga_datos">Fuga de datos</SelectItem>
                          <SelectItem value="ddos">DDoS</SelectItem>
                          <SelectItem value="violacion_politica">Violación de política</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="severidad">Severidad</Label>
                      <Select
                        value={nuevoIncidente.severidad}
                        onValueChange={(value) => setNuevoIncidente({...nuevoIncidente, severidad: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar severidad" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="critica">Crítica</SelectItem>
                          <SelectItem value="alta">Alta</SelectItem>
                          <SelectItem value="media">Media</SelectItem>
                          <SelectItem value="baja">Baja</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reportadoPor">Reportado por</Label>
                    <Input 
                      id="reportadoPor" 
                      placeholder="Nombre de quien reporta"
                      value={nuevoIncidente.reportadoPor}
                      onChange={(e) => setNuevoIncidente({...nuevoIncidente, reportadoPor: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="descripcion">Descripción Detallada</Label>
                    <Textarea 
                      id="descripcion" 
                      placeholder="Descripción completa del incidente, incluyendo contexto y detalles técnicos"
                      rows={5}
                      value={nuevoIncidente.descripcion}
                      onChange={(e) => setNuevoIncidente({...nuevoIncidente, descripcion: e.target.value})}
                    />
                  </div>
                  <Button className="w-full bg-blue-600">
                    Registrar Incidente
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="busqueda">Búsqueda</Label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                <Input
                  id="busqueda"
                  placeholder="ID o título de incidente..."
                  className="pl-9"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="filtro-severidad">Severidad</Label>
              <Select value={filtroSeveridad} onValueChange={setFiltroSeveridad}>
                <SelectTrigger id="filtro-severidad">
                  <SelectValue placeholder="Filtrar por severidad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todas las severidades</SelectItem>
                  <SelectItem value="critica">Crítica</SelectItem>
                  <SelectItem value="alta">Alta</SelectItem>
                  <SelectItem value="media">Media</SelectItem>
                  <SelectItem value="baja">Baja</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="filtro-estado">Estado</Label>
              <Select value={filtroEstado} onValueChange={setFiltroEstado}>
                <SelectTrigger id="filtro-estado">
                  <SelectValue placeholder="Filtrar por estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos los estados</SelectItem>
                  <SelectItem value="resuelto">Resuelto</SelectItem>
                  <SelectItem value="en_investigacion">En Investigación</SelectItem>
                  <SelectItem value="mitigado">Mitigado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-4 text-sm text-slate-600">
            Mostrando {incidentesFiltrados.length} de {incidentes.length} incidentes
          </div>
        </CardContent>
      </Card>

      {/* Lista de Incidentes */}
      <div className="space-y-4">
        {incidentesFiltrados.map((incidente) => (
          <Card key={incidente.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  {getSeveridadIcon(incidente.severidad)}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-slate-900">{incidente.id}</CardTitle>
                      {getSeveridadBadge(incidente.severidad)}
                      {getEstadoBadge(incidente.estado)}
                    </div>
                    <CardDescription className="text-slate-900">
                      {incidente.titulo}
                    </CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="detalles" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="detalles">Detalles</TabsTrigger>
                  <TabsTrigger value="acciones">Acciones</TabsTrigger>
                  <TabsTrigger value="metadata">Metadata</TabsTrigger>
                </TabsList>
                <TabsContent value="detalles" className="space-y-3 pt-4">
                  <div>
                    <h4 className="text-slate-700 mb-2">Descripción</h4>
                    <p className="text-slate-900">{incidente.descripcion}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-600">Categoría:</span>
                      <span className="ml-2 text-slate-900">{incidente.categoria}</span>
                    </div>
                    <div>
                      <span className="text-slate-600">Tiempo de Resolución:</span>
                      <span className="ml-2 text-slate-900">{incidente.tiempoResolucion}</span>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="acciones" className="space-y-3 pt-4">
                  <div>
                    <h4 className="text-slate-700 mb-2">Acciones Tomadas</h4>
                    <p className="text-slate-900">{incidente.accionesTomadas}</p>
                  </div>
                  {incidente.estado === 'resuelto' && (
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center gap-2 text-green-700">
                        <CheckCircle className="w-4 h-4" />
                        <span>Incidente resuelto exitosamente</span>
                      </div>
                    </div>
                  )}
                </TabsContent>
                <TabsContent value="metadata" className="pt-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-600">Fecha y Hora:</span>
                      <span className="ml-2 text-slate-900">{incidente.fecha}</span>
                    </div>
                    <div>
                      <span className="text-slate-600">Reportado por:</span>
                      <span className="ml-2 text-slate-900">{incidente.reportadoPor}</span>
                    </div>
                    <div>
                      <span className="text-slate-600">Asignado a:</span>
                      <span className="ml-2 text-slate-900">{incidente.asignadoA}</span>
                    </div>
                    <div>
                      <span className="text-slate-600">ID de Referencia:</span>
                      <span className="ml-2 text-slate-900">{incidente.id}</span>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        ))}
      </div>

      {incidentesFiltrados.length === 0 && (
        <Card>
          <CardContent className="py-12">
            <div className="text-center text-slate-500">
              <Shield className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No se encontraron incidentes que coincidan con los filtros aplicados</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
