# Microservices
microservices stuff
A mix of several book tutorial patched together by google and stackoverflow answers, it works, I can try my best to explain how it work but NO PROMISES!!! Feel free to pull this repo and ask me questions how it works. This project currently features a shopping cart REST application with API calls to a product microservices (The example they give was a fixed json file that doesnt work well even for a mock, BORING! so I wronte a simple product service myself in Java Spring-boot). The idea is to show how different microservices can work together regardless of the language used to code the microservice 

Configurations for the application is all default.
Run the product endpoint and it will listen on port 8080
Run the shopping cart application and it will listen on port 5000
some feature in shopping cart will make get requests to product endpoint
the idea of microservices is that shopping cart should be not be breaking when product is down, only the functionalities that has a direct dependency on product should be down.

There is not much microservices (only 2 right now and there is a dependency) at the moment, this is my active working project, currently adding a simple angular frontend to display the results and do some simple testing from the ui
