function printme(fn){
    fn();
}

// printme(function(){ console.log('foo')})
printme(()=>console.log('foo'))