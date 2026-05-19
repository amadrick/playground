import path from "path";

export const PROJECT_ROOT = process.cwd();
export const APP_DIR = path.join(PROJECT_ROOT, "src", "app");
export const TEMPLATE_DIR = path.join(APP_DIR, "_example", "hello-world");
