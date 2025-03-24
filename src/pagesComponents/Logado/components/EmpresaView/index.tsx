import { useState } from 'react';
import { ViewMode } from './types';
import { ModoVisualizacao } from './Elementos/ModoVisualizacao';
import { RedeNeural } from './Elementos/ModoVisualizacao/RedeNeural';

export const EmpresaView: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('neural');

  const renderContent = () => {
    switch (viewMode) {
      case 'neural':
        return <RedeNeural />;
      case 'tabela':
        return null; // To be implemented
      case 'cartao':
        return null; // To be implemented
      case 'arvore':
        return null; // To be implemented
      default:
        return null;
    }
  };

  return (
    <div>
      <ModoVisualizacao viewMode={viewMode} onChangeView={setViewMode} />
      {renderContent()}
    </div>
  );
};