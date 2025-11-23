import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Users, 
  GraduationCap, 
  AlertCircle, 
  TrendingUp,
  BookOpen,
  Award,
  Calendar,
  Bell,
  CheckCircle,
  Shield
} from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Alert, AlertDescription } from './ui/alert';

const sesionesFormacion = [
  { 
    id: 1,
    titulo: 'Fundamentos de Ciberseguridad', 
    fecha: '2024-09-15', 
    duracion: '2 horas',
    asistentes: 52,
    totalEmpleados: 58,
    estado: 'completado',
    evaluacion: 4.5,
    instructor: 'María González (CISO)'
  },
  { 
    id: 2,
    titulo: 'Identificación y Prevención de Phishing', 
    fecha: '2024-10-10', 
    duracion: '1.5 horas',
    asistentes: 48,
    totalEmpleados: 58,
    estado: 'completado',
    evaluacion: 4.8,
    instructor: 'Carlos Ramírez'
  },
  { 
    id: 3,
    titulo: 'Gestión Segura de Contraseñas', 
    fecha: '2024-11-05', 
    duracion: '1 hora',
    asistentes: 55,
    totalEmpleados: 58,
    estado: 'completado',
    evaluacion: 4.6,
    instructor: 'Ana Torres'
  },
  { 
    id: 4,
    titulo: 'Protección de Datos Personales (GDPR)', 
    fecha: '2024-11-22', 
    duracion: '2 horas',
    asistentes: 42,
    totalEmpleados: 58,
    estado: 'en_curso',
    evaluacion: null,
    instructor: 'Externo - DataPrivacy Consulting'
  },
  { 
    id: 5,
    titulo: 'Ingeniería Social y Manipulación', 
    fecha: '2024-12-10', 
    duracion: '1.5 horas',
    asistentes: 0,
    totalEmpleados: 58,
    estado: 'planificado',
    evaluacion: null,
    instructor: 'Por confirmar'
  },
];

const tendenciaCapacitacion = [
  { mes: 'Jun', participacion: 65, aprobados: 58 },
  { mes: 'Jul', participacion: 72, aprobados: 68 },
  { mes: 'Ago', participacion: 78, aprobados: 72 },
  { mes: 'Sep', participacion: 90, aprobados: 85 },
  { mes: 'Oct', participacion: 83, aprobados: 78 },
  { mes: 'Nov', participacion: 95, aprobados: 88 },
];

const alertasPreventivas = [
  { 
    id: 1,
    tipo: 'Campaña Phishing Detectada',
    prioridad: 'alta',
    fecha: '2024-11-23',
    descripcion: 'Se detectó campaña de phishing suplantando banco popular',
    accion: 'Alerta enviada a todo el personal',
    estado: 'activo'
  },
  { 
    id: 2,
    tipo: 'Vulnerabilidad Crítica',
    prioridad: 'critica',
    fecha: '2024-11-20',
    descripcion: 'CVE-2024-XXXX en software corporativo ampliamente usado',
    accion: 'Actualización urgente programada',
    estado: 'resuelto'
  },
  { 
    id: 3,
    tipo: 'Campaña de Concientización',
    prioridad: 'media',
    fecha: '2024-11-18',
    descripcion: 'Mes de la Ciberseguridad - Buenas prácticas diarias',
    accion: 'Material educativo distribuido',
    estado: 'activo'
  },
  { 
    id: 4,
    tipo: 'Simulacro de Incidente',
    prioridad: 'media',
    fecha: '2024-11-15',
    descripcion: 'Ejercicio de respuesta ante ransomware planificado',
    accion: 'Simulacro programado para el 25/11',
    estado: 'planificado'
  },
];

const buenasPracticas = [
  { titulo: 'Usa contraseñas únicas y complejas', implementacion: 85, categoria: 'Acceso' },
  { titulo: 'Habilita autenticación multifactor (MFA)', implementacion: 95, categoria: 'Acceso' },
  { titulo: 'Verifica la legitimidad de correos sospechosos', implementacion: 78, categoria: 'Phishing' },
  { titulo: 'Mantén actualizado tu sistema operativo', implementacion: 92, categoria: 'Actualizaciones' },
  { titulo: 'No compartas información confidencial', implementacion: 88, categoria: 'Confidencialidad' },
  { titulo: 'Reporta incidentes inmediatamente', implementacion: 72, categoria: 'Respuesta' },
  { titulo: 'Bloquea tu equipo al ausentarte', implementacion: 90, categoria: 'Seguridad Física' },
  { titulo: 'Usa VPN en redes públicas', implementacion: 68, categoria: 'Conectividad' },
];

const metricasCiberresiliencia = [
  { indicador: 'Tiempo promedio de detección (MTTD)', valor: '2.3 horas', objetivo: '< 4 horas', estado: 'cumplido' },
  { indicador: 'Tiempo promedio de respuesta (MTTR)', valor: '6.5 horas', objetivo: '< 8 horas', estado: 'cumplido' },
  { indicador: 'Tasa de recuperación exitosa', valor: '98%', objetivo: '> 95%', estado: 'cumplido' },
  { indicador: 'Disponibilidad de sistemas críticos', valor: '99.7%', objetivo: '> 99.5%', estado: 'cumplido' },
  { indicador: 'Simulacros realizados/año', valor: '8', objetivo: '> 6', estado: 'cumplido' },
  { indicador: 'Personal certificado en seguridad', valor: '34%', objetivo: '> 40%', estado: 'en_progreso' },
];

const nivelConcienciacion = [
  { nivel: 'Básico', empleados: 12, porcentaje: 21 },
  { nivel: 'Intermedio', empleados: 28, porcentaje: 48 },
  { nivel: 'Avanzado', empleados: 18, porcentaje: 31 },
];

const COLORS = ['#ef4444', '#f59e0b', '#10b981'];

export function CulturaOrganizacional() {
  const [filtroEstado, setFiltroEstado] = useState('todos');

  const sesionesFiltered = filtroEstado === 'todos' 
    ? sesionesFormacion 
    : sesionesFormacion.filter(s => s.estado === filtroEstado);

  const getEstadoBadge = (estado: string) => {
    switch (estado) {
      case 'completado':
        return <Badge className="bg-green-600">Completado</Badge>;
      case 'en_curso':
        return <Badge className="bg-blue-600">En Curso</Badge>;
      case 'planificado':
        return <Badge variant="outline">Planificado</Badge>;
      default:
        return <Badge variant="outline">{estado}</Badge>;
    }
  };

  const getPrioridadBadge = (prioridad: string) => {
    switch (prioridad) {
      case 'critica':
        return <Badge className="bg-red-600">Crítica</Badge>;
      case 'alta':
        return <Badge className="bg-orange-600">Alta</Badge>;
      case 'media':
        return <Badge className="bg-yellow-600">Media</Badge>;
      default:
        return <Badge variant="outline">Baja</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Users className="w-6 h-6" />
            Cultura Organizacional y Capacitación
          </CardTitle>
          <CardDescription className="text-green-100">
            Desarrollo de ciberresiliencia a través de formación continua y concienciación
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-green-100">Personal Capacitado</div>
              <div className="text-white">42 / 58</div>
              <Progress value={72} className="mt-2 bg-white/20" />
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-green-100">Sesiones Completadas</div>
              <div className="text-white">3 / 5</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-green-100">Satisfacción Promedio</div>
              <div className="text-white">4.6 / 5.0</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-green-100">Alertas Activas</div>
              <div className="text-white">2</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs Principales */}
      <Tabs defaultValue="formacion" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-white">
          <TabsTrigger value="formacion">
            <GraduationCap className="w-4 h-4 mr-2" />
            Formación
          </TabsTrigger>
          <TabsTrigger value="alertas">
            <Bell className="w-4 h-4 mr-2" />
            Alertas
          </TabsTrigger>
          <TabsTrigger value="practicas">
            <BookOpen className="w-4 h-4 mr-2" />
            Buenas Prácticas
          </TabsTrigger>
          <TabsTrigger value="resiliencia">
            <Shield className="w-4 h-4 mr-2" />
            Ciberresiliencia
          </TabsTrigger>
        </TabsList>

        {/* Formación */}
        <TabsContent value="formacion" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  Tendencia de Participación
                </CardTitle>
                <CardDescription>Evolución mensual de asistencia y aprobación</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={tendenciaCapacitacion}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="mes" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }} />
                    <Legend />
                    <Line type="monotone" dataKey="participacion" name="Participación %" stroke="#3b82f6" strokeWidth={2} />
                    <Line type="monotone" dataKey="aprobados" name="Aprobados %" stroke="#10b981" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-600" />
                  Nivel de Concienciación
                </CardTitle>
                <CardDescription>Distribución del personal por nivel de conocimiento</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={nivelConcienciacion}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ nivel, porcentaje }) => `${nivel}: ${porcentaje}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="empleados"
                    >
                      {nivelConcienciacion.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 space-y-2">
                  {nivelConcienciacion.map((nivel, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }} />
                        <span className="text-slate-700">{nivel.nivel}</span>
                      </div>
                      <span className="text-slate-900">{nivel.empleados} empleados</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-600" />
                  Registro de Sesiones de Formación
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant={filtroEstado === 'todos' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => setFiltroEstado('todos')}
                  >
                    Todos
                  </Button>
                  <Button 
                    variant={filtroEstado === 'completado' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => setFiltroEstado('completado')}
                  >
                    Completados
                  </Button>
                  <Button 
                    variant={filtroEstado === 'planificado' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => setFiltroEstado('planificado')}
                  >
                    Planificados
                  </Button>
                </div>
              </CardTitle>
              <CardDescription>Calendario de capacitaciones y talleres de ciberseguridad</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sesionesFiltered.map((sesion) => (
                  <div key={sesion.id} className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <GraduationCap className="w-5 h-5 text-blue-600" />
                          <h4 className="text-slate-900">{sesion.titulo}</h4>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm text-slate-600 ml-8">
                          <div>
                            <span className="text-slate-500">Fecha:</span> {sesion.fecha}
                          </div>
                          <div>
                            <span className="text-slate-500">Duración:</span> {sesion.duracion}
                          </div>
                          <div>
                            <span className="text-slate-500">Instructor:</span> {sesion.instructor}
                          </div>
                          <div>
                            <span className="text-slate-500">Asistencia:</span> {sesion.asistentes}/{sesion.totalEmpleados} ({Math.round((sesion.asistentes/sesion.totalEmpleados)*100)}%)
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        {getEstadoBadge(sesion.estado)}
                        {sesion.evaluacion && (
                          <div className="flex items-center gap-1 text-sm">
                            <Award className="w-4 h-4 text-amber-500" />
                            <span className="text-slate-900">{sesion.evaluacion}/5.0</span>
                          </div>
                        )}
                      </div>
                    </div>
                    {sesion.estado === 'completado' && (
                      <div className="ml-8">
                        <Progress value={(sesion.asistentes/sesion.totalEmpleados)*100} className="h-2" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Alertas Preventivas */}
        <TabsContent value="alertas" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-orange-600" />
                Alertas Preventivas y Comunicaciones
              </CardTitle>
              <CardDescription>
                Sistema de notificación temprana para amenazas y campañas de concienciación
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {alertasPreventivas.map((alerta) => (
                <Alert 
                  key={alerta.id} 
                  className={
                    alerta.prioridad === 'critica' ? 'border-red-200 bg-red-50' :
                    alerta.prioridad === 'alta' ? 'border-orange-200 bg-orange-50' :
                    'border-blue-200 bg-blue-50'
                  }
                >
                  <div className="flex items-start justify-between">
                    <div className="flex gap-3 flex-1">
                      <AlertCircle className={`h-5 w-5 mt-0.5 ${
                        alerta.prioridad === 'critica' ? 'text-red-600' :
                        alerta.prioridad === 'alta' ? 'text-orange-600' :
                        'text-blue-600'
                      }`} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-slate-900">{alerta.tipo}</h4>
                          {getPrioridadBadge(alerta.prioridad)}
                          {alerta.estado === 'resuelto' && (
                            <Badge className="bg-green-600">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Resuelto
                            </Badge>
                          )}
                        </div>
                        <AlertDescription className="text-slate-700 mb-2">
                          {alerta.descripcion}
                        </AlertDescription>
                        <div className="text-sm space-y-1">
                          <div className="text-slate-600">
                            <strong>Acción:</strong> {alerta.accion}
                          </div>
                          <div className="text-slate-500">
                            Fecha: {alerta.fecha}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Alert>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Canales de Comunicación</CardTitle>
              <CardDescription>Medios utilizados para divulgación de alertas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 border border-slate-200 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Bell className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-slate-900">Email Corporativo</h4>
                      <p className="text-slate-600">Principal</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm">Alertas críticas y actualizaciones generales</p>
                </div>
                <div className="p-4 border border-slate-200 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                      <Bell className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-slate-900">Portal Intranet</h4>
                      <p className="text-slate-600">Recursos</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm">Material educativo y guías de buenas prácticas</p>
                </div>
                <div className="p-4 border border-slate-200 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                      <Bell className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-slate-900">Mensajería Interna</h4>
                      <p className="text-slate-600">Tiempo real</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm">Notificaciones urgentes y respuesta inmediata</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Buenas Prácticas */}
        <TabsContent value="practicas" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600" />
                Divulgación de Buenas Prácticas
              </CardTitle>
              <CardDescription>
                Adopción de comportamientos seguros por parte del personal
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {buenasPracticas.map((practica, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CheckCircle className={`w-5 h-5 ${
                          practica.implementacion >= 85 ? 'text-green-600' :
                          practica.implementacion >= 70 ? 'text-amber-600' :
                          'text-red-600'
                        }`} />
                        <div>
                          <h4 className="text-slate-900">{practica.titulo}</h4>
                          <p className="text-slate-600 text-sm">{practica.categoria}</p>
                        </div>
                      </div>
                      <Badge variant={practica.implementacion >= 85 ? 'default' : 'outline'}>
                        {practica.implementacion}%
                      </Badge>
                    </div>
                    <Progress value={practica.implementacion} className="ml-8" />
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
                <h4 className="text-slate-900 mb-3">Recursos Disponibles</h4>
                <div className="grid gap-3 md:grid-cols-2">
                  <Button variant="outline" className="justify-start">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Guía de Buenas Prácticas (PDF)
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Curso Online Interactivo
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Award className="w-4 h-4 mr-2" />
                    Test de Evaluación
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Bell className="w-4 h-4 mr-2" />
                    Suscribirse a Recordatorios
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Ciberresiliencia */}
        <TabsContent value="resiliencia" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-600" />
                Métricas de Ciberresiliencia
              </CardTitle>
              <CardDescription>
                Capacidad organizacional para anticipar, resistir, recuperarse y adaptarse
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {metricasCiberresiliencia.map((metrica, index) => (
                  <div key={index} className="p-4 border border-slate-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-slate-900">{metrica.indicador}</h4>
                      {metrica.estado === 'cumplido' ? (
                        <Badge className="bg-green-600">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Cumplido
                        </Badge>
                      ) : (
                        <Badge className="bg-amber-600">En Progreso</Badge>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-slate-600">Valor Actual:</span>
                        <span className="ml-2 text-slate-900">{metrica.valor}</span>
                      </div>
                      <div>
                        <span className="text-slate-600">Objetivo:</span>
                        <span className="ml-2 text-slate-900">{metrica.objetivo}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Pilares de Ciberresiliencia</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="text-slate-900 mb-1">1. Anticipar</h4>
                  <p className="text-slate-600 text-sm">Identificación proactiva de amenazas y vulnerabilidades</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="text-slate-900 mb-1">2. Resistir</h4>
                  <p className="text-slate-600 text-sm">Capacidad de mantener operaciones durante incidentes</p>
                </div>
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <h4 className="text-slate-900 mb-1">3. Recuperar</h4>
                  <p className="text-slate-600 text-sm">Restauración rápida de servicios y datos críticos</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="text-slate-900 mb-1">4. Adaptar</h4>
                  <p className="text-slate-600 text-sm">Mejora continua basada en lecciones aprendidas</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Iniciativas de Mejora</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-slate-900">Programa de Certificaciones</h4>
                    <p className="text-slate-600 text-sm">Incrementar personal certificado del 34% al 50%</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-slate-900">Simulacros Trimestrales</h4>
                    <p className="text-slate-600 text-sm">Ejercicios de respuesta ante diferentes escenarios</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-slate-900">Cultura de Reporte</h4>
                    <p className="text-slate-600 text-sm">Fomentar comunicación proactiva de incidentes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="text-slate-900">Red de Campeones</h4>
                    <p className="text-slate-600 text-sm">Embajadores de seguridad en cada departamento</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
