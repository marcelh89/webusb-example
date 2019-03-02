Simple Example for using webusb with arduino
===

## Instructions
1. test-node (project using npm module ```webusb```)
2. test-web (simple html)
3. test3 (simple html)

## Some useful material about webusb

- [webusb device.open access denied](https://github.com/webusb/arduino/issues/29)

    - create udev rule
    ```sudo gedit /etc/udev/rules.d/50-arduino-mini.rules``` and type
    ```SUBSYSTEMS=="usb", ATTR{idVendor}=="1A86", MODE:="0666"```
    - [reload udev] ``` sudo udevadm control --reload-rules && udevadm trigger ```

