import Create from '../../../assets/Tutorial/VmCreate/vmCreate1.png'
import { ClassData } from '../../classData'
export const StepData = [
    {
                text:"各項目を入力or選択後に[次へ(N)]",
                image:Create,
                imageClass:'h-60 w-auto xl:h-100',
                nextClass:`w-[3rem] h-[1rem] -mt-[1.3rem] ml-[26.9rem] xl:-mt-[2rem] xl:ml-[44.8rem] xl:h-[1.4rem] xl:w-[5rem] ${ClassData.frameClass}`,
                redFrameClass:`-mt-[10.7rem] ml-[9.3rem] xl:-mt-[17.8rem] xl:ml-[15.5rem] h-[3.2rem] w-[24rem] xl:h-[5.3rem] xl:w-[40rem] ${ClassData.frameClass}`,
                liElements : [
                  { id:1, class:`w-[6rem] xl:w-[8rem] ${ClassData.detailClass}`,value:"・名前:任意" },
                  { id:2, class:`w-[11rem] xl:w-[16rem] ${ClassData.detailClass}`,value:"・フォルダー:変更なし" },
                  { id:3, class:`w-[23rem] xl:w-[34rem] ${ClassData.detailClass}`,value:"・ISOイメージ:ダウンロードしたUbuntuイメージ" },
                ]
    }
]