import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PositionKanbanPage from '../PositionKanbanPage';
import * as candidateService from '../../../services/candidateService';

// Mock del servicio
jest.mock('../../../services/candidateService');

const mockGetPositionCandidates = candidateService.getPositionCandidates as jest.MockedFunction<typeof candidateService.getPositionCandidates>;

// Wrapper para Router
const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

// Mock de useParams
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '1' })
}));

describe('PositionKanbanPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    mockGetPositionCandidates.mockResolvedValue([]);
    
    renderWithRouter(<PositionKanbanPage />);
    expect(screen.getByText(/proceso de selección/i)).toBeInTheDocument();
  });

  it('shows loading state initially', () => {
    mockGetPositionCandidates.mockImplementation(() => new Promise(() => {})); // Never resolves
    
    renderWithRouter(<PositionKanbanPage />);
    expect(screen.getByText(/cargando/i)).toBeInTheDocument();
  });

  it('displays candidates when data loads successfully', async () => {
    const mockCandidates = [
      {
        id: 1,
        firstName: 'Juan',
        lastName: 'Pérez',
        email: 'juan@test.com',
        currentInterviewStep: 1,
        averageScore: 8.5
      }
    ];
    
    mockGetPositionCandidates.mockResolvedValue(mockCandidates);
    
    renderWithRouter(<PositionKanbanPage />);
    
    await waitFor(() => {
      expect(screen.getByText('Juan Pérez')).toBeInTheDocument();
    });
  });

  it('shows error message when API call fails', async () => {
    mockGetPositionCandidates.mockRejectedValue(new Error('API Error'));
    
    renderWithRouter(<PositionKanbanPage />);
    
    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });

  it('displays position ID in title', () => {
    mockGetPositionCandidates.mockResolvedValue([]);
    
    renderWithRouter(<PositionKanbanPage />);
    expect(screen.getByText(/posición #1/i)).toBeInTheDocument();
  });
}); 