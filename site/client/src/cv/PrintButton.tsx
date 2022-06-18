import IconButton from '@mui/material/IconButton';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import { Paragraph } from '../components';

export default function PrintButton() {
  return (
    <Paragraph>
      <IconButton color="inherit" component="a">
        <PrintOutlinedIcon />
      </IconButton>
    </Paragraph>);
}