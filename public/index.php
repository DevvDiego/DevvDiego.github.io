<?php

require __DIR__ . "/../vendor/autoload.php";

use Slim\Factory\AppFactory;
use Psr\Http\Message\RequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

$app = AppFactory::create();






$app->get('/blog/{id}', function (Request $request, Response $response, array $args) {

    $id = $args["id"];


    $response->getBody()->write("hello from slim");
    return $response;

});

$app->run();

?>