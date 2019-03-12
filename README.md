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
    ```SUBSYSTEMS=="usb", ATTR{idVendor}=="2341", MODE:="0666"```
    - [reload udev] ``` sudo udevadm control --reload-rules && udevadm trigger ```

- [Failed to claim interface](https://stackoverflow.com/questions/47695160/failed-to-claim-interface-0-device-or-resource-busy)
    - device and Linux will automatically load a kernel driver when it is connected that claims interface
]


## Instruction on fedora with Arduino Uno
1. - create udev rule (makes os mount usb device as user marcman)

```sudo gedit /etc/udev/rules.d/50-arduino.rules``` 

and type

```SUBSYSTEMS=="usb", ATTR{idVendor}=="2341", ATTR{idProduct}=="0043", OWNER="marcman", GROUP="marcman",  MODE:="0666"```

2.  reload udev rules

``` sudo udevadm control --reload-rules && udevadm trigger ```

3.  (re)plugin usb device and see 

``` lsusb -d 1a86:7523 ``` 

Bus 003 Device 039: ID 1a86:7523 QinHeng Electronics HL-340 USB-Serial adapter

for bus and device

4.  check 

```ls -a /dev/bus/usb/003/024```

that it outputs user marcman and group marcman as owner. Done.


5. find out the specifica of the usb device

```for device in $(ls /sys/bus/usb/devices/*/product); do echo $device;cat $device;done```

5. unbind the module driver

```echo -n "3-2:1.0" > /sys/bus/usb/drivers/ch341/unbind```




    