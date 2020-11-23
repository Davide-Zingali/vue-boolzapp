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
        // chat cliccata
        chatSelezionata: 0,
        classeSel: '',
        // utente-inchat parte fissa in alto a dx
        arrayUinChat: [
            {
                lFoto: 'img/avatar_4.jpg',
                nomeU: 'Luisa',
                dataOra: 'Ultimo accesso: 20 11 2020 12:01:32'
            }
        ],
        // array chat sinistra-main
        arrayChat: [
            {
                lFoto: 'img/avatar_1.jpg',
                nomeU: 'Michele',
                ultimoM: 'test ok...',
                dataOra: '20 11 2020 10:52:03',
                messaggi: [
                    'Lo sai che ha aperto una nuova pizzeria?',

                    'Si, ma preferirei andare al cinema',

                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi autem cum aut vero, beatae fugiat maxime velit tenetur officia molestiae deserunt blanditiis inventore recusandae fuga officiis soluta. Saepe, eveniet aliquid?',

                    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia architecto, neque magnam exercitationem deleniti odit distinctio dicta commodi dolorum recusandae quisquam doloribus sed nostrum esse, velit fugit quae nihil et.',

                    'ok...'
                ]
            },
            {   
                lFoto: 'img/avatar_2.jpg',
                nomeU: 'Fabio',
                ultimoM: 'ok...',
                dataOra: '20 11 2020 10:56:00',
                messaggi: [
                    'primo messaggio ricevuto',

                    'primo messaggio inviato',

                    'secondo messaggio ricevuto',

                    'secondo messaggio inviato',

                    'terzo messaggio inviato'
                ]
            },
            {   
                lFoto: 'img/avatar_4.jpg',
                nomeU: 'Luisa',
                ultimoM: 'ok...',
                dataOra: '20 11 2020 12:01:32',
                messaggi: [
                    'altro primo messaggio ricevuto',

                    'altro primo messaggio inviato',

                    'altro secondo messaggio ricevuto',

                    'altro secondo messaggio inviato',

                    'altro terzo messaggio inviato'
                ]
            }
        ]
    },
    methods: {
        chatClick(uno, index) {
            this.arrayUinChat[uno].lFoto = this.arrayChat[index].lFoto;
            this.arrayUinChat[uno].nomeU = this.arrayChat[index].nomeU;
            this.arrayUinChat[uno].dataOra = 'Ultimo accesso: ' + this.arrayChat[index].dataOra;

            // chat cliccata che aggiorna la variabile chatSelezionata
            this.chatSelezionata = index;
            console.log(this.chatSelezionata);

            if (this.arrayChat[this.chatSelezionata]) {
                this.classeSel = 'selezionata'
            }
        }
    }
})












// NOTE
// prima di scrivere qualsiasi cosa di codice fate una bella bella pre-analisi sulla struttura dei dati;
// usate carta o penna o quello che volete, ma fin quando non avete definito i dati che vi servono e  come strutturarli, non potete far molto;
// cercate di descrivere nel mondo reale di cosa state parlando, che “materia” state trattando e definendo;
// poi la riportate a ciò che JS ci mette a disposizione (array, oggetti, stringhe, numeri…. etc.).