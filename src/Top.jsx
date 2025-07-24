import Title from './Template/Title/Title';
import Menu from './Introduction/Menu'
import { TitleData } from './Data/TitleData';

export default function Top() {
  return (
    <div className="relative h-screen">
      <Menu />
      <div className="absolute inset-10 flex justify-center items-center">
        <Title
          className="text-[#174C61] text-[80px] xl:text-[150px] -z-10"
        >
          {TitleData[0].index}
        </Title>
      </div>
    </div>
  )
}