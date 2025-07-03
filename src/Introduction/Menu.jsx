import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <>
      <Link to="/introduction" className="ml-[3rem]">はじめに</Link>
      <Link to="/ubuntu" className="ml-[1.5rem]">OS</Link>
      <Link to="/virtualbox" className="ml-[1.5rem]">VM</Link>
      <Link to="/microsoftvisual" className="ml-[1.5rem]">MV</Link>
    </>
  )
}
