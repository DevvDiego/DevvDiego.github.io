<?php

namespace App\Controllers;

use App\Database\Database;
use App\Models\Post;
use App\Traits\ResponseTrait;
use Illuminate\Database\Capsule\Manager as Capsule;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use PDOException;

class PostController{
    
    use ResponseTrait;

    public $db;

    public function __construct(){
        $this->db = Database::getInstance();

    }

    // Return latest 5 posts
    public function latest(Request $request, Response $response, $args) {

        // hardcode limit, later on get it from args and sanitize it
        // $limit = $args["limit"];
        
        $limit = 5;
        
        $postsData = $this->db->query(
            "SELECT 
                title, slug, technology, date,
                read_time_estimation, summary
            FROM posts ORDER BY date LIMIT $limit;"
        )->fetchAll();
        
        $posts = array_map(function($postsData){
            return new Post($postsData);

        }, $postsData); 
        
        return $this->success(
            res: $response,
            msg: "Post found",
            data: $posts
        );
        

    }

    /**
     * Add new post
     * 
     * @return true on success
     * @return false on failure
     * @throws PDOException
     */
    public function new(Request $request, Response $response, array $args) {
        // parse data from the POST body
        $data = $request->getParsedBody();       
        
        if ( empty($data)) { 
            return $this->error(
                res: $response,
                msg: "No data recieved",
                code: 402
            );
        }

        if( empty($data["content"]) ) { 
            return $this->error(
                res: $response,
                msg: "Recieved data, but no content is present.",
                code: 402
            ); 
        }
        

        //take responsability of encoding in the preparation layer
        //encode to keep rich json structure
        $data["content"] = json_encode($data["content"]);
                
        //after here, the data should be ready to get in the corresponding data model

        $post = new Post($data);
        
        $sql = "INSERT INTO posts 
                (title, slug, technology, date, 
                read_time_estimation, author_name, 
                author_degree, summary, content, 
                conclusion, tags) 
                VALUES 
                (:title, :slug, :technology, :date, 
                :read_time_estimation, :author_name, 
                :author_degree, :summary, :content, 
                :conclusion, :tags)";
        
        $params = [
            ':title' => $post->title,
            ':slug' => $post->slug,
            ':technology' => $post->technology,
            ':date' => $post->date,
            ':read_time_estimation' => $post->read_time_estimation,
            ':author_name' => $post->author_name,
            ':author_degree' => $post->author_degree,
            ':summary' => $post->summary,
            ':content' => $post->content,
            ':conclusion' => $post->conclusion,
            ':tags' => $post->tags
        ];

        $stmt = $this->db->query($sql, $params);
        
        if( ($stmt->rowCount() > 0) == false ){
            return $this->error(
                res: $response,
                msg: "Post already exists",
                code: 409
            );
            
        }
        
        
        return $this->success(
            res: $response,
            msg: "Post created successfully",
            code: 201
        );    
    

    }

    /**
     * Update an already existing post
     * 
     * 
     * 
     * @return true on success
     * @return false on failure
     * @throws PDOException
     */
    public function update(Request $request, Response $response, array $args) {
        $current_post_slug = $args["post_slug"];

        // parse data from the POST body
        $data = $request->getParsedBody();       
        
        if ( empty($data)) { 
            return $this->error(
                res: $response,
                msg: "No data recieved",
                code: 402
            );
        }

        if( empty($data["content"]) ) { 
            return $this->error(
                res: $response,
                msg: "Recieved data, but no content is present.",
                code: 402
            ); 
        }

        //take responsability of encoding in the preparation layer
        //encode to keep rich json structure
        $data["content"] = json_encode($data["content"]);
                

        //after here, the data should be ready to get in the corresponding data model
 
        $post = new Post($data);

        $sql = "UPDATE posts
            SET title = :title,
                slug = :slug,
                technology = :technology,
                date = :date,
                read_time_estimation = :read_time_estimation,
                author_name = :author_name,
                author_degree = :author_degree,
                summary = :summary,
                content = :content, 
                conclusion = :conclusion,
                tags = :tags
            WHERE slug = :old_slug 
        ";
        
        $params = [
            ':title' => $post->title,
            ':slug' => $post->slug,
            ':technology' => $post->technology,
            ':date' => $post->date,
            ':read_time_estimation' => $post->read_time_estimation,
            ':author_name' => $post->author_name,
            ':author_degree' => $post->author_degree,
            ':summary' => $post->summary,
            ':content' => $post->content,
            ':conclusion' => $post->conclusion,
            ':tags' => $post->tags,
            ':old_slug' => $current_post_slug
        ];

        $stmt = $this->db->query($sql, $params);
        
        if( ($stmt->rowCount() > 0) == false ){
            return $this->error(
                res: $response,
                msg: "Post could not be updated",
                code: 501
            );
            
        }
        
        return $this->success(
            res: $response,
            msg: "Post updated successfully",
            code: 204
        );

    }    

    /**
     * Return Post or null
    */
    public function getPostById(int $id): ?Post {
        
        $postData = $this->db->query(
            "SELECT 
                title, slug, technology, date, 
                read_time_estimation, author_name, 
                author_degree, summary, content, 
                conclusion, tags 
            FROM posts WHERE slug = ?",
            [$id]
        )->fetch();
        
        return $postData ? new Post($postData) : null;
    }


    public function getPostBySlug(Request $request, Response $response, $args) {

        // sanitize?
        $slug = $args["slug"];
        
        $postData = $this->db->query(
            "SELECT 
                title, slug, technology, date, 
                read_time_estimation, author_name, 
                author_degree, summary, content, 
                conclusion, tags 
            FROM posts WHERE slug = ?",
            [$slug]
        )->fetch();
        
        if($postData == null){
            return $this->error(
                res: $response,
                msg: "No post found",
                data: null
            );
        };
        
        $post = new Post($postData);
        // Decode the JSON string into a PHP structure
        // its needed to have this as an array so the later json encode
        // takes care and encodes only once correctly for the client
        $post->content = json_decode($post->content);
        
        return $this->success(
            res: $response,
            msg: "Post found",
            data: new Post($postData)
        );
    }

}


?>