<?php

namespace App\Http\Controllers;

use App\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $arguments = request()->validate([
            'name'=>'required|min:2|max:50',
            'email'=>'required|email',
            'phone'=>'nullable|min:8|max:30|regex:/^(\+\(?[1-9]{1,3}\)?)?[0-9\s\-\.]{1,20}[0-9\s]$/|bail',
            'object'=>'nullable|min:2|max:50',
            'message'=>'required|min:10|max:5000|string'
        ],
        [
            'name.required'=>'REQUIRED',
            'name.min'=>'MIN_LENGTH',
            'name.max'=>'MAX_LENGTH',
            'email.required'=>'REQUIRED',
            'email.email'=>'NOT_VALID',
            'phone.min'=>'MIN_LENGTH',
            'phone.max'=>'MAX_LENGTH',
            'phone.regex'=>'REGEX',
            'object.min'=>'MIN_LENGTH',
            'object.max'=>'MAX_LENGTH',
            'message.required'=>'REQUIRED', 
            'message.min'=>'MIN_LENGTH',
            'message.max'=>'MAX_LENGTH',
            'message.string'=>'STRING'
        ]
        );
        Message::create($arguments);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function show(Message $message)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function edit(Message $message)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Message $message)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function destroy(Message $message)
    {
        //
    }
}
