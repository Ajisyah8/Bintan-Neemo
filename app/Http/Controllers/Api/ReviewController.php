<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Review;

class ReviewController extends Controller
{
    public function index()
    {
        return Review::latest()->take(6)->get();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'text' => 'required|string',
            'rating' => 'required|integer|min:1|max:5',
            'phone' => 'required|string',
            'address' => 'required|string',
            'photo' => 'nullable|string',
        ]);

        $review = Review::create($data);
        return response()->json($review, 201);
    }
}
