import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inferior">
        <p>© {new Date().getFullYear()} TechArg. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;