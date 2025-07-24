import { useOutletContext } from 'react-router-dom'
import SimpleLayout from '../../Template/PageTemp/SimpleLayout'

export default function Page27({ className }) {
  const {chapter} = useOutletContext();
  return (
    <SimpleLayout className={className} agendaNum={0} dataNum={4} chapter={chapter} />
  )
}