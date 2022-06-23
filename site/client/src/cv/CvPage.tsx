import styled from '@emotion/styled';
import { useRef, useState } from 'react';
import ReactToPrint from 'react-to-print';
import CvPageContent from './CvPageContent';
import PrintButton from './PrintButton';

const PositionToRight = styled('span')(() => ({
  position: 'absolute',
  right: '1rem',
}));

const addTimeToRenderPrintingMode = () => {
  return new Promise(function (resolve) {
    setTimeout(resolve, 0);
  });
};

export default function CvPage() {
  const contentComponentRef = useRef<HTMLDivElement | null>(null);
  const [isPrinting, setIsPrinting] = useState(false);

  return (
    <div>
      <ReactToPrint
        documentTitle="Petri Miikki CV"
        copyStyles={true}
        onBeforeGetContent={() => {
          setIsPrinting(true);
          return addTimeToRenderPrintingMode();
        }}
        onAfterPrint={() => setIsPrinting(false)}
        trigger={() => {
          return (
            <PositionToRight>
              <PrintButton />
            </PositionToRight>
          );
        }}
        content={() => contentComponentRef.current}
      />
      <div ref={contentComponentRef}>
        <CvPageContent isPrinting={isPrinting} />
      </div>
    </div>
  );
}
