<?php

namespace App\Http\Controllers;

use File, Log;

class AngularController extends Controller
{
    /**
     * Serve the angular application.
     *
     * @return \Illuminate\View\View
     */
    public function serve()
    {
        Log::info(public_path('dist/index.html'));
        return File::get(public_path('dist/index.html'));
    }
}
