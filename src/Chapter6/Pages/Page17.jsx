import { useOutletContext } from 'react-router-dom'
import SimpleLayout from '../../Template/PageTemp/SimpleLayout'

export default function Page17({ className }) {
  const {chapter} = useOutletContext();
  return (
    <SimpleLayout
      className={className}
      agendaNum={2}
      dataNum={14}
      chapter={chapter}
    />
  )
}
