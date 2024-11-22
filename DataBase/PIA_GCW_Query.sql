CREATE DATABASE pia_gcw_odni;
USE pia_gcw_odni;

CREATE TABLE Usuario(
	idUsuario INT NOT NULL AUTO_INCREMENT,
    nombreUsuario VARCHAR(50),
    tiempo TIME,
    CONSTRAINT PK_usuario PRIMARY KEY (idUsuario)
);

CREATE TABLE Records(
	idRecord INT NOT NULL AUTO_INCREMENT,
    idUsuario INT NOT NULL,
    tiempoRecord TIME,
    CONSTRAINT PK_record PRIMARY KEY (idRecord),
    CONSTRAINT FK_usuario FOREIGN KEY (idUsuario)
    REFERENCES Usuario(idUsuario)
);

CREATE VIEW mostrarRecords AS
	SELECT 
		u.nombreUsuario AS Nombre_de_Usuario, 
		r.tiempoRecord AS Mejor_Tiempo
	FROM Records r
	INNER JOIN Usuario u
	ON r.idUsuario = u.idUsuario;