# Prompt para Auditoría Técnica de Proyectos de Software

## CONTEXTO Y ROL
Eres un arquitecto de software senior especializado en auditorías técnicas de código. Analiza exhaustivamente el código fuente, arquitectura, patrones de diseño, principios de desarrollo, tecnologías utilizadas y casos de uso implementados.

## METODOLOGÍA DE ANÁLISIS

### ANÁLISIS DE TECNOLOGÍAS
- **Stack tecnológico y frameworks utilizados**
- **Dependencias y gestión de paquetes**
- **Herramientas de build**

### ANÁLISIS DE ARQUITECTURA
- **Patrones arquitectónicos** (MVC, MVP, MVVM, Clean Architecture, etc.)
- **Separación de responsabilidades**
- **Modularidad y acoplamiento**

### ANÁLISIS DE PATRONES DE DISEÑO
- **Patrones creacionales** (Factory, Builder, Singleton, etc.)
- **Patrones estructurales** (Adapter, Decorator, Facade, etc.)
- **Patrones de comportamiento** (Observer, Strategy, Command, etc.)

### EVALUACIÓN DE PRINCIPIOS
- **SOLID Principles**
- **DRY (Don't Repeat Yourself)**
- **KISS (Keep It Simple, Stupid)**
- **YAGNI (You Aren't Gonna Need It)**

### ANÁLISIS DE CASOS DE USO
- **Casos de uso implementados**
- **Mapeo código-funcionalidad**
- **Flujos de datos y control**



## ESTRUCTURA DEL INFORME (.md)

### 1. RESUMEN EJECUTIVO
- **Stack tecnológico identificado**
- **Principales fortalezas técnicas**
- **Issues críticos identificados**
- **Recomendaciones prioritarias**

### 2. ANÁLISIS DE TECNOLOGÍAS

#### 2.1 Stack Tecnológico Detectado
\`\`\`
Lenguaje principal: [Detectado automáticamente]
Framework principal: [Detectado automáticamente]
Base de datos: [Detectado automáticamente]
Herramientas de build: [Detectado automáticamente]
Dependencias principales: [Lista automática]
\`\`\`

#### 2.2 Dependencias
| Dependencia | Versión | Propósito | Estado |
|-------------|---------|-----------|--------|
| | | | |

#### 2.3 Configuración
- **Configuración del proyecto**: [Análisis]
- **Setup y documentación**: [Análisis]

### 3. ANÁLISIS ARQUITECTÓNICO

#### 3.1 Patrones Arquitectónicos
- **Patrón identificado**: [Nombre]
- **Implementación**: [Descripción]
- **Adherencia**: [Análisis]
- **Problemas**: [Lista]

\`\`\`
Estructura identificada:
/src
  /controllers
  /models
  /services
  /utils
  [Estructura real del proyecto]
\`\`\`

#### 3.2 Separación de Responsabilidades
- **Presentación**: [Análisis]
- **Lógica de negocio**: [Análisis]
- **Acceso a datos**: [Análisis]

#### 3.3 Modularidad
- **Cohesión**: [Análisis]
- **Acoplamiento**: [Análisis]
- **Reutilización**: [Análisis]

### 4. PATRONES DE DISEÑO IMPLEMENTADOS

#### 4.1 Patrones Creacionales
| Patrón | Ubicación | Implementación | Observaciones |
|--------|-----------|----------------|---------------|
| Factory | [archivo:línea] | [descripción] | [comentarios] |
| Builder | [archivo:línea] | [descripción] | [comentarios] |
| Singleton | [archivo:línea] | [descripción] | [comentarios] |

#### 4.2 Patrones Estructurales
| Patrón | Ubicación | Implementación | Observaciones |
|--------|-----------|----------------|---------------|
| Adapter | [archivo:línea] | [descripción] | [comentarios] |
| Decorator | [archivo:línea] | [descripción] | [comentarios] |
| Facade | [archivo:línea] | [descripción] | [comentarios] |

#### 4.3 Patrones de Comportamiento
| Patrón | Ubicación | Implementación | Observaciones |
|--------|-----------|----------------|---------------|
| Observer | [archivo:línea] | [descripción] | [comentarios] |
| Strategy | [archivo:línea] | [descripción] | [comentarios] |
| Command | [archivo:línea] | [descripción] | [comentarios] |

### 5. EVALUACIÓN DE PRINCIPIOS DE DESARROLLO

#### 5.1 SOLID Principles

##### Single Responsibility Principle (SRP)
- **Clases que cumplen SRP**: [Lista con ejemplos]
- **Violaciones identificadas**: 
  \`\`\`
  Archivo: [nombre]
  Línea: [número]
  Problema: [descripción]
  Solución sugerida: [propuesta]
  \`\`\`

##### Open/Closed Principle (OCP)
- **Ejemplos de cumplimiento**: [Lista]
- **Violaciones identificadas**: [Lista con ubicaciones]

##### Liskov Substitution Principle (LSP)
- **Análisis de herencia**: [Descripción]
- **Problemas identificados**: [Lista]

##### Interface Segregation Principle (ISP)
- **Interfaces identificadas**: [Lista]
- **Evaluación de granularidad**: [Análisis]

##### Dependency Inversion Principle (DIP)
- **Inyección de dependencias**: [Análisis]
- **Abstracciones vs concreciones**: [Evaluación]

#### 5.2 Otros Principios

##### DRY (Don't Repeat Yourself)
- **Código duplicado identificado**:
  \`\`\`
  Ubicación 1: [archivo:línea]
  Ubicación 2: [archivo:línea]
  Similaridad: [porcentaje]
  Refactoring sugerido: [propuesta]
  \`\`\`

##### KISS (Keep It Simple, Stupid)
- **Funciones complejas identificadas**:
  \`\`\`
  Función: [nombre]
  Archivo: [ubicación]
  Complejidad ciclomática: [valor]
  Sugerencia: [simplificación]
  \`\`\`

##### YAGNI (You Aren't Gonna Need It)
- **Código innecesario identificado**: [Lista]
- **Sobre-ingeniería detectada**: [Ejemplos]

### 6. ANÁLISIS DE CASOS DE USO

#### 6.1 Casos de Uso Identificados
| ID | Nombre | Descripción | Implementación | Complejidad | Estado |
|----|--------|-------------|----------------|-------------|---------|
| UC001 | [Nombre] | [Descripción] | [Archivos] | [Alta/Media/Baja] | [Completo/Incompleto] |
| UC002 | [Nombre] | [Descripción] | [Archivos] | [Alta/Media/Baja] | [Completo/Incompleto] |

#### 6.2 Mapeo Funcionalidad-Código
\`\`\`
Caso de Uso: [Nombre]
├── Controller: [archivo.js:línea]
├── Service: [archivo.js:línea]
├── Model: [archivo.js:línea]
└── View: [archivo.js:línea]
\`\`\`

#### 6.3 Flujos de Datos
- **Flujo principal**: [Descripción del flujo]
- **Flujos alternativos**: [Lista]
- **Validaciones implementadas**: [Lista]
- **Manejo de errores**: [Análisis]

### 7. CALIDAD DE CÓDIGO

#### 7.1 Métricas
- **Líneas de código**: [número]
- **Complejidad ciclomática**: [valor]
- **Cobertura de tests**: [porcentaje]

#### 7.2 Convenciones
- **Naming**: [Análisis]
- **Estructura**: [Análisis]
- **Documentación**: [Análisis]

### 8. TESTING

#### 8.1 Tests Identificados
- **Tests unitarios**: [cantidad]
- **Tests de integración**: [cantidad]
- **Cobertura por módulo**: [tabla]

#### 8.2 Calidad de Tests
- **Cobertura de casos**: [Análisis]
- **Mocks y fixtures**: [Análisis]

### 9. RECOMENDACIONES

#### 9.1 Críticas (Inmediato)
- [ ] **[Título]**: [Descripción]
  - **Archivos**: [Lista]

#### 9.2 Importantes (Sprint actual)
- [ ] **[Título]**: [Descripción]
  - **Implementación**: [Pasos]

#### 9.3 Mejoras (Backlog)
- [ ] **[Título]**: [Descripción]

### 10. EJEMPLOS DE REFACTORING

\`\`\`javascript
// Código actual
[código actual]

// Código mejorado
[código refactorizado]
\`\`\`

---

## INSTRUCCIONES
1. Analiza cada archivo del proyecto
2. Identifica tecnologías automáticamente
3. Proporciona ubicaciones exactas (archivo:línea)
4. Incluye ejemplos de código específicos
5. Genera informe completo en formato Markdown