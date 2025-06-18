<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

// Rute utama
Route::get('/', function () {
    return Inertia::render('Home', []);
});

Route::get('/privacy-policy', function () {
    return Inertia::render('Policy/Privacy', []);
});

Route::get('/terms-of-use', function () {
    return Inertia::render('Policy/Terms', []);
});

Route::get('/sales-and-refunds', function () {
    return Inertia::render('Policy/SalesAndRefunds', []);
});

Route::get('/legal', function () {
    return Inertia::render('Policy/Legal', []);
});

// Rute untuk mengenerate sitemap
Route::get('/sitemap', function () {
    // Membuat instance sitemap
    $sitemap = Sitemap::create();

    // Menambahkan URL dari aplikasi kamu ke sitemap
    $sitemap->add(Url::create('/'));
    $sitemap->add(Url::create('/privacy-policy'));
    $sitemap->add(Url::create('/terms-of-use'));
    $sitemap->add(Url::create('/sales-and-refunds'));
    $sitemap->add(Url::create('/legal'));

    // Menyimpan sitemap.xml di folder public
    $sitemap->writeToFile(public_path('sitemap.xml'));

    // Menampilkan file sitemap.xml
    return response()->file(public_path('sitemap.xml'));
});
