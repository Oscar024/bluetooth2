//Escanear y conectar dispositvos Bluetooth
var result,
    dispositivos;

document.addEventListener("deviceready", function() {
    console.log("Device is ready");
});



function conectar(address) {
    console.log(address);
    bluetoothSerial.connect(address, function() {
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
    //var data = new Uint8Array(4);
    //data[0] = 0x41;
    //data[1] = 0x42;
    //data[2] = 0x43;
    //data[3] = 0x44;
    var txt = $('input:text[name=texto]').val();
    console.log(txt);
    bluetoothSerial.write(txt, function(success) {
        console.log(success);
    }, function(failure) {
        console.log(failure)
    });
}

function leer() {
    bluetoothSerial.read(function(data) {
        navigator.notification.alert(data, null, "Datos", "Ok");
    }, function(failure) {
        console.log(failure)
    });
}

function enable() {
    bluetoothSerial.enable(function(success) {
        console.log(success)
    }, function(failure) {
        conslole.log(failure)
    });
}

function listaU() {
    var i;
    enable();
    console.log("Buscando ...");

    bluetoothSerial.list(function(success) {
        dispositivos = success;
        console.log(dispositivos);
        //apilar(dispositivos[0].address);
        //apilar(dispositivos[1].address);
        for(i=0; i< dispositivos.length;i++){
          apilar(dispositivos[i].name,dispositivos[i].address);
        }
    }, function(failure) {
        console.log(failure);
    });


    bluetoothSerial.discoverUnpaired(function(success) {
        dispositivos = success;
        console.log(dispositivos);
        //apilar(dispositivos[0].address);
        //apilar(dispositivos[1].address);
        for(i=0; i< dispositivos.length;i++){
          apilar(dispositivos[i].name,dispositivos[i].address);
        }
    }, function(failure) {
        console.log(failure);
    });
}

function seleccionar() {
    result = $("#exampleSelect1 option:selected").text();
    conectar(result);

}

function apilar(name,address) {
    //var addr= address;
    $("#exampleSelect1").append('<option>'+address+'</option>')
}
