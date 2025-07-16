import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Alert, Spinner } from 'react-bootstrap';
import SimpleKanbanBoard from './SimpleKanbanBoard';
import { getPositionCandidates, updateCandidateStage } from '../../services/candidateService';

interface Candidate {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  currentInterviewStep: number;
  averageScore?: number;
}

interface InterviewStage {
  id: number;
  name: string;
  orderIndex: number;
}

const PositionKanbanPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [stages, setStages] = useState<InterviewStage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError('');
        
        // Obtener candidatos de la posición
        const candidatesData = await getPositionCandidates(id!);
        setCandidates(candidatesData);

        // Mock stages - en producción vendría del backend
        const mockStages: InterviewStage[] = [
          { id: 1, name: 'Aplicación Recibida', orderIndex: 1 },
          { id: 2, name: 'Entrevista Inicial', orderIndex: 2 },
          { id: 3, name: 'Entrevista Técnica', orderIndex: 3 },
          { id: 4, name: 'Entrevista Final', orderIndex: 4 },
          { id: 5, name: 'Oferta', orderIndex: 5 },
          { id: 6, name: 'Contratado', orderIndex: 6 }
        ];
        setStages(mockStages);
      } catch (err: any) {
        setError(err.message || 'Error al cargar los datos');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleStageUpdate = async (candidateId: number, newStageId: number) => {
    try {
      await updateCandidateStage(candidateId, newStageId);
      
      // Actualizar estado local
      setCandidates(prev => 
        prev.map(candidate => 
          candidate.id === candidateId 
            ? { ...candidate, currentInterviewStep: newStageId }
            : candidate
        )
      );
    } catch (err: any) {
      setError(err.message || 'Error al actualizar la etapa');
    }
  };

  if (loading) {
    return (
      <Container className="mt-5 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
        <p className="mt-2">Cargando proceso de selección...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">
          <Alert.Heading>Error</Alert.Heading>
          <p>{error}</p>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Row className="mb-4">
        <Col>
          <h2>Proceso de Selección - Posición #{id}</h2>
          <p className="text-muted">
            Gestiona los candidatos a través de las diferentes etapas del proceso
          </p>
        </Col>
      </Row>
      
      <SimpleKanbanBoard
        candidates={candidates}
        stages={stages}
        onStageUpdate={handleStageUpdate}
      />
    </Container>
  );
};

export default PositionKanbanPage; 