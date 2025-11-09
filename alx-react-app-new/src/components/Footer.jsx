function Footer() {
  return (
    <div>
      <footer style={{
            backgroundColor: "#1e1e1e",        // dark background
            color: "#fff",                     // white text
            textAlign: "center",               // center-align text
            padding: "15px 0",                 // top-bottom padding
            fontSize: "14px",                  // readable font size
            borderTop: "2px solid #ff6b6b",    // accent color border
            marginTop: "40px"                  // spacing above footer
}}>
        <p>© 2023 City Lovers</p>
      </footer>
    </div>
  );
}

export default Footer;