import React from 'react';
import { render, screen } from '@testing-library/react';
import SimpleKanbanBoard from '../SimpleKanbanBoard';

const mockCandidates = [
  {
    id: 1,
    firstName: 'Juan',
    lastName: 'Pérez',
    email: 'juan@test.com',
    currentInterviewStep: 1,
    averageScore: 8.5
  },
  {
    id: 2,
    firstName: 'María',
    lastName: 'García',
    email: 'maria@test.com',
    currentInterviewStep: 2,
    averageScore: 7.8
  }
];

const mockStages = [
  { id: 1, name: 'Aplicación Recibida', orderIndex: 1 },
  { id: 2, name: 'Entrevista Inicial', orderIndex: 2 },
  { id: 3, name: 'Entrevista Técnica', orderIndex: 3 }
];

const mockOnStageUpdate = jest.fn();

describe('SimpleKanbanBoard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(
      <SimpleKanbanBoard
        candidates={mockCandidates}
        stages={mockStages}
        onStageUpdate={mockOnStageUpdate}
      />
    );
    
    expect(screen.getByText('Aplicación Recibida')).toBeInTheDocument();
    expect(screen.getByText('Entrevista Inicial')).toBeInTheDocument();
    expect(screen.getByText('Entrevista Técnica')).toBeInTheDocument();
  });

  it('displays candidates in correct stages', () => {
    render(
      <SimpleKanbanBoard
        candidates={mockCandidates}
        stages={mockStages}
        onStageUpdate={mockOnStageUpdate}
      />
    );
    
    expect(screen.getByText('Juan Pérez')).toBeInTheDocument();
    expect(screen.getByText('María García')).toBeInTheDocument();
  });

  it('shows empty state for stages without candidates', () => {
    render(
      <SimpleKanbanBoard
        candidates={[]}
        stages={mockStages}
        onStageUpdate={mockOnStageUpdate}
      />
    );
    
    // Debería mostrar "Sin candidatos" en cada columna
    const emptyStates = screen.getAllByText('Sin candidatos');
    expect(emptyStates).toHaveLength(3);
  });

  it('renders correct number of stage columns', () => {
    render(
      <SimpleKanbanBoard
        candidates={mockCandidates}
        stages={mockStages}
        onStageUpdate={mockOnStageUpdate}
      />
    );
    
    // Verificar que se renderizan todas las etapas
    expect(screen.getByText('Aplicación Recibida')).toBeInTheDocument();
    expect(screen.getByText('Entrevista Inicial')).toBeInTheDocument();
    expect(screen.getByText('Entrevista Técnica')).toBeInTheDocument();
  });
}); 