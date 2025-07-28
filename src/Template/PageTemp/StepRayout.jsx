import { useAddData } from '../Hooks/useAddData';
import { ClassData } from '../../Data/ClassData';
import TitleLabel from '../../Template/Title/TitleLabel';

export default function StepRayout({ adjustmentClass, className, dataNum, chapter }) {
    const textClass = "text-[1.5rem] xl:text-[2rem]";
    let data = useAddData({chapter});
  
    const currentStepNumber = countStepsUpTo(data, dataNum);
  
    function countStepsUpTo(dataArray, num) {
      return dataArray.slice(0, num + 1).filter(item => item.Type === "step").length;
    }
    
    return (
      <div className="h-[70%]">
        <TitleLabel>
          {data[dataNum].Label}
        </TitleLabel>
        <div key={data[dataNum].Label} className={`w-fit mx-auto ${className}`}>
          <section>
            <h3 className="my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-2 font-bold bg-white">
              STEP{currentStepNumber}
            </h3>
            <div className="-mt-10 ml-30">
              <p className={textClass}>
                {data[dataNum].Title}
              </p>
              <a className='text-[red]' href={data[dataNum].TitleClass} target='blank'>{data[dataNum].TitleDetail}</a>
              <ul>
                {(data[dataNum].LiElements || []).map((LiElement, index) => (
                  <li key={index} className={`${LiElement.class} ${ClassData.detailClass}`}>
                    {LiElement.value}
                  </li>
                ))}
              </ul>
              <img className={data[dataNum].ImageClass} src={data[dataNum].Image} />
              <img className={data[dataNum].ImagesOver.class} src={data[dataNum].ImagesOver.src} />
              <div className={data[dataNum].NextClass}></div>
              <div className={data[dataNum].RedFrameClass}></div>
            </div>
          </section>
        </div>
      </div>
    );
  }
  