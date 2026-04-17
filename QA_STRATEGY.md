# Estrategia de Pruebas (QA Strategy)

Este documento describe el enfoque y las prácticas de Quality Assurance (QA) implementadas para el proyecto **Todo App**. El objetivo es garantizar la calidad, estabilidad y excelente experiencia de usuario del aplicativo.

## 1. Alcance de las Pruebas
Las pruebas cubren todas las funcionalidades principales (Core) del Todo App:
- Creación de tareas (con validaciones de longitud y caracteres).
- Eliminación de tareas (individuales y limpieza de completadas).
- Actualización de estado (marcar como completadas/pendientes).
- Persistencia e integridad del Store de datos interno.
- Responsividad y Diseño Visual (UI/UX).

## 2. Herramientas y Tecnologías
- **Gestión de Pruebas y Defectos:** GitHub Projects e Issues.
- **Ejecución Manual:** Exploradores modernos (Chrome, Firefox, Safari) y DevTools para simular dispositivos móviles.
- **Automatización (Proyectada):** Playwright o Cypress para pruebas End-to-End (E2E) de flujos críticos.
- **Control de Versiones:** Git y GitHub.

## 3. Tipos de Pruebas Implementadas
- **Pruebas Funcionales (Manuales):** Validación paso a paso de los requerimientos de negocio y casos de uso del usuario.
- **Pruebas de Interfaz (UI/UX):** Verificación de estilos, responsive design y accesibilidad (hover, focus states, contrastes).
- **Smoke Testing:** Verificación rápida del "Flujo Feliz" (Happy Path) para asegurar que el sistema compila y las funciones críticas andan antes de cualquier despliegue a producción.
- **Pruebas Exploratorias:** Sesiones de prueba sin guión para identificar comportamientos inesperados (edge cases) y vulnerabilidades no contempladas.

## 4. Ciclo de Vida de Defectos (Bug Tracking)
Cuando se encuentra un error durante las pruebas, se sigue este proceso:
1. Se crea un Issue con la etiqueta `type: bug`.
2. Se incluye la **Anatomía del Reclamo**:
   - **Pasos para reproducir:** Instrucciones exactas para replicar el fallo.
   - **Resultado actual vs. Resultado esperado:** Lo que hace la app vs. lo que debería hacer.
   - **Entorno:** Navegador, Resolución, Sistema Operativo (Ej: Chrome 114 en Windows 11).
   - **Evidencia:** Screenshots, logs de consola o videos cortos (GIFs).
3. Se asigna una prioridad (`priority: high`, `medium`, `low`).
4. Se coloca en la columna "Bug Tracking" del Tablero y espera solución del área de Desarrollo.

## 5. Reporte de Ejecución (Ejemplo de Plantilla al cierre de un Sprint)
Al finalizar un Sprint de pruebas o un hito (Milestone), se genera un reporte consolidado:

> **Sprint 1 QA Report (Ejemplo):**
> - **Casos de Prueba Ejecutados:** 4
> - **Pasados (Passed):** 4
> - **Fallados (Failed):** 0
> - **Bugs Encontrados:** 0
> - **Bugs Corregidos y Verificados:** 0
> - **Estado General:** GO (Aprobado para pase a Producción)

---
*Documento mantenido por QA.*
