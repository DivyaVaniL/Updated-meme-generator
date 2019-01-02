<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
// requires php5
define('UPLOAD_DIR', 'output/');
$img = $_POST['textlayer'];

$uid = uniqid();

$img = str_replace('data:image/png;base64,', '', $img);

$img = str_replace(' ', '+', $img);
$data = base64_decode($img);
$file = UPLOAD_DIR . $uid . '-images.png';
$success = file_put_contents($file, $data);

/*Added for creating fb og:image*/
$image = imagecreatefromstring($data);

//$fb_image_path = $fbImagesFolder . '/' . $uid . '-facebook.png';

$fb_image_path = UPLOAD_DIR . $uid . '-facebookshare.jpg';


$fb_image_white_bg = imagecreatetruecolor(1200, 630);
//$fb_image_white_bg = imagecreatetruecolor(460, 460);

$white = imagecolorallocate($fb_image_white_bg, 255, 255, 255);
imagefill($fb_image_white_bg, 0, 0, $white);

//$imagescale = imagescale($image, 630);

//imagecopy($fb_image_white_bg, $image, 285, 0, 0, 0, 630, 630);
//imagecopy($fb_image_white_bg, $imagescale, 285, 0, 0, 0, 630, 630);
imagecopy($fb_image_white_bg, $image, 265, 15, 0, 0, 670, 600);
imagepng($fb_image_white_bg, $fb_image_path);

ImageDestroy($fb_image_white_bg);

//added for logging user info in logs
error_log($_SERVER['HTTP_USER_AGENT'], 0);
error_log($uid, 0);

echo $success ? $uid : 'Unable to save the file.';
?>