import React from 'react';
import { Row, Col } from 'react-bootstrap';
import StageColumn from './StageColumn';

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

interface SimpleKanbanBoardProps {
  candidates: Candidate[];
  stages: InterviewStage[];
  onStageUpdate: (candidateId: number, newStageId: number) => void;
}

const SimpleKanbanBoard: React.FC<SimpleKanbanBoardProps> = ({
  candidates,
  stages,
  onStageUpdate
}) => {
  // Ordenar stages por orderIndex
  const sortedStages = [...stages].sort((a, b) => a.orderIndex - b.orderIndex);

  return (
    <Row className="kanban-board">
      {sortedStages.map((stage) => {
        const stageCandidates = candidates.filter(
          candidate => candidate.currentInterviewStep === stage.id
        );
        
        return (
          <Col key={stage.id} md={2} className="mb-3">
            <StageColumn
              stage={stage}
              candidates={stageCandidates}
              onStageUpdate={onStageUpdate}
            />
          </Col>
        );
      })}
    </Row>
  );
};

export default SimpleKanbanBoard; 