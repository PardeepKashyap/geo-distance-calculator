/**
 * Convert Degree to Radian
 * 
 * */

function degreeToRadians(degree) {
    return (degree || 0) * (Math.PI/180)
}

/**
 * Returns distance between two coordinates in Killometer 
 * 
 */
var getdistanceInKilloMetersBetweenTwoPoints = function (Lng1, Lat1, Lng2, Lat2) {
    var RLat1=degreeToRadians(Lat1);
    var RLng1=degreeToRadians(Lng1);
    var RLng2=degreeToRadians(Lng2);
    var RLat2=degreeToRadians(Lat2);
    return Math.acos(Math.sin(RLat1) * Math.sin(RLat2) + Math.cos(RLat1) * Math.cos(RLat2) * Math.cos(RLng2 - (RLng1))) * 6372.8               

}

exports.getdistanceInKilloMetersBetweenTwoPoints=getdistanceInKilloMetersBetweenTwoPoints
