# Rabbitmq Test
# İnstall linux
1- sudo apt-get update
2- sudo apt-get install erlang
3- sudo apt-get install rabbitmq-server
4- sudo systemctl enable rabbitmq-server
5- sudo systemctl start rabbitmq-server
6- sudo systemctl status rabbitmq-server
7- sudo rabbitmq-plugins enable rabbitmq_management
8- go http://localhost:15672 (Default username:guest pass:guest)
9- sudo rabbitmqctl add_user admin admin
10- sudo rabbitmqctl set_user_tags admin administrator
11- sudo rabbitmqctl set_permissions -p / admin "." "." "."