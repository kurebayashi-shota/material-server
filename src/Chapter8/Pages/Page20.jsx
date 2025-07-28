import { useOutletContext } from 'react-router-dom';
import StepRayout from '../../Template/PageTemp/StepRayout';

export default function Page20({ className }) {
  const {chapter} = useOutletContext();
  
  return (
      <StepRayout
        className={className}
        agendaNum={2}
        dataNum={17}
        chapter={chapter}
      />
  )
}