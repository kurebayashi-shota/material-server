import { useOutletContext } from 'react-router-dom'
import SimpleLayout from '../../Template/PageTemp/SimpleLayout'

export default function Page18({ className }) {
  const {chapter} = useOutletContext();
  return (
    <SimpleLayout
      className={className}
      agendaNum={2}
      dataNum={15}
      chapter={chapter}
    />
  )
}
