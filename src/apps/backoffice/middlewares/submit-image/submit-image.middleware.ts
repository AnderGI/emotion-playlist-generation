import multer, { StorageEngine } from "multer";
import path from 'path';
import { fileURLToPath } from "url";

// Define __dirname en un entorno ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage:StorageEngine = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, path.resolve(__dirname, '../../../../../uploads'));
  },
  filename(req, file, callback) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    callback(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
})

const imageUploads:multer.Multer = multer({storage})

export default imageUploads