import axios from 'axios';
import { ErrorHandler } from '../utils/ErrorHandler';

export const uploadCV = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await axios.post('http://localhost:3010/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data; // Devuelve la ruta del archivo y el tipo
    } catch (error) {
        ErrorHandler.logError(error, 'uploadCV');
        throw new Error(ErrorHandler.handleApiError(error));
    }
};

export const sendCandidateData = async (candidateData) => {
    try {
        const response = await axios.post('http://localhost:3010/candidates', candidateData);
        return response.data;
    } catch (error) {
        ErrorHandler.logError(error, 'sendCandidateData');
        throw new Error(ErrorHandler.handleApiError(error));
    }
};

// Nuevas funciones para el kanban
export const getPositionCandidates = async (positionId) => {
    try {
        // Mock data por ahora - en producción sería una llamada real
        const mockCandidates = [
            {
                id: 1,
                firstName: 'Juan',
                lastName: 'Pérez',
                email: 'juan.perez@email.com',
                currentInterviewStep: 1,
                averageScore: 8.5
            },
            {
                id: 2,
                firstName: 'María',
                lastName: 'García',
                email: 'maria.garcia@email.com',
                currentInterviewStep: 2,
                averageScore: 7.8
            },
            {
                id: 3,
                firstName: 'Carlos',
                lastName: 'López',
                email: 'carlos.lopez@email.com',
                currentInterviewStep: 3,
                averageScore: 9.2
            }
        ];
        
        return mockCandidates;
        
        // En producción, descomentar esto:
        // const response = await axios.get(`http://localhost:3010/position/${positionId}/candidates`);
        // return response.data;
    } catch (error) {
        ErrorHandler.logError(error, 'getPositionCandidates');
        throw new Error(ErrorHandler.handleApiError(error));
    }
};

export const updateCandidateStage = async (candidateId, newStage) => {
    try {
        // Mock - en producción sería una llamada real
        console.log(`Updating candidate ${candidateId} to stage ${newStage}`);
        
        // Simular delay de red
        await new Promise(resolve => setTimeout(resolve, 500));
        
        return { success: true };
        
        // En producción, descomentar esto:
        // const response = await axios.put(`http://localhost:3010/candidates/${candidateId}/stage`, {
        //     currentInterviewStep: newStage
        // });
        // return response.data;
    } catch (error) {
        ErrorHandler.logError(error, 'updateCandidateStage');
        throw new Error(ErrorHandler.handleApiError(error));
    }
};