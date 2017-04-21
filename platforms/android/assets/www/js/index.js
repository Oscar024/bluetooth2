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
    bluetoothSerial.connect("6B:D9:8F:C3:71:71", function() {
        console.log("Connected")
    }, function() {
        console.log("No se pudo conectar")
    });
}
