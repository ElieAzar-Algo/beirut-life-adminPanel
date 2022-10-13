import { useContext } from 'react';
import { ThemeCtx } from '../../context/ThemeStore';
import { CoverageMatrixCtr } from './CoverageMartixStyles';

const CoverageMatrix = () => {
  const { closed } = useContext(ThemeCtx);
  return (
    <CoverageMatrixCtr closed={closed} className="text">
      <span className="text">Coverage Matrix</span>
    </CoverageMatrixCtr>
  );
};

export default CoverageMatrix;
