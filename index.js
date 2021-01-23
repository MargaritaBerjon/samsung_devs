//Show the input range number
function ShowRange() {
  var range = document.getElementById('range').value;
  alert('Has valorado con ' + range + ' puntos');
}

//Show account
function showAccount() {
  var valuePais = document.getElementById('pais').value;
  var valueIban = document.getElementById('ctrl-iban').value;
  var valueEntidad = document.getElementById('entidad').value;
  var valueSucursal = document.getElementById('sucursal').value;
  var valueDc = document.getElementById('dc').value;
  var valueCuenta = document.getElementById('cuenta').value;
  var numCuenta = valuePais + valueIban + '-' + valueEntidad + '-' + valueSucursal + '-' + valueDc + '-' + valueCuenta;
  alert('Le informamos que su cuenta bancaria es: ' + numCuenta);
}

//Show day
function showDay() {
  var semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado'];
  var valueFecha = document.getElementById('fecha').value;
  var fechaSeleccionada = new Date(valueFecha);
  var dia = fechaSeleccionada.getDay();
  alert('La fecha seleccionada en el elemento de fecha es un ' + semana[dia]);
}