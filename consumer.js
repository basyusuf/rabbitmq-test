const amqp = require('amqplib');
const data = require('./data.json');

const message = {
    description:"Bu bir test mesajıdır."
}
const queueName = process.argv[2] || "JobsQueue";
connect_rabbitmq();

async function connect_rabbitmq(){
    try{
        const connection = await amqp.connect("amqp://localhost:5672")
        const channel = await connection.createChannel();
        const assertion = await channel.assertQueue(queueName);

        console.log("Mesaj bekleniyor...")
        channel.consume(queueName,message =>{
            const messageInfo = JSON.parse(message.content.toString());
            console.log(messageInfo)
            const detail = data.find(item=>item.id == messageInfo.description);
            if(detail){
                console.log("İşlenen kayıt",detail)
                channel.ack(message);
            }
        })

    }catch(error){
        console.log("Error:",error)
    }
}