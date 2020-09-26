# RabbitMQ Test
# İnstall RabbitMQ linux
- sudo apt-get update
- sudo apt-get install erlang
- sudo apt-get install rabbitmq-server
- sudo systemctl enable rabbitmq-server
- sudo systemctl start rabbitmq-server
- sudo systemctl status rabbitmq-server
- sudo rabbitmq-plugins enable rabbitmq_management
- go http://localhost:15672 (Default username:guest pass:guest)
- sudo rabbitmqctl add_user admin admin
- sudo rabbitmqctl set_user_tags admin administrator
- sudo rabbitmqctl set_permissions -p / admin "." "." "."

# Run this app
- npm install
- npm run consumer myqueuename
- npm run publisher myqueuename
- And wait :)