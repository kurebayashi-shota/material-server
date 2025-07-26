import Title from './Title'

export default function TitleLabel({ className, children }) {
    const titleBorderClass = "mt-[1rem] bg-white inline-block border-[3px] border-[#333]";
  return (
    <Title 
        className={`text-[2.5rem] text-[#174C61] rounded-xl ml-[1rem] xl:ml-[10rem] xl:text-[3.5rem] ${titleBorderClass} ${className}`}
    >
        { children }
    </Title>
  )
}