export default function Navbar() {
  return (
    <nav style={{ display: 'flex', padding: 16, background: '#2d2d2d', color: '#fff', justifyContent: 'space-between' }}>
      <div><b>Sambhav Ai</b></div>
      <div>
        <a href="#" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Home</a>
        <a href="#" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>About</a>
        <a href="#" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Contact</a>
      </div>
    </nav>
  );
}
