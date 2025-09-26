<?php

namespace App\Database;

use PDO;
use PDOException;

class Database{

    private static $instance = null;
    private $connection;

    private function __construct(){
        try {
            $host = 'localhost';
            $dbname = 'devvdiego';
            $user = 'root';
            $pass = 'root';
            
            $this->connection = new PDO(
                "mysql:host=$host;dbname=$dbname;charset=utf8mb4",
                $user,
                $pass,
                [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                    PDO::ATTR_EMULATE_PREPARES => false
                ]
            );
            
        } catch (PDOException $e) {
            throw new PDOException("Error de conexión: " . $e->getMessage());
        
        }
    }

    public static function getInstance(): self {

        // Following singleton pattern, instanciates itself
        if( self::$instance === null ){
            self::$instance = new self();
            
        }

        return self::$instance;
    }

    public function getConnection(): PDO {

        return $this->connection;
    }
    
    // Método helper para queries
    public function query(string $sql, array $params = []){
        $stmt = $this->connection->prepare($sql);
        $stmt->execute($params);
        
        return $stmt;
    }

}

?>