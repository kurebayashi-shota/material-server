import { useOutletContext } from 'react-router-dom';
import StepRayout from '../../Template/PageTemp/StepRayout';

export default function Page21({ className }) {
  const {chapter} = useOutletContext();
  
  return (
      <StepRayout
        className={className}
        agendaNum={2}
        dataNum={18}
        chapter={chapter}
      />
  )
}