import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  FileCheck, 
  Shield, 
  CheckCircle, 
  AlertTriangle,
  XCircle,
  Award,
  BookOpen,
  Users,
  Settings
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const iso27001Controles = [
  { categoria: 'Políticas de Seguridad', total: 2, implementados: 2, enProceso: 0, pendientes: 0 },
  { categoria: 'Organización Seguridad', total: 7, implementados: 6, enProceso: 1, pendientes: 0 },
  { categoria: 'Seguridad RRHH', total: 6, implementados: 4, enProceso: 2, pendientes: 0 },
  { categoria: 'Gestión de Activos', total: 10, implementados: 7, enProceso: 2, pendientes: 1 },
  { categoria: 'Control de Acceso', total: 14, implementados: 9, enProceso: 3, pendientes: 2 },
  { categoria: 'Criptografía', total: 2, implementados: 1, enProceso: 1, pendientes: 0 },
  { categoria: 'Seguridad Física', total: 15, implementados: 11, enProceso: 3, pendientes: 1 },
  { categoria: 'Seguridad Operacional', total: 14, implementados: 10, enProceso: 3, pendientes: 1 },
  { categoria: 'Seguridad Comunicaciones', total: 7, implementados: 5, enProceso: 2, pendientes: 0 },
  { categoria: 'Adquisición y Desarrollo', total: 13, implementados: 8, enProceso: 4, pendientes: 1 },
  { categoria: 'Relaciones Proveedores', total: 5, implementados: 3, enProceso: 2, pendientes: 0 },
  { categoria: 'Gestión Incidentes', total: 7, implementados: 6, enProceso: 1, pendientes: 0 },
  { categoria: 'Continuidad Negocio', total: 4, implementados: 2, enProceso: 2, pendientes: 0 },
  { categoria: 'Cumplimiento', total: 8, implementados: 6, enProceso: 1, pendientes: 1 },
];

const nistFramework = [
  { funcion: 'Identificar', nivel: 75, controles: '12/16' },
  { funcion: 'Proteger', nivel: 68, controles: '34/50' },
  { funcion: 'Detectar', nivel: 62, controles: '15/24' },
  { funcion: 'Responder', nivel: 58, controles: '11/19' },
  { funcion: 'Recuperar', nivel: 55, controles: '8/15' },
];

const cobitProcesos = [
  { dominio: 'Evaluar, Dirigir y Monitorear (EDM)', implementacion: 72 },
  { dominio: 'Alinear, Planificar y Organizar (APO)', implementacion: 68 },
  { dominio: 'Construir, Adquirir e Implementar (BAI)', implementacion: 65 },
  { dominio: 'Entregar, Servir y Dar Soporte (DSS)', implementacion: 78 },
  { dominio: 'Monitorear, Evaluar y Valorar (MEA)', implementacion: 70 },
];

const radarData = [
  { categoria: 'ISO 27001', valor: 78 },
  { categoria: 'NIST CSF', valor: 65 },
  { categoria: 'COBIT', valor: 72 },
  { categoria: 'GDPR', valor: 60 },
  { categoria: 'PCI DSS', valor: 55 },
];

const politicasDocumentadas = [
  { nombre: 'Política de Seguridad de la Información', estado: 'aprobado', version: '2.1', fecha: '2024-10-15' },
  { nombre: 'Política de Control de Acceso', estado: 'aprobado', version: '1.8', fecha: '2024-09-20' },
  { nombre: 'Política de Gestión de Incidentes', estado: 'aprobado', version: '3.0', fecha: '2024-11-01' },
  { nombre: 'Política de Clasificación de Información', estado: 'revision', version: '1.5', fecha: '2024-11-10' },
  { nombre: 'Política de Continuidad del Negocio', estado: 'borrador', version: '0.9', fecha: '2024-11-18' },
  { nombre: 'Política de Uso Aceptable', estado: 'aprobado', version: '2.3', fecha: '2024-08-30' },
];

const roles = [
  { nombre: 'CISO (Chief Information Security Officer)', asignado: 'María González', responsabilidad: 'Dirección estratégica de seguridad' },
  { nombre: 'Responsable de Cumplimiento', asignado: 'Carlos Ramírez', responsabilidad: 'Auditorías y certificaciones' },
  { nombre: 'Analista de Seguridad SOC', asignado: 'Ana Torres', responsabilidad: 'Monitoreo y detección' },
  { nombre: 'Administrador de Sistemas', asignado: 'Luis Martínez', responsabilidad: 'Gestión de infraestructura' },
  { nombre: 'DPO (Data Protection Officer)', asignado: 'Por asignar', responsabilidad: 'Protección de datos personales' },
];

export function CumplimientoNormativo() {
  const totalControlesISO = iso27001Controles.reduce((acc, cat) => acc + cat.total, 0);
  const implementadosISO = iso27001Controles.reduce((acc, cat) => acc + cat.implementados, 0);
  const porcentajeISO = Math.round((implementadosISO / totalControlesISO) * 100);

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <FileCheck className="w-6 h-6" />
            Gestión Estratégica y Cumplimiento Normativo
          </CardTitle>
          <CardDescription className="text-purple-100">
            Seguimiento de controles basados en ISO/IEC 27001, NIST CSF y COBIT
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-purple-100">ISO 27001</div>
              <div className="text-white">{porcentajeISO}%</div>
              <Progress value={porcentajeISO} className="mt-2 bg-white/20" />
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-purple-100">NIST CSF</div>
              <div className="text-white">65%</div>
              <Progress value={65} className="mt-2 bg-white/20" />
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-purple-100">COBIT</div>
              <div className="text-white">72%</div>
              <Progress value={72} className="mt-2 bg-white/20" />
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-purple-100">Próxima Auditoría</div>
              <div className="text-white">45 días</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs de Marcos de Referencia */}
      <Tabs defaultValue="iso27001" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-white">
          <TabsTrigger value="iso27001">ISO 27001</TabsTrigger>
          <TabsTrigger value="nist">NIST CSF</TabsTrigger>
          <TabsTrigger value="cobit">COBIT</TabsTrigger>
          <TabsTrigger value="comparativa">Comparativa</TabsTrigger>
        </TabsList>

        {/* ISO 27001 */}
        <TabsContent value="iso27001" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                ISO/IEC 27001:2022 - Controles de Seguridad
              </CardTitle>
              <CardDescription>
                114 controles organizados en 14 categorías (Anexo A)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-slate-600">Total Controles</div>
                    <div className="text-slate-900">{totalControlesISO}</div>
                  </div>
                  <div>
                    <div className="text-green-600">Implementados</div>
                    <div className="text-slate-900">{implementadosISO}</div>
                  </div>
                  <div>
                    <div className="text-amber-600">En Proceso</div>
                    <div className="text-slate-900">
                      {iso27001Controles.reduce((acc, cat) => acc + cat.enProceso, 0)}
                    </div>
                  </div>
                  <div>
                    <div className="text-red-600">Pendientes</div>
                    <div className="text-slate-900">
                      {iso27001Controles.reduce((acc, cat) => acc + cat.pendientes, 0)}
                    </div>
                  </div>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={iso27001Controles} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis type="number" stroke="#64748b" />
                  <YAxis dataKey="categoria" type="category" width={150} stroke="#64748b" />
                  <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }} />
                  <Legend />
                  <Bar dataKey="implementados" name="Implementados" fill="#10b981" stackId="a" />
                  <Bar dataKey="enProceso" name="En Proceso" fill="#f59e0b" stackId="a" />
                  <Bar dataKey="pendientes" name="Pendientes" fill="#ef4444" stackId="a" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            {iso27001Controles.slice(0, 4).map((categoria, index) => {
              const porcentaje = Math.round((categoria.implementados / categoria.total) * 100);
              return (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-slate-900">{categoria.categoria}</CardTitle>
                    <CardDescription>{categoria.total} controles en total</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-700">Progreso</span>
                      <span className="text-slate-900">{porcentaje}%</span>
                    </div>
                    <Progress value={porcentaje} />
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-slate-600">{categoria.implementados}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <AlertTriangle className="w-4 h-4 text-amber-600" />
                        <span className="text-slate-600">{categoria.enProceso}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <XCircle className="w-4 h-4 text-red-600" />
                        <span className="text-slate-600">{categoria.pendientes}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* NIST CSF */}
        <TabsContent value="nist" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-600" />
                NIST Cybersecurity Framework
              </CardTitle>
              <CardDescription>
                Marco de 5 funciones principales para gestión de riesgos de ciberseguridad
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {nistFramework.map((funcion, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          index === 0 ? 'bg-blue-100' :
                          index === 1 ? 'bg-green-100' :
                          index === 2 ? 'bg-amber-100' :
                          index === 3 ? 'bg-red-100' :
                          'bg-purple-100'
                        }`}>
                          <span className={`${
                            index === 0 ? 'text-blue-600' :
                            index === 1 ? 'text-green-600' :
                            index === 2 ? 'text-amber-600' :
                            index === 3 ? 'text-red-600' :
                            'text-purple-600'
                          }`}>
                            {funcion.funcion.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-slate-900">{funcion.funcion}</h4>
                          <p className="text-slate-600">{funcion.controles} controles</p>
                        </div>
                      </div>
                      <Badge variant={funcion.nivel >= 70 ? 'default' : 'outline'}>
                        {funcion.nivel}%
                      </Badge>
                    </div>
                    <Progress value={funcion.nivel} />
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-slate-50 rounded-lg">
                <h4 className="text-slate-900 mb-2">Descripción de Funciones</h4>
                <ul className="space-y-2 text-slate-600">
                  <li><strong>Identificar:</strong> Desarrollo de comprensión organizacional sobre gestión de riesgos</li>
                  <li><strong>Proteger:</strong> Desarrollo e implementación de salvaguardas apropiadas</li>
                  <li><strong>Detectar:</strong> Desarrollo e implementación de actividades para identificar eventos</li>
                  <li><strong>Responder:</strong> Desarrollo e implementación de actividades ante incidentes detectados</li>
                  <li><strong>Recuperar:</strong> Desarrollo e implementación de planes de resiliencia y restauración</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* COBIT */}
        <TabsContent value="cobit" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-cyan-600" />
                COBIT 2019 - Gobierno y Gestión de TI
              </CardTitle>
              <CardDescription>
                5 dominios de gobierno y gestión empresarial de TI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cobitProcesos.map((proceso, index) => (
                  <div key={index} className="p-4 border border-slate-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-slate-900">{proceso.dominio}</h4>
                      <Badge className="bg-cyan-600">{proceso.implementacion}%</Badge>
                    </div>
                    <Progress value={proceso.implementacion} />
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-cyan-50 rounded-lg border border-cyan-200">
                  <h4 className="text-slate-900 mb-2">Objetivos de Gobierno (EDM)</h4>
                  <ul className="text-slate-600 space-y-1 text-sm">
                    <li>• Asegurar el establecimiento y mantenimiento del marco de gobierno</li>
                    <li>• Asegurar la entrega de beneficios</li>
                    <li>• Asegurar la optimización de riesgos</li>
                    <li>• Asegurar la optimización de recursos</li>
                  </ul>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="text-slate-900 mb-2">Áreas de Gestión</h4>
                  <ul className="text-slate-600 space-y-1 text-sm">
                    <li>• APO: Alineación estratégica</li>
                    <li>• BAI: Ciclo de vida de soluciones</li>
                    <li>• DSS: Entrega y soporte de servicios</li>
                    <li>• MEA: Monitoreo y evaluación continua</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Comparativa */}
        <TabsContent value="comparativa" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Análisis Comparativo de Cumplimiento</CardTitle>
              <CardDescription>Vista integrada de adherencia a múltiples marcos normativos</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis dataKey="categoria" stroke="#64748b" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#64748b" />
                  <Radar name="Nivel de Cumplimiento" dataKey="valor" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.5} />
                  <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }} />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-green-600" />
                  Políticas Documentadas
                </CardTitle>
                <CardDescription>{politicasDocumentadas.length} políticas registradas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {politicasDocumentadas.map((politica, index) => (
                    <div key={index} className="p-3 border border-slate-200 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-slate-900">{politica.nombre}</h4>
                        <Badge variant={
                          politica.estado === 'aprobado' ? 'default' :
                          politica.estado === 'revision' ? 'outline' :
                          'secondary'
                        }>
                          {politica.estado === 'aprobado' ? 'Aprobado' :
                           politica.estado === 'revision' ? 'En Revisión' :
                           'Borrador'}
                        </Badge>
                      </div>
                      <div className="flex gap-4 text-sm text-slate-600">
                        <span>v{politica.version}</span>
                        <span>•</span>
                        <span>{politica.fecha}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  Roles y Responsabilidades
                </CardTitle>
                <CardDescription>{roles.length} roles definidos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {roles.map((rol, index) => (
                    <div key={index} className="p-3 border border-slate-200 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-slate-900">{rol.nombre}</h4>
                        <Badge variant={rol.asignado === 'Por asignar' ? 'outline' : 'default'}>
                          {rol.asignado === 'Por asignar' ? 'Vacante' : 'Asignado'}
                        </Badge>
                      </div>
                      <p className="text-slate-600 text-sm mb-1">{rol.responsabilidad}</p>
                      <p className="text-slate-900 text-sm">{rol.asignado}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Métricas de Madurez */}
      <Card>
        <CardHeader>
          <CardTitle>Evaluación de Madurez en Seguridad Digital</CardTitle>
          <CardDescription>Basado en modelo CMMI adaptado a ciberseguridad</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-5">
            {['Inicial', 'Gestionado', 'Definido', 'Cuantificado', 'Optimizado'].map((nivel, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg text-center ${
                  index === 2 ? 'bg-blue-100 border-2 border-blue-500' : 'bg-slate-100'
                }`}
              >
                <div className={`text-2xl mb-2 ${index === 2 ? 'text-blue-900' : 'text-slate-900'}`}>
                  {index + 1}
                </div>
                <div className={index === 2 ? 'text-blue-700' : 'text-slate-600'}>
                  {nivel}
                </div>
                {index === 2 && (
                  <Badge className="mt-2 bg-blue-600">Nivel Actual</Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
