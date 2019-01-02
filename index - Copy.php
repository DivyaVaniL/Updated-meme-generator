<?php
require("site-guard.php");
require ("template/config.php");
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        
        <meta name="viewport" content="initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no" />
        
        <title><?php echo $pageTitle; ?></title>

		<meta property="description" content="<?php echo $pageDescription; ?>" />

		<meta name="apple-mobile-web-app-capable" content="yes">

		<link rel="shortcut icon" href="<?php echo $favIcon; ?>" type="image/x-icon" />
		
		
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"/>
		<link type="text/css" rel="stylesheet" href="//fast.fonts.net/cssapi/5d3f1cb5-529e-4766-90be-896fdc4948c2.css"/>
		<!-- If you'd like to specify your own Open Graph tags, define the og:url and og:title tags in your theme's HTML. -->

		<meta property="og:title" content="<?php echo $ogTitle; ?>" />
		<meta property="og:site_name" content="" />
		<meta property="og:type" content="website" />
		<meta property="og:url" content="<?php echo $pageurlseo; ?>" />
		<meta property="og:description" content="<?php echo $ogDescription; ?>" />
		<meta property="og:image" content="<?php echo $ogImage; ?>" />
		
        <script type="text/javascript" src="js/easeljs-0.7.0.min.js"></script>
		<!--script type="text/javascript" src="js/jquery-1.11.2.min.js"></script-->
		<script src="http://platform.tumblr.com/v1/share.js"></script>
		<script async src="https://assets.tumblr.com/share-button.js"></script>
		<script type="text/javascript" src="js/piexif.js"></script>
		
		<script src="//code.jquery.com/jquery-1.10.2.js"></script>
  		<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
  		<script type="text/javascript" src="js/jquery.ui.touch-punch.min.js"></script>
		
		<script type="text/javascript" src="js/hammer.min.js"></script>
		<script type="text/javascript" src="js/hammer-time.min.js"></script>
		
		<script type="text/javascript" src="js/fabric.min.js"></script>
		<script src="//assets.adobedtm.com/31543e7db99435a92d6f4a2cf97c808672ed7dd0/satelliteLib-b6e3529c31d92a9252c30c1714b6b9342304145b.js"></script>
		<script src="http://d2ccommon.wmg-gardens.com/sites/g/files/g2000007471/f/assets/jquery-1.8.3.min_.js.txt" type="text/javascript"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js" type="text/javascript"></script>
		<script src="http://d2ccommon.wmg-gardens.com/sites/g/files/g2000007471/f/assets/jQuery.validate-v1.10.0.js.txt" type="text/javascript"></script>
		<script>
			var WMG = {
				artistname : '',
				MailingList : {
					EmailListIds : {

					},
					labelListId : '',
					MobileKeywordIds : {
						'United States' : ''
					}
				}
			}

		</script>		
		<script src="http://d2ccommon.wmg-gardens.com/sites/g/files/g2000007471/f/assets/mlist_dtm_update_061317.js.txt"></script>
		<link rel="stylesheet" type="text/css" href="lib/lib.css?">
		
		<link rel="stylesheet" type="text/css" href="css/style.css?884">
		<link rel="stylesheet" type="text/css" href="css/stylesheet.css?88s4d">
		<link rel="stylesheet" type="text/css" href="css/app-fccb90f074.css?32d">
		<link rel="stylesheet" type="text/css" href="css/mlist.css?32d">
		<script src="js/site-script.js?dfdsd"></script>
		<script>
		window.onbeforeunload = function(){ window.scrollTo(0,0); }
		</script>
		
		<!--<script>
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

		</script>-->
		
		<script src="https://use.typekit.net/bbv4ywg.js"></script>
		<script>
			try {
				Typekit.load({
					async : true
				});
			} catch(e) {
			}
</script>
		<script>var pageUrl =   "<?php echo $pageurl;?>";
			var sharePageUrl = pageUrl+"share.php";

			var facebookShareTxt = "<?php echo $facebookShareText; ?>";
	var twitterShareTxt = "<?php echo $twitterShareText; ?>";
	var tumblrShareTxt = "<?php echo $tumblrShareText; ?>";
	var memeImageUrl = "", memeGuid;
	var Pagename = "";
		</script>
		<!-- DTM Header Call -->
		<script type="text/javascript">							
var digitalData={							
	settings:{						
		reportSuites:"wmgwbrjasonderulo,wmgwbrglobal,wmg"					
	},						
	page:{						
		pageInfo:{					
			pageName:"Mike Shinoda:Colors Flag Meme Generator:Landing",				
			server:"Mike Shinoda:Site",				
			platform:"Blackmesh Custom Page"				
		},					
		category:{					
			primaryCategory:"Mike Shinoda:Landing Page",				
			pageType:"Landing Page:Generator"				
		}					
	},						
	content:{						
		artist:"Mike Shinoda",					
		label:"Warner Bros. Records"					
							
	}						
}							
</script>							


    	
    </head>
    <body onload="initCall();" class="homepage">
    	
<div class="mainWrapper"> 
    <div class="headerWrapper">
        <div class="title1">MIKE&nbsp;SHINODA<img src="./images/header-logo.png" src="" alt="Jason derulo"></div>
        <!--<div class="title2"><div class="title-text">Rep your</div><img src="./images/header-image.png" src="" alt="colors"></div>-->
        <div class="title3">
        	<img src="./images/mike_shinoda.png" src="" alt="Mike shinoda art" style="width: 316px;height: 316px;">
        	<div class="desktopheader">
        		<div class="user-info">Upload a photo and select a filter then share it with your friends!</div>
        	</div>
        	<div class="mobileheader">
        	Upload a photo and select a filter then share it with your friends!
        	</div>
        	</div>
    </div>
    <div id="ajax-loader">Loading...</div>
        <div class="content">
        	<style>
				canvas#workarea {
					position: static;
					width: 100%;
					height: auto;
					top: 0;
					left: 0;
					z-index: 1;
				}
        	</style>
	        <div class="step step1" id="initialContainer">
	    		<div class="internal-container">
	    			<div class="left-continer">
	    				<!--a href="#" id="imageLoader_d" class="button">upload photo</a-->
	    				<div class="controls">
		    				<div class="camera-upload pane" >
								<form id="upload" action="#" method="post" enctype="multipart/form-data">
	                                <label for="userfile" id="imageLoader_d" class="button">&nbsp;Upload Photo</label>
	                                <input type="file" id="imageLoader" name="imageLoader"/>
	    							<input type="file" id="uploadedphoto" name="uploadedphoto" accept="image/*" />
	                            </form>
	                    	</div>
						</div> 
	    			</div>
	    			<div class="right-continer" style="display:none;">
	    				<div class="wrapper" id="photo-wrapper">
	    					<img src="" />
	    					<canvas width="420" height="420" id="photoworkarea"></canvas>
	    					
	    							<!---<span id="cropSelector">
	    						<a href="#" class="flip"><i class="fa fa-shield fa-flip-horizontal"></i></a>
	    						<a href="#" class="zoom zoom-in icon-zoom-in"></a>
	    						<a class="zoom zoom-out icon-zoom-out" href="#"></a>
	    						<a href="#" class="rotation rotation-left icon-rotate_left"></a>
	    						<a class="rotation rotation-right icon-rotate_right" href="#"></a>
	    					</span>-->
	    				</div>
	    			</div>

	    			
	    		</div>
	    	<a href="#" id="resetAll" class="startagain">
	    		<span class="another"></span>
	    		<span class="anothertext">Do over!</span>
	    	</a>
	    		<a href="#" id="nextstep" class="button">
	    			<span class="yeah"></span>
	    		<span class="yeahtext">Yeah!</span>
	    			
	    		</a>
	        </div>
	        <div class="filterselection" style="display: none;">
	        	<div class="header-text">Choose your filter.</div>
	        	<div class="pager">
	        	<div class="pager">
	        		<div class="pager-back">
	        			<i class="fa fa-angle-left" aria-hidden="true"></i>
	        		</div>
	        	</div>
	        	</div>
	        	<!--<div class="mapimage"><img src="./images/Map.jpg" src="" alt="map.png"></div>-->
	        	<div class="filter-list">
	        		<ul>
	        			<li><div class='flagimage'><img src='./images/filter1.png'></div></li>
	        			<li><div class='flagimage'><img src='./images/filter2.jpeg'></div></li>
	        			<li><div class='flagimage'><img src='./images/filter3.jpg'></div></li>
	        			<li><div class='flagimage'><img src='./images/filter4.jpg'></div></li>
	        		</ul>
	        	</div>

	        </div>
	         <!--<div class="countryflagselection" id="countryflagsection" style="display: none;">
	        	<div class="header-text">Select your filter.</div>
	        	<div class="pager">
	        		<div class="pager-back">
	        			<i class="fa fa-angle-left" aria-hidden="true"></i>
	        		</div>
	        	</div>
	        	 <div class="country-list">
						
	        	</div>

	        </div>-->
	        
	        <div class="step step2 hidden" id="bottleContainer">
	    		<div class="internal-container">
	    			<div class="left-continer">
	    				
	    			</div>
	    			<div class="right-continer">
	    				<div class="canvaswrapper locked">
	    					<canvas width="420" height="420" id="workarea"></canvas>
	    					
	    					<div id="resizable" class="ui-widget-content"></div>
	    					<span class="preview locked"></span>
	    					<span class="colorsimage locked"></span>
    						<!---->

	    					<!--<canvas width="420" height="420" id="workarea1"></canvas>-->
	    				</div>
	    				<div id="select-drag-control" >
	    				      <div class="customize-text">Customize your image</div>
							  <div class="useroption custom-option selected">My Photo</div>
							  <div class="flagoption custom-option">Filter Image</div>
							
							</div>
	    				<span id="cropSelector">
	    						<a href="#" class="flip fa fa-shield fa-flip-horizontal"></a>
	    						<a href="#" class="zoom zoom-in icon-zoom-in"></a>
	    						<a class="zoom zoom-out icon-zoom-out" href="#"></a>
	    						<a href="#" class="rotation rotation-left icon-rotate_left"></a>
	    						<a class="rotation rotation-right icon-rotate_right" href="#"></a>
	    					</span>
	    					<span id="mobileoptions" style="display:none;">
                                                     <a href="#" class="flip" style="display:none;"></a>
    							<a href="#" class="zoom zoom-in icon-zoom-in"></a>
    							<a class="zoom zoom-out icon-zoom-out" href="#"></a>
    							<a href="#" class="rotation rotation-left icon-rotate_left"></a>
    							<a class="rotation rotation-right icon-rotate_right" href="#"></a>
    						</span>
	    				<a href="#" id="createit" class="button">Create it!</a>
	    				<a type="button1" class="restart"><i class="fa fa-angle-left" aria-hidden="true"></i><span> Try again </span></a>
	    			</div>
	    		</div>
	    		<!--<a href="#" id="saveclick" class="button">share</a>
	    		<a href="#" id="backbutton" class="button">Back</a>	-->    		
        	</div>
        	<div class="step step3 hidden" id="shareContainer">
                <div id="share">
                	<div id="ajax-loader1">Loading...</div>
                	<div id="finalImage" style="display:none;">
                		
                	</div>
                	<div class="socialsheader">Share</div>
                    <div class="image-save pane socials">
                        <a href="#" target="_blank" download="photobooth.png" class="save-image-btn disabled"><i class="fa fa-download"></i></a>
                    	<a onclick="postfeed();" style="" href="javascript:void(0);" id="facebookshare" class="button facebook fb"><i class="fa fa-facebook"></i></a>
                    	<a href="#" id="twittershare" data-share="twitter"  class="button twitter tw"><i class="fa fa-twitter"></i></a> 
                        <a href="javascript:void(0);" id="instagramshare" class="button instagram ig"><i class="fa fa-instagram"></i></a>   
                        <a type="button" class="restart">Try<br> again</a></a>                    
                    </div> 
                    <div id="facebook" class="share-dialog" style="display: none;">
								<div class="caption">
									<p>
										Caption your photo and post
									</p>
									<textarea></textarea>
								</div>
								<p class="error"></p><a href="javascript:void(0);" class="fb" onclick="postfeed();"><i class="fa fa-facebook"></i>Post to Facebook</a>
							</div>      
                    
                      <div id="twitter" class="share-dialog" style="display: none;">
								<div class="caption">
									<p>
										Caption your photo and post
									</p>
									<textarea></textarea>
								</div>
								<p class="error"></p><a href="#" target="_blank" class="tw"><i class="fa fa-twitter"></i>Post to Twitter</a>
							</div> 
                    
                    <div class="repyourcolors"></div>
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
	        
		      </div>
	       	</div>

    <div class="footerWrapper">
     <div class="copyright1">
         
					<span>&copy; 2018 Mike Shinoda</span> <span class="dot"><i class="fa fa-circle"></i></span>	<span>Warner Bros. Records </span>
				
        </div>
	<div id="preloader" style="display: none;"></div>
        <div class="copyright2">
        <a href="http://www.warnerbrosrecords.com/privacy-policy" target="_blank">Privacy&nbsp;Policy</a>
					<span class="footer_sep">|</span>
					<a href="http://www.warnerbrosrecords.com/terms-of-use" target="_blank">Terms&nbsp;of&nbsp;use</a>
					<span class="footer_sep">|</span>
					<a href="http://www.warnerbrosrecords.com/privacy-policy#adchoices" target="_blank">Ad&nbsp;choices</a>
					</div>
    </div>
    	</div>
    	
		<img style="display: none;" src="images/ajax-loader.gif"/>
		
		<!-- DTM Footer Call -->
		<script type="text/javascript">
			_satellite.pageBottom();
		</script>
<div id="fb-root"></div>
<script>
	( function(d, s, id) {
			var js,
			    fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id))
				return;
			js = d.createElement(s);
			js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=332823727543997";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

    </script>
    </body>
</html>