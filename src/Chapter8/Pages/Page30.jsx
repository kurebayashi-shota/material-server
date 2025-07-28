import { useOutletContext } from 'react-router-dom'
import CodeLayout from '../../Template/PageTemp/CodeLayout'

export default function Page30({ className }) {
  const {chapter} = useOutletContext();
  return (
    <CodeLayout
      className={className}
      agendaNum={3}
      dataNum={27}
      chapter={chapter}
    />
  )
}