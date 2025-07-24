import { useOutletContext } from 'react-router-dom'
import SimpleLayout from '../../Template/PageTemp/SimpleLayout';
import Component5 from './Components/Component5';

export default function Page5({ className }) {
  const {chapter} = useOutletContext();
  const adjustmentClass = "-mt-[3rem]";
  return (
    <>
        <SimpleLayout className={className} adjustmentClass={adjustmentClass} agendaNum={1} dataNum={2} chapter={chapter} />
        <Component5 />
    </>
  )
}