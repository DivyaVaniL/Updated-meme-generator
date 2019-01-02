<?php
	// requires php5
	define('UPLOAD_DIR', 'imgoutput/');
	$img = $_POST['textlayer'];
	$memeimg = $_POST['memeimg'];
	$memeresize = $_POST['memeresize'];
	
	$img = str_replace('data:image/png;base64,', '', $img);
	$img = str_replace(' ', '+', $img);
	$data = base64_decode($img);
	$file = UPLOAD_DIR . uniqid() . '.png';
	$success = file_put_contents($file, $data);
	
	$arays = getimagesize ( $file );
	
	$filePath = UPLOAD_DIR . 'hoodieallaboutit-'. uniqid() . '.gif';
	
	$cmd = "$memeimg -resize ". $arays[0] ."x". $arays[1];
	
	exec("convert $cmd ". $filePath); 
	
	$image = exec('convert ' . $filePath . ' null: ' . $file . '  -gravity Center -layers composite -layers optimize ' . $filePath);	
	
	
	
	echo $success ? $filePath : 'Unable to save the file.';
	
	
?>