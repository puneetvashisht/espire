console.log('test');
// Creation Phase 
// outer : [x: undef, inner: undef]
// inner: [x: undef]

// Execution Phase 
// outer : [x: 2, inner: fn]
// inner: [x: undef]
function outer(){
    console.log('outer fn');
    var x = 2;
    var inner = function(){
        console.log('inner fn');
        console.log(x + 2)
        var x = 3;
    }
    return inner;
}

outer()();
// var result = outer();
// result();
