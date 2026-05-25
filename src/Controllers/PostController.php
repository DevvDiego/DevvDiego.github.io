<?php

namespace App\Controllers;

use App\Models\Post;
use App\Traits\ResponseTrait;
use Illuminate\Database\Capsule\Manager as Capsule;
use Illuminate\Database\QueryException;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class PostController{
    
    use ResponseTrait;
        
    public function __construct(Capsule $db) {}

    // Return latest 5 posts
    public function latest(Request $request, Response $response, $args) {

        // hardcode limit, later on get it from args and sanitize it
        // $limit = $args["limit"];
        
        $limit = 5;

        // To directly access the more "sql" methods, use getQuery
        $posts = Post::query()->getQuery()
            ->limit($limit)
            ->get([
                "title", "slug", "technology", "date",
                "read_time_estimation", "summary"
        ]);        
        
        return $this->success(
            res: $response,
            msg: "Posts found",
            data: $posts
        );
        

    }

    /**
     * Add new post
     */
    public function new(Request $request, Response $response, array $args) {
        $data = $request->getParsedBody();       
        $slug = $data['slug'];
        
        try {
            /**
             * Eloquent will cast automatically to json before inserting
             * because it recieves an array from the retrieved request data
             * (Stated in the casts of the model)
             */
            Post::create($data);
    
            return $this->success(
                res: $response,
                msg: "Post created successfully",
                code: 201
            );
    
        } catch (QueryException $e) {
            // integrity constraint violation (duplicated)
            if ($e->getCode() === "23000") {
                return $this->error(res: $response, msg:"Post with slug: '$slug' already exists", code:409);
            }
            
            return $this->error(res: $response, msg: "DB Error" . $e->getMessage(), code: 500);

        }  
    

    }

    /**
     * Update an already existing post
     */
     public function update(Request $request, Response $response, array $args) {
        $current_slug = $args["post_slug"];
        $data = $request->getParsedBody();
    
        $post = Post::query()->where("slug", $current_slug)->first();
        
        if (!$post) {
            return $this->error(
                res: $response,
                msg:"Post not found",
                code:404
            );
            
        }
        
        try {
            // Eloquent will check what changed and update only that,
            // and only those fields declared in "fillable",
            // also it takes care of the casts automatically as always
            $post->fill($data);
            $post->save();
        
                return $this->success(
                    res: $response,
                    msg: "Post updated successfully",
                    code: 200,
                    data: $post
                );
        
            } catch (QueryException $e) {
                
                return $this->error(res:$response, msg:"Post update failed: " . $e->getMessage(), code:500);
                
            }

     }

}


?>