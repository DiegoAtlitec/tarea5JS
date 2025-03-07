// Introducción a JavaScript
// Tarea 4 : 

function Libro(titulo, autor, anio, estado = 'disponible') {
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.estado = estado;
    this.capitulos = []; 

    this.describirLibro = function () {
        return `Libro "${this.titulo}", de ${this.autor} en el año ${this.anio}. Su estado es: ${this.estado}.`;
    };

    this.agregarCapitulo = function (capitulo) {
        this.capitulos.push(capitulo);
        console.log(`Capítulo "${capitulo}" agregado al libro "${this.titulo}".`);
    };

    this.eliminarCapitulo = function (capitulo) {
        const index = this.capitulos.indexOf(capitulo);
        if (index !== -1) {
            this.capitulos.splice(index, 1);
            console.log(`Capítulo "${capitulo}" eliminado del libro "${this.titulo}".`);
        }else{
            console.log(`Capítulo "${capitulo}" no encontrado en el libro "${this.titulo}".`);
        }
    };

    this.mostrarCapitulos = function () {
        if (this.capitulos.length === 0) {
            console.log(`El libro "${this.titulo}" no tiene capítulos aún.`);
        }else{
            console.log(`Capítulos del libro "${this.titulo}":`);
            this.capitulos.forEach((capitulo, index) => {
                console.log(`${index + 1}. ${capitulo}`);
            });
        }
    };
}


const libro1 = new Libro("Fisica Volumen 2", "Resnick - Halliday - Krane", 1987);
console.log(libro1.describirLibro());

libro1.agregarCapitulo("CARGA ELECTRICA Y LEY DE COULOMB");
libro1.agregarCapitulo("CAMPO ELECTICO");
libro1.agregarCapitulo("LEY DE GAUSS");
libro1.mostrarCapitulos();

libro1.eliminarCapitulo("LEY DE GAUSS");
libro1.eliminarCapitulo("CAPACITANCIA");
libro1.mostrarCapitulos();


libro1.estado = 'disponible';
console.log(libro1.describirLibro());


//Viva Batiz y ESCOM <3<3
