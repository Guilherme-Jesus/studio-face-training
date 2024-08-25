import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Permite que o servidor seja acessível externamente
    port: 3000, // Porta que você deseja usar (pode ser 3000 ou outra de sua escolha)
  },
});
