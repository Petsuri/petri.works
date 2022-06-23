import { useTranslation } from 'react-i18next';
import { Link, Paragraph, TextContainer } from '../components';

interface PrintingHeaderProps {
  readonly isPrinting: boolean;
}

export default function PrintingHeader({ isPrinting }: PrintingHeaderProps) {
  const { t, i18n } = useTranslation();

  if (!isPrinting) {
    return null;
  }

  const currentDate = new Date().toLocaleDateString(i18n.language);
  return (
    <TextContainer>
      <Paragraph>
        {t('cv.printed', { date: currentDate })}
        <Link text="petri.works" to="https://petri.works" />.
      </Paragraph>
    </TextContainer>
  );
}
