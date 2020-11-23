// Oggi quindi si fa milestone2 di Boolzapp
// Creiamo BoolzApp:
// una copia della webApp di whatsApp,
// o almeno in parte, le funzionalità come visto non saranno complete ma saranno concentrate sulla gestione delle chat e dei messaggi.
// Ci saranno varie milestones di release del progetto, una per giorno di lavoro.
// Per oggi saremo sulla milestone2, chat differenziate:
// cliccando sulla chat vedo quella corrispondente;
// con header con dati relativi a chat attiva;
// relativa chat in elenco rimane selezionata
var app = new Vue({
    el: '#root',
    data: {
        // utente-inchat parte fissa in alto a dx
        arrayUinChat: [
            {
                lFoto: 'img/avatar_4.jpg',
                nomeU: 'Luisa....',
                dataOra: 'Ultimo accesso oggi 20 11 2020 12:01:32....'
            }
        ],
        // array chat sinistra-main
        arrayChat: [
            {
                lFoto: 'img/avatar_1.jpg',
                nomeU: 'Michele',
                ultimoM: 'ok...',
                dataOra: '20 11 2020 10:52:03'
            },
            {   
                lFoto: 'img/avatar_2.jpg',
                nomeU: 'Fabio',
                ultimoM: 'ok...',
                dataOra: '20 11 2020 10:56:00'
            },
            {   
                lFoto: 'img/avatar_4.jpg',
                nomeU: 'Luisa',
                ultimoM: 'ok...',
                dataOra: '20 11 2020 12:01:32'
            }
        ],
        arrayMes: [
            {}
        ],

    },
    methods: {
        chatClick(uno, due) {
            this.arrayUinChat[uno].lFoto = this.arrayChat[due].lFoto;
            this.arrayUinChat[uno].nomeU = this.arrayChat[due].nomeU;
            this.arrayUinChat[uno].dataOra = 'Ultimo accesso: ' + this.arrayChat[due].dataOra;
        }
    }
})












// NOTE
// prima di scrivere qualsiasi cosa di codice fate una bella bella pre-analisi sulla struttura dei dati;
// usate carta o penna o quello che volete, ma fin quando non avete definito i dati che vi servono e  come strutturarli, non potete far molto;
// cercate di descrivere nel mondo reale di cosa state parlando, che “materia” state trattando e definendo;
// poi la riportate a ciò che JS ci mette a disposizione (array, oggetti, stringhe, numeri…. etc.).