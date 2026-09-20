<?php

namespace App\Controllers;

use App\Auth\JWTManager;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use Illuminate\Database\Capsule\Manager as Capsule;
use App\Models\User as User;
use App\Traits\ResponseTrait;

class AuthController {
    use ResponseTrait;
    private JWTManager $jwt;

    public function __construct(Capsule $db, JWTManager $jwt) {
        $this->jwt = $jwt;
    }

    public function login(Request $request, Response $response, $args) {
        $data = $request->getParsedBody();
        $email = $data["email"];
        $password = $data["password"];

        $user = User::query()->where("email", $email)->first();

        if (!$user || !password_verify($password, $user->password)) {
            return $this->error(
                res:$response,
                msg:"Invalid credentials",
                code:401
            );

        }

        $token = $this->jwt->createToken($user);

        return $this->success(
            res:$response,
            data:[
                "token" => $token,
                "expires_in" => 24 * 3600 // 24 hrs
            ],
            msg:"Log in successfull"
        );
    }

    public function refresh(Request $request, Response $response, $args) {
        // Obtener token del header Authorization
        $authHeader = $request->getHeaderLine('Authorization');
        $token = str_replace('Bearer ', '', $authHeader);
        
        if (!$token) {
            return $this->unauthorized($response, "No token present for autorization");
        }
        
        $payload = $this->jwt->validateToken($token);
        
        if (!$payload || !isset($payload->sub)) {
            return $this->error($response, "Invalid or expired token", 401);
        }
        
        $user = User::find($payload->sub);
        
        if (!$user) {
            return $this->error($response, "User not found", 401);
        }
        
        $newToken = $this->jwt->createToken($user);
        
        return $this->success(
            res: $response,
            data: [
                "token" => $newToken,
                "expires_in" => 24 * 3600
            ],
            msg: "Token refreshed successfully"
        );
    }
    
}

?>