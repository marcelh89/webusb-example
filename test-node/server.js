var USB = require("webusb").USB;

console.log(USB)

const handleDevicesFound = (devices, selectFn) => {

    console.log("handleDevicesFound", devices);
    // If one of the devices can be automatically selected, you can return it
    for (var i = 0; i < devices.length; i++) {
        console.log(devices[i].productName);
    }

    // Otherwise store the selectFn somewhere and execute it later with a device to select it
}

const usb = new USB({
    devicesFound: handleDevicesFound
});


usb.getDevices()
.then(devices => {
    console.log("getDevices", devices)

}).catch(error => {
    console.log(error);
})