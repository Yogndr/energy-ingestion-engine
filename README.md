High-Scale Energy Ingestion Engine

This project is a backend service built using NestJS to ingest energy consumption data from multiple sources and store it reliably in a PostgreSQL database.

The system supports both single and batch ingestion of energy data and is designed with validation, scalability, and clean architecture in mind.

Tech Stack

Backend Framework: NestJS (Node.js)

Database: PostgreSQL

ORM: TypeORM

Validation: class-validator, class-transformer

Containerization: Docker, Docker Compose

Architecture Overview

The application follows a modular and layered architecture:

Client
→ Controller (API Layer)
→ Service (Business Logic)
→ Entity (Database Model)
→ PostgreSQL

Controllers handle HTTP requests and responses

Services contain business logic

Entities define database tables

DTOs ensure request validation

Features

Single energy data ingestion

Batch ingestion for high-scale data input

Input validation using DTOs

PostgreSQL persistence using TypeORM

Dockerized database setup

Clean and modular NestJS structure

API Endpoints
Ingest Single Energy Record

POST /energy/ingest

Request Body:

{
  "meterId": "MTR-101",
  "consumption": 23.5,
  "unit": "kWh"
}

Batch Energy Ingestion

POST /energy/batch

Request Body:

[
  { "meterId": "MTR-1", "consumption": 10, "unit": "kWh" },
  { "meterId": "MTR-2", "consumption": 20, "unit": "kWh" }
]

Fetch All Records

GET /energy

How to Run the Project
Prerequisites

Node.js (v18+ recommended)

Docker & Docker Compose

Steps

Clone the repository

git clone <repo-url>
cd energy-ingestion-engine


Start PostgreSQL using Docker Compose

docker compose up -d


Install dependencies

npm install


Start the application

npm run start:dev


The server will run on http://localhost:3000

Validation and Error Handling

DTO-based validation ensures only valid data is ingested

Invalid or missing fields result in a 400 Bad Request

This prevents incorrect or incomplete data from being stored

Scaling Considerations

To handle higher data volumes, the system can be extended with:

Message queues (Kafka / RabbitMQ) for asynchronous ingestion

Database indexing on frequently queried fields

Horizontal scaling using multiple NestJS instances

Caching layer (Redis) for read-heavy workloads

Author

Built as part of a backend engineering assignment to demonstrate scalable data ingestion and clean backend design.