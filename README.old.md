BOOK MY SHOW APP CLONE PROJECT
Pages: 
>> Home.Page.jsx (Default.Hoc.jsx) 
>> Movie.Page.jsx (Movie.Hoc.jsx) 
>> Play.Page.jsx (Default.Hoc.jsx)

HOCs/Layouts:
>> Default.Hoc.jsx 
>> Movie.Hoc.jsx

Components: 
>> Cast - Cast.Component.jsx 
>> Entertainment -  EntertainmentCard.Component.jsx 
>> HeroCarousel - HeroCarousel.Component.jsx 
                  Arrows.Component.jsx 
>> MovieHero - MovieHero.Component.jsx
               MovieInfo.Component.jsx 
>> Navbar Navbar.Componenet.jsx 
                 MovieNavbar.Component.jsx
>> PaymentModal PaymentComponent.jsx 
>> PlayFilters Filters.Componenet.jsx 
>> Poster Poster.Componenet.jsx 
>> PosterSlider PosterSliderComponenet.jsx

npx create-react-app .



https://api.themoviedb.org/3/movie/550?api_key=bbde881baea49ba6e9335403a1ae7241



# DevOps


Dev => Development Team 
Ops => Operation Team

Devops and CICD (Docker & Kubernetes)

Dev write code + share code -------------------------------------------------------------> Ops -----------------------------------------> Testing + Scaling, Bug Fixing

Developer Team -> Operation Team -> Testing Team

complexity of appln more => then time to build the appln will be more

Scenario: Team of 3 members => 
Book My Show Appln >> All have diff OS (Mac, Windows, Linux)

    Person-1                Person-2                Person-3
    (windows)                (Mac)                    (Linux)
    Packages                   
It works on my m/c

Book My Show Appln (Resources): RAM: 4GB ROM: 1TB GPU: 2GB

Virtualisation
(I could be able to run virtual OS on my local OS) Local OS in case of Person -2 => Mac Virtualisation Virtual OS => Windos

Basic Arch:

Windows (RAM, ROM, GPU) || Virtual OS
OS || Local OS

Adv Arch: 
Windows Virtual OS           Unix Virtual OS 7Gb, 
500GB, 1GB 3GB,                 500GB, 1GB              || Internal Resource Sharing

Base/Local OS 8GB, 1TB, 2GB

Containersation (Docker)
Base: Windows Virtual OS (2Gb, 250Gb)    Unix Virtualisation OS (2GB, 250GB) 
                      Docker Engine (4GB, 500Gb)  
                  
     Base Local OS (8GB, 1TB)

Book My Show Appln (3GB)

Windows Virtual OS (2Gb, 250Gb)        Unix Virtualisation OS (2GB, 250GB)  

                   Docker Engine (4GB, 500Gb) 

                    Base Local OS (8GB, 1TB)

Docker >> EC2 Instance >> Img and Container

Kubernetes-- its is an open source system for automating  deploymemt, scaling and management of continerized applications

Kubernetes (Orchestra)

Nodes >> 
>> Master Node (A person holding stick in Orchestra event | Lead) 
>> Child Node (A group of people who will be following the lead guidance)

NGINX (Light Weight Servers)

AWS >> EC2 (Virtual Machines) Amazon Elastic Compute Cloud Service

Docker 
        >> Image
        >> Containers


Image(parent--- can have n number of Containers)
Containers(child--servers)

Kubernetes
    >> Docker deamon--Server(initiali9zation) ---The Docker daemon ( dockerd ) listens for Docker API requests and manages Docker objects such as images, containers, networks, and volumes. A daemon can also communicate with other daemons to manage Docker services.

    >> Docker client-- (mainly for client)--- The Docker client provides a command line interface (CLI) that allows you to issue build, run, and stop application commands to a Docker daemon. The main purpose of the Docker Client is to provide a means to direct the pull of images from a registry and to have it run on a Docker host.

    >> Docker Swarm--(master or main node -- orchestra) Docker Swarm is an orchestration management tool that runs on Docker applications.