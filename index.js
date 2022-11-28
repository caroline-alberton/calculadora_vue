new Vue({
    el: '#app',
    data: {
        primeirovalor: '',
        segundovalor: '',
        operador: 'selecione',
        resultado: '',
    },
    methods: {
        limpar: function () {
            this.primeirovalor = ''
            this.segundovalor = ''
            this.operador = 'selecione'
            this.resultado = ''
        },
        confirmar: function () {
            switch (this.operador) {
                case 'soma':
                    this.resultado = parseInt(this.primeirovalor) + parseInt(this.segundovalor)
                    break;
                case 'subtracao':
                    this.resultado = this.primeirovalor - this.segundovalor
                    break;
                case 'multiplicacao':
                    this.resultado = this.primeirovalor * this.segundovalor
                    break;
                case 'divisao':
                    this.resultado = this.primeirovalor / this.segundovalor
                    break;
                case 'porcentagem':
                    this.resultado = this.primeirovalor / 100 * this.segundovalor
                    break;
            }


        },


    },
})