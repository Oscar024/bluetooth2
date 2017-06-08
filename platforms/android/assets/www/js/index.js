//Escanear y conectar dispositvos Bluetooth
var result, dispositivos;
var size = 100;
var bluetoothdata = 0;

document.addEventListener("deviceready", function() {
  console.log("Device is ready");
});

//$.getScript("fuzzyjangs.js");

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
  var err = 0;
  bluetoothSerial.read(function(data) {
    navigator.notification.alert(data, null, "Datos", "Ok");
    console.log(data);
    err = parseInt($("input#error").val(data));
    console.log(err);
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



function BTclear() {
  bluetoothSerial.clear(function(success) {
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
    for (i = 0; i < dispositivos.length; i++) {
      apilar(dispositivos[i].name, dispositivos[i].address);
    }
  }, function(failure) {
    console.log(failure);
  });


  bluetoothSerial.discoverUnpaired(function(success) {
    dispositivos = success;
    console.log(dispositivos);
    //apilar(dispositivos[0].address);
    //apilar(dispositivos[1].address);
    for (i = 0; i < dispositivos.length; i++) {
      apilar(dispositivos[i].name, dispositivos[i].address);
    }
  }, function(failure) {
    console.log(failure);
  });
}

function seleccionar() {
  result = $("#exampleSelect1 option:selected").text();
  conectar(result);

}

function apilar(name, address) {
  //var addr= address;
  $("#exampleSelect1").append('<option>' + address + '</option>')
}

function cmd1() {
  // Typed Array
  var data = new Uint8Array(5);
  data[0] = 0x23;
  data[1] = 0x01;
  data[2] = 0x00;
  data[3] = 0x01;
  data[4] = 0x23;

  bluetoothSerial.write(data, function(success) {
    console.log(success);
  }, function(failure) {
    console.log(failure)
  });
}

function cmd2() {
  // Typed Array
  var data = new Uint8Array(5);
  data[0] = 0x23;
  data[1] = 0x02;
  data[2] = 0x00;
  data[3] = 0x02;
  data[4] = 0x23;

  bluetoothSerial.write(data, function(success) {
    console.log(success);
  }, function(failure) {
    console.log(failure)
  });
}

function cmd3() {
  // Typed Array
  var data = new Uint8Array(5);
  data[0] = 0x23;
  data[1] = 0x03;
  data[2] = 0x00;
  data[3] = 0x03;
  data[4] = 0x23;

  bluetoothSerial.write(data, function(success) {
    console.log(success);
  }, function(failure) {
    console.log(failure)
  });
}

function cmd4() {
  // Typed Array
  var data = new Uint8Array(5);
  data[0] = 0x23;
  data[1] = 0x04;
  data[2] = 0x00;
  data[3] = 0x04;
  data[4] = 0x23;

  bluetoothSerial.write(data, function(success) {
    console.log(success);
  }, function(failure) {
    console.log(failure)
  });
}

function cmd5() {
  // Typed Array
  var data = new Uint8Array(7);
  data[0] = 0x23;
  data[1] = 0x05;
  data[2] = 0x02;
  data[3] = parseInt($("input#num1").val());
  data[4] = parseInt($("input#num2").val());
  data[5] = 0xff;
  data[6] = 0x23;

  bluetoothSerial.write(data, function(success) {
    console.log(success);
  }, function(failure) {
    console.log(failure)
  });
}

function cmd6(pwm1, pwm2) {
  // Typed Array
  var data = new Uint8Array(7);
  data[0] = 0x23;
  data[1] = 0x05;
  data[2] = 0x02;
  data[3] = pwm1;
  data[4] = pwm2;
  data[5] = 0xff;
  data[6] = 0x23;

  bluetoothSerial.write(data, function(success) {
    console.log(success);
  }, function(failure) {
    console.log(failure)
  });
}

function BTread() {
  var i;
  bluetoothSerial.readUntil('\n', function(data) {
    console.log(data);
    bluetoothdata = data;

  }, function(failure) {
    console.log(failure)
  });


  return bluetoothdata;

}


function getInput() {
  var inp1 = parseFloat($("input#crispi1").val());
  return inp1;
}

function setInput(value) {
  $("input#crispi1").val(value);
}

function getOutput1() {
  var inp1 = parseFloat($("input#output1").val());
  return inp1;
}

function setOutput1(value) {
  $("input#output1").val(value);
}

function getOutput2() {
  var inp1 = parseFloat($("input#output2").val());
  return inp1;
}

function setOutput2(value) {
  $("input#output2").val(value);
}

function getFuzzy1() {
  var a = fuzzy_system_single1(getInput());
  var result = parseFloat((setOutput1(a.toString())));
  return result;
}

function getFuzzy2() {
  var a = fuzzy_system_single2(getInput());
  var result = parseFloat((setOutput2(a.toString())));
  return result;
}

function getFuzzy1BT() {
  var inp = getInputFuzzyBT();
  var result = fuzzy_system_single1(inp);
  return result;

}

function getFuzzy2BT() {
  var inp = getInputFuzzyBT();
  var result = fuzzy_system_single2(inp);
  return result;
}





function linspace(x, start, end) {
  var i;
  for (i = 0; i < size; i++)
    x[i] = (i * end + (size - 1 - i) * start) / (size - 1);
  return;
}

function minimo(x) {
  var i;
  var min;

  min = x[0];
  for (i = 1; i < size; i++)
    if (x[i] < min)
      min = x[i];
  return (min);
}

function maximo(x) {
  var i;
  var max;
  max = x[0];
  for (i = 1; i < size; i++)
    if (x[i] > max)
      max = x[i];
  return (max);
}

function triangular(a, b, c, x) {
  var ux = 0;
  if (x <= a) {
    ux = 0;
  }
  if (x > a && x < b) {
    ux = (x - a) / (b - a);
  }
  if (x == b) {
    ux = 1;
  }
  if (x > b && x < c) {
    ux = (c - x) / (c - b);
  }
  return ux;
}


function tri_mf(t_value, x, a, b, c) {
  var i;
  var temp = new Array(size);
  for (i = 0; i < size; i++)
    temp[i] = x[i];
  for (i = 0; i < size; i++)
    t_value[i] = triangular(a, b, c, x[i]);

}

function trapezoidal(a, b, c, d, x) {
  var ux = 0;
  if (x <= a) {
    ux = 0;
  }
  if (x > a && x < b) {
    ux = (x - a) / (b - a);
  }
  if (x >= b && x <= c) {
    ux = 1;
  }
  if (x > c && x < d) {
    ux = (d - x) / (d - c);
  }
  if (x > d) {
    ux = 0;
  }
  return ux;
}



function trap_mf(t_value, x, a, b, c, d) {
  var i;
  var temp = new Array(size);

  for (i = 0; i < size; i++)
    temp[i] = x[i];
  for (i = 0; i < size; i++)
    t_value[i] = trapezoidal(a, b, c, d, x[i]);
  //printArray(t_value,size);
}

function qualified(y, x, w) {
  var min;
  var i;
  min = w;
  for (i = 0; i < size; i++) {
    if (x[i] < w)
      y[i] = x[i];
    else
      y[i] = w;
  }

  return;
}

function out_mf(result, x, y, z) {
  var i;
  for (i = 0; i < size; i++) {
    if (x[i] > y[i] && x[i] > z[i]) {
      //printf("El numero mayor es %d",A);
      result[i] = x[i];
    } else {
      if (y[i] > x[i] && y[i] > z[i]) {
        //printf("El numero mayor es %d",B);
        result[i] = y[i];
      } else {
        //printf("El numero mayor es %d",C);
        result[i] = z[i];
      }
    }
  }
}

function defuzzy(x, mf) {
  var sum1 = 0,
    sum2 = 0,
    out = 0;
  var i;
  for (i = 0; i < size; i++)
    sum1 += x[i] * mf[i];
  for (i = 0; i < size; i++)
    sum2 += mf[i];
  out = sum1 / sum2;
  return out;
}

function fuzzy_system() {
  var w1, w2, w3;
  var output = new Array(size);
  var overall_out_mf = new Array(size);
  var qualified_cons_mf1 = new Array(size);
  var qualified_cons_mf2 = new Array(size)
  var qualified_cons_mf3 = new Array(size)
  var x = new Array(size);
  var y = new Array(size);
  var ante_mf3 = new Array(size);
  var cons_mf3 = new Array(size);
  var ante_mf2 = new Array(size);
  var cons_mf2 = new Array(size);
  var ante_mf1 = new Array(size);
  var cons_mf1 = new Array(size);
  var i;
  linspace(x, -10, 10, size);
  linspace(y, 0, 10, size);
  //printArray(x,size);
  //Funciones de membrecia de antecedente
  trap_mf(ante_mf1, x, -20, -15, -6, -3);
  trap_mf(ante_mf2, x, -6, -3, 3, 6);
  trap_mf(ante_mf3, x, 3, 6, 15, 20);

  //Funciones de membrecia de consecuente
  trap_mf(cons_mf1, y, -2.46, -1.46, 1.46, 2.46);
  trap_mf(cons_mf2, y, 1.46, 2.46, 5, 7);
  trap_mf(cons_mf3, y, 5, 7, 13, 15);

  //Fuzzy inference system
  for (i = 0; i < size; i++) {
    w1 = trapezoidal(-20, -15, -6, -3, x[i]);
    w2 = trapezoidal(-6, -3, 3, 6, x[i]);
    w3 = trapezoidal(3, 6, 15, 20, x[i]);
    qualified(qualified_cons_mf1, cons_mf1, w1);
    qualified(qualified_cons_mf2, cons_mf2, w2);
    qualified(qualified_cons_mf3, cons_mf3, w3);
    out_mf(overall_out_mf, qualified_cons_mf1, qualified_cons_mf2, qualified_cons_mf3);
    output[i] = defuzzy(y, overall_out_mf);
  }
}

function fuzzy_system_single1(input) {
  var w1, w2, w3;
  var output = new Array(size);
  var overall_out_mf = new Array(size);
  var qualified_cons_mf1 = new Array(size);
  var qualified_cons_mf2 = new Array(size)
  var qualified_cons_mf3 = new Array(size)
  var x = new Array(size);
  var y = new Array(size);
  var ante_mf3 = new Array(size);
  var cons_mf3 = new Array(size);
  var ante_mf2 = new Array(size);
  var cons_mf2 = new Array(size);
  var ante_mf1 = new Array(size);
  var cons_mf1 = new Array(size);
  var i;
  linspace(x, 0, 100, size);
  linspace(y, 0, 100, size);
  //printArray(x,size);
  //Funciones de membrecia de antecedente
  tri_mf(ante_mf1, x, -4, 0, 4);
  tri_mf(ante_mf2, x, 1, 5, 9);
  tri_mf(ante_mf3, x, 6, 10, 14);

  //Funciones de membrecia de consecuente
  tri_mf(cons_mf1, y, -40, 0, 40);
  tri_mf(cons_mf2, y, 10, 50, 90);
  tri_mf(cons_mf3, y, 60, 100, 140);

  //Fuzzy inference system
  //for(i=0;i<size;i++){
  w1 = triangular(-4, 0, 4, input);
  w2 = triangular(1, 5, 9, input);
  w3 = triangular(6, 10, 14, input);
  //If error es bajo then w1 es rápido
  qualified(qualified_cons_mf1, cons_mf3, w1);
  //If error es medio then w1 es regular
  qualified(qualified_cons_mf2, cons_mf2, w2);
  //If error es alto then w1 es rápido
  qualified(qualified_cons_mf3, cons_mf3, w3);
  out_mf(overall_out_mf, qualified_cons_mf1, qualified_cons_mf2, qualified_cons_mf3);
  output = defuzzy(y, overall_out_mf);
  return output;
  //}
}

function fuzzy_system_single2(input) {
  var w1, w2, w3;
  var output = new Array(size);
  var overall_out_mf = new Array(size);
  var qualified_cons_mf1 = new Array(size);
  var qualified_cons_mf2 = new Array(size)
  var qualified_cons_mf3 = new Array(size)
  var x = new Array(size);
  var y = new Array(size);
  var ante_mf3 = new Array(size);
  var cons_mf3 = new Array(size);
  var ante_mf2 = new Array(size);
  var cons_mf2 = new Array(size);
  var ante_mf1 = new Array(size);
  var cons_mf1 = new Array(size);
  var i;
  linspace(x, 0, 100, size);
  linspace(y, 0, 100, size);
  //printArray(x,size);
  //Funciones de membrecia de antecedente
  tri_mf(ante_mf1, x, -4, 0, 4);
  tri_mf(ante_mf2, x, 1, 5, 9);
  tri_mf(ante_mf3, x, 6, 10, 14);

  //Funciones de membrecia de consecuente
  tri_mf(cons_mf1, y, -40, 0, 40);
  tri_mf(cons_mf2, y, 10, 50, 90);
  tri_mf(cons_mf3, y, 60, 100, 140);

  //Fuzzy inference system
  //for(i=0;i<size;i++){
  w1 = triangular(-4, 0, 4, input);
  w2 = triangular(1, 5, 9, input);
  w3 = triangular(6, 10, 14, input);
  //If error es bajo then w2 es rápido
  qualified(qualified_cons_mf1, cons_mf3, w1);
  //If error es medio then w2 es rápido
  qualified(qualified_cons_mf2, cons_mf3, w2);
  //If error es alto then w2 es regular
  qualified(qualified_cons_mf3, cons_mf2, w3);
  out_mf(overall_out_mf, qualified_cons_mf1, qualified_cons_mf2, qualified_cons_mf3);
  output = defuzzy(y, overall_out_mf);
  return output;
  //}
}

function getInputFuzzyBT() {
  var current;
  var delayMillis = 100; //1 second

  BTclear();
  wait(delayMillis);
  cmd4();
  wait(delayMillis);



  wait(delayMillis);
  current = BTread();
  wait(delayMillis);
  var a = parseFloat(current);
  BTclear();
  return a;
}

function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

function setOutputFuzzyBT() {
  var a, b;
  var delayMillis = 100; //1 second
  wait(delayMillis);
  a = getFuzzy1BT();
  wait(delayMillis);
  b = getFuzzy2BT();
  wait(delayMillis);
  cmd6(a, b);

}

function setOutputFuzzy() {
  var delayms = 100;

  //wait(delayms);
  var inp = getInputFuzzyBT();
  setInput(inp);
  var entrada = $("input#crispi1").val();
  if (entrada === "") {
    entrada = $("input#crispi1").val();
    inp = getInputFuzzyBT();
    setInput(inp);
  }
  getFuzzy1();
  getFuzzy2();
  var f1 = getOutput1();
  var f2 = getOutput2();
  wait(delayms);
  cmd6(f1, f2);
  wait(delayms);
}


function principal() {
      var ms = 100;
      window.setInterval(setOutputFuzzy, ms);
}
