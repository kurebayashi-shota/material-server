import { Link } from 'react-router-dom';
import Title from '../../Template/Title/TitleLabel';
import Logo from '../../Chapter1/Components/Pages/Components/Logo';
import Visual from '../../assets/Software/MicrosoftVisual.png';
import Virtul from '../../assets/PcImage/Server/virtualbox.png';
import Ubuntu from '../../assets/Os/ubuntu.png';

export default function Page2({ className }) {
  const textClass = "text-[1.5rem] xl:text-[2rem]";
  return (
    <div className={`${className}`}>
      <Title>
        準備
      </Title>

      <div className='grid place-items-center h-[80%]'>
        <section>
            <ul className='flex'>
                <li className='mx-5'>
                    <Logo className="mx-auto xl:h-25" src={Visual} />
                    <Link to="/microsoftvisual" className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-2 font-bold bg-white'>
                        Microsoft Visual C++
                    </Link>
                </li>
                <li className='mx-5'>
                <Logo className="mx-auto xl:h-25" src={Virtul} />
                <Link to="/virtualbox" className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-2 font-bold bg-white'>
                        Oracle VirtualBox
                    </Link>
                </li>
                <li className='mx-5'>
                <Logo className="mx-auto xl:h-25" src={Ubuntu} />
                <Link to="/ubuntu" className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-2 font-bold bg-white'>
                        Ubuntu Desktop
                    </Link>
                </li>
            </ul>
        </section>
        <section>
          <h2 className='text-[2rem] border-b-[2px] border-[tomato] xl:text-[3rem]'>上の3つをダウンロード&インストールします。</h2>
          <div className='text-center xl:text-[1.5rem]'>恐らく済んでいると思います</div>
        </section>
     </div>
    </div>
  )
}
