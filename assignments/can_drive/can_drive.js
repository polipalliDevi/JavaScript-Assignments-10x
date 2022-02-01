function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if (!hasDrivingLiscence) {
        return "You cannot drive"
    }else {
        if (!isTired && isSober){
            return "You can drive"
        }else if (isTired || !isTired) {
            return "You shouldn't drive"
        }
    }
}

module.exports = CanDrive;
