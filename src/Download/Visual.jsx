import { useNavigate } from 'react-router-dom'
import Vs from '../assets/Download/Visual/VS.png'
import Step2 from '../assets/Download/Visual/sstep1.png'
import Step3 from '../assets/Download/Visual/sstep2.png'

export default function Visual({ className }) {
    const textClass = "text-[1.5rem] xl:text-[2rem]";

    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1); // 1つ前のページに戻る
    };

  return (
    <div className={`ml-20 ${className}`}>
        <section className=''>
            <ul>
                <li className='my-5'>
                    <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-2 font-bold bg-white'>
                        STEP1
                    </h3>
                    <p className={textClass}>
                        下記サイトにアクセスして下さい
                    </p>
                    <a
                        className='border-[tomato] border-b-[2px]'
                        href="https://learn.microsoft.com/ja-jp/cpp/windows/latest-supported-vc-redist?view=msvc-170"
                        target='blank'
                    >
                        ここをクリック
                    </a>
                </li>
                <li className='border-t-[2px] border-cyan-600 w-[95%] mb-3'>
                    <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-2 font-bold bg-white'>
                        STEP2
                    </h3>
                    <p className={textClass}>
                        少し下にいった所のX64右側のリンクをクリック
                    </p>
                    <img className='h-70 w-auto xl:h-100' src={Vs} />
                </li>
                <li className='border-t-[2px] border-cyan-600 w-[95%]'>
                    <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-2 font-bold bg-white'>
                        STEP3
                    </h3>
                    <p className={textClass}>
                        ダウンロードした.exeファイルを起動すると下記の表示になるので
                        <br/>ライセンスに同意してインストールボタンを押下
                    </p>
                    <img className='h-70 w-auto xl:h-100' src={Step2} />
                </li>
                <li className='border-t-[2px] border-cyan-600 w-[95%]'>
                    <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-2 font-bold bg-white'>
                        STEP4
                    </h3>
                    <p className={textClass}>
                        ↓の表示になれば[閉じる]で完了
                    </p>
                    <img className='h-40 w-auto xl:h-50' src={Step3} />
                </li>
            </ul>
        </section>
        <section className='flex -mt-[5rem] justify-end mr-[5rem] xl:mr-[20rem]'>
            <button onClick={handleBack} className='px-[1rem] cursor-pointer text-[3rem] shadow-xl border-[3px] rounded-xl'>
                戻る
            </button>
        </section>
    </div>
  )
}