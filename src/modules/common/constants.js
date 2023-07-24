const DEVELOPMENT_ENV = "development"
export const API_URL = import.meta.env.VITE_SERVER === DEVELOPMENT_ENV ? "http://localhost:3000/api" : "http://143.198.75.195:3000/api";
