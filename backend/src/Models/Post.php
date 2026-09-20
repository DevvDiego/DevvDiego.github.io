<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @mixin \Illuminate\Database\Eloquent\Builder
 * @mixin \Illuminate\Database\Query\Builder
 */
class Post extends Model{
        
    protected $fillable = [
        "title", "slug", "technology", "date", 
        "read_time_estimation", "author_name", 
        "author_degree", "summary", "content", 
        "conclusion", "tags"
    ];
    
    protected $casts = [
        "date" => "datetime",
        "read_time_estimation" => "integer",
        "content" => "array", // automatically handles JSON encoding/decoding
        "tags" => "array"
    ];
}


?>