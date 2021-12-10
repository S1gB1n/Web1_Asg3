/**
 * Author: Erl John Lydzustre
 * 
 * Comp 3612 Assignment #3
 * Instructor: Randy Connolly 
 * 
 *  This program is hosted on heroku: https://sleepy-hamlet-58077.herokuapp.com/
 *  This an Node JS API
 *      api/paintings
 *      api/galleries
 *      api/artists
 */

const express = require('express');
const app = express();

const path = require('path');

app.use('/static', express.static(path.join(__dirname, 'public')));

const publicPath = path.join(__dirname,'public');
app.use(express.static(publicPath));

app.get('/',(req,resp) => { 
    const filename = path.join(publicPath,'index.html');
    resp.sendFile(filename);
} ); 

const router = require('./scripts/routerArtists.js');
router.handleAll(app);
router.handleByArtistsCountry(app);

const routerGalleries = require('./scripts/routerGalleries.js');
routerGalleries.handleAll(app);
routerGalleries.handleByGalleriesCountry(app);

const routerPaintingsNested = require('./scripts/routerPaintingsNested.js');
routerPaintingsNested.handleAll(app);
routerPaintingsNested.handleById(app);
routerPaintingsNested.handleByPaintingGalleryId(app);
routerPaintingsNested.handleByPaintingArtistId(app);
routerPaintingsNested.handleByPaintingYearMinMax(app);
routerPaintingsNested.handleByPaintingTitleText(app);
routerPaintingsNested.handleByPaintingColorName(app);

//let port = 8080;
const port = process.env.PORT || 8080;
app.listen( port, ()=> {
    console.log("Server running at port= " + port);
});