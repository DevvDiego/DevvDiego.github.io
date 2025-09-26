<?php

namespace App\Models;

class Post{

    public $id;
    public $title;
    public $slug;
/*     public $content;
    public $user_id;
    public $created_at;
    public $updated_at; */


    // Maps recieved array to a known structure
    public function __construct(array $data = [])
    {
        foreach ($data as $key => $value) {
            if (property_exists($this, $key)) {
                $this->$key = $value;
            }
        }
    }


}


?>