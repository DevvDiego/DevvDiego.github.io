<?php

require __DIR__ . "/../vendor/autoload.php";

use Slim\Factory\AppFactory;
use Psr\Http\Message\RequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

use App\Controllers\PostController;


$app = AppFactory::create();


$app->addErrorMiddleware(true, false, false);

/* Define better DB structure */

$app->get('/blog', function (Request $request, Response $response){

    $controller = new PostController();

    $posts = $controller->latest();

    $response->getBody()->write(json_encode($posts));

    return $response;
});



$app->get('/blog/{id}', function (Request $request, Response $response, array $args){

    $id = $args["id"];

    $controller = new PostController();

    $post = $controller->getPostById($id);

    $response->getBody()->write(json_encode($post));

    return $response;
});



$app->run();

?>