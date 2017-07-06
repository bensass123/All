<html>

<head>
    <title> Editor </title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
   
</head>

<body>
    <div class="container">
 <?php

    // configuration
    $url = 'http://128.199.99.165';
    $file = '/scraper/replace.json';

    // check if form has been submitted
    if (isset($_POST['text']))
    {
        // save the text contents
        file_put_contents($file, $_POST['text']);

        // redirect to form again
        header(sprintf('Location: %s', $url));
        printf('<a href="%s">Moved</a>.', htmlspecialchars($url));
        exit();
    }

    // read the textfile
    $text = file_get_contents($file);

    ?>
	<h1>The Oracle</h1>

    <!-- HTML form -->
    <form action="" method="post">
	<div class="row">
	<div class="col-sm-3">
    <button type="submit" class="btn btn-primary">Submit</button>
    <input type="reset" class="btn btn-danger"/>
	</div>
	<div class="col-sm-3 col-sm-offset-6">
    <a href="cars.csv" class="btn btn-primary">Cars</a>
    <a href="all.csv" class="btn btn-primary">All Vehicles</a>
	</div>
    <br />
<br />
<br />
	</div>
    <textarea name="text" class="form-control" rows="40"><?php echo htmlspecialchars($text) ?></textarea>
    <br />
    <button type="submit" class="btn btn-primary">Submit</button>
    <input type="reset" class="btn btn-danger"/>
    </form>     
    </div>

</body>

</html>
