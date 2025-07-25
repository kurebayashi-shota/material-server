import { useAddData } from "./useAddData"
import CodeComp from '../PageTemp/Compornents/CodeComp'
import TermComp from '../PageTemp/Compornents/TermComp';

export function useSelectCode({ chapter, dataNum }) {
    let data = useAddData({ chapter });

    if(data[dataNum].Type==="term"){
        return (
            <main className="p-6 mx-auto justify-center xl:mt-[5rem] xl:w-[80%]">
                {data[dataNum].ImagesUnder?.map((under, index)=>(
                    <TermComp
                        key={index}
                        index={index}
                        label={under.alt}
                        detail={under.class}
                    />
                ))}
            </main>
        )
    }else{
        return (
            <main className="flex p-6 justify-center xl:mt-[5rem] xl:w-[80%]">
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
        )
    }
}
