CREATE TABLE IF NOT EXISTS Users (
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Travels (

  id VARCHAR(36) PRIMARY KEY,
  viagem_id VARCHAR(36),
  name_viagem VARCHAR(255),
  volto_in_viagem VARCHAR(3),
  vou_in_viagem VARCHAR(3),
  vou_and_volto_viagem VARCHAR(3),
  destinoViagem VARCHAR(255),
  FOREIGN KEY (viagem_id) REFERENCES Users(id)
);
