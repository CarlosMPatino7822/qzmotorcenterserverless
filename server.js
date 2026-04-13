import express from "express";
import { procesarEnvioCorreo } from "./servicios/ServicioCorreo.js";

const app = express();
app.use(express.json());

app.post("/api/enviarCorreo", async (req, res) => {
  try {
    const { email, tipo } = req.body;

    if (!email || !tipo) {
      return res.status(400).json({
        error: "Faltan datos requeridos",
      });
    }

    await procesarEnvioCorreo(email, tipo);

    return res.status(200).json({
      mensaje: "Correo enviado correctamente",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});