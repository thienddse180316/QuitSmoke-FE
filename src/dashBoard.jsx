import * as icon from 'lucide-react'

import { useLocation, useNavigate } from 'react-router-dom';

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Hàm để kiểm tra đường dẫn hiện tại
  const isActive = (path) => location.pathname === path;

  const navItemStyle = (path) => ({
  margin: '0 10px',
  padding: '6px 12px',
  cursor: 'pointer',
  color: isActive(path) ? 'white' : 'black',
  fontWeight: isActive(path) ? 'bold' : 'normal',
  background: isActive(path) ? 'rgba(22, 163, 74, 0.6)' : 'transparent', // xanh lá mờ
  borderRadius: '8px',
  backdropFilter: isActive(path) ? 'blur(6px)' : 'none', // làm mờ nền phía sau
  WebkitBackdropFilter: isActive(path) ? 'blur(6px)' : 'none', // hỗ trợ Safari
  transition: 'all 0.2s ease-in-out',
  });

  return (
    <div
      className="nav-bar"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <h3><strong>QuitSmoking</strong></h3>
      <h4 style={navItemStyle('/dashboard')} onClick={() => navigate('/dashboard')}>Tổng quan</h4>
      <h4 style={navItemStyle('/diary')} onClick={() => navigate('/diary')}>Nhật ký</h4>
      <h4 style={navItemStyle('/missions')} onClick={() => navigate('/missions')}>Nhiệm vụ</h4>
      <h4 style={navItemStyle('/ranking')} onClick={() => navigate('/ranking')}>Bảng xếp hạng</h4>
      <h4 style={navItemStyle('/achievement')} onClick={() => navigate('/achievement')}>Thành tựu</h4>
      <h4 style={navItemStyle('/service-package')} onClick={() => navigate('/service-package')}>Gói dịch vụ</h4>
      <h4 style={navItemStyle('/coach')} onClick={() => navigate('/coach')}>Chuyên gia</h4>

      <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
        <icon.User />
        <h4 style={{ marginLeft: 5 }}>Người dùng</h4>
      </div>

      <icon.Bell style={{ marginLeft: 15 }} />
      <icon.MessageCircle style={{ marginLeft: 15 }} />
    </div>
  );
}

function DashBoard() {
    return (
        <>
        <NavBar></NavBar>
        </>
    )
}

export default DashBoard;
export {NavBar};