import styled from '@emotion/styled';
import { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import CvPageContent from './CvPageContent';
import PrintButton from './PrintButton';

const PositionToRight = styled('span')(() => ({
  position: 'absolute',
  right: '1rem',
}));

export default function CvPage() {
  const contentComponentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <ReactToPrint
        documentTitle="Petri Miikki CV"
        copyStyles={true}
        trigger={() => {
          return (<PositionToRight>
            <PrintButton />
          </PositionToRight>);
        }}
        content={() => contentComponentRef.current}
      />
      <div ref={contentComponentRef}>
        <CvPageContent />
      </div>
    </div>
  );
}
