import Thitle from './ThitleLabel/Thitle'
import Menu from "./Introduction/Menu";
export default function Top() {
  return (
    <div className='h-screen'>
      <Menu />
      <div
        className='flex items-center justify-center h-[90%]'
      >
        <div className="">
          <Thitle
            className="text-[#174C61] text-[80px] xl:text-[150px]"
          >
            サーバー勉強会
          </Thitle>
        </div>
      </div>
    </div>
  )
}