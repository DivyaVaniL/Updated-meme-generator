<?php 
//require("site-guard.php");
require ("template/config.php");
$guid = $_GET['guid'];
?>
<!doctype html>

<html lang="en">

	<head>

		<meta charset="UTF-8">

		<meta name="viewport" content="initial-scale=1.0, width=device-width, maximum-scale=1.0" />

		<title><?php echo $pageTitle; ?></title>

		<meta property="description" content="<?php echo $pageDescription; ?>" />

		<meta name="apple-mobile-web-app-capable" content="yes">

		<link rel="shortcut icon" href="<?php echo $favIcon; ?>" type="image/vnd.microsoft.icon" />
		
		<link rel="apple-touch-icon-precomposed" href="<?php echo $favIcon; ?>">
		
<link type="text/css" rel="stylesheet" href="//fast.fonts.net/cssapi/5d3f1cb5-529e-4766-90be-896fdc4948c2.css"/>
		<!-- If you'd like to specify your own Open Graph tags, define the og:url and og:title tags in your theme's HTML. -->

		<meta property="og:title" content="<?php echo $ogTitle; ?>" />
		<meta property="og:site_name" content="" />
		<meta property="og:type" content="website" />
		<meta property="og:description" content="<?php echo $facebookShareText; ?>" />	
		
		<meta property="og:url" content="<?php echo $pageurl; ?>share.php?guid=<?php echo($_GET['guid']) ?>" />
   <meta property="og:image" content="<?php echo $pageurl; ?>output/<?php echo $guid; ?>-facebookshare.jpg" />
		
		<!--<meta property="og:image" content="http://staging.weate.ch.stage18.535e.blackmesh.com/wbr/jasonderulo-meme/output/5ad0906171c80-facebookshare.jpg" /> -->
		
		
		<script type="text/javascript" src="js/easeljs-0.7.0.min.js"></script>
		<script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>
		<script src="http://platform.tumblr.com/v1/share.js"></script>
		<script id="tumblr-js" async src="https://assets.tumblr.com/share-button.js"></script>
		<script async src="https://assets.tumblr.com/share-button.js"></script>
		
		<script type="text/javascript" src="js/hammer.min.js"></script>
		<script type="text/javascript" src="js/hammer-time.min.js"></script>
		<link rel="stylesheet" type="text/css" href="css/styles.css?">
		<link rel="stylesheet" type="text/css" href="lib/lib.css?">
		<script src="https://use.typekit.net/bbv4ywg.js"></script>
						
		<script src="./js/site.js?125"></script>
		<script>
			function makeid() {
				var text = "";
				var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

				for (var i = 0; i < 5; i++)
					text += possible.charAt(Math.floor(Math.random() * possible.length));

				return text;
			}

			var headID = document.getElementsByTagName("head")[0];
			var newSheet = document.createElement('link');
			newSheet.rel = 'stylesheet';
			newSheet.href = 'css/style.css?' + makeid();
			newSheet.type = 'text/css';
			headID.appendChild(newSheet);
	        
	        var headID3 = document.getElementsByTagName("head")[0];
			var newSheet3 = document.createElement('link');
			newSheet3.rel = 'stylesheet';
			newSheet3.href = 'css/stylesheet.css?' + makeid();
			newSheet3.type = 'text/css';
	        headID3.appendChild(newSheet3);
	        		
			var headID1 = document.getElementsByTagName("head")[0];
			var newSheet1 = document.createElement('link');
			newSheet1.rel = 'stylesheet';
			newSheet1.href = 'css/app-fccb90f074.css?' + makeid();
			newSheet1.type = 'text/css';
	        headID1.appendChild(newSheet1);
	        
	        var headID2 = document.getElementsByTagName("head")[0];
			var newSheet2 = document.createElement('link');
			newSheet2.rel = 'stylesheet';
			newSheet2.href = 'css/mlist.css?' + makeid();
			newSheet2.type = 'text/css';
	        headID2.appendChild(newSheet2);
	        
	        var scriptEl = document.createElement('script');
			scriptEl.src = 'js/site-script.js?' + makeid();
			scriptEl.type = 'text/javascript';
			headID.appendChild(scriptEl);
			
		</script>
		
		<script>
			var pageUrl = "<?php echo $pageurl; ?>";
			var sharePageUrl = pageUrl+ "share.php";
			
			var facebookShareTxt = "<?php echo $facebookShareText; ?>";
			var twitterShareTxt = "<?php echo $twitterShareText; ?>";
			var tumblrShareTxt = "<?php echo $tumblrShareText; ?>";			
			var memeGuid = "<?php echo($_GET['guid']) ?>";
			var memeImageUrl = pageUrl + "/output/"+memeGuid+"-facebookshare.jpg";
			var Pagename = "";
		</script>
		
	</head>

	
    <body onload="initSharePage();" class="sharepage">
    	<div class="splashWrapper">	
	      </div>
	         <div class="headerWrapper">
        <div class="title1"><img src="./images/header-logo.png" src=""></div>
        <div class="title2">Artist Name</div>
        <div class="title3">//photo generator //</div>
       
    </div>
        <div class="content">
	        <div class="step step2 sharepage">
	    		<div class="internal-container">
	    			<div class="left-continer">
	    				<img src="<?php echo $pageurl; ?>/output/<?php echo $guid; ?>-images.png" />
	    			</div>
	    		</div>
	        </div>
	        <!--div class="step step3" id="shareContainer">
	    		<div id="share">
                    <div class="socials">
                        <a href="javascript:void(0);" id="instagramshare" class="button instagram ig"><i class="fa fa-instagram"></i><span>Share on Instagram</span></a>
                        <a href="#" id="twittershare" data-share="twitter" target="_blank" class="button twitter tw"><i class="fa fa-twitter"></i><span>Share on Twitter</span></a>                        
                    </div>
                    <div id="lightbox-wrapper">
	                    <div id="lightbox">
	                    	<a class="lightbox-close" href="javascript:void(0);">x</a>
	                    	<img src="" class="insta" style="display:none;"/>
	                    	<div class="insta-lightbox">PLEASE SAVE THE IMAGE TO YOUR COMPUTER OR PHONE AND THEN UPLOAD TO INSTAGRAM.</div>
	                    	<div class="image-save pane">
	                        	<a href="#" target="_blank" download="photobooth.png" class="save-image-btn disabled">download&nbsp;<i class="fa fa-download"></i></a>
	                        </div>
	                    </div>
	                </div>                    
                </div>
	        </div-->
	        
	        <div class="step step4">
	    		<div class="internal-container">
	    			<a href="<?php echo $pageurl; ?>" id="resetall" class="button uploadbtn">Create a New Photo</a>
	    		</div>
	        </div>
    	</div>
    	    <div class="afterMainContent">
        <div class="socialsShare">SHARE ON SOCIALS</div>
        <!--<div class="preorderNow"><a href="" target="_blank">PRE-ORDER NOW</a></div>
        <div class="enterSite"><a href="http://www.jasonderulo.com/" class="entersitelink" >ENTER SITE <i class="arrow-right"></i></a></div>-->
    </div>
   <div class="footer-wrapper">

					<div class="footer-copyright">

						<div class="copyright">

							© 2018 Mike Shinoda.&nbsp;All rights reserved

						</div>

						<div class="footer-tos">

							<a href="http://www.warnerbrosrecords.com/terms-of-use" target="_blank">Terms and condtions</a><span class="footer_sep mobile">//</span><a href="http://www.warnerbrosrecords.com/privacy-policy" target="_blank">Privacy Policy</a><span class="footer_sep mobile">//</span><a href="http://www.warnerbrosrecords.com/privacy-policy#adchoices" target="_blank">Ad Choices</a>

							

						</div>

					</div>

					<div class="footer-copyright-mobile">

						<div class="copyright">

							© 2018 Mike Shinoda.&nbsp;All rights reserved

						</div>

						<div class="footer-tos">

							<a href="http://www.warnerbrosrecords.com/terms-of-use" target="_blank">Terms and condtions</a><span class="footer_sep mobile">//</span><a href="http://www.warnerbrosrecords.com/privacy-policy" target="_blank">Privacy Policy</a><span class="footer_sep mobile">//</span><a href="http://www.warnerbrosrecords.com/privacy-policy#adchoices" target="_blank">Ad Choices</a>

							

						</div>

					</div>

				</div>
		<script src="lib/lib.js?v=1"></script>
		<script src="js/jQuery-validator.js?cache=4"></script>
    	

		
		
	</div>
    </body>
</html>