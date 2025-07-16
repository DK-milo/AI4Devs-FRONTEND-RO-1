import { ErrorHandler } from '../ErrorHandler';

describe('ErrorHandler', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    console.error = jest.fn();
  });

  describe('handleApiError', () => {
    it('handles network errors', () => {
      const networkError = new TypeError('fetch failed');
      const result = ErrorHandler.handleApiError(networkError);
      expect(result).toBe('Error de conexión. Verifica tu conexión a internet.');
    });

    it('handles server errors (5xx)', () => {
      const serverError = { status: 500, message: 'Internal Server Error' };
      const result = ErrorHandler.handleApiError(serverError);
      expect(result).toBe('Error del servidor. Intenta nuevamente más tarde.');
    });

    it('handles 404 errors', () => {
      const notFoundError = { status: 404, message: 'Not Found' };
      const result = ErrorHandler.handleApiError(notFoundError);
      expect(result).toBe('Recurso no encontrado.');
    });

    it('handles 403 errors', () => {
      const forbiddenError = { status: 403, message: 'Forbidden' };
      const result = ErrorHandler.handleApiError(forbiddenError);
      expect(result).toBe('No tienes permisos para realizar esta acción.');
    });

    it('handles validation errors from response', () => {
      const validationError = {
        response: {
          data: {
            message: 'Validation failed'
          }
        }
      };
      const result = ErrorHandler.handleApiError(validationError);
      expect(result).toBe('Validation failed');
    });

    it('handles generic errors', () => {
      const genericError = { message: 'Something went wrong' };
      const result = ErrorHandler.handleApiError(genericError);
      expect(result).toBe('Something went wrong');
    });

    it('handles errors without message', () => {
      const errorWithoutMessage = {};
      const result = ErrorHandler.handleApiError(errorWithoutMessage);
      expect(result).toBe('Error desconocido.');
    });
  });

  describe('handleValidationError', () => {
    it('handles string errors', () => {
      const result = ErrorHandler.handleValidationError('Invalid email');
      expect(result).toBe('Invalid email');
    });

    it('handles array errors', () => {
      const result = ErrorHandler.handleValidationError(['Invalid email', 'Invalid name']);
      expect(result).toBe('Invalid email, Invalid name');
    });

    it('handles object errors', () => {
      const result = ErrorHandler.handleValidationError({
        email: 'Invalid email',
        name: 'Invalid name'
      });
      expect(result).toBe('Invalid email, Invalid name');
    });

    it('handles unknown error types', () => {
      const result = ErrorHandler.handleValidationError(null);
      expect(result).toBe('Error de validación.');
    });
  });

  describe('logError', () => {
    it('logs errors to console', () => {
      const error = new Error('Test error');
      ErrorHandler.logError(error, 'TestContext');
      
      expect(console.error).toHaveBeenCalledWith('[TestContext] Error:', error);
    });

    it('uses default context when not provided', () => {
      const error = new Error('Test error');
      ErrorHandler.logError(error);
      
      expect(console.error).toHaveBeenCalledWith('[App] Error:', error);
    });
  });
}); 