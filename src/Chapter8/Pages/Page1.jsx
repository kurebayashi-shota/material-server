import { useOutletContext } from 'react-router-dom';
import Agenda from '../../Template/PageTemp/Agenda';

export default function Page1({ className }) {
  const { chapter } = useOutletContext();
  return (
    <Agenda
      className={className}
      chapter={chapter}
    />
  )
}