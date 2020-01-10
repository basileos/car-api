## Prerequisites

Install [Docker](https://www.docker.com) to your machine.

## How to start application

1. Open shell in root folder of application source code

1. Run the following command to start application:

    ```Shell
    docker-compose -f docker-compose.yml up
    ```

    This will start back-end and DB containers.

    It is possible to start only chosen containers, e.g. to start only database

    ```Shell
    docker-compose -f docker-compose.yml up database
    ```

    To force rebuild of containers run:

    ```Shell
    docker-compose -f docker-compose.yml up --build
    ```

1. Service Endpoints:

    | Service      | Endpoint                         |
    | ------------ | -------------------------------- |
    | Backend      | <http://localhost:5000/> |
    | database     | :5432                            |

1. To stop all containers press `Ctrl-C`. If this does not work, run:

    ```Shell
    docker-compose stop
    ```

    To view current state of containers run:

    ```Shell
    docker-compose ps
    ```
