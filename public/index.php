<?php

require __DIR__ . "/../vendor/autoload.php";

use App\Middleware\ValidationMiddleware;
use Slim\Factory\AppFactory;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

use App\Middleware\AuthMiddleware;

use App\Controllers\PostController;
use App\Helpers\ResponseHelper;
use App\Models\Post;

Dotenv\Dotenv::createImmutable(__DIR__ . '/..')->load();


$container = require __DIR__ . "/../src/container.php";

AppFactory::setContainer($container);
$app = AppFactory::create();

// $app->setBasePath('');

$app->addBodyParsingMiddleware();
$app->addErrorMiddleware(true, true, true);

// CORS middleware
$app->add(function ($request, $handler) {
    $response = $handler->handle($request);
    
    return $response
        ->withHeader('Access-Control-Allow-Origin', $_ENV["ALLOWED_ORIGINS"])
        ->withHeader('Access-Control-Allow-Headers', $_ENV["ALLOWED_HEADERS"])
        ->withHeader('Access-Control-Allow-Methods', $_ENV["ALLOWED_METHODS"]);
});



/* 

Add pagination capabilities 

Add rate limiting via server (!IMPORTANT)

Add real verification of posts later

*/

//Auth middleware injects the decoded token in the request here
$app->group('/admin', function ($group) use ($app){
    
    
    
    $app->get('/db', \App\Database\SchemaManager::class . ":sync");
    
    
    
    $group->post('/blog/post', function (Request $request, Response $response, array $args) {
        try {

            // parse data from the POST body
            $data = $request->getParsedBody();       
            
            if ( empty($data)) { 
                throw new Exception("No data recieved");
            }

            if( empty($data["content"]) ) { 
                throw new Exception("Recieved data, but no content is present."); 
            }
            

            //take responsability of encoding in the preparation layer
            //encode to keep rich json structure
            $data["content"] = json_encode($data["content"]);
                    

            //after here, the data should be ready to get in the corresponding data model


            $controller = new PostController();
            // this will throw their own exception if properties dont match
            $result = $controller->new($data);
            
            return ResponseHelper::success(
                "success",
                200,
                [$result]
            );
                
        } catch(\Exception $e) {

            return ResponseHelper::error(
                $e->getMessage()
            );

        }
    });



    $group->patch('/blog/post/{post_slug}', function (Request $request, Response $response, array $args) {
        try {

            $current_post_slug = $args["post_slug"];

            // parse data from the POST body
            $data = $request->getParsedBody();       
            
            if ( empty($data)) { throw new Exception("No data recieved"); }
            if( empty($data["content"]) ) { throw new Exception("Recieved data, but no content is present."); } 
            

            //take responsability of encoding in the preparation layer
            //encode to keep rich json structure
            $data["content"] = json_encode($data["content"]);
                    

            //after here, the data should be ready to get in the corresponding data model


            $controller = new PostController();
            // this will throw their own exception if properties dont match
            $result = $controller->update($current_post_slug, $data);
            
            return ResponseHelper::success(
                "success",
                200,
                [$result]
            );
                
        } catch(\Exception $e) {

            return ResponseHelper::error(
                $e->getMessage()
            );

        }
    });



})->add(\App\Middleware\AuthMiddleware::class);


// take care of more than an admin user? or keep it simple and keep it as is

$app->get("/session", \App\Controllers\SessionController::class . ":show")
    ->add(\App\Middleware\AuthMiddleware::class);




// Add real/useful response codes with errors, standarized

$app->get('/blog', function (Request $request, Response $response){

    $controller = new PostController();

    $posts = $controller->latest(5);

    //only fetching the latest posts we recieve basic info
    //so no need to decode stored jsons of content and tags

    return ResponseHelper::success(
        "success",
        200,
        $posts
    );

});



$app->get('/blog/{slug}', function (Request $request, Response $response, array $args){

    $slug = $args["slug"];
    $controller = new PostController();
    $post = $controller->getPostBySlug($slug);

    if($post == null){
        return ResponseHelper::notFound();
    };
    
    // Decode the JSON string into a PHP structure
    // its needed to have this as an array so the later json encode
    // takes care and encodes only once correctly for the client
    $post->content = json_decode($post->content);
    
    return ResponseHelper::success(
        "success",
        200,
        [$post]
    );

});

$app->post('/login', \App\Controllers\AuthController::class . ":login")
    ->add(new ValidationMiddleware(["email", "password"]));


/* $app->get('/users/{id}', \App\Controllers\UserController::class . ':showUser');

$app->get('/tickets/{id}', \App\Controllers\TicketController::class . ':showTicket');

// the creation of users should not be public
$app->post('/users', \App\Controllers\UserController::class . ":new")
    ->add(new ValidationMiddleware(["name", "email", "password", "role"]));
 */




$app->run();

?>
