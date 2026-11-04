/** Fuente única de navegación y contenidos editoriales iniciales. */
export const site = {
  name: 'Departamento de Computación',
  institution: 'Facultad Experimental de Ciencias · Universidad del Zulia',
  short: 'FEC-LUZ · Computación',
  url: 'https://fec-luz-computacion.github.io',
  description: 'Portal del Departamento de Computación de la Facultad Experimental de Ciencias de la Universidad del Zulia.',
};

export const sections = [
  { slug: 'departamento', label: 'El Departamento', intro: 'Organización académica, historia y estructura departamental.', items: ['Historia del Departamento (pendiente de documentar)', 'Dirección, Asamblea y Consejo Departamental', 'Cuatro unidades académicas'] },
  { slug: 'pregrado', label: 'Pregrado', intro: 'Licenciatura en Computación: antecedentes, fundamentación, formación y perfil profesional.', items: ['Proyecto inicial de carrera (1981)', 'Aprobación de creación (1986)', 'Ingreso de estudiantes (febrero de 1987)', 'Perfil de egreso del documento curricular (validar versión vigente)', 'Plan de estudios vigente (pendiente de validación)'] },
  { slug: 'investigacion', label: 'Investigación', intro: 'Líneas, grupos, laboratorios, proyectos y producción científica.', items: ['Líneas y proyectos históricos documentados', 'Laboratorios y grupos (por validar)', 'Publicaciones científicas (por completar)'] },
  { slug: 'docentes', label: 'Cuerpo Docente', intro: 'Directorio académico y trayectoria de los profesores.', items: ['Directorio en levantamiento de información', 'Perfiles por unidad académica', 'Profesorado activo, jubilado y distinciones académicas'] },
  { slug: 'extension', label: 'Extensión', intro: 'Vinculación con la comunidad, formación continua y actividades de extensión.', items: ['Programas y cursos (por confirmar)', 'Servicio Comunitario', 'Actividades de divulgación'] },
  { slug: 'postgrado', label: 'Postgrado', intro: 'Continuidad académica y vínculos con programas de postgrado.', items: ['Enlace al portal de postgrado existente (por incorporar)', 'Programas y ofertas vigentes (por confirmar)'] },
  { slug: 'actualidad', label: 'Actualidad y Eventos', intro: 'Noticias, eventos y memoria de la actividad académica.', items: ['Semana LICOM', 'Congresos y encuentros científicos', 'Calendario y archivo de eventos'] },
  { slug: 'contacto', label: 'Contacto', intro: 'Canales de información y atención institucional.', items: ['Datos de contacto institucional (pendientes de confirmación)', 'Ubicación: Maracaibo, estado Zulia, Venezuela'] },
] as const;

export const units = [
  { name: 'Tecnología de Información', coordinator: 'María Andrade' },
  { name: 'Redes y Telemática', coordinator: 'Alfredo Acurero' },
  { name: 'Lenguajes y Modelos Computacionales', coordinator: 'Greco Sigerist Rodríguez' },
  { name: 'Computación Gráfica e Inteligencia Artificial', coordinator: 'José Sánchez' },
];

export const coordinations = [
  { name: 'Académica', coordinator: 'José Sánchez' },
  { name: 'Pasantías', coordinator: 'María Andrade' },
  { name: 'Servicio Comunitario', coordinator: 'Greco Sigerist Rodríguez' },
  { name: 'Trabajo de Investigación', coordinator: 'Yaskelly Yedra' },
];

export const milestones = [
  { year: '1981', event: 'Primer proyecto de creación de la Licenciatura en Informática y Computación.' },
  { year: '1984', event: 'El Consejo Académico Docente de la FEC aprueba el documento del proyecto de creación, según la memoria curricular.' },
  { year: '1986', event: 'Aprobación de la Licenciatura en Computación por el Consejo Universitario, según el documento curricular.' },
  { year: '1987', event: 'Ingreso de estudiantes en febrero, según el documento curricular.' },
  { year: '1999', event: 'Propuesta de modificación curricular de la carrera.' },
];
