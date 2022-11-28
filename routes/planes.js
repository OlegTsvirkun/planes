const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer')

const { getPlanes,createPlane,getPlane } = require('../controllers/planes');

const storage = multer.diskStorage({
    
    destination:'./assets/',
    filename:(req,file,cb)=>{
     console.log(createPlane.body);
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})


const upload =multer ({storage})
    

router.get('/', getPlanes);
router.get('/:id', getPlane);
router.post('/',upload.single('planeImage'),createPlane);

 

module.exports = router;

