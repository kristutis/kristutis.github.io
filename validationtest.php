<!-- index.php -->
<!DOCTYPE html>
<html>
<head><title>Greeting</title></head>
<body>
  <h1>Hello, <?php echo htmlspecialchars($_GET['name'] ?? 'Guest'); ?>!</h1>
</body>
</html>
