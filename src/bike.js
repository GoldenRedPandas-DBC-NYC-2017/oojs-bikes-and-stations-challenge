// Tried this way, didn't work
// var Bike = function(args = {}) {
//   this.id = args.id || null
//   this.color = args.color || null
//   this.modelYear = args.modelYear || null
// }

var Bike = function(id, color, modelYear) {
  this.id = id || null
  this.color = color || null
  this.modelYear = modelYear || null
}
