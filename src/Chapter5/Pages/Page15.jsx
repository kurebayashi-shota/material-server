import { useOutletContext} from 'react-router-dom';
import Thitle from '../../ThitleLabel/Thitle'
import Create1 from '../../assets/Tutorial/OsInstall/osIns11.png'
import Create2 from '../../assets/Tutorial/OsInstall/osIns12.png'
import StepRayout from './StepRayout'

export default function Page15() {
  const { detailClass, frameClass } = useOutletContext();

  return (
  <div className="h-[70%]">
    <Thitle
      className="bg-white text-[2.5rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
    >
      OSのインストール
    </Thitle>
    <div className='flex h-[100%]'>
      <StepRayout
        stepContents = {[
          {
            id:18,
            text:"各項目を入力後に[次へ]",
            image:Create1,
            imageClass:'h-60 w-auto xl:h-100 rounded-md',
            nextClass:`h-[0.8rem] w-[3rem] -mt-[1.3rem] ml-[17.8rem] xl:h-[1.4rem] xl:w-[5rem] xl:-mt-[2.2rem] xl:ml-[29.7rem] rounded-sm ${frameClass}`,
            redFrameClass:`h-[5.8rem] w-[9.5rem] -mt-[10.7rem] ml-[9rem] xl:h-[10rem] xl:w-[15.5rem] xl:-mt-[18rem] xl:ml-[15rem] ${frameClass}`,
            liElements : [
              { id:1, class:`w-[10rem] xl:w-[14rem] ${detailClass}`,value:"・あなたの名前:任意" },
              { id:2, class:`w-[14rem] xl:w-[20rem] ${detailClass}`,value:"・コンピューターの名前:任意" },
              { id:3, class:`w-[12rem] xl:w-[17rem] ${detailClass}`,value:"・ユーザー名を入力:任意" },
              { id:4, class:`w-[16rem] xl:w-[23rem] ${detailClass}`,value:"・パスワードを決めて下さい:任意" },
            ]
          },
        ]}
      />
      <div className="border-l-[1px] border-cyan-600 h-[90%]"></div>
      <StepRayout
        stepContents = {[
          {
            id:19,
            text:"[次]",
            image:Create2,
            imageClass:'h-60 w-auto xl:h-100 rounded-md',
            nextClass:`h-[0.8rem] w-[3rem] -mt-[1.3rem] ml-[17.8rem] xl:h-[1.4rem] xl:w-[5rem] xl:-mt-[2.2rem] xl:ml-[29.7rem] rounded-sm ${frameClass}`,
            redFrameClass:``,
            liElements : []
          },
        ]}
      />
    </div>
  </div>
  )
}