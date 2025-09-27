<?php

namespace App\Controllers;

use App\Database\Database;
use App\Models\Post;


class PostController{

    public $db;

    public function __construct(){
        $this->db = Database::getInstance();

    }

    // Return latest 5 posts
    public function latest(): array {

        $postsData = $this->db->query(
            "SELECT * FROM posts ORDER BY date LIMIT 5;"
        )->fetchAll();
        
        return array_map(function($postsData){
            return new Post($postsData);

        }, $postsData);
        

    }

    /**
     * Return Post or null
    */
    public function getPostById(int $id): ?Post {
        
        $postData = $this->db->query(
            "SELECT * FROM posts WHERE id = ?",
            [$id]
        )->fetch();
        
        return $postData ? new Post($postData) : null;
    }


    public function getPostBySlug(string $slug): ?Post {

        $postData = $this->db->query(
            "SELECT * FROM posts WHERE slug = ?",
            [$slug]
        )->fetch();
        
        return $postData ? new Post($postData) : null;
    }

}


?>