# Prompts Conservadores - LTI Kanban (Solo Issues Críticos)

## 1. PROMPT - Configuración Frontend Crítica

```
Actúa como desarrollador frontend senior. Necesito SOLO configurar correctamente el frontend React del sistema LTI que actualmente tiene App.tsx como template por defecto.

PROBLEMA CRÍTICO IDENTIFICADO:
- App.tsx es template por defecto (no funcional)
- Necesita integración con React Router existente
- Debe conectar con página "positions" existente

ARQUITECTURA EXISTENTE (NO CAMBIAR):
- React 18.3.1 + TypeScript + Bootstrap 2.10.2
- React Router 6.23.1 configurado
- Servicios: candidateService.ts funciona
- Componentes: AddCandidateForm.js funciona

REQUERIMIENTO MÍNIMO:
- Configurar App.tsx para routing funcional
- Crear ruta /positions/:id/process → nueva página kanban
- Mantener todo lo existente intacto

FORMATO DE SALIDA: Solo los archivos mínimos necesarios para resolver el problema crítico.
```

## 2. PROMPT - Crear Página Kanban Mínima

```
Crea SOLO la página kanban básica extendiendo la arquitectura existente, sin cambiar nada que funcione.

CONTEXTO CONSERVADOR:
- Usar patrones de AddCandidateForm.js existente
- Seguir estructura de candidateService.ts existente
- Mantener estilos Bootstrap consistentes

ENDPOINTS EXISTENTES (usar tal como están):
- GET /positions/:id/interviewFlow
- GET /positions/:id/candidates
- PUT /candidates/:id/stage

COMPONENTES MÍNIMOS NECESARIOS:
1. **PositionKanbanPage** - Página principal
2. **SimpleKanbanBoard** - Board básico sin drag & drop complejo
3. **StageColumn** - Columna simple
4. **BasicCandidateCard** - Tarjeta básica

EXTENSIÓN DE SERVICIOS (no reescribir):
```typescript
// Extender candidateService.ts existente
export const getPositionCandidates = async (positionId: string) => {
  // Implementación simple
};

export const updateCandidateStage = async (candidateId: string, newStage: string) => {
  // Implementación simple
};
```

FORMATO DE SALIDA: Implementación mínima funcional que extiende lo existente.
```

## 3. PROMPT - Manejo de Errores Crítico

```
Implementa SOLO el manejo de errores robusto para resolver el issue crítico, sin cambiar la lógica existente.

PROBLEMA CRÍTICO:
- "Falta de manejo de errores consistente" (auditoría)
- Error handling inconsistente entre capas

SOLUCIÓN CONSERVADORA:
- Crear ErrorHandler centralizado
- Aplicar SOLO a nuevos componentes kanban
- NO modificar candidateService.ts existente

IMPLEMENTACIÓN MÍNIMA:
```typescript
// utils/ErrorHandler.ts (nuevo archivo)
export class ErrorHandler {
  static handleApiError(error: any): string {
    if (error.name === 'TypeError') return 'Network error';
    if (error.status >= 500) return 'Server error';
    return error.message || 'Unknown error';
  }
}
```

APLICACIÓN SOLO EN NUEVOS COMPONENTES:
```typescript
// Solo en PositionKanbanPage.tsx
try {
  const data = await getPositionCandidates(positionId);
  setCandidates(data);
} catch (error) {
  const errorMessage = ErrorHandler.handleApiError(error);
  setError(errorMessage);
}
```

FORMATO DE SALIDA: Solo ErrorHandler y su uso en componentes nuevos.
```

## 4. PROMPT - Drag & Drop Básico

```
Implementa drag & drop BÁSICO usando HTML5 nativo (no librerías externas) para evitar over-engineering.

REQUERIMIENTO MÍNIMO:
- Candidatos arrastrables entre columnas
- Actualización via PUT /candidates/:id/stage existente
- Sin animaciones complejas ni validaciones avanzadas

IMPLEMENTACIÓN NATIVA:
```typescript
// En CandidateCard
<div
  draggable
  onDragStart={(e) => e.dataTransfer.setData('candidateId', candidate.id)}
>
  {candidate.fullName}
</div>

// En StageColumn
<div
  onDrop={(e) => {
    const candidateId = e.dataTransfer.getData('candidateId');
    handleUpdateStage(candidateId, stageId);
  }}
  onDragOver={(e) => e.preventDefault()}
>
  {/* Column content */}
</div>
```

INTEGRACIÓN CON BACKEND:
- Usar updateCandidateStage() del servicio extendido
- Manejo de errores con ErrorHandler creado
- Sin optimistic updates complejos

FORMATO DE SALIDA: Implementación HTML5 drag & drop básica.
```

## 5. PROMPT - UI Consistente (Solo Necesario)

```
Aplica estilos Bootstrap SOLO para mantener consistencia con componentes existentes.

ANÁLISIS CONSERVADOR:
- Revisar estilos de AddCandidateForm.js
- Usar las mismas clases Bootstrap
- NO crear nuevos patrones de diseño

COMPONENTES ESPECÍFICOS:
```typescript
// StageColumn - usar Card como AddCandidateForm
<Card className="mb-3">
  <Card.Header>{stageName}</Card.Header>
  <Card.Body>
    {/* Candidates */}
  </Card.Body>
</Card>

// CandidateCard - similar a form elements
<Card className="mb-2 shadow-sm">
  <Card.Body className="p-2">
    <div className="d-flex justify-content-between">
      <span>{candidate.fullName}</span>
      <Badge bg="primary">{candidate.averageScore}</Badge>
    </div>
  </Card.Body>
</Card>
```

RESPONSIVE MÍNIMO:
- Solo breakpoints necesarios
- Sin CSS custom innecesario
- Usar utilities Bootstrap existentes

FORMATO DE SALIDA: Solo estilos Bootstrap necesarios para consistencia.
```

## 6. PROMPT - Tests Mínimos (Issue Crítico)

```
Crea SOLO tests básicos para resolver el issue crítico de cobertura <10%.

PROBLEMA CRÍTICO:
- Cobertura muy baja (<10%)
- Falta tests para nuevos componentes

SOLUCIÓN CONSERVADORA:
- Tests unitarios básicos
- Usar patrón de candidateService.test.ts existente
- NO modificar tests existentes

ESTRUCTURA MÍNIMA:
```
frontend/src/components/PositionKanban/
├── __tests__/
│   ├── PositionKanbanPage.test.tsx
│   └── SimpleKanbanBoard.test.tsx
```

IMPLEMENTACIÓN BÁSICA:
```typescript
// PositionKanbanPage.test.tsx
import { render, screen } from '@testing-library/react';
import { PositionKanbanPage } from '../PositionKanbanPage';

// Mock services
jest.mock('../../services/candidateService');

describe('PositionKanbanPage', () => {
  it('renders without crashing', () => {
    render(<PositionKanbanPage />);
    expect(screen.getByText(/position/i)).toBeInTheDocument();
  });

  it('handles loading state', () => {
    render(<PositionKanbanPage />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
```

OBJETIVO: Subir cobertura a >50% (no 80% para evitar over-engineering)

FORMATO DE SALIDA: Tests mínimos funcionales.
```

## 7. PROMPT - Integración Final Conservadora

```
Integra todos los componentes creados de forma conservadora, sin romper funcionalidad existente.

CHECKLIST DE INTEGRACIÓN:
1. ✅ App.tsx configurado correctamente
2. ✅ Ruta /positions/:id/process funcional
3. ✅ Página kanban básica operativa
4. ✅ Manejo de errores implementado
5. ✅ Drag & drop básico funcional
6. ✅ Tests mínimos creados

VALIDACIÓN CONSERVADORA:
- Verificar que AddCandidateForm sigue funcionando
- Confirmar que candidateService original intacto
- Validar que estilos Bootstrap consistentes

PUNTOS DE INTEGRACIÓN:
```typescript
// App.tsx - solo añadir nueva ruta
<Route path="/positions/:id/process" element={<PositionKanbanPage />} />

// PositionKanbanPage.tsx - usar servicios existentes
import { updateCandidateStage } from '../services/candidateService';
```

TESTING DE INTEGRACIÓN:
- Navegación positions → kanban funcional
- API calls no duplicados
- Error handling consistente

FORMATO DE SALIDA: Integración paso a paso sin romper lo existente.
```

## META-PROMPTING CONSERVADOR

### Principios de Ejecución
1. **EXTENDER, NO REESCRIBIR** - Usar servicios y componentes existentes
2. **RESOLVER SOLO ISSUES CRÍTICOS** - Frontend mal configurado, manejo de errores
3. **MANTENER CONSISTENCIA** - Seguir patrones de AddCandidateForm
4. **IMPLEMENTACIÓN MÍNIMA** - Sin over-engineering ni librerías innecesarias

### Orden de Ejecución Conservador
1. **Prompt 1** - Solo configurar App.tsx (crítico)
2. **Prompt 2** - Crear página básica (mínimo viable)
3. **Prompt 3** - Manejo de errores (crítico)
4. **Prompt 4** - Drag & drop básico (funcional)
5. **Prompt 5** - UI consistente (solo necesario)
6. **Prompt 6** - Tests mínimos (crítico)
7. **Prompt 7** - Integración sin romper (validación)

### Validación Continua
- ✅ ¿Funciona AddCandidateForm después de cada cambio?
- ✅ ¿candidateService original intacto?
- ✅ ¿Issues críticos resueltos?
- ✅ ¿Sin funcionalidad duplicada?

### Resultado Esperado
- Frontend funcional (resuelve crítico)
- Kanban básico operativo
- Manejo de errores robusto (resuelve crítico)
- Cobertura tests >50% (resuelve crítico)
- **CERO over-engineering**
- **CERO cambios innecesarios**