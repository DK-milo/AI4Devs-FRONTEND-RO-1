import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import BasicCandidateCard from './BasicCandidateCard';

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

interface StageColumnProps {
  stage: InterviewStage;
  candidates: Candidate[];
  onStageUpdate: (candidateId: number, newStageId: number) => void;
}

const StageColumn: React.FC<StageColumnProps> = ({
  stage,
  candidates,
  onStageUpdate
}) => {
  const getNextStageId = () => {
    // Lógica simple para obtener el siguiente stage
    return stage.orderIndex < 6 ? stage.id + 1 : stage.id;
  };

  const getPreviousStageId = () => {
    // Lógica simple para obtener el stage anterior
    return stage.orderIndex > 1 ? stage.id - 1 : stage.id;
  };

  return (
    <Card className="h-100 shadow-sm">
      <Card.Header className="bg-primary text-white">
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold">{stage.name}</span>
          <Badge bg="light" text="dark">{candidates.length}</Badge>
        </div>
      </Card.Header>
      <Card.Body className="p-2">
        {candidates.map((candidate) => (
          <BasicCandidateCard
            key={candidate.id}
            candidate={candidate}
            onMoveForward={() => onStageUpdate(candidate.id, getNextStageId())}
            onMoveBackward={() => onStageUpdate(candidate.id, getPreviousStageId())}
            canMoveForward={stage.orderIndex < 6}
            canMoveBackward={stage.orderIndex > 1}
          />
        ))}
        {candidates.length === 0 && (
          <div className="text-center text-muted py-3">
            <small>Sin candidatos</small>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default StageColumn; 