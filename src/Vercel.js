import { handle } from "hono/vercel";
import app from "./Hono.js";

export const config = {
    runtime: "nodejs",
    preferredRegion: "hkg1"
};

export default handle(app);
