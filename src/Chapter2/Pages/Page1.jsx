import { useOutletContext } from 'react-router-dom';
import Agenda from '../../Template/PageTemp/Agenda';

const Page1 = (props) => {
  const { chapter } = useOutletContext();
  return <Agenda className={props.className} chapter={chapter} />
}

export default Page1;