import { Link } from 'react-router-dom'

export default function Agenda() {
  return (
    <>
      <section>
        <h1 className='text-[3rem] mt-[5%] font-bold text-center xl:text-[5rem]'>
          目次
        </h1>
        <div className='text-[1.2rem] mt-[1rem] text-center xl:text-[1.5rem]'>
          <h2>下記の5回を想定して進めていきます。</h2>
          <ol className='mt-5'>
            <li>第1回-サーバーについて</li>
            <li>第2回-構成について①</li>
            <li>第3回-構成について②</li>
            <li>第4回-サーバーの種類について</li>
            <li>第5回-構築してみよう</li>
            <li className='mt-1'>ダウンロードに時間がかかるものが多いので合間でダウンロードしていきます。</li>
          </ol>
        </div>
      </section>
      <section className='flex mt-[1rem] justify-center'>
        <Link to="/"><button className='px-[1rem] cursor-pointer text-[3rem] shadow-xl border-[3px] rounded-xl'>トップへ</button></Link>
      </section>
    </>
  )
}
