import { useOutletContext } from 'react-router-dom'
import SimpleLayout from '../../Template/PageTemp/SimpleLayout'

export default function Page24({ className }) {
  const {chapter} = useOutletContext();
  return (
    <SimpleLayout className={className} agendaNum={3} dataNum={21} chapter={chapter} />
  )
}