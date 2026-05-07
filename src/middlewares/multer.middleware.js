import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    
    // Extract the extesnion name.
    const ext = path.extname(file.originalname)

    // Extract the base name without extension 
    const baseName = path.basename(file.originalname, ext)

    cb(null, baseName  + '-' + uniqueSuffix + ext)
  },
});

export const upload = multer({ storage, });
