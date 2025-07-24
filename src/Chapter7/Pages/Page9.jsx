import { useOutletContext } from 'react-router-dom';
import StepRayout from '../../Template/PageTemp/StepRayout';

export default function Page9({ className }) {
  const {chapter} = useOutletContext();
  
  return (
    <>
      <StepRayout
        className={className}
        agendaNum={1}
        dataNum={6}
        chapter={chapter}
      />
    </>
  )
}