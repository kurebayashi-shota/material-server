import React from 'react';
import Thitle from '../../ThitleLabel/Thitle'
import Linux from '../../assets/Os/linux.png'

export default function Page10({ className }) {
  return (
    <div className={`${className}`}>
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61]  inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        Linuxとは
      </Thitle>

      <div className='grid place-items-center h-[80%]'>
        <section className='mt-[2rem] text-center'>
          <img className='h-30 w-30 mx-auto' src={`${Linux}`} alt="Linuxロゴ" />
          <h2 className='font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block xl:text-[3rem]'>
            Linuxについて
          </h2>
          <div className='mt-2 w-[30rem] mx-auto text-[0.5rem] xl:w-[50rem]'>
            Linuxを説明するためには、まず歴史的な背景を理解する必要があります。もともとUNIXはAT&Tベル研究所で開発されたOSであり、
            当初は商用ライセンスが必要な閉鎖的なものでした。一方で、1980年代から1990年代にかけて、WindowsやMac OSといったOSも普
            及し始めました。UNIXに影響を受けた多くのUnix系OSが開発されましたが、ライセンスの制約からユーザーが自由に利用することは
            困難でした。そんな中、1991年にリーナス・トーバルズ氏によって開発されたLinuxカーネルは、オープンソースで公開され、誰でも
            自由に利用・改良が可能でした。このLinuxカーネルを基盤に、Red Hat Enterprise Linux、CentOS、AlmaLinux、Debian、Ubuntu
            など、多くのディストリビューション（OSの種類）が開発され、商用・非商用問わず広く利用されています。
          </div>
        </section>
      </div>
    </div>
  )
}