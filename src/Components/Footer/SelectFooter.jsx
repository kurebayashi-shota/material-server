import { createContext, useState } from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import FooterButton from './Button/FooterButton'
import ArrowButton from './Button/ArrowButton'
import Button from './Button/Button';

export default function SelectFooter({className}) {

  // const ButtonChildrenContext = createContext(null);
  const buttonStyles = '-mt-[30px] bg-white rounded-full';

  const buttons = [
    { id:1, page:'page1', value:'1'},
    { id:2, page:'page2', value:'2'},
    { id:3, page:'page3', value:'3'},
    { id:4, page:'page4', value:'4'},
    { id:5, page:'page5', value:'5'},
    { id:6, page:'page6', value:'6'},
    { id:7, page:'page7', value:'7'},
    { id:8, page:'page8', value:'8'},
    { id:9, page:'page9', value:'9'},
    { id:10, page:'page10', value:'10', class:'!px-[2px]'},
    { id:11, page:'page11', value:'11', class:'!px-[2px]'},
    { id:12, page:'page12', value:'12', class:'!px-[2px]'},
    { id:13, page:'page13', value:'13', class:'!px-[2px]'},
    // { id:14, page:'page14', value:'14', class:'!px-[2px]'},
    // { id:15, page:'page15', value:'15', class:'!px-[2px]'},
    // { id:16, page:'page16', value:'16', class:'!px-[2px]'},
    // { id:17, page:'page17', value:'17', class:'!px-[2px]'},
    // { id:18, page:'page18', value:'18', class:'!px-[2px]'},
    // { id:19, page:'page19', value:'19', class:'!px-[2px]'},
    // { id:20, page:'page20', value:'20', class:'!px-[2px]'},
  ];

  return (
    <nav className={`flex justify-between bg-[#174C61] ${className}`}>
        <Link to="/">
          <HomeIcon className={`ml-[20px] transform scale-x-[-1] sm:ml-[50px] ${buttonStyles} text-[#737883] hover:text-[#666]`} sx={{ fontSize: 80 }} />
        </Link>
        {buttons.map((button) =>(
        <Button key={button.id} page={button.page} className={button.class}>{button.value}</Button>
        ))}
        {/* <ButtonChildrenContext.Provider value={'1'}>
          <FooterButton />
        </ButtonChildrenContext.Provider> */}
        <ArrowButton className={`ml-auto mr-[20px] sm:mr-[50px] ${buttonStyles}`} />
    </nav>
  )
}
