//Factory Pattern
function createImage(name) {
    return new Image(name);
}

//Using my Factory Pattern
var image = createImage('photo.jpeg');

//Create a more complex factory
function createImage2(name) {
    if(name.match(/\.jpeg$/)){
        return new JpegImage(name);
    }
    else if(name.match(/\.gif$/)){
        return new GifImage(name);
    }
    else if(name.match(/\.png$/)){
        return new PngImage(name);
    }
    else{
        throw new Exception('Unsupported Format');
    }
}
