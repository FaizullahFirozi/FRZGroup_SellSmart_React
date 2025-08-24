<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    use HasFactory;

        protected $table = 'expenses';
    protected $primaryKey = 'id';

    protected $fillable = [
        'expense_name',
        'expense_date',
        'expense_amount',
        'expense_amount_currency',
        'created_by',
        'updated_by',
    ];


       protected $hidden = [
        // 'created_at',
        'updated_at',
    ];
}
