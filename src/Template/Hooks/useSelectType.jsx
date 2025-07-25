import { useAddData } from "./useAddData";
import { IndexData } from "../../Data/CapterData/Capter7/IndexData";
import Agenda from '../PageTemp/Agenda';
import CodeLayout from '../PageTemp/CodeLayout';
import SimpleLayout from '../PageTemp/SimpleLayout';
import StepRayout from '../PageTemp/StepRayout';

export function useSelectType({ chapter, match, className }) {
    
    let data = useAddData({ chapter });
    const dataNum = match - 2;
    const num = IndexData[dataNum];
    const agendaNum = num;
    switch (data[dataNum].Type) {
        case "agenda":
            return <Agenda
                        className={className}
                        // agendaNum={agendaNum}
                        // dataNum={dataNum}
                        chapter={chapter}
                    />
        case "simple":
            return <SimpleLayout
                        className={className}
                        agendaNum={agendaNum}
                        dataNum={dataNum}
                        chapter={chapter}
                    />
        case "step":
            return <StepRayout
                        className={className}
                        agendaNum={agendaNum}
                        dataNum={dataNum}
                        chapter={chapter}
                    />
        case "term":
        case "code":
            return <CodeLayout
                        className={className}
                        agendaNum={agendaNum}
                        dataNum={dataNum}
                        chapter={chapter}
                    />
        default:console.log("Layoutが見つかりません。Typeを確認して下さい");           
    }
}
