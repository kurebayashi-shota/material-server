import { Link } from 'react-router-dom'

export default function Introduction() {
  return (
    <>
    <section>
      <h1 className='text-[3rem] mt-[5%] font-bold text-center xl:text-[5rem]'>
        はじめに
      </h1>
      <p className='text-[1.2rem] mt-[1rem] text-center xl:text-[1.5rem]'>
        本日はお集まり頂きありがとうございます。
        <br />この勉強会はサーバーって聞いたことがない、説明出来ない、食べれるんですか?という方向けの勉強会です。
        <br />サーバーはネットワークとの関わりが深い技術なので複合的に学ぶ必要があり、かなり難しく感じてしまう
        <br />と思うのでこの勉強会ではサーバーエンジニアと呼ばれる分野に着目してネットワークの話は極力省きました。
        <br />この勉強会を通してサーバーを身近に感じて頂ければ幸いです。
        {/* <br />
        <br /> */}
      </p>
    </section>
    <section className='flex mt-[5rem] justify-center'>
      <Link to="/purpose"><button className='px-[1rem] cursor-pointer text-[3rem] shadow-xl border-[3px] rounded-xl'>次へ</button></Link>
    </section>
    </>
  )
}
