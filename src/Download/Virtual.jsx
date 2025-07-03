import { useNavigate } from 'react-router-dom'
import Oracle from '../assets/Download/Virtual/oracle.png'
import Step1 from '../assets/Download/Virtual/vstep1.png'
import Step2 from '../assets/Download/Virtual/vstep2.png'
import Step3 from '../assets/Download/Virtual/vstep3.png'
import Step4 from '../assets/Download/Virtual/vstep4.png'
import Step5 from '../assets/Download/Virtual/vstep5.png'
import Step6 from '../assets/Download/Virtual/vstep6.png'
import Step7 from '../assets/Download/Virtual/vstep7.png'
import Step8 from '../assets/Download/Virtual/vstep8.png'
import Step9 from '../assets/Download/Virtual/vstep9.png'
import Step10 from '../assets/Download/Virtual/vstep10.png'

export default function Virtual({ className }) {
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
                        href="https://www.oracle.com/jp/virtualization/technologies/vm/downloads/virtualbox-downloads.html"
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
                        少し下にいった所の[Windows Installer]をクリック
                    </p>
                    <img className='h-70 w-auto xl:h-100' src={Oracle} />
                </li>
                <li className='border-t-[2px] border-cyan-600 w-[95%]'>
                    <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-2 font-bold bg-white'>
                        STEP3
                    </h3>
                    <p className={textClass}>
                        ダウンロードした.exeファイルを起動すると下記の表示になるので[Next]を押下
                    </p>
                    <img className='h-70 w-auto xl:h-100' src={Step1} />
                </li>
                <li className='border-t-[2px] border-cyan-600 w-[95%]'>
                    <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-2 font-bold bg-white'>
                        STEP4
                    </h3>
                    <p className={textClass}>
                        ライセンスに同意して[Next]を押下
                    </p>
                    <img className='h-70 w-auto xl:h-100' src={Step2} />
                </li>
                <li className='border-t-[2px] border-cyan-600 w-[95%]'>
                    <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-2 font-bold bg-white'>
                        STEP5
                    </h3>
                    <p className={textClass}>
                    そのまま[Next]を押下
                    </p>
                    <img className='h-70 w-auto xl:h-100' src={Step3} />
                </li>
                <li className='border-t-[2px] border-cyan-600 w-[95%]'>
                    <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-2 font-bold bg-white'>
                        STEP6
                    </h3>
                    <p className={textClass}>
                    [Yes]を押下
                    </p>
                    <img className='h-70 w-auto xl:h-100' src={Step4} />
                </li>
                <li className='border-t-[2px] border-cyan-600 w-[95%]'>
                    <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-2 font-bold bg-white'>
                        STEP7
                    </h3>
                    <p className={textClass}>
                    [Yes]を押下
                    </p>
                    <img className='h-70 w-auto xl:h-100' src={Step5} />
                </li>
                <li className='border-t-[2px] border-cyan-600 w-[95%]'>
                    <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-2 font-bold bg-white'>
                        STEP8
                    </h3>
                    <p className={textClass}>
                    [Next]を押下
                    </p>
                    <img className='h-70 w-auto xl:h-100' src={Step6} />
                </li>
                <li className='border-t-[2px] border-cyan-600 w-[95%]'>
                    <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-2 font-bold bg-white'>
                        STEP9
                    </h3>
                    <p className={textClass}>
                    [Install]を押下
                    </p>
                    <img className='h-70 w-auto xl:h-100' src={Step7} />
                </li>
                <li className='border-t-[2px] border-cyan-600 w-[95%]'>
                    <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-2 font-bold bg-white'>
                        STEP10
                    </h3>
                    <p className={textClass}>
                    待つ
                    </p>
                    <img className='h-70 w-auto xl:h-100' src={Step8} />
                </li>
                <li className='border-t-[2px] border-cyan-600 w-[95%]'>
                    <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-2 font-bold bg-white'>
                        STEP11
                    </h3>
                    <p className={textClass}>
                    [Finish]を押下
                    </p>
                    <img className='h-70 w-auto xl:h-100' src={Step9} />
                </li>
                <li className='border-t-[2px] border-cyan-600 w-[95%]'>
                    <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-2 font-bold bg-white'>
                        STEP12
                    </h3>
                    <p className={textClass}>
                    下が表示されればOK
                    </p>
                    <img className='h-70 w-auto xl:h-100' src={Step10} />
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