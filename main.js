//Nuestros clientes

class Cuenta {
    constructor(usuario, apellido, password, dni, trabaja, sectorLaboral) {
        this.usuario = usuario
        this.apellido = apellido
        this.password = password
        this.dni = dni
        this.trabaja = trabaja
        this.sectorLaboral = sectorLaboral
    }
}
//Nuestro banco
class Banco {
    constructor(nombre, cuit, telefono) {
        this.nombre = nombre
        this.cuit = cuit
        this.telefono = telefono
        this.clientes = []
    }
    //metodos del banco
    agregarCliente(persona) {
        this.clientes.push(persona)

    }
    validacionClientes(usuario, contraseña) {
        let clienteEncontrado = false
        for (const cliente of this.clientes) {
            if (usuario == cliente.usuario && contraseña == cliente.password) {
                clienteEncontrado = true
                break
            }

        }
        return clienteEncontrado

    }
    mostrarDatos() {
        for (const iterator of this.clientes) {
            alert("nombre" + iterator.usuario)
        }
    }
    // Aca se realizar el calculo, porcentaje y monto de cuotas
    calcularPrestamo(cuotas, monto) {
        let valorPorCuota = 0
        let total = 0
        let leyenda = ""
        switch (cuotas) {
            case 1:
                total = monto * 1.35;
                valorPorCuota = total / 12;
                break;
            case 2:
                total = monto * 1.45;
                valorPorCuota = total / 24;
                break;
            case 3:
                total = monto * 1.65;
                valorPorCuota = total / 36;
                break;
            case 4:
                total = monto * 1.99;
                valorPorCuota = total / 48;
                break;
        }
        return leyenda = "El total del prestamo a pagar  sera de: $" + parseInt(total) + "\n El valor por cuota sera de: $" + parseInt(valorPorCuota)

    }



}//Fin de banco


//Tipos de prestamos

//inicio del programa, instanstación
const banco1 = new Banco("BBVA", "30500003193", "1132333872")

//Lista de usuarios ya registrados(al loguearse debera utilizar alguno de estos)
const persona1 = new Cuenta("Pedro", "Guitian", "pedro", "38288888", true, "privado")
const persona2 = new Cuenta("Walter", "Zapata", "walter", "38288988", false, "null")
const persona3 = new Cuenta("Robert", "Rojas", "roberto", "33282388", true, "publico")
banco1.agregarCliente(persona1)
banco1.agregarCliente(persona2)
banco1.agregarCliente(persona3)//Agregue clientes a la lista

/*------------------------------------------------------------------------------------------*/
let usuario = ""
let contraseña = ""
let opcion = 0
do {
    alert("Bienvenidos a el simulador de prestamos del banco " + banco1.nombre);
    usuario = prompt("Ingrese su usuario:");
    contraseña = prompt("Ingrese su contraseña:");
    if (banco1.validacionClientes(usuario, contraseña) == true) {
        alert("Correctamente ingresado");
        let monto = parseInt(prompt("Ingrese el monto del prestamo que desea"))
        let cuotas = parseInt(prompt(
            "Ingresa una opcion \n 1)12 cuotas \n 2)24 cuotas \n 3)36 cuotas \n 4)48 cuotas"
        ))
        alert(banco1.calcularPrestamo(cuotas, monto));
        alert("Para finalizarlo comunicate con nuestro telefono: " + banco1.telefono+"\n Atentamente: " + banco1.nombre)
        opcion = prompt("Hemos finalizado, quiere simular un nuevo prestamo ,responda por: \n 1)SI o por 2)NO");
    }
    else {
        alert("Cuenta inexistente en nuestra base de datos, intente de nuevo")
        opcion = prompt("Quiere continuar, responda por: \n 1)SI o por 2)NO")
    }




} while (opcion != 2){
    alert("Hasta la proxima " +usuario)
}