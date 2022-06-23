import Skills from './Skills';
import { TextContainer, WhiteDivider, PageContainer } from '../components';
import Profile from './Profile';
import PersonalInformation from './PersonalInformation';
import WorkExperience from './WorkExperience';
import Education from './Education';
import PrintingHeader from './PrintingHeader';

interface CvPageContentProps {
  readonly isPrinting: boolean;
}

export default function CvPageContent({ isPrinting }: CvPageContentProps) {
  return (
    <PageContainer>
      <PrintingHeader isPrinting={isPrinting} />
      <TextContainer>
        <PersonalInformation />
      </TextContainer>
      <WhiteDivider />
      <TextContainer>
        <Profile />
      </TextContainer>
      <WhiteDivider />
      <TextContainer>
        <Skills />
      </TextContainer>
      <WhiteDivider />
      <TextContainer>
        <WorkExperience />
      </TextContainer>
      <WhiteDivider />
      <TextContainer>
        <Education />
      </TextContainer>
    </PageContainer>
  );
}
