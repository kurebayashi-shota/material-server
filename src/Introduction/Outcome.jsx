import { Link } from 'react-router-dom'

export default function Outcome() {
  return (
    <>
      <section>
        <h1 className='text-[3rem] mt-[5%] font-bold text-center xl:text-[5rem]'>
          成果物
        </h1>
        <p className='text-[1.2rem] mt-[1rem] text-center xl:text-[1.5rem]'>
          <br />勉強会の成果物としてWebサーバーを立ててみようと思っています。
          <br />実際に立ててみるとイメージも湧きやすいですし、よく使われるツールにも触れることが出来ます。
          <br />今後はクラウドが台頭していくと思いますが、私自身はいきなりクラウドを触ろうとして
          <br />何をやっているのか全く分からない状態になりました。
          <br />そういった点からもモダン技術の基礎となる経験になると思います。
        </p>
      </section>
      <section className='flex mt-[5rem] justify-center'>
        <Link to="/agenda"><button className='px-[1rem] cursor-pointer text-[3rem] shadow-xl border-[3px] rounded-xl'>次へ</button></Link>
      </section>
    </>
  )
}
