function weakNumbers(n) {
    var weakest = 0
    const weaknesses = []
    const divs = []
    
    for (var i = 1; i <= n; i++) {
        var div = divisors(i).length
        var weak = divs.filter(d => d > div).length
        if (weak > weakest) weakest = weak
        
        weaknesses.push(weak)
        divs.push(div)
    }
    
    return [weakest, weaknesses.filter(w => w === weakest).length]
}


function divisors(n) {
    const d = []
    for (var i = 1; i <= n; i++) {
        if (n % i === 0) d.push(i)
    }
    return d
}
