import React from 'react';
import Thitle from '../../ThitleLabel/Thitle'
import Ubuntu from '../../assets/Os/ubuntu.png'

export default function Page9({ className }) {
  return (
    <div className={`${className}`}>
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61]  inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        Ubuntuとは
      </Thitle>

      <div className='grid place-items-center h-[80%] -mt-10'>
        <section className='mt-[2rem] text-center'>
          <img className='h-20 w-20 mx-auto' src={`${Ubuntu}`} alt="Linuxロゴ" />
          <h2 className='font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block xl:text-[3rem]'>
            Ubuntuについて
          </h2>
        </section>
        <section className='text-center'>
          <div className='flex'>
            <div>
              <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-5 py-2 font-bold bg-white'>
                特徴
              </h3>
              <ul className='text-left'>
                <li>
                  <h3 className='font-bold'>・早い</h3>
                  <p className='ml-3'>Linux全体に言えることですが
                  <br/>軽量なので低スペックPCにも使える</p>
                </li>
                <li>
                  <h3 className='font-bold mt-5'>・安い</h3>
                  <p className='ml-3'>オープンソースなので無料で使える</p>
                </li>
                <li>
                  <h3 className='font-bold mt-5'>・うまい(使いやすい)</h3>
                  <p className='ml-3'>Linux系OSの中でも
                  <br/>特に初心者に優しい設計がされてる。</p>
                </li>
                {/* <li>
                  <h3>定期的なリリース</h3>
                  <p className='text-[0.8rem]'>6ヶ月ごとに新しいバージョンがリリースされ、長期サポート（LTS）版は5年間のサポートがあります。これにより安定して長く使うことも可能です。</p>
                </li>
                <li>
                  <h3>豊富なソフトウェア</h3>
                  <p className='text-[0.8rem]'>Ubuntuは多数のアプリケーションが利用できる公式のパッケージ管理システム（APT）を備えています。無料のオフィスソフトやブラウザ、開発ツールなども簡単にインストール可能です。</p>
                </li>
                <li>
                  <h3>コミュニティの強さ</h3>
                  <p className='text-[0.8rem]'>世界中に多くのユーザーや開発者がおり、フォーラムやドキュメントが充実しているため、トラブルシューティングや情報収集がしやすいです。</p>
                </li> */}
              </ul>
            </div>
            <div className='ml-10'>
              <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-5 py-2 font-bold bg-white'>
                バージョン
              </h3>
              <ul className='text-left'>
                <li className='flex'>18.04<div className='text-[tomato]'>LTS</div>(Bionic Beaver)</li>
                <li>18.10   (Cosmic Cuttlefish)</li>
                <li>19.04   (Disco Dingo)</li>
                <li>19.10   (Eoan Ermine)</li>
                <li className='flex'>20.04<div className='text-[tomato]'>LTS</div>(Focal Fossa)</li>
                <li>20.10   (Groovy Gorilla)</li>
                <li>21.04   (Hirsute Hippo)</li>
                <li>21.10   (Impish Indri)</li>
                <li className='flex'>22.04<div className='text-[tomato]'>LTS</div>(Jammy Jellyfish)</li>
                <li className='flex'>24.04<div className='text-[tomato]'>LTS</div>(Noble Numbat)</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}