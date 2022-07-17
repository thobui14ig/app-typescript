import SanPhamProvider from '../../../context/sanpham.context'
import SanphamHOC from './SanphamHOC'

function SanphamWrapper() {
  return (
    <SanPhamProvider>
        <SanphamHOC/>
    </SanPhamProvider>
    
  )
}

export default SanphamWrapper