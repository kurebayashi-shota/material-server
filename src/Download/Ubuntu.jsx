import { useNavigate } from 'react-router-dom'
import Step1 from '../assets/Download/Ubuntu/ustep1.png'
import Step2 from '../assets/Download/Ubuntu/ustep2.png'
import Step3 from '../assets/Download/Ubuntu/ustep3.png'

export default function Ubuntu({ className }) {
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
                    <a className='border-[tomato] border-b-[2px]' href="https://jp.ubuntu.com/" target='blank'>ここをクリック</a>
                </li>
                <li className='border-t-[2px] border-cyan-600 w-[95%] mb-3'>
                    <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-2 font-bold bg-white'>
                        STEP2
                    </h3>
                    <p className={textClass}>
                        画面上部のダウンロードをクリック(画面が小さければ右上の[Menu]を押下)
                    </p>
                    <img className='h-70 w-auto xl:h-100' src={Step1} />
                </li>
                <li className='border-t-[2px] border-cyan-600 w-[95%]'>
                    <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-2 font-bold bg-white'>
                        STEP3
                    </h3>
                    <p className={textClass}>
                        ダウンロードボタンをクリック
                    </p>
                    <img className='h-70 w-auto xl:h-100' src={Step2} />
                </li>
                <li className='border-t-[2px] border-cyan-600 w-[95%]'>
                    <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-2 font-bold bg-white'>
                        STEP4
                    </h3>
                    <p className={textClass}>
                        ↓の表示になればダウンロードが始まります
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