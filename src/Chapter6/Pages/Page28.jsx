import { useOutletContext } from 'react-router-dom'
import CodeLayout from '../../Template/PageTemp/CodeLayout'

export default function Page28({ className }) {
  const {chapter} = useOutletContext();
  return (
    <CodeLayout
      className={className}
      agendaNum={3}
      dataNum={25}
      chapter={chapter}
    />
  )
}