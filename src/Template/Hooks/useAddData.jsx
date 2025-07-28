import { Capter2Data } from "../../Data/CapterData/Capter2Data";
import { Capter3Data } from "../../Data/CapterData/Capter3/Capter3Data";
import { Capter5Data } from "../../Data/CapterData/Capter5/Capter5Data";
import { Capter6Data } from "../../Data/CapterData/Capter6/Capter6Data";
import { Capter7Data } from "../../Data/CapterData/Capter7/Capter7Data";
import { Capter8Data } from "../../Data/CapterData/Capter8/Capter8Data";

export function useAddData({ chapter }){
    switch( chapter ){
        case 2:return Capter2Data;
        case 3:return Capter3Data;
        case 5:return Capter5Data;
        case 6:return Capter6Data;
        case 7:return Capter7Data;
        case 8:return Capter8Data;
        default:console.log("チャプターが見つかりません");
        return[];
      }    
}