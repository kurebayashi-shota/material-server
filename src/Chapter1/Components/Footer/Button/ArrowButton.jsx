import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export default function Button({className}) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    // 現在のパスを取得
    const currentPath = location.pathname;

    // ページ番号だけ取り出す (例: "/page1" → "page1")　\でエスケープしている
    const match = currentPath.match(/^\/chapter1\/page(\d+)$/);
    if (!match){
      navigate("/chapter1/page1");
    }else if(match[1] == '13'){
      navigate('/');
    }else if(match){
      const currentPageNum = parseInt(match[1], 10);
      const nextPageNum = currentPageNum + 1;

      // 遷移先のパスを作る
      const nextPath = `/chapter1/page${nextPageNum}`;

      // 遷移（ここで存在しないページも考慮する場合はチェックが必要）
      navigate(nextPath);
    } else {
      // もしマッチしなければトップに戻すなど適宜対応
      navigate('/');
    }
  };
  
  return (
    <>
      <button onClick={handleClick} className=''>
        <ArrowCircleRightIcon className={`text-[#737883] hover:text-[#666] ${className}`} sx={{ fontSize: 80 }} />
      </button>
    </>
  )
}