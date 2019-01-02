<?php

ini_set('display_errors', 1);

ini_set('display_startup_errors', 1);

error_reporting(E_ALL);

error_reporting(1);





require_once ('codebird.php');





\Codebird\Codebird::setConsumerKey('vHCIh0cOacTZ1VxV4xMCU7CjO','g2FhHZikQyRUqyugxmS3jIl5OQSjWvXLicmImrfENdHrolh7Tp'); //  static, see README

$cb = \Codebird\Codebird::getInstance();



session_start();



$fileExists = 0;



if(isset($_GET['img_name']) && !isset($_SESSION['img_name'])){

	$_SESSION['img_name'] = $_GET['img_name'];	

}

if(isset($_GET['caption']) && !isset($_SESSION['caption'])){

	$_SESSION['caption'] = $_GET['caption'];

}





if (! isset($_SESSION['oauth_token'])) {

  // get the request token

  $reply = $cb->oauth_requestToken([

    'oauth_callback' => 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']

  ]);



  // store the token

  $cb->setToken($reply->oauth_token, $reply->oauth_token_secret);

  $_SESSION['oauth_token'] = $reply->oauth_token;

  $_SESSION['oauth_token_secret'] = $reply->oauth_token_secret;

  $_SESSION['oauth_verify'] = true;



  // redirect to auth website

  $auth_url = $cb->oauth_authorize();

  header('Location: ' . $auth_url);

  die();



} elseif (isset($_GET['oauth_verifier']) && isset($_SESSION['oauth_verify'])) {

  // verify the token

  $cb->setToken($_SESSION['oauth_token'], $_SESSION['oauth_token_secret']);

  unset($_SESSION['oauth_verify']);



  // get the access token

  $reply = $cb->oauth_accessToken([

    'oauth_verifier' => $_GET['oauth_verifier']

  ]);



  // store the token (which is different from the request token!)

  $_SESSION['oauth_token'] = $reply->oauth_token;

  $_SESSION['oauth_token_secret'] = $reply->oauth_token_secret;



  // send to same URL, without oauth GET parameters

  header('Location: ' . basename(__FILE__));

  die();

}



// assign access token on each page load

$cb->setToken($_SESSION['oauth_token'], $_SESSION['oauth_token_secret']);





// these files to upload. You can also just upload 1 image!



$imageURL = $_SESSION['img_name'];
$caption= html_entity_decode($_SESSION['caption']);


$media_files = [

  $imageURL

];

// will hold the uploaded IDs

$media_ids = [];

	

	

foreach ($media_files as $file) {

	// upload all media files

	$imagedata = 'output/5ad167315a918-images.png';

	

	if (file_exists($imagedata)){  

		$fileExists = 1;	

		$reply = $cb->media_upload([

		   'media' => $imagedata

		]);  

		

		// and collect their IDs

		$media_ids[] = $reply->media_id_string;		

	}

  

}



if(!$fileExists){

	$media_ids = implode(',', $media_ids);



	// send Tweet with these medias

	$reply = $cb->statuses_update([

	  'status' => $caption,

	  'media_ids' => $media_ids

	]);

	

	if($reply->httpstatus == 200){

		$response =  "Photo posted successfully.<br>Thanks for sharing!";
session_unset();
session_destroy();
$_SESSION = array();

	}

	else{


		$response = 'There was a problem sharing your photo.';

	}

}else{

	$response = 'There was some .';

}





?>

<html>

<head>

<title></title>

<style>

body {

margin: 0;

padding: 0;

background-color: #000;

color: white;

font-family: sans-serif;

text-align:center;

}

a{

	color:#fff;

}

#response {

margin: 20px auto;

width: 100%;

max-width: 450px;

font-size: 2em;

text-align: center;

}

</style>

</head>

<body>

<div id="response">

<?php echo $response ?>

</div>

<div><a href="../">Click Here</a> to go back to home page</div>

</body>

</html>