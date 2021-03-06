<?php
require ("site-guard.php");
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
		
		<link rel="stylesheet" type="text/css" href="css/style.css?vdade0">
		<link rel="stylesheet" type="text/css" href="css/styles.css?5a2">
		<link rel="stylesheet" type="text/css" href="css/stylesheet.css?sdddav">
		<link rel="stylesheet" type="text/css" href="css/app-fccb90f074.css?av">
		<link rel="stylesheet" type="text/css" href="css/mlist.css?5a6">
		<link rel="stylesheet" href="https://use.typekit.net/okn8zup.css">
		<script src="js/site-script.js?dwe"></script>
		<script>
			window.onbeforeunload = function() {
				window.scrollTo(0, 0);
			}
		</script>
		
		<script src="https://use.typekit.net/bbv4ywg.js"></script>
		<script>
			try {
				Typekit.load({
					async : true
				});
			} catch(e) {
			}
</script>
		<script>
		var pageUrl =      "<?php echo $pageurl; ?>";
		var sharePageUrl = pageUrl+"share.php";

		var facebookShareTxt = "<?php echo $facebookShareText; ?>";
	var twitterShareTxt = "<?php echo $twitterShareText; ?>";
	var tumblrShareTxt = "<?php echo $tumblrShareText; ?>";
	var memeImageUrl = "", memeGuid;
	var Pagename = "";
		</script>
		<!-- DTM Header Call -->
		<script type="text/javascript">
			var digitalData = {
				settings : {
					reportSuites : "wmgwbrglobal,wmg"
				},
				page : {
					pageInfo : {
						pageName : "",
						server : "",
						platform : ""
					},
					category : {
						primaryCategory : "",
						pageType : ""
					}
				},
				content : {
					artist : "",
					label : ""

				}
			}							
</script>							


    	
    </head>
    <body onload="initCall();" class="homepage">
    	<div class="main-wrapper">
    		<div class="mobileHeaderOnly">
				<div class="title1"><img src="" src="">Artist name</div>
				<div class="rightheader">									<div class="user-header">Artist name</div>
					<div class="user-info">// photo generator //</div>
					<div class="user-info">upload a photo and select a filter <br/> then share it with your friends!</div>
				</div>
				</div>								<!--div class="mobile-prev-next-wrapper" style="display:none;">								<a class="prev-arrow"><< prev</a>				<a class="next-arrow">next >></a>								</div-->
			<div class="left-wrapper">
			<div class="right-continer">
	    				<div class="wrapper" id="photo-wrapper">
	    					<img src="" />
	    					 <!--<div id="ajax-loader">Loading...</div>-->
	    					<div class="canvaswrapper" style="display:none;">
									<canvas width="670" height="600" id="photoworkarea"></canvas>
									
									<div id="resizable" class="ui-widget-content"></div>
									<span class="preview locked"></span>
									<!---->

									<!--<canvas width="420" height="420" id="workarea1"></canvas>-->
							</div>
							<span id="cropSelector" style="display:none;">
	    						<a href="#" class="flip fa fa-shield fa-flip-horizontal"></a>
	    						<a href="#" class="zoom zoom-in icon-zoom-in"></a>
	    						<a class="zoom zoom-out icon-zoom-out" href="#"></a>
	    						<a href="#" class="rotation rotation-left icon-rotate_left"></a>
	    						<a class="rotation rotation-right icon-rotate_right" href="#"></a>
	    						<div id="message-section" tabindex="10" class="text-input" style="font-size:20px;">
                                    <textarea rows="4" cols="50" class="notes" maxlength="100" placeholder="MESSAGE" onfocus="this.placeholder = ''" onblur="this.placeholder = 'MESSAGE'"> </textarea>
                                    <div class="remainingChar">
                                        <span id="remainingCharacters">100</span> characters remaining.
                                    </div>
                                </div>
	    					</span>
							<div class="customize-div" style="display:none;">
							<div id="select-drag-control" style="display:none;">
	    				      <div class="customize-text">Customize your image</div>
							  <div class="useroption custom-option share-download selected">My Photo</div>
							  <div class="flagoption custom-option share-download">Filter Image</div>
							
							</div>
	    			
	    					<span id="mobileoptions" style="display:none;">
                                <a href="#" class="flip" style="display:none;"></a>
    							<a href="#" class="zoom zoom-in icon-zoom-in"></a>
    							<a class="zoom zoom-out icon-zoom-out" href="#"></a>
    							<a href="#" class="rotation rotation-left icon-rotate_left"></a>
    							<a class="rotation rotation-right icon-rotate_right" href="#"></a>
    						</span>
							</div>
                                <div class="canvasBG">									
                                	<img class="desktop" src="./images/artist-image.png">									
                                	<img class="mobile" src="./images/mobile-artist.png">								
                                	</div>
								 
								
	    							
	    				</div>
	    				<div id="ajax-loader2" style="display:none;"><div>Loading...</div></div>
	    				<div id="ajax-loader1" style="display:none;"><div>Loading...</div></div>
	    				<div id="finalImage" style="display:none;"></div>
						
	    	</div>
			<div class="filterselection" style="display:none;">
	        <div class="user-info chooseFilter">// choose a filter //</div>
				<div class="filter-list">
		        		<ul>
		        			<li><div class="filterimage"><img src="./images/style01-square-min.png"></div></li>
		        			<li><div class="filterimage"><img src="./images/style02-square-min.png"></div></li>
		        			<li><div class="filterimage"><img src="./images/style03-square-min.png"></div></li>
		        			<li><div class="filterimage"><img src="./images/style04-square-min.png"></div></li>
		        		</ul>
		        </div>
		        <div><a class="save-filter" style="display:none;" href="#">save filter</a></div>
			</div>
			</div>
			<div class="right-wrapper" id="share">
				<div class="desktopHeaderOnly">
				<div class="title1"><img src="" src="">Artist name</div>
				<div class="rightheader">					<div class="user-header">artist name</div>
					<div class="user-info first-line">// photo generator //</div>
					<div class="user-info second-line">upload a photo and select a filter <br/> then share it with your friends!</div>
				</div>
				</div>
				<div class="buttonsClass upload"><div class="left-continer">
	    				<!--a href="#" id="imageLoader_d" class="button">upload photo</a-->
	    				<div class="controls">
		    				<div class="camera-upload pane" >
								<form id="upload" action="#" method="post" enctype="multipart/form-data">
	                               <label for="userfile" id="imageLoader_d" class="browse-button">browse for files</label>
	                                <input type="file" id="imageLoader" name="imageLoader" accept="image/*"/>
	    							<input type="file" id="uploadedphoto" name="uploadedphoto" accept="image/*" />
	    							
	                            </form>
	                    	</div>
						</div> 
	    			</div></div>
	    			   			
	    			
				<div class="buttonsClass create_it" style="display:none;">
					<a id="uploadButton" class="uploadbtn disablebtn" href="javascript:void(0)">create it</a>
					<a id="tryanother" href="javascript:void(0)">try again</a>
				</div>
				<div class="buttonsClass sharedownload" style="display:none;"> 
					<a href="#" target="_blank" download="makeitupasigo.png" class="save-image-btn share-download disablebtn">download</a>
					<span class="share-links">					<a class="share-download share-container disablebtn" id="restart2" href="javascript:void(0)">share</a>					<div class="image-save pane socials">                    	<a onclick="postfeed();" style="" href="javascript:void(0);" id="facebookshare" class="button facebook fb"><i class="fa fa-facebook"></i></a>                    	<a href="#" id="twittershare" data-share="twitter"  class="button twitter tw"><i class="fa fa-twitter"></i></a>                         <!--<a href="javascript:void(0);" id="instagramshare" class="button instagram ig"><i class="fa fa-instagram"></i></a>-->                    </div> </span>					
				</div>	
				<div class="buttonsClass restarting" style="display:none;">				
					<a id="createanother" class="restart" href="javascript:void(0)">create another</a>				
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
							<!--div class="mobileView"><a type="button" class="restart">// try again //</a></div-->
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
		<div class="footer-wrapper">

					<div class="footer-copyright">

						<div class="copyright">

							� 2018 All rights reserved

						</div>

						<div class="footer-tos">

							<a href="http://www.warnerbrosrecords.com/terms-of-use" target="_blank">Terms&nbsp;and&nbsp;condtions</a><span class="footer_sep mobile one">//</span><a href="http://www.warnerbrosrecords.com/privacy-policy" target="_blank">Privacy&nbsp;Policy</a><span class="footer_sep mobile">//</span><a href="http://www.warnerbrosrecords.com/privacy-policy#adchoices" target="_blank">Ad&nbsp;Choices</a>

							

						</div>

					</div>

					<div class="footer-copyright-mobile">

						<div class="copyright">

							� 2018 All rights reserved

						</div>

						<div class="footer-tos">

							<a href="http://www.warnerbrosrecords.com/terms-of-use" target="_blank">Terms&nbsp;and&nbsp;condtions</a><span class="footer_sep mobile one">//</span><a href="http://www.warnerbrosrecords.com/privacy-policy" target="_blank">Privacy&nbsp;Policy</a><span class="footer_sep mobile">//</span><a href="http://www.warnerbrosrecords.com/privacy-policy#adchoices" target="_blank">Ad&nbsp;Choices</a>

							

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
 jQuery(document).ready(function() {
                $('#message-section textarea').val('');

                var characterLimit = jQuery('#remainingCharacters').text();
                $('div#message-section textarea').bind('keyup', function() {
                    var charactersUsed = $(this).val().length;
                    if (charactersUsed > characterLimit) {
                        charactersUsed = characterLimit;
                        $(this).val($(this).val().substr(0, characterLimit));
                        $(this).scrollTop($(this)[0].scrollHeight);
                    }

                    var charactersRemaining = characterLimit - charactersUsed;

                    $('#remainingCharacters').html(charactersRemaining);
                });

            });
    </script>
   
    </body>
</html>