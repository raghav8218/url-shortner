    const express= require('express')

    const router= express.Router();
    const {handleGet,handleGenerateNewShortURL,handleStats}= require('../controllers/url')


    router.route('/').post(handleGenerateNewShortURL);
    router.route('/stats').get(handleStats);
    router.route('/:shortid').get(handleGet);
    

    module.exports=router;
