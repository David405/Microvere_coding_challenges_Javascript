function angryProfessor(k, a) {
    
    var earlyArrival = a.filter(e => e <= 0);
    return earlyArrival = earlyArrival.length>=k ? 'NO' : 'YES';
}
