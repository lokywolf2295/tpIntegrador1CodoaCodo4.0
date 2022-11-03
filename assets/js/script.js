const compras = new Vue({
    el: '#carrito',
    data: {
        totalAPagar: "",
        number: 0,
        selected: 1,
        opciones: [
            { text: 'Estudiante', value: 1 },
            { text: 'Trainee', value: 2 },
            { text: 'Junior', value: 3 }
        ]
    },
    methods: {
        Resumen() {
            if (this.selected === 1) {
                this.totalAPagar = this.descuento(80);
            } else if (this.selected === 2) {
                this.totalAPagar = this.descuento(50);
            } else if (this.selected === 3) {
                this.totalAPagar = this.descuento(15);
            } else {
                document.write('');
            }
        },
        descuento(tipoDesc) {
            return (200 * this.number) - (200 * this.number * tipoDesc / 100);
        },

        Borrar() {

            this.number = 0;
            this.totalAPagar = 0;
        }

    }
})