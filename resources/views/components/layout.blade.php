<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>{{ $title ?? 'My Site' }}</title>

    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body>
<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
</nav>

<main>
    {{ $slot }}
</main>
</body>
</html>
