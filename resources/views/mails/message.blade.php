<body>
    <p><strong>Name : </strong>{{ $data['name']}}</p>
    <p><strong>Email : </strong>{{ $data['email']}}</p>
    @if(!empty($data['phone']))
    <p><strong>Phone : </strong>{{ $data['phone']}}</p>
    @endif
    <p>{{ $data['message']}}</p>
</body>