function profiler(label){
    this.label= label;
    this.lastTime= null;
}

profiler.prototype.start = function(){
    this.lastTime = process.hrtime();
};

profiler.prototype.end = function(){
    this.diff = process.hrtime(this.lastTime);
};
profiler.prototype.logging = function(){
//console.log('Timer '+ this.label + ' took' + this.diff[0] + 'seconds and' + this.diff[1] + 'nanoseconds');
} 

module.exports = function(label){
    // if(process.env.NODE_ENV === 'development'){
           return new profiler(label);
    // }
    // else if(process.env.NODE_ENV === 'production'){
    //     return {
    //         start: function(){},
    //         end: function(){}
    //     };
    // }
    // else{
    //     throw new Error('Must set NODE_ENV');
    // }

    return {
        start: function(){},
        end: function(){}
    };
};

