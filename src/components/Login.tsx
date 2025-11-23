import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Alert, AlertDescription } from './ui/alert';
import { Shield, Lock, User, AlertCircle, CheckCircle } from 'lucide-react';

interface LoginProps {
  onLogin: (cedula: string) => void;
}

// Usuarios de prueba
const usuariosValidos = [
  { cedula: '1234567890', clave: 'admin123', nombre: 'Juan Bustos', rol: 'Usuario Prueba' },
  
];

export function Login({ onLogin }: LoginProps) {
  const [cedula, setCedula] = useState('');
  const [clave, setClave] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simular delay de autenticación
    setTimeout(() => {
      const usuario = usuariosValidos.find(
        u => u.cedula === cedula && u.clave === clave
      );

      if (usuario) {
        onLogin(usuario.cedula);
      } else {
        setError('Número de cédula o clave incorrectos');
      }
      setIsLoading(false);
    }, 800);
  };

  const handleCedulaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Solo permitir números
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setCedula(value);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      {/* Patrón de fondo */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="w-full max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Panel Izquierdo - Información */}
          <div className="text-white space-y-6 p-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-white/20">
                <Shield className="w-10 h-10 text-blue-300" />
              </div>
              <div>
                <h1 className="text-white">
                  GEPSID
                </h1>
                <p className="text-blue-200">
                  Gestión Estratégica y Protección Integral
                </p>
              </div>
            </div>

            <div className="space-y-4 mt-12">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h3 className="text-white mb-1">Arquitectura Tecnológica</h3>
                  <p className="text-blue-200">
                    MFA, segmentación de red, cifrado y control de accesos
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-300" />
                </div>
                <div>
                  <h3 className="text-white mb-1">Cumplimiento Normativo</h3>
                  <p className="text-blue-200">
                    ISO/IEC 27001, NIST CSF y COBIT integrados
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-purple-300" />
                </div>
                <div>
                  <h3 className="text-white mb-1">Cultura y Ciberresiliencia</h3>
                  <p className="text-blue-200">
                    Capacitación continua y promoción de buenas prácticas
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-blue-200">
                Plataforma desarrollada con metodología ágil para PYMES
              </p>
            </div>
          </div>

          {/* Panel Derecho - Formulario de Login */}
          <Card className="w-full shadow-2xl border-0">
            <CardHeader className="space-y-1 pb-6">
              <CardTitle className="text-slate-900 flex items-center gap-2">
                <Lock className="w-5 h-5 text-blue-600" />
                Iniciar Sesión
              </CardTitle>
              <CardDescription>
                Ingrese su número de cédula y clave para acceder al sistema
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cedula" className="text-slate-700">
                    Número de Cédula
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                    <Input
                      id="cedula"
                      type="text"
                      placeholder="Ej: 1234567890"
                      value={cedula}
                      onChange={handleCedulaChange}
                      className="pl-10"
                      required
                      maxLength={10}
                    />
                  </div>
                  <p className="text-xs text-slate-500">
                    Solo números, máximo 10 dígitos
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="clave" className="text-slate-700">
                    Clave
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                    <Input
                      id="clave"
                      type="password"
                      placeholder="Ingrese su clave"
                      value={clave}
                      onChange={(e) => setClave(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                {error && (
                  <Alert className="border-red-200 bg-red-50">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <AlertDescription className="text-red-700">
                      {error}
                    </AlertDescription>
                  </Alert>
                )}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Verificando...
                    </>
                  ) : (
                    <>
                      <Shield className="w-4 h-4 mr-2" />
                      Ingresar al Sistema
                    </>
                  )}
                </Button>
              </form>

              {/* Usuarios de prueba */}
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600 mb-3">Usuarios de prueba:</p>
                <div className="space-y-2 text-xs">
                  {usuariosValidos.map((usuario, index) => (
                    <div
                      key={index}
                      className="p-2 bg-slate-50 rounded border border-slate-200"
                    >
                      <div className="flex justify-between">
                        <span className="text-slate-700">
                          <strong>{usuario.rol}:</strong> {usuario.nombre}
                        </span>
                      </div>
                      <div className="flex gap-4 mt-1 text-slate-500">
                        <span>Cédula: {usuario.cedula}</span>
                        <span>Clave: {usuario.clave}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs text-slate-500">
                  ¿Olvidó su clave?{' '}
                  <button className="text-blue-600 hover:underline">
                    Recuperar acceso
                  </button>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-white/60 text-sm">
          <p>© 2024 GEPSID - Todos los derechos reservados</p>
          <p className="mt-1">Prototipo Funcional - Metodología Ágil</p>
        </div>
      </div>
    </div>
  );
}
