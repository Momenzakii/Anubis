import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default // https://vite.dev/config/
defineConfig({
  base: "/Anubis/", // اسم الريبو بين سلاشات

  plugins: [tailwindcss(), react()],
});
