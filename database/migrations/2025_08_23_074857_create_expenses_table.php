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
        Schema::create('expenses', function (Blueprint $table) {
            $table->id();
            $table->string('expense_name')->nullable()->comment('د لګښت نوم');
            $table->string('expense_date', 10)->nullable()->comment('د لګښت تاریخ شمسی');
            $table->double('expense_amount')->nullable()->comment('د لګښت اندازه');
            $table->string('expense_amount_currency', 10)->nullable()->comment('د لګښت د پيسو ډول');
            $table->foreignId('created_by')->nullable()->constrained('users')->onUpdate('cascade');
            $table->foreignId('updated_by')->nullable()->constrained('users')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('expenses');
    }
};
