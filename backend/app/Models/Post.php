<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[Fillable([
    "title", "slug", "technology", "date",
    "read_time_estimation", "author_name",
    "author_degree", "summary", "content",
    "conclusion", "tags"
])]
class Post extends Model
{
    /** @use HasFactory<\Database\Factories\PostFactory> */
    use HasFactory;

    protected $casts = [
        "date" => "datetime",
        "read_time_estimation" => "integer",
        "content" => "array", // automatically handles JSON encoding/decoding
        "tags" => "array"
    ];
}
