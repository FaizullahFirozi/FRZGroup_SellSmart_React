<?php

use App\Http\Controllers\CompanyController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    // sleep(2); // دوی ثانیی څنډ کوی
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


// Route::resource('company', CompanyController::class)->except('index');


Route::middleware('auth')->group(function () {

    Route::prefix('company')->controller(CompanyController::class)->group(function () {
        Route::get('/',  'index')->name('company');
        // Route::get('add',  'create')->name('company.add'); //same
        Route::inertia('add', 'Company/Add')->name('company.add'); //same
        Route::post('store', 'store')->name('company.store');
        Route::get('edit/{id}',  'edit')->name('company.edit');
        Route::post('update', 'update')->name('company.update');

    });


    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
