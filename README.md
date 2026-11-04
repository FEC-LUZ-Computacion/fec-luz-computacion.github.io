# Portal del Departamento de Computación · FEC-LUZ

Base técnica del portal institucional de la Facultad Experimental de Ciencias, Universidad del Zulia. **Versión inicial de desarrollo: no publicar como sitio oficial sin revisión.**

## Tecnología
- Astro 5, TypeScript, HTML semántico y CSS sin dependencias de interfaz.
- Sitio estático para GitHub Pages de organización (`https://fec-luz-computacion.github.io`).
- Un único repositorio para secciones del portal; proyectos de investigación independientes se enlazarán desde aquí.

## Uso local
Requiere Node.js 18.20.8, 20.3.0 o superior compatible con Astro 5.

```bash
npm install
npm run check
npm run dev
npm run build
```

## Estructura
- `src/pages/index.astro`: portada estructural
- `src/pages/[slug].astro`: páginas institucionales prerenderizadas
- `src/data/site.ts`: navegación, unidades académicas e hitos curriculares
- `src/layouts/BaseLayout.astro`: estructura compartida y metadatos
- `src/components`: cabecera y pie
- `src/styles/global.css`: estilos base **provisionales**, no diseño final
- `docs`: fuentes y pendientes editoriales

## Estado editorial
Los antecedentes de la Licenciatura provienen del documento curricular histórico «01 - Documento Computacion.doc»: proyecto inicial en 1981; aprobación del proyecto por el Consejo Académico Docente de la FEC en 1984; aprobación de la carrera por el Consejo Universitario en 1986; ingreso de estudiantes en febrero de 1987; y propuesta de modificación curricular en 1999. Son antecedentes de la carrera, no fechas de fundación del Departamento. Se debe verificar la fecha, el alcance y la aprobación de la versión del documento antes de presentar contenidos curriculares como vigentes.

No se incluye información privada de docentes, fotografías o documentos administrativos. No se confunden antecedentes de la carrera con la fundación del Departamento. La web incorpora `noindex` preventivo durante la revisión.

## Información suministrada para revisión
- Director: Prof. Henry Pereira.
- Unidades académicas y coordinaciones: ver `src/data/site.ts`; falta validación institucional formal antes de la publicación.
- Coordinaciones funcionales: Académica, Pasantías, Servicio Comunitario y Trabajo de Investigación; falta validación institucional formal antes de la publicación.

## Pendientes de validación
- Autorización de contenido y uso de símbolos institucionales.
- Fecha histórica de fundación del Departamento.
- Resolución, fecha y versión vigente del diseño curricular.
- Confirmación del directorio docente y consentimiento de publicación.
- Teléfono, correo y portal de postgrado autorizados.
- Diseño definitivo, accesibilidad visual y despliegue en fase posterior.

Consultar `docs/FUENTES-Y-VALIDACION.md`.


## Insumos incorporados para revisión

- El catálogo UDESA alimenta la sección Extensión con diez cursos y las horas señaladas en el documento. El catálogo no identifica diplomados concretos.
- El archivo de líneas de investigación alimenta la sección Investigación con una nota de vigencia pendiente.
- El pensum recibido se presenta organizado por semestre y queda pendiente confirmar su aprobación y resolver la diferencia en los totales de horas.
- Se enlazan los espacios compartidos para Trabajo de Investigación y la Maestría en TIC.
- Los detalles y pendientes están en [docs/MATRIZ-CONTENIDOS-Y-VALIDACION.md](docs/MATRIZ-CONTENIDOS-Y-VALIDACION.md) y [docs/FUENTES-Y-VALIDACION.md](docs/FUENTES-Y-VALIDACION.md).

## Verificaciones de esta actualización

- npm ci
- npm run check: 0 errores, 0 advertencias y 0 indicaciones.
- npm run build: compilación correcta; 9 páginas estáticas generadas.

Las verificaciones se realizaron localmente; no se agregó despliegue ni automatización de publicación.
