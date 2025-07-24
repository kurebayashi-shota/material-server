import { useOutletContext } from 'react-router-dom'
import SimpleLayout from '../../Template/PageTemp/SimpleLayout'

export default function Page3({ className }) {
  const {chapter} = useOutletContext();
  return (
    <SimpleLayout
      className={className}
      agendaNum={0}
      dataNum={1}
      chapter={chapter}
    />
  )
}