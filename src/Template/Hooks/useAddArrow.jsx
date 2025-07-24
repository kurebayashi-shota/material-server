import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

export function useAddArrow( initial ){
    switch( initial ){
        case "right":
          return (
            <div className='inline-block'>
              <DoubleArrowIcon className='my-auto mx-[2rem]' sx={{ fontSize:100 }} />
              <div className='text-center'>SSH</div>
            </div>
          );
      };  
}