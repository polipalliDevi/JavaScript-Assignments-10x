function CreateObject(arr) {
    // Write your code here
    
    var details={};
    for (var i=0;i<arr.length-1;i+=2) {
        var key=arr[i]
        var value=arr[i+1]
        details[key]=value;

    }
    return details
}

module.exports = CreateObject;
