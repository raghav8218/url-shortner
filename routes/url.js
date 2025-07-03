    const express= require('express')

    const router= express.Router();
    const {handleGet,handleGenerateNewShortURL}= require('../controllers/url')


    router.route('/').post(handleGenerateNewShortURL);
    router.route('/:shortid').get(handleGet);

    module.exports=router;
