export class ErrorHandler {
  static handleApiError(error: any): string {
    // Error de red
    if (error.name === 'TypeError' || error.message?.includes('fetch')) {
      return 'Error de conexión. Verifica tu conexión a internet.';
    }

    // Error de servidor (5xx)
    if (error.status >= 500) {
      return 'Error del servidor. Intenta nuevamente más tarde.';
    }

    // Error de cliente (4xx)
    if (error.status >= 400 && error.status < 500) {
      if (error.status === 404) {
        return 'Recurso no encontrado.';
      }
      if (error.status === 403) {
        return 'No tienes permisos para realizar esta acción.';
      }
      if (error.status === 401) {
        return 'Sesión expirada. Inicia sesión nuevamente.';
      }
      return error.message || 'Error en la solicitud.';
    }

    // Error de validación
    if (error.response?.data?.message) {
      return error.response.data.message;
    }

    // Error genérico
    return error.message || 'Error desconocido.';
  }

  static handleValidationError(errors: any): string {
    if (typeof errors === 'string') {
      return errors;
    }

    if (Array.isArray(errors)) {
      return errors.join(', ');
    }

    if (typeof errors === 'object') {
      return Object.values(errors).join(', ');
    }

    return 'Error de validación.';
  }

  static logError(error: any, context?: string): void {
    console.error(`[${context || 'App'}] Error:`, error);
    
    // En producción, aquí se enviaría a un servicio de logging
    if (process.env.NODE_ENV === 'production') {
      // TODO: Implementar logging a servicio externo
      console.error('Error logged for production monitoring');
    }
  }
} 