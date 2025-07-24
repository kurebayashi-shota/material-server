import { AgendaData } from "../AgendaData"
import { ClassData } from "../classData"
import Image from "../ImageImport"

export const Capter2Data = [
    {
        Label:null,
        Title:"サーバーのハードウェア",
        TitleClass:null,
        TitleDetail:"サーバーのハードは規模により様々あるのでそこも取っつきづらく感じるポイントかと思います。ただGoogleのサーバーと個人用サーバーで同じ規模のハードを使用するのは無理があるというのは想像がつくと思います。ここでは、代表的なハードを紹介します。",
        Image:null,
        adjustment:null,
    },
    {
        Label:null,
        Title:AgendaData[0][1],
        TitleClass:ClassData.TitleClass,
        TitleDetail:null,
        Image:null,
        adjustment:null,
    },
    {
        Label:AgendaData[0],
        Title:AgendaData[0][1],
        TitleClass:null,
        TitleDetail:"さらに分かづらくしているのが仮想マシンだと思います。皆様が普段お使いのパソコンは物理マシンがありその中にOSが入っていると思いますが、小規模アプリケーションやクラウドでは必要なリソースが極端に少なかったり、スケーラビリティが求められます。そういった場面では物理マシンのリソースを仮想化という技術でリソースを分離し、これを解決しています。",
        Image:null,
        adjustment:"-mt-[7rem]",
    },
]