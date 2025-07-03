import { useOutletContext} from 'react-router-dom';
import Thitle from '../../ThitleLabel/Thitle'
import Create from '../../assets/Tutorial/OsSetup/osSet20.png'
import StepRayout from './StepRayout'

export default function Page30() {
  const { detailClass, frameClass } = useOutletContext();

  const stepContents = [
    {
      id:5,
      text:"コマンドの入力は[ユーザー名@ホスト名:~$]の後に続けて入力します。",
      nextClass:"",
      redFrameClass:"",
      liElements : [
        { id:1, class:`w-[34rem] xl:w-[18rem] ${detailClass}`,value:"今後はコマンド入力の場合、行頭に#をつけるので~$以降に入力して下さい" },
        { id:2, class:`w-[18rem] xl:w-[22rem] ${detailClass}`,value:"例:#touch /var/www/html/index.html" },
        { id:3, class:`w-[20rem] xl:w-[5rem] ${detailClass}`,value:"苦手な方は#以降はコピペでも大丈夫です。" },
        { id:4, class:`w-[26rem] xl:w-[5rem] ${detailClass}`,value:"コピーは[ctrl]+[insert]　ペーストは[ctrl]+[shift]+[insert]" },
      ]
    },
  ]
  
  return (
  <div className="h-[70%]">
    <Thitle
      className="bg-white text-[2.5rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
    >
      コマンド入力の説明
    </Thitle>
    <StepRayout stepContents={stepContents} />
  </div>
  )
}