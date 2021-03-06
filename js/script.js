// Creiamo BoolzApp:
// una copia della webApp di whatsApp,
// o almeno in parte, le funzionalità come visto non saranno complete ma saranno concentrate sulla gestione delle chat e dei messaggi.
// Ci saranno varie milestones di release del progetto, una per giorno di lavoro.
var app = new Vue({
    el: '#root',
    data: {
        filtro: '',
        newObj: {
            mes:'qui va inputchat', 
            stato: 'inviato'
        },
        inputChat: '',
        // chat cliccata
        chatSelezionata: 0,
        // utente-inchat parte fissa in alto a dx
        arrayUinChat: [
            {   
                lFoto: 'img/avatar_1.jpg',
                nomeU: 'Michele',
                dataOra: 'Ultimo accesso: 20 11 2020 10:52:03'
            }
        ],
        // array chat sinistra-main
        arrayChat: [
            {
                lFoto: 'img/avatar_1.jpg',
                nomeU: 'Michele',
                ultimoM: 'ok...',
                dataOra: '20 11 2020 10:52:03',
                messaggi: [
                    {
                        mes:'Lo sai che ha aperto una nuova pizzeria?', 
                        stato: 'ricevuto'
                    },
                    {
                        mes:'Si, ma preferirei andare al cinema', 
                        stato: 'inviato'
                    },
                    {
                        mes:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi autem cum aut vero, beatae fugiat maxime velit tenetur officia molestiae deserunt blanditiis inventore recusandae fuga officiis soluta. Saepe, eveniet aliquid?', 
                        stato: 'ricevuto'
                    },
                    {
                        mes:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia architecto, neque magnam exercitationem deleniti odit distinctio dicta commodi dolorum recusandae quisquam doloribus sed nostrum esse, velit fugit quae nihil et.', 
                        stato: 'ricevuto'
                    },
                    {
                        mes:'ok...', 
                        stato: 'inviato'
                    }
                ]
            },
            {   
                lFoto: 'img/avatar_2.jpg',
                nomeU: 'Fabio',
                ultimoM: 'ok...',
                dataOra: '20 11 2020 10:56:00',
                messaggi: [
                    {
                        mes:'primo messaggio ricevuto', 
                        stato: 'ricevuto'
                    },
                    {
                        mes:'primo messaggio inviato', 
                        stato: 'inviato'
                    },
                    {
                        mes:'secondo messaggio ricevuto', 
                        stato: 'ricevuto'
                    },
                    {
                        mes:'secondo messaggio inviato', 
                        stato: 'inviato'
                    },
                    {
                        mes:'terzo messaggio inviato', 
                        stato: 'inviato'
                    }
                ]
            },
            {   
                lFoto: 'img/avatar_4.jpg',
                nomeU: 'Luisa',
                ultimoM: 'ok...',
                dataOra: '20 11 2020 12:01:32',
                messaggi: [
                    {
                        mes:'altro primo messaggio ricevuto', 
                        stato: 'ricevuto'
                    },
                    {
                        mes:'altro primo messaggio inviato', 
                        stato: 'inviato'
                    },
                    {
                        mes:'altro secondo messaggio ricevuto', 
                        stato: 'ricevuto'
                    },
                    {
                        mes:'altro secondo messaggio inviato', 
                        stato: 'inviato'
                    },
                    {
                        mes:'altro terzo messaggio inviato', 
                        stato: 'inviato'
                    }
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
        },
        addEnter() {
            this.arrayChat[this.chatSelezionata].messaggi.push(
                {
                    mes:this.inputChat, 
                    stato: 'inviato'
                }
            );
            // azzero il v-model
            this.inputChat = '';
            // risposta automatica
            setTimeout(() => {
                this.arrayChat[this.chatSelezionata].messaggi.push(
                    {
                        mes:'Riprovaci...', 
                        stato: 'ricevuto'
                    }
                );
            }, 1000);
        }
    }
})