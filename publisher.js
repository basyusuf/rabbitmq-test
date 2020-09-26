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
        data.map((item)=>{
            message.description = item.id;
            channel.sendToQueue(queueName,Buffer.from(JSON.stringify(message)));
            console.log("Mesaj gönderildi. İtem id:",item.id)
        })
    }catch(error){
        console.log("Error:",error)
    }
}