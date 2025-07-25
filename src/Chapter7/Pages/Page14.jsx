import { useOutletContext } from 'react-router-dom'
import { useSelectType } from '../../Template/Hooks/useSelectType';

export default function Page14({ className }) {
  const { chapter, match } = useOutletContext();
  const layoutRespons = useSelectType({ chapter, match, className });
  return layoutRespons;
}