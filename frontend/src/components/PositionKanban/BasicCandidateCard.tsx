import React from 'react';
import { Card, Badge, Button, ButtonGroup } from 'react-bootstrap';

interface Candidate {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  currentInterviewStep: number;
  averageScore?: number;
}

interface BasicCandidateCardProps {
  candidate: Candidate;
  onMoveForward: () => void;
  onMoveBackward: () => void;
  canMoveForward: boolean;
  canMoveBackward: boolean;
}

const BasicCandidateCard: React.FC<BasicCandidateCardProps> = ({
  candidate,
  onMoveForward,
  onMoveBackward,
  canMoveForward,
  canMoveBackward
}) => {
  const fullName = `${candidate.firstName} ${candidate.lastName}`;

  return (
    <Card className="mb-2 shadow-sm">
      <Card.Body className="p-2">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <div>
            <h6 className="mb-1 fw-bold">{fullName}</h6>
            <small className="text-muted">{candidate.email}</small>
          </div>
          {candidate.averageScore && (
            <Badge bg="info" className="ms-2">
              {candidate.averageScore}/10
            </Badge>
          )}
        </div>
        
        <ButtonGroup size="sm" className="w-100">
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={onMoveBackward}
            disabled={!canMoveBackward}
            className="flex-fill"
          >
            ←
          </Button>
          <Button
            variant="outline-primary"
            size="sm"
            onClick={onMoveForward}
            disabled={!canMoveForward}
            className="flex-fill"
          >
            →
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default BasicCandidateCard; 