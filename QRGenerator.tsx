import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

const QRGenerator: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [qrValue, setQrValue] = useState<string>("");

  const generateQR = () => {
    setQrValue(text);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#121212",
        color: "#ffffff",
        p: 3,
        fontFamily: "'Roboto', sans-serif"
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          mb: 5,
          textShadow: "0 3px 8px rgba(0,0,0,0.7)",
          color: "#FFC600",
          letterSpacing: 1
        }}
      >
        Professional QR Code Generator
      </Typography>

      <Paper
        elevation={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
          p: 5,
          borderRadius: "20px",
          bgcolor: "#1e1e1e",
          width: { xs: "90%", sm: "450px" },
          transition: "transform 0.3s",
          "&:hover": { transform: "scale(1.02)" }
        }}
      >
        <TextField
          label="Enter text or URL"
          variant="filled"
          value={text}
          onChange={(e) => setText(e.target.value)}
          sx={{
            width: "100%",
            input: { color: "#ffffff", fontWeight: "500" },
            label: { color: "#bbbbbb", fontWeight: "500" },
            "& .MuiFilledInput-root": { bgcolor: "#2c2c2c", borderRadius: "8px" }
          }}
        />

        <Button
          variant="contained"
          onClick={generateQR}
          sx={{
            width: "100%",
            bgcolor: "#FFC600",
            color: "#121212",
            fontWeight: "bold",
            fontSize: "16px",
            borderRadius: "10px",
            transition: "all 0.3s ease",
            "&:hover": { bgcolor: "#ffb700", transform: "scale(1.03)" }
          }}
        >
          Generate QR
        </Button>

        {qrValue && (
          <Box
            sx={{
              mt: 3,
              p: 3,
              borderRadius: "20px",
              bgcolor: "#000000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 0 30px rgba(255,198,0,0.5)",
              transition: "all 0.5s ease",
              "&:hover": {
                boxShadow: "0 0 50px rgba(255,198,0,0.9) inset",
                transform: "rotate(-2deg) scale(1.05)"
              }
            }}
          >
            <QRCodeCanvas
              value={qrValue}
              size={256}
              level="H"
              includeMargin={true}
              bgColor="#000000"
              fgColor="#FFC600"
            />
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default QRGenerator;
