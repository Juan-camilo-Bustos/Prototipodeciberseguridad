import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp,
  Users,
  FileCheck,
  Network,
  BookOpen
} from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const madurezData = [
  { mes: 'Ene', nivel: 2.1 },
  { mes: 'Feb', nivel: 2.3 },
  { mes: 'Mar', nivel: 2.5 },
  { mes: 'Abr', nivel: 2.8 },
  { mes: 'May', nivel: 3.1 },
  { mes: 'Jun', nivel: 3.4 },
];

const cumplimientoData = [
  { nombre: 'ISO 27001', valor: 78, color: '#3b82f6' },
  { nombre: 'NIST', valor: 65, color: '#8b5cf6' },
  { nombre: 'COBIT', valor: 72, color: '#06b6d4' },
];

const incidentesData = [
  { categoria: 'Phishing', cantidad: 12, resueltos: 10 },
  { categoria: 'Malware', cantidad: 8, resueltos: 7 },
  { categoria: 'Acceso no autorizado', cantidad: 5, resueltos: 5 },
  { categoria: 'Fuga de datos', cantidad: 2, resueltos: 2 },
  { categoria: 'DDoS', cantidad: 3, resueltos: 2 },
];

const COLORS = ['#3b82f6', '#8b5cf6', '#06b6d4'];

export function DashboardEstrategico() {
  return (
    <div className="space-y-6">
      {/* KPIs Principales */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-slate-700">Nivel de Madurez</CardTitle>
            <TrendingUp className="w-5 h-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">3.4 / 5.0</div>
            <p className="text-slate-600">
              Nivel Gestionado
            </p>
            <Progress value={68} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-slate-700">Controles Activos</CardTitle>
            <CheckCircle className="w-5 h-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">87 / 114</div>
            <p className="text-slate-600">
              76% Implementados
            </p>
            <Progress value={76} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-slate-700">Incidentes Activos</CardTitle>
            <AlertTriangle className="w-5 h-5 text-amber-600" />
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">4</div>
            <p className="text-slate-600">
              26 resueltos este mes
            </p>
            <Badge variant="outline" className="mt-2 border-amber-600 text-amber-600">
              En gestión
            </Badge>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-slate-700">Personal Capacitado</CardTitle>
            <Users className="w-5 h-5 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">42 / 58</div>
            <p className="text-slate-600">
              72% del personal
            </p>
            <Progress value={72} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Alertas Estratégicas */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              Alertas Prioritarias
            </CardTitle>
            <CardDescription>Acciones requeridas para mejorar postura de seguridad</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Alert className="border-red-200 bg-red-50">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-slate-700">
                <strong>Crítico:</strong> 3 sistemas sin parches de seguridad hace más de 30 días
              </AlertDescription>
            </Alert>
            <Alert className="border-amber-200 bg-amber-50">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <AlertDescription className="text-slate-700">
                <strong>Advertencia:</strong> Certificación ISO 27001 requiere auditoría en 45 días
              </AlertDescription>
            </Alert>
            <Alert className="border-blue-200 bg-blue-50">
              <FileCheck className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-slate-700">
                <strong>Recordatorio:</strong> Capacitación trimestral de phishing pendiente
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Network className="w-5 h-5 text-purple-600" />
              Estado de Componentes de Seguridad
            </CardTitle>
            <CardDescription>Visión general de la arquitectura tecnológica</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Autenticación Multifactor (MFA)</span>
                <Badge className="bg-green-600">Activo</Badge>
              </div>
              <Progress value={95} className="h-2" />
              <p className="text-slate-600">95% de usuarios habilitados</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Segmentación de Red</span>
                <Badge className="bg-green-600">Activo</Badge>
              </div>
              <Progress value={100} className="h-2" />
              <p className="text-slate-600">4 segmentos configurados</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Cifrado de Datos</span>
                <Badge className="bg-amber-600">Parcial</Badge>
              </div>
              <Progress value={68} className="h-2" />
              <p className="text-slate-600">68% de datos en reposo cifrados</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos Analíticos */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Evolución del Nivel de Madurez</CardTitle>
            <CardDescription>Progreso mensual en gestión de ciberseguridad</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={madurezData}>
                <defs>
                  <linearGradient id="colorNivel" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="mes" stroke="#64748b" />
                <YAxis domain={[0, 5]} stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="nivel" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorNivel)" 
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-5 gap-2 text-center">
              <div className="p-2 bg-slate-100 rounded">
                <div className="text-slate-600">Inicial</div>
                <div className="text-slate-900">1</div>
              </div>
              <div className="p-2 bg-slate-100 rounded">
                <div className="text-slate-600">Repetible</div>
                <div className="text-slate-900">2</div>
              </div>
              <div className="p-2 bg-blue-100 rounded border-2 border-blue-400">
                <div className="text-blue-700">Definido</div>
                <div className="text-blue-900">3</div>
              </div>
              <div className="p-2 bg-slate-100 rounded">
                <div className="text-slate-600">Gestionado</div>
                <div className="text-slate-900">4</div>
              </div>
              <div className="p-2 bg-slate-100 rounded">
                <div className="text-slate-600">Optimizado</div>
                <div className="text-slate-900">5</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cumplimiento Normativo</CardTitle>
            <CardDescription>Nivel de adherencia a marcos de referencia</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={cumplimientoData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ nombre, valor }) => `${nombre}: ${valor}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="valor"
                >
                  {cumplimientoData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {cumplimientoData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-slate-700">{item.nombre}</span>
                  </div>
                  <span className="text-slate-900">{item.valor}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gestión de Incidentes */}
      <Card>
        <CardHeader>
          <CardTitle>Registro de Incidentes por Categoría</CardTitle>
          <CardDescription>Comparativa entre incidentes totales y resueltos</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={incidentesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="categoria" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
              />
              <Legend />
              <Bar dataKey="cantidad" name="Total de incidentes" fill="#ef4444" radius={[8, 8, 0, 0]} />
              <Bar dataKey="resueltos" name="Incidentes resueltos" fill="#10b981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
