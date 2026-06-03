export const dashboard = {
  estadisticas: [
    {
      titulo: 'Horas Trabajadas',
      valor: '128h',
    },
    {
      titulo: 'Horas Extra',
      valor: '24h',
    },
    {
      titulo: 'Recargos',
      valor: '18h',
    },
    {
      titulo: 'Costos',
      valor: '$4.2M',
    },
  ],

  grafica: {
    horasTrabajadas: [20, 35, 30, 50, 45, 60, 72],

    horasExtra: [5, 10, 8, 15, 12, 18, 24],
  },
}

export const empleados = [
  {
    id: 1,
    nombre: 'Carlos Ramírez',
    cargo: 'Desarrollador Frontend',
    horasTrabajadas: 48,
    horasExtra: 8,
    estado: 'Activo',
  },

  {
    id: 2,
    nombre: 'Laura Gómez',
    cargo: 'Diseñadora UX/UI',
    horasTrabajadas: 42,
    horasExtra: 4,
    estado: 'Activo',
  },

  {
    id: 3,
    nombre: 'Juan Martínez',
    cargo: 'Analista QA',
    horasTrabajadas: 40,
    horasExtra: 2,
    estado: 'Inactivo',
  },
]

export const horasExtra = [
  {
    id: 1,
    empleado: 'Carlos Ramírez',
    horas: 8,
    fecha: '12 Mayo 2026',
    estado: 'Aprobado',
  },

  {
    id: 2,
    empleado: 'Laura Gómez',
    horas: 4,
    fecha: '10 Mayo 2026',
    estado: 'Pendiente',
  },
]

export const reportes = [
  {
    id: 1,
    nombre: 'Reporte Nómina',
    fecha: '28 Mayo 2026',
    formato: 'PDF',
    estado: 'Generado',
  },

  {
    id: 2,
    nombre: 'Reporte Horas Extra',
    fecha: '27 Mayo 2026',
    formato: 'Excel',
    estado: 'Pendiente',
  },

  {
    id: 3,
    nombre: 'Reporte Recargos',
    fecha: '25 Mayo 2026',
    formato: 'PDF',
    estado: 'Descargado',
  },

  {
    id: 4,
    nombre: 'Reporte Dominicales',
    fecha: '22 Mayo 2026',
    formato: 'Excel',
    estado: 'Generado',
  },
]
export const recargos = [
  {
    id: 1,
    empleado: 'Carlos Ramírez',
    tipo: 'Nocturno',
    horario: '7:00 PM - 11:00 PM',
    porcentaje: '35%',
    estado: 'Aprobado',
  },

  {
    id: 2,
    empleado: 'Laura Gómez',
    tipo: 'Hora Extra Nocturna',
    horario: '10:00 PM - 1:00 AM',
    porcentaje: '75%',
    estado: 'Pendiente',
  },

  {
    id: 3,
    empleado: 'Juan Martínez',
    tipo: 'Dominical',
    horario: 'Domingo 8:00 AM - 4:00 PM',
    porcentaje: '80%',
    estado: 'Aprobado',
  },

  {
    id: 4,
    empleado: 'Carlos Ramírez',
    tipo: 'Festivo Nocturno',
    horario: 'Festivo 7:00 PM - 2:00 AM',
    porcentaje: '115%',
    estado: 'Aprobado',
  },
]
