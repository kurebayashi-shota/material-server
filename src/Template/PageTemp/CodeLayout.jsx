import { useAddData } from '../Hooks/useAddData';
import TitleLabel from '../Title/TitleLabel'
import CodeComp from './Compornents/CodeComp'

export default function CodeLayout({ adjustmentClass, className, agendaNum, dataNum, chapter }) {
  let data = useAddData({chapter});
  return (
    <div className={className}>
        <TitleLabel
            key={data[dataNum][agendaNum]}
            className="absolute z-10"
        >
            {data[dataNum].Label?.[agendaNum] || ""}
        </TitleLabel>
        <div className="relative  mr-[2rem] flex flex-row-reverse items-center space-x-reverse space-x-1">
            <span className="mt-[1.5rem] text-[2rem] font-bold text-right">
                {data[dataNum].Title}
            </span>
            <div className="mt-[1.5rem] flex-1 border-b border-[2px] border-gray-500"></div>
        </div>

        <main className="flex p-6 justify-center xl:mt-[5rem]">
            {data[dataNum].ImagesUnder?.map((under, index)=>(
                <CodeComp
                    key={index}
                    index={index}
                    label={under.alt}
                    detail={under.class}
                    code={under.value}
                />
            ))}
        </main>
    </div>
  )
}