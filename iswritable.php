<?php 

echo getcwd();


$newFileName = '/var/www/staging.weate.ch/public/wbr/makeitupasigo.mikeshinoda.com/output';

if ( ! is_writable(dirname($newFileName))) {

    echo dirname($newFileName) . ' must writable!!!';
} else {

   echo 'not';
}

$is_writable = file_put_contents('output/dummy.txt', "hello");

if ($is_writable > 0) echo "yes directory it is writable";

else echo  "NO directory it is not writable";
?>