var Status;
(function (Status) {
    Status["INITIAL"] = "Initial";
    Status["ACTIVE"] = "Active";
    Status["INACTIVE"] = "Inactive";
})(Status || (Status = {}));
const statusCurrent = "Active";
switch (statusCurrent) {
    case Status.INITIAL:
        console.log("Initial");
        break;
    case Status.ACTIVE:
        console.log("Active");
        break;
    case Status.INACTIVE:
        console.log("Inactive");
        break;
    default:
        break;
}
