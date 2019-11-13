<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactMessage extends Mailable
{
    use Queueable, SerializesModels;

    public $subject;
    public $data;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->subject = !empty($data['subject']) ? $data['subject'] : $data['name'].' | '.$data['email'];
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build(){
        return $this->view('mails.message')
                ->with('data',$this->data)
                ->from('message.contact.ab.it@gmail.com', 'AB.IT Contact')
                ->to('contact@ab-it.ma')
                ->subject($this->subject);
    }
}
