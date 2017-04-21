//Escanear y conectar dispositvos Bluetooth
var dispositivos;
document.addEventListener("deviceready", function() {
    console.log("Device is ready");
});

function escanear() {
    console.log("Escaneando ...")
    bluetoothSerial.discoverUnpaired(function(success) {
        console.log("Encontrados")
        console.log(success);
        dispositivos = success;
    }, function() {
        console.log("No Encontrados")
    });
}

function conectar() {
    bluetoothSerial.connect("30:14:06:20:12:25", function() {
        console.log("Connected")
    }, function() {
        console.log("No se pudo conectar")
    });
}

function desconectar() {
    bluetoothSerial.disconnect();
}

function escribir() {
    // Typed Array
    var data = new Uint8Array(4);
    data[0] = 0x41;
    data[1] = 0x42;
    data[2] = 0x43;
    data[3] = 0x44;
    bluetoothSerial.write(data, function(success) {
        console.log(success);
    }, function(failure) {
        console.log(failure)
    });
}

function leer() {
    bluetoothSerial.read(function(data) {
        alert(data);
    }, function(failure) {
        console.log(failure)
    });
}
