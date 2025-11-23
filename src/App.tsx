import { useState } from 'react';
import { Shield, Network, FileCheck, Users, Settings, BarChart3, LogOut } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Login } from './components/Login';
import { DashboardEstrategico } from './components/DashboardEstrategico';
import { ArquitecturaTecnologica } from './components/ArquitecturaTecnologica';
import { CumplimientoNormativo } from './components/CumplimientoNormativo';
import { CulturaOrganizacional } from './components/CulturaOrganizacional';
import { RegistroIncidentes } from './components/RegistroIncidentes';
import { AnalisisVulnerabilidades } from './components/AnalisisVulnerabilidades';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userCedula, setUserCedula] = useState('');

  const handleLogin = (cedula: string) => {
    setIsAuthenticated(true);
    setUserCedula(cedula);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserCedula('');
    setActiveTab('dashboard');
  };

  // Mostrar login si no está autenticado
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl shadow-lg">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-slate-900">
                  Gestión Estratégica y Protección Integral de Sistemas Digitales
                </h1>
                <p className="text-slate-600">
                  Plataforma de Ciberseguridad Empresarial para PYMES
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          {/* Navigation Tabs */}
          <TabsList className="grid w-full grid-cols-6 bg-white/80 backdrop-blur-sm p-1 h-auto">
            <TabsTrigger value="dashboard" className="flex flex-col gap-1 py-3">
              <BarChart3 className="w-5 h-5" />
              <span className="text-xs">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="arquitectura" className="flex flex-col gap-1 py-3">
              <Network className="w-5 h-5" />
              <span className="text-xs">Arquitectura</span>
            </TabsTrigger>
            <TabsTrigger value="cumplimiento" className="flex flex-col gap-1 py-3">
              <FileCheck className="w-5 h-5" />
              <span className="text-xs">Cumplimiento</span>
            </TabsTrigger>
            <TabsTrigger value="cultura" className="flex flex-col gap-1 py-3">
              <Users className="w-5 h-5" />
              <span className="text-xs">Cultura</span>
            </TabsTrigger>
            <TabsTrigger value="incidentes" className="flex flex-col gap-1 py-3">
              <Shield className="w-5 h-5" />
              <span className="text-xs">Incidentes</span>
            </TabsTrigger>
            <TabsTrigger value="vulnerabilidades" className="flex flex-col gap-1 py-3">
              <Settings className="w-5 h-5" />
              <span className="text-xs">Vulnerabilidades</span>
            </TabsTrigger>
          </TabsList>

          {/* Tab Contents */}
          <TabsContent value="dashboard" className="space-y-6">
            <DashboardEstrategico />
          </TabsContent>

          <TabsContent value="arquitectura" className="space-y-6">
            <ArquitecturaTecnologica />
          </TabsContent>

          <TabsContent value="cumplimiento" className="space-y-6">
            <CumplimientoNormativo />
          </TabsContent>

          <TabsContent value="cultura" className="space-y-6">
            <CulturaOrganizacional />
          </TabsContent>

          <TabsContent value="incidentes" className="space-y-6">
            <RegistroIncidentes />
          </TabsContent>

          <TabsContent value="vulnerabilidades" className="space-y-6">
            <AnalisisVulnerabilidades />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12">
        <div className="container mx-auto px-6 py-4">
          <p className="text-center text-slate-600">
            Prototipo Funcional - Metodología Ágil | ISO/IEC 27001 • NIST • COBIT
          </p>
        </div>
      </footer>
    </div>
  );
}