import { useState } from "react";

function App2() {
  const [pdfLoaded, setPdfLoaded] = useState(false);

  return (
    <div
      style={{
        color: "#fff",
        textAlign: "center",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {!pdfLoaded && <p>Yükleniyor...</p>}

      <div
        style={{
          width: "100%",
          height: "75vh", // viewport height
          border: "1px solid #fff",
        }}
      >
        <iframe
          src="/cv.pdf#toolbar=0&navpanes=0" // 👈 sol menü kapalı gelsin
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            display: pdfLoaded ? "block" : "none",
          }}
          onLoad={() => setPdfLoaded(true)}
          title="CV PDF"
        />
      </div>
    </div>
  );
}

export default App2;
