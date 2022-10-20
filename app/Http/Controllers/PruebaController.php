<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Prueba;

class PruebaController extends Controller
{
    public function funcionPrueba(){

        $datos = Prueba::all();
        return response()->json(['datos' => $datos]);
    }
}
