<?php

require __DIR__ . "/../vendor/autoload.php";

use Slim\Factory\AppFactory;
use Psr\Http\Message\RequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

use App\Database\Database;

$app = AppFactory::create();


$app->addErrorMiddleware(true, false, false);


$app->get('/blog/{id}', function (Request $request, Response $response, array $args) {

    $id = $args["id"];

    $post = Database::getInstance()->query(
        "SELECT * FROM posts WHERE id = ?", 
        [$id]
    )->fetch();
    
    $response->getBody()->write(
        "Titulo: " . $post["title"] . "\n" .
        "Slug: " . $post["slug"]
    );


    $response->getBody()->write(json_encode($post));


    return $response;
});

$app->run();

?>