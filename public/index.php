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
    
    
    
    $group->post('/blog/post', \App\Controllers\PostController::class . ":new");



    $group->patch('/blog/post/{post_slug}', \App\Controllers\PostController::class . ":update");



})->add(\App\Middleware\AuthMiddleware::class);


// take care of more than an admin user? or keep it simple and keep it as is

$app->get("/session", \App\Controllers\SessionController::class . ":show")
    ->add(\App\Middleware\AuthMiddleware::class);




// Add real/useful response codes with errors, standarized

// "blog/{limit}" // Maybe do this but sanitize the limit param
$app->get("/blog", \App\Controllers\PostController::class . ":latest");


$app->get('/blog/{slug}', \App\Controllers\PostController::class . ":getPostBySlug");

$app->post('/login', \App\Controllers\AuthController::class . ":login")
    ->add(new ValidationMiddleware(["email", "password"]));

$app->post('/refresh', \App\Controllers\AuthController::class . ":refresh");

/* $app->get('/users/{id}', \App\Controllers\UserController::class . ':showUser');

$app->get('/tickets/{id}', \App\Controllers\TicketController::class . ':showTicket');

// the creation of users should not be public
$app->post('/users', \App\Controllers\UserController::class . ":new")
    ->add(new ValidationMiddleware(["name", "email", "password", "role"]));
 */




$app->run();

?>
