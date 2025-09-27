<?php

require __DIR__ . "/../vendor/autoload.php";

use Slim\Factory\AppFactory;
use Psr\Http\Message\RequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

use App\Controllers\PostController;


$app = AppFactory::create();

$app->addErrorMiddleware(true, false, false);



$app->get('/blog', function (Request $request, Response $response){

    $controller = new PostController();

    $posts = $controller->latest();

    /* // To test response only
    $response->getBody()->write(
        "<pre>" 
        . json_encode($posts, JSON_PRETTY_PRINT) . 
        "</pre>"
    ); */

    $response->getBody()->write(json_encode($posts));

    return $response;
});



$app->get('/blog/{slug}', function (Request $request, Response $response, array $args){

    $slug = $args["slug"];

    $controller = new PostController();

    $post = $controller->getPostBySlug($slug);

    $response->getBody()->write(json_encode($post));

    return $response;
});


$app->run();

?>