const {nanoid}= require('nanoid')
const URL= require('../models/url')
async function handleGenerateNewShortURL(req,res){
    console.log("req.body is:", req.body); 
    const body = req.body;
    if(!body.url){
        return res.status(400).json({error:"url is required"})
    }
    const shortID=nanoid(8);
    await URL.create({
        shortId:shortID,
        redirectURL:body.url,
        visitHistory:[],
    })
    return res.json({id: shortID});
}

async function handleGet(req, res) {
    const shortId = req.params.shortid;

    const entry = await URL.findOneAndUpdate(
        { shortId },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                },
            },
        }
    );

    if (!entry) {
        return res.status(404).json({ error: "Short URL not found" });
    }

    res.redirect(entry.redirectURL);
}

module.exports= {handleGenerateNewShortURL,
                handleGet,
}