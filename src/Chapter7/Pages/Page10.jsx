import { useOutletContext } from 'react-router-dom';
import StepRayout from '../../Template/PageTemp/StepRayout';

export default function Page10({ className }) {
  const {chapter} = useOutletContext();
  
  return (
    <>
      <StepRayout
        className={className}
        agendaNum={1}
        dataNum={7}
        chapter={chapter}
      />
    </>
  )
}