<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ReviewResource\Pages;
use App\Models\Review;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;

class ReviewResource extends Resource
{
    protected static ?string $model = Review::class;

    protected static ?string $navigationIcon = 'heroicon-o-chat-bubble-bottom-center-text';

    // Disable tombol "Create Review" di panel
    protected static bool $canCreate = false;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                // Form tetap ada jika kamu pakai edit page, tapi kita disable aksesnya di bawah
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')->searchable()->sortable(),
                TextColumn::make('phone'),
                TextColumn::make('address'),
                TextColumn::make('rating'),
                TextColumn::make('text')->label('Review')->limit(50),
                ImageColumn::make('photo'),
            ])
            ->filters([])
            ->actions([]) // ❌ Tidak ada tombol edit
            ->bulkActions([]); // ❌ Tidak bisa hapus massal
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            // Hanya halaman index (list) yang diaktifkan
            'index' => Pages\ListReviews::route('/'),
        ];
    }
}
