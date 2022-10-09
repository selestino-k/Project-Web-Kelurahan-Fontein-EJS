CREATE TABLE PENDUDUK(
    nik CHAR(16) NOT NULL PRIMARY KEY,
    nama VARCHAR(50) NOT NULL, 
    jenis_kelamin VARCHAR(5) NOT NULL, 
    hubungan VARCHAR(5) NOT NULL, 
    lahir DATE NOT NULL,
    status VARCHAR(5) NOT NULL,
    pekerjaan VARCHAR(40) NOT NULL, 
    pendidikan VARCHAR(50) NOT NULL,
    kewarganegaraan VARCHAR(40) NOT NULL,
    kel_no_kk CHAR(10) NOT NULL, 
    pendapatan INT NOT NULL,
    umur INT NOT NULL,
    FOREIGN KEY (kel_no_kk) REFERENCES keluarga (no_kk)
    
)ENGINE = INNODB;




CREATE TABLE MASUK(
    id_masuk INT NOT NULL PRIMARY KEY,
    nik CHAR(16) NOT NULL,
    kel_no_kk CHAR(10) NOT NULL, 
    nama VARCHAR(50) NOT NULL, 
    jenis_kelamin VARCHAR(5) NOT NULL, 
    tgl_masuk DATE NOT NULL,
     
    FOREIGN KEY (kel_no_kk) REFERENCES KELUARGA (no_kk),
    FOREIGN KEY (nik) REFERENCES PENDUDUK (nik)
    
    
)ENGINE = INNODB;


#pak jeffri, mhs unkris. besk bru dtng.