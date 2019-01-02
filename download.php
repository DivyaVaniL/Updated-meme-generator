<?php
include('config.php');

$fileToSend = 'output/' . $_GET['guid'] . '-images.png';

header('Content-Description: File Transfer');
header('Content-Type: application/force-download');
header('Content-Transfer-Encoding: binary');
header('Expires: 0');
header('Cache-Control: must-revalidate');
header('Pragma: public');
header('Content-type: image/png');
header('Content-Disposition: attachment; filename="ILoveMakonnen.png"');

ob_clean();
flush();
readfile($fileToSend);
exit;
?>
