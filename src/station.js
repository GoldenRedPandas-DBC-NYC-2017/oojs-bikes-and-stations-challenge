// Tried this way, didn't work
// var Station = function(args = {}) {
//   this.name = args.name || null;
//   this.location = args.location || null;
//   this.bikes = args.bikes || [];
// }

var Station = function(name, location, bikes) {
  this.name = name || null;
  this.location = location || null;
  this.bikes = bikes || [];
}

Station.prototype.empty = function() {
  return this.bikes.length === 0;
}


Station.prototype.newestBike = function() {
  this.bikes.sort(function(a,b) {
    return b - a;
  });
return this.bikes[0]
}

Station.prototype.take = function(args) {
  return this.bikes.push(args)
}

// REFACTOR
Station.prototype.takeMultiple = function(bike) {
  for(var i=0; i< bike.length; i++) {
    this.bikes.push(bike[i])
  }
  return this.bikes
}

Station.prototype.release = function() {
  this.bikes.sort(function(a,b) {
    return b - a;
  });
  return this.bikes.shift()
}

Station.prototype.stationFull = function() {
  return this.bikes.length > 10
}
