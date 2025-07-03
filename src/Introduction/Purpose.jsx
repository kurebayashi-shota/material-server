import { Link } from 'react-router-dom'

export default function Purpose() {
  return (
    <>
      <section>
        <h1 className='text-[3rem] mt-[5%] font-bold text-center xl:text-[5rem]'>
          目的
        </h1>
        <p className='text-[1.2rem] mt-[1rem] text-center xl:text-[1.5rem]'>
          <br />私はサーバーという物に対してふわっとしたイメージしかなく、全く分からない状態でしたが現場に
          <br />従事して行くうちに小難しいものではなく世の中にありふれた物という認識に変わってきました。
          <br />開発の方でも環境構築の基礎知識として生かせる内容だと思うのでその辺りをお伝え出来ればと思います。
          <br />注意点として専門用語では分かりづらい部分を初心者目線で馴染みやすい表現に変えている部分があり
          <br />細かいニュアンスに相違がある可能性があるのでその点はご留意頂けると幸いです。
        </p>
      </section>
      <section className='flex mt-[5rem] justify-center'>
        <Link to="/outcome"><button className='px-[1rem] cursor-pointer text-[3rem] shadow-xl border-[3px] rounded-xl'>次へ</button></Link>
      </section>
    </>
  )
}
