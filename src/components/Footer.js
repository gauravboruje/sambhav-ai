export default function Footer() {
  return (
    <footer style={{
      marginTop: 60, padding: 20, background: '#222', color: '#fff', textAlign: 'center'
    }}>
      Sambhav Ai © {new Date().getFullYear()} — All rights reserved.
    </footer>
  );
}
