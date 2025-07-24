import { useOutletContext } from 'react-router-dom'
import SimpleLayout from '../../Template/PageTemp/SimpleLayout';

export default function Page4({ className }) {
  const {chapter} = useOutletContext();
  const adjustmentClass = "-mt-[3rem]";
  return (
        <SimpleLayout
          className={className}
          adjustmentClass={adjustmentClass}
          agendaNum={0}
          dataNum={2}
          chapter={chapter}
        />
  )
}