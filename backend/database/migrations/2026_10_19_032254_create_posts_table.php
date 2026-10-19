<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();

            $table->string("title");
            $table->string("slug");
            $table->string("author");
            $table->string("summary");
            $table->json("content");
            $table->string("conclusion");
            $table->json("tags");
            $table->date("date");
            $table->json("technology");
            $table->integer("read_time");

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
