/** Fuente de navegación y contenidos institucionales de trabajo. */
export const site = {
  name: 'Departamento de Computación',
  institution: 'Facultad Experimental de Ciencias · Universidad del Zulia',
  short: 'FEC-LUZ · Computación',
  url: 'https://fec-luz-computacion.github.io',
  description: 'Portal del Departamento de Computación de la Facultad Experimental de Ciencias de la Universidad del Zulia.',
};

export const sections = [
  { slug: 'departamento', label: 'El Departamento', intro: 'Organización académica, historia y estructura departamental.', items: ['Historia del Departamento (pendiente de documentar)', 'Dirección, Asamblea y Consejo Departamental', 'Cuatro unidades académicas'] },
  { slug: 'pregrado', label: 'Pregrado', intro: 'Licenciatura en Computación: antecedentes, formación y plan de estudios suministrado para revisión.', items: ['Hitos históricos de la carrera', 'Pensum compartido; vigencia y aprobación por confirmar', 'Coordinación de Trabajo de Investigación'] },
  { slug: 'investigacion', label: 'Investigación', intro: 'Líneas de investigación por unidad académica, documentadas en el archivo suministrado y pendientes de confirmar como vigentes.', items: ['Líneas de investigación por unidad académica', 'Grupos, laboratorios y proyectos activos (por validar)', 'Publicaciones científicas (por completar)'] },
  { slug: 'docentes', label: 'Cuerpo Docente', intro: 'Directorio académico y trayectoria de los profesores.', items: ['Directorio en levantamiento de información', 'Perfiles por unidad académica', 'Datos personales solo con verificación y autorización'] },
  { slug: 'extension', label: 'Extensión', intro: 'Vinculación con la comunidad y formación continua de UDESA.', items: ['Cursos descritos en el catálogo suministrado', 'Oferta de diplomados (pendiente de confirmar)', 'Servicio Comunitario y actividades de divulgación'] },
  { slug: 'postgrado', label: 'Postgrado', intro: 'Enlace al espacio del programa de Maestría en Tecnologías de Información y Comunicación.', items: ['Página del programa de postgrado', 'Oferta, requisitos y fechas vigentes (por confirmar con su coordinación)'] },
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
  { year: '1981', event: 'Proyecto inicial de la Licenciatura en Informática y Computación.' },
  { year: '1984', event: 'Aprobación del proyecto por el Consejo Académico Docente de la FEC.' },
  { year: '1986', event: 'Aprobación de la carrera por el Consejo Universitario.' },
  { year: 'Febrero de 1987', event: 'Comienzo del ingreso de estudiantes.' },
  { year: '1999', event: 'Propuesta de modificación curricular de la carrera.' },
];

/** Títulos y horas que aparecen en el catálogo UDESA compartido. */
export const udesaCourses = [
  { title: 'Fluidez en Inteligencia Artificial e Ingeniería de Prompts', hours: 6 },
  { title: 'Fundamentos de Excel/Google Sheets', hours: 16 },
  { title: 'Presentaciones Efectivas con PowerPoint/Google Slides', hours: 16 },
  { title: 'Gestión de Datos con Excel/Google Sheets', hours: 20 },
  { title: 'Fundamentos de Programación con Python', hours: 32 },
  { title: 'Fundamentos de Programación con Python para niños', hours: 32 },
  { title: 'Desarrollo de Videojuegos con Odin y Raylib', hours: 30 },
  { title: 'SQL: Pilar del Análisis de Datos', hours: 32 },
  { title: 'Python: Pilar del Análisis de Datos', hours: 32 },
  { title: 'Desarrollo de Software Asistido con IA', hours: 32 },
];

/** Rótulos conservados como aparecen en el XLSX, sin afirmar vigencia. */
export const researchLines = [
  {
    sourceUnit: 'Tecnología de Información',
    laboratory: 'Laboratorio de Investigación de Tecnologías y Sistemas de Información (LITSI)',
    lines: ['Sistemas de Información', 'Base de Datos', 'Ingeniería de software', 'Diseño de portales web', 'Interacción Humano-Computador', 'Tecnología de Información', 'Sistemas Organizacionales', 'Comercio Electrónico', 'Gobierno Electrónico', 'Sistemas de Información Geográficos', 'Informática Educativa', 'Educación Virtual', 'Creación de Aplicaciones Distribuidas para entornos Web', 'Desarrollo y Administración de Aplicaciones con Interfaces a Base de Datos', 'Minería de Datos', 'Aplicaciones para entornos Web', 'Alfabetización Tecnológica'],
  },
  {
    sourceUnit: 'Redes e Ingeniería Telemática',
    lines: ['Sistemas Distribuidos', 'Codificación y Compresión de Datos', 'Rendimiento de Redes de Voz, Video y Datos', 'Redes de avanzada y nuevas tecnologías', 'Seguridad de Aplicaciones bajo Ambiente Web', 'Gestión del Riesgo Telemático'],
  },
  {
    sourceUnit: 'Lenguajes y Modelos Computacionales',
    lines: ['Lingüística Computacional', 'Bioinformática', 'Teoría de Sistemas y Control Automático', 'Modelos Matemáticos y Computacionales'],
  },
  {
    sourceUnit: 'Inteligencia Artificial y Computación Gráfica',
    lines: ['Vida Artificial y agentes inteligentes', 'Interfaces Gráficas', 'Simulación de entornos virtuales 3D'],
  },
];

/** Transcripción de unidades curriculares por semestre del pensum compartido. */
export const studyPlan = [
  { semester: 'I', courses: ['Lógica Matemática', 'Algoritmos y Programación I', 'Cálculo I', 'PPI: Introducción a la Computación y Sociedad Humana', 'Subárea Comunicación Humana', 'Orientación'] },
  { semester: 'II', courses: ['Matemática Discreta', 'Algoritmos y Programación II', 'Cálculo II', 'Subárea Ecológica-Científica y Tecnológica', 'Subárea Histórico-Antropológica'] },
  { semester: 'III', courses: ['Álgebra Lineal', 'Estructura de Datos', 'Probabilidad y Estadística', 'PPII: Arquitectura del Computador y Redes', 'Autodesarrollo'] },
  { semester: 'IV', courses: ['Investigación de Operaciones', 'Introducción a la Teoría de Grafos', 'Fundamentos de Bases de Datos', 'PPIII: Redes de Computadores', 'Subárea Epistemología'] },
  { semester: 'V', courses: ['Análisis Numérico', 'Teoría de la Computación', 'Ingeniería del Software', 'Sistemas Operativos I', 'Electiva Específica I'] },
  { semester: 'VI', courses: ['Computación Gráfica', 'Lenguajes de Programación', 'PPIV: Desarrollo de Sistemas', 'Sistemas Operativos II', 'Electiva Específica II', 'Orientación II'] },
  { semester: 'VII', courses: ['Inteligencia Artificial', 'PPV: Modelos y Simulación', 'Electiva Específica III', 'PPVI: Pasantía', 'Seminario de Investigación', 'Unidad Crédito de Libre Configuración'] },
  { semester: 'VIII', courses: ['Servicio Comunitario (120 horas)', 'PPVII: Trabajo de Investigación'] },
];

export const externalResources = {
  udesa: {
    catalog: 'https://sites.google.com/fec.luz.edu.ve/udesa/inicio',
    contacts: 'https://sites.google.com/fec.luz.edu.ve/udesa/contactos',
    email: 'udesa@fec.luz.edu.ve',
  },
  researchCoordination: 'https://github.com/LUZ-Computing-Research',
  postgraduate: 'https://github.com/maestriaentic-luz',
};
