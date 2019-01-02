! function (d, s, id) {

    var js,

        fjs = d.getElementsByTagName(s)[0],

        p = /^http:/.test(d.location) ? 'http' : 'https';

    if (!d.getElementById(id)) {

        js = d.createElement(s);

        js.id = id;

        js.src = p + '://platform.twitter.com/widgets.js';

        fjs.parentNode.insertBefore(js, fjs);

    }

}(document, 'script', 'twitter-wjs');



var startPoint1 = {};

var startPoint2 = {};



var endPoint1 = {};

var endPoint2 = {};



var oldRatio = newRatio = 1;

var oldMaskRatio = newMaskRatio = 1;

var touchEnd = false;

var touchstart = true;

var centerPoint = {};



var photostage,

    stage,

    image,

    scaleRatio = 1,

    xscale = 1,

    yscale = 1,

    maskImage = false,

    maskDragger;

var photodragger;

var pressTimer;

var martifyImage = false;

var resizeCircle = false;

var canvasScale = 1;

var maskWidth = 154,

    maskHeight = 153;

var currentScrollPosition = 0;

var mobileOnly = false,

    fabricCanvas;

var memeGuid;

var filterimage;

var userimage;



function initCall() {

	if ($(window).width() < 768 || (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {

            $('.filterselection').hide();

            $('.sharedownload').hide();          

    }

	$('#cropSelector').hide();

    jQuery('.camera-upload').show();



    fabricCanvas = new fabric.Canvas('maskfabric');

    fabricCanvas.renderAll();



    canvasScale = $("canvas#photoworkarea").width() / 600;

    if (canvasScale > 1)

        canvasScale = 1;



    var imageLoader = document.getElementById('imageLoader');

    imageLoader.addEventListener('change', handleImage, false);



    var imageLoaderMobile = document.getElementById('uploadedphoto');

    imageLoaderMobile.addEventListener('change', handleImage, false);



    stage = new createjs.Stage("workarea");

    stage.enableMouseOver();



    finalstage = new createjs.Stage("workarea1");



    photostage = new createjs.Stage("photoworkarea");

    photostage.enableMouseOver();



    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        createjs.Touch.enable(stage);

        createjs.Touch.enable(photostage);

        mobileOnly = true;

    }

    $('a.restart').click(function (e) {



        $('.socialsheader').html('');

        location.reload();

        clickOmniture('Step 5:Try Again Click');

    });



    $("#imageLoader_d").click(function () {

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

            document.getElementById('uploadedphoto').click();

        } else {

            document.getElementById("imageLoader").click();

        }

        clickOmniture("Step 1:Upload Image Click");

        console.info("#imageLoader_d click");

        return false;

    });



    $("#resetAll").click(function () {

        stage.removeAllChildren();

        stage.update();



        photostage.removeAllChildren();

        photostage.update();

        document.getElementById("imageLoader").value = "";

        document.getElementById('uploadedphoto').value = "";



        martifyImage = false;

        maskImage = false;

        $('#upload label,.headerWrapper').show();

        $('#initialContainer').removeClass('showcanvas');

        $('span#cropSelector,.step1 .right-continer').hide();

        $('a#nextstep.show,.startagain.show').removeClass('show');



        $('#photo-wrapper').removeClass("canvasloaded");

        //$("body").removeClass('showcolors');

        $('.step.step2,.step.step3,.step.step4').addClass("hidden");

        $('#ajax-loader').hide();


        clickOmniture("Step 2:Restart Click");

        return false;

    });



    $(".homepage #scrolldown").click(function () {

        var oftop = jQuery("#initialContainer").offset().top;

        jQuery("html, body").stop().animate({

            scrollTop: oftop

        }, 1000);



        clickOmniture("New Photo Button Click");



        return false;



    });

    $('#backbutton').click(function (e) {

        e.preventDefault();

        $("#nextstep").removeClass('loading');

        jQuery('#bottleContainer').hide();

        jQuery('#initialContainer').show();



    });

    $(".filterselection .pager-back").click(function () {

        $(".step1").show();

        $(".filterselection").hide();

        $(".pager-next").removeClass("show");



    });

    $("#nextstep").click(function () {

        $(".step1,.headerWrapper").hide();

        $('#initialContainer').addClass('showcanvas');

        $(".filterselection").show();

        $(".pager-next").addClass("show");

        clickOmniture("Step 2:Confirm Image Click");



    });

   



  function canvaspreview(useroptionimg) {

        var flagbitmap;

        //if ($(".countryflagselection li.selected").length != 0) {

        var tempImage = new Image();

        image = new Image();

        //tempImage = userimage;

        tempImage = useroptionimg;

        console.info("inside tmp image");

        
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

           

            image.src = tempImage.src;

        } else {

            image.src = tempImage.src;

        }



/** To scale the image according to the canvas dimensions on load**/
        image.onload = function () {

            var imageWidth = image.width;

            var canvasWidth = $('#photoworkarea').width();



            //var scaleRatio = ( this.width / this.height ).toFixed(2);

            var xscale = roundToTwo(670 / image.width);

            var yscale = (600 / image.height).toFixed(2);



            var newh = 600;



            var neww = newh / (image.height / image.width);



            var wRatio = (neww / image.width);

            console.info("wRatio" + wRatio);
			var bitmap = new createjs.Bitmap(image.src);

            bitmap.x = bitmap.y = 0;

            bitmap.scaleX = bitmap.scaleY = 1;			
			
			if (image.height < image.width) {

                bitmap.x = -(image.width - image.height) * xscale / 2;;

                xscale = roundToTwo(670 / image.height);

            }

            if (image.height > image.width) {

                //bitmap.y = -(image.height - image.width) * xscale / 2;



            }

            bitmap.scaleX = xscale;

            bitmap.scaleY = xscale;

            bitmap.regX = 0;

            bitmap.regY = 0;


            //bitmap.scaleX = yscale;

            //bitmap.scaleY = yscale;



            stagenew = new createjs.Stage("photoworkarea");





            if (photodragger == undefined) {

                photodragger = new createjs.Container();

                photodragger.x = photodragger.y = 0;

                //console.info(flagbitmap);

                photodragger.addChild(bitmap);

                //photodragger.addChild(flagbitmap);







            }

            photodragger.cursor = "pointer";

            if (this.width > this.height) {

                photodragger.scaleX = photodragger.scaleY = parseFloat(wRatio);

            } else {

                photodragger.scaleX = photodragger.scaleY = parseFloat(xscale);

            }



            //	photodragger.scaleX = photodragger.scaleY = (xscale + 0.05 );



            photodragger.scaleX = photodragger.scaleY = xscale;



            //photodragger.scaleY = parseFloat(yscale);

            //photodragger.scaleX = 1;



            oldRatio = photodragger.scaleX;

            if ($(window).width() < 768) {

                var bitmap1 = new createjs.Bitmap(image.src);

                bitmap1.x = bitmap1.y = 0;



                photodragger.regX = bitmap1.image.width / 2;

                photodragger.regY = bitmap1.image.height / 2;



                photodragger.scaleX = photodragger.scaleX;

                photodragger.scaleY = photodragger.scaleY;

                if (!$(this).hasClass('flipped')) {

                    console.info('flipped');

                    photodragger.x = photodragger.regX * (photodragger.scaleY);

                    photodragger.y = photodragger.regY * photodragger.scaleY;

                }

                oldRatio = photodragger.scaleX;

            } else {

                var bitmap1 = new createjs.Bitmap(image.src);

                bitmap1.x = bitmap1.y = 0;



                photodragger.regX = bitmap1.image.width / 2;

                photodragger.regY = bitmap1.image.height / 2;



                photodragger.scaleX = photodragger.scaleX;

                photodragger.scaleY = photodragger.scaleY;

                if (!$('#cropSelector a.flip').hasClass('flipped')) {

                    $('#cropSelector a.flip').addClass('flipped');

                    photodragger.x = photodragger.regX * (photodragger.scaleY);

                    photodragger.y = photodragger.regY * photodragger.scaleY;

                }

                oldRatio = photodragger.scaleX;

            }

			photostage.removeAllChildren();

            photostage.addChild(photodragger);

           	photostage.update();

            stageeventlisteners(photodragger, image);

            //if(useroptionimg == userimage){

            $("#photoworkarea").addClass("photoadded");

            $(".canvaswrapper").addClass("canvasloaded");

            $(".canvaswrapper").addClass("locked");

            $('a#createit').addClass('show');

            $(".step2").removeClass('hidden');

            $('#uploadButton').removeClass("disablebtn");

            $(".pager-next,#createit").addClass("show");   
            
             $("#cropSelector").show();         

            //jQuery("html, body").stop().animate({

               // scrollTop: jQuery(".mainWrapper").offset().top

           // }, 0);

            $(".canvaswrapper span.preview").css("background-image", "url(" + filterimage.src + ")");

            /*$(".canvaswrapper.locked canvas.photoadded").css("opacity", "0.5");*/

           

        }

        console.info("clicked canvaspreview");

    }

	
	if(!$('body').hasClass('touch-device')){
	 $(".share-links").hover(function () {
		 $(this).find(".socials").toggleClass('show');
	 });
	 
	
	}
	else{
	 $(".share-links").click(function () {
		 $(this).find(".socials").toggleClass('show');
	 });
	 
	}



    $("#uploadButton").click(function () {

        //stage.removeAllChildren();

        //stage.update();

        //jQuery('.filterselection').hide();
		
        photostage.removeAllEventListeners();

        

        if ($(this).hasClass("loading")) {

            return false;

        }



        $(this).addClass("loading");





        base_image();



        function base_image() {

            base_image = new Image();

            var colorsimage = new Image();

            var isloaded = 0;

            base_image.setAttribute("crossOrigin", "anonymous");

            base_image = filterimage;

            //colorsimage.src = pageUrl;

           // colorsimage.setAttribute("crossOrigin", "anonymous");

            console.info(base_image.src);

			saveimage(isloaded,base_image);

           /* colorsimage.onload = function () {

                isloaded++;

                console.info(isloaded);

                saveimage(isloaded, base_image);

            }*/

            /*base_image.onload = function() {

                isloaded++;

            	 console.info(isloaded);

            	

            	

            }*/



        }



        clickOmniture("Step 5:Create Image Click");



        return false;

    });



    function saveimage(isloaded, base_image) {

        console.info(isloaded);

        /*if (stage.getChildIndex(maskDragger) == -1) {

        	return false;

        }

        else{*/

        var canvas = document.getElementById('photoworkarea'),

            context = canvas.getContext('2d');

        context.imageSmoothingEnabled = true;
		context.font = "20px Arial";    
        context.globalAlpha = 1;
        var msgval = "";
        msgval = jQuery('div#message-section textarea').val();
        var maxWidth = 400;
        var lineHeight = 25;
        // var x = (canvas.width) / 2;
        var x = (canvas.width - maxWidth) / 2;
        var textY = 70;
        var text = msgval;
       // var colorsheight = canvas.width * colorsimage.height / colorsimage.width;
		
        var drawposy = canvas.height;

        var imgSize = Math.min(base_image.width, base_image.height);

        var left = (base_image.width - imgSize) / 2;

        var top = (base_image.height - imgSize) / 2;
        if (photostage.getChildIndex(maskDragger) == -1) {

               canvaspreview2('flagoption');

        }       

        
        $('#cropSelector,.filterselection,.buttonsClass.create_it').hide();


        $('#mobileoptions').hide();

        $("#createit").hide();


        var oftop = jQuery(".main-wrapper").offset().top;

        jQuery("html, body").stop().animate({

            scrollTop: oftop

        }, 0);



        

        $('#ajax-loader1').show();

         $('.canvaswrapper').hide(); 

		 
		wrapText(context, text, x, textY, maxWidth, lineHeight);

        $.ajax({



            type: "POST",



            url: "save.php",



            data: {

                textlayer: document.getElementById('photoworkarea').toDataURL()

            },



            contentType: "application/x-www-form-urlencoded;charset=UTF-8",



            success: function (r) {

                console.info("success");                

                $("#createit").removeClass("loading");

                $('.image-save .save-image-btn').removeClass('disabled');

                $('#saveclick').hide();

                $('.wrapper #camera').addClass('processed');

                memeGuid = r;

                memeImageUrl = pageUrl + "/output/" + memeGuid + "-facebookshare.jpg";

                FBmemeURL = pageUrl + "/output/" + memeGuid + "-facebookshare.jpg";

                downloadImageUrl = pageUrl + "output/" + memeGuid + "-images.png";

                $.preloadImages(downloadImageUrl);

                updateShareLinks();

                $('.save-image-btn').attr('href', downloadImageUrl);

                $('#lightbox img').attr('src', downloadImageUrl);

                $('.wrapper #camera.processed').append(jQuery('<img src="' + downloadImageUrl + '"/>'));

                $('#finalImage').append(jQuery('<img src="' + downloadImageUrl + '"/>'));

                

                

                setTimeout(function(){                	

                     

                    $('#finalImage,.buttonsClass.restarting').show();                   

                    $('#ajax-loader1').hide();

                    $('.share-download').removeClass('disablebtn');

                     $('#uploadButton').addClass('disablebtn');
                     
                      

	                 $('.buttonsClass.sharedownload').show();

                     if(mobileOnly){

			        	$('.sharedownload').show();

			        	//$('.share-download').show();

			        	$('#uploadButton').hide();
			        	

			        }

                }, 1000);

                //$('#bottleContainer').hide();



            }

        });

        setTimeout(function () {

            $("span#mobileoptions a.zoom-in").click();

            console.info('zoomed in');



            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

                //rotateResizer();

            }

        }, 1000);



        //}

    }



/**This method allows user to wrap the text into the canvas **/

function wrapText(context, text, x, y, maxWidth, lineHeight) {
    //alert('inwrap')
    textY = y;
    var metrics2 = context.measureText(text).width;
    //alert(metrics2);
    if (metrics2 > 580) {
        //alert(metrics2);
        console.log(metrics2);

    }
    var words = text.split(' ');
    var line = '';
    for (var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;

        if ((testWidth > maxWidth) && (n > 0)) {

            
                //setTimeout(function(){ context.fillText(line, x, textY); }, 3000);
                context.fillText(line, x, textY);
                line = words[n] + ' ';
                textY += lineHeight;
            }

           
         else {
            line = testLine;
        }
    }
   
    context.fillText(line, x, textY);
}


    function stageeventlisteners(draggerobject, temp) {

        photostage.removeAllEventListeners();

        draggerobject.removeAllEventListeners();

        var xscale = roundToTwo(670 / temp.width);

        var yscale = (670 / temp.height).toFixed(2);

        var newh = 670;

        var neww = newh / (temp.height / temp.width);

        var wRatio = (neww / temp.width);



        photostage.on("mousedown", function (evt) {

            //draggerobject.on("mousedown", function(evt) {

            draggerobject.offset = {

                x: draggerobject.x - evt.stageX,

                y: draggerobject.y - evt.stageY

            };

            //});

        });



        photostage.on("pressup", function (evt) {

            //draggerobject.on("pressup", function(evt) {



            //oldRatio = newRatio;

            touchstart = true;

            console.info("pressup stageeventlisteners");

            //return false;

            //});

        });



        photostage.on("pressmove", function (evt) {

            //draggerobject.on("pressmove", function(eventt) {



            console.info("pressmove stageeventlisteners");

            var touchE = evt.nativeEvent.touches;



            if (mobileOnly && touchstart && touchE.length == 2) {



                var point1 = touchE[0];

                var point2 = touchE[1];



                startPoint1.x = point1.clientX;

                startPoint1.y = point1.clientY;



                startPoint2.x = point2.clientX;

                startPoint2.y = point2.clientY;



                touchstart = false;

            }



            if (mobileOnly && touchE.length == 2) {



                // track where our fingers are

                var point1 = touchE[0];

                var point2 = touchE[1];



                endPoint1.x = point1.clientX;

                endPoint1.y = point1.clientY;



                endPoint2.x = point2.clientX;

                endPoint2.y = point2.clientY;



                // calculate the euclidean distance for each finger.

                // we need to know the distance between the start point of finger 1 and the end point of finger 1

                // we need to know the distance between the start point of finger 2 and the end point of finger 2

                var distance1 = Math.sqrt(Math.pow(startPoint1.x - startPoint2.x, 2) + Math.pow(startPoint1.y - startPoint2.y, 2));

                var distance2 = Math.sqrt(Math.pow(endPoint1.x - endPoint2.x, 2) + Math.pow(endPoint1.y - endPoint2.y, 2));



                // take the two distances and get a ratio.



                newRatio = (distance2 / distance1) * oldRatio;

                if (newRatio < 0) {

                    if ($("#cropSelector a.flip").hasClass('mobile-flip')) {

                        draggerobject.scaleX = -newRatio;

                    } else {

                        draggerobject.scaleX = newRatio;

                    }



                    draggerobject.scaleY = -newRatio;

                } else {

                    draggerobject.scaleX = draggerobject.scaleY = newRatio;

                }

                console.info(draggerobject.scaleX);

                photostage.update();



            } else {

                /*eventt.currentTarget.x = eventt.stageX + draggerobject.offset.x;

                eventt.currentTarget.y = eventt.stageY + draggerobject.offset.y;

                stage.update();*/

                draggerobject.x = evt.stageX + draggerobject.offset.x;

                draggerobject.y = evt.stageY + draggerobject.offset.y;

                photostage.update();

            }

            //});

        });

        photostage.update();



    }



    function canvaspreview2(option) {



        if (option == "flagoption" && photostage.getChildIndex(maskDragger) == -1) {



            // filterimage.onload = function() {

            console.info("filterimage.onload");

            var maskImageObj = new Image();

            maskImageObj.src = filterimage.src;

            

            maskImage = new createjs.Bitmap(maskImageObj.src);

            maskImage.x = maskImage.y = 0;

            maskImage.scaleX = maskImage.scaleY = 1;

            maskImage.regX = 0;

            maskImage.regY = 0;

            var xscale = roundToTwo(670 / filterimage.width);

            var yscale = (600 / filterimage.height).toFixed(2);



            var newh = 600;



            var neww = newh / (filterimage.height / filterimage.width);



            var wRatio = (neww / filterimage.width);

            console.info("flagimagewRatio" + wRatio);

            /*if(filterimage.height < filterimage.width){

            	maskImage.x = -(filterimage.width - filterimage.height) * xscale / 2;;

            	xscale = roundToTwo(670 / filterimage.height);

            }

            if(filterimage.height > filterimage.width){

            	maskImage.y = -(filterimage.height - filterimage.width) * xscale / 2;

            	

            }	*/

            maskImage.filters = [

				      new createjs.ColorFilter(1, 1, 1, 0.5, 0, 0, 0),

				    ];

            maskImage.cache(0, 0, filterimage.width, filterimage.height);

            maskDragger = new createjs.Container();

            maskDragger.x = maskDragger.y = 1;



            if (filterimage.width > filterimage.height) {

                maskDragger.scaleX = maskDragger.scaleY = parseFloat(wRatio);

            } else {

                maskDragger.scaleX = maskDragger.scaleY = parseFloat(xscale);

            }



            maskDragger.scaleX = maskDragger.scaleY = xscale;

            //(xscale + 0.05 );

            //maskDragger.scaleX = 670 / filterimage.width ;

            //maskDragger.scaleY = parseFloat(yscale);



            oldRatio = maskDragger.scaleX;

            if ($(window).width() < 768) {

                /*maskDragger.regX = $('canvas#photoworkarea').width()/2;

                 maskDragger.regY = $('canvas#photoworkarea').height()/2;

                 maskDragger.scaleX = -maskDragger.scaleX;

                 maskDragger.scaleY = maskDragger.scaleY;

                 maskDragger.x = maskDragger.regX * (maskDragger.scaleY * 5);

                 maskDragger.y = maskDragger.regY * maskDragger.scaleY;*/

                var bitmap1 = new createjs.Bitmap(filterimage.src);

                bitmap1.x = bitmap1.y = 0;



                maskDragger.regX = bitmap1.image.width / 2;

                maskDragger.regY = bitmap1.image.height / 2;



                maskDragger.scaleX = maskDragger.scaleX;

                maskDragger.scaleY = maskDragger.scaleY;

                if (!$(this).hasClass('flipped')) {

                    console.info('flipped');

                    maskDragger.x = maskDragger.regX * (maskDragger.scaleY);

                    console.log(maskDragger.x);

                    console.log(maskDragger.regY);

                    console.log(maskDragger.scaleY);

                    //	maskDragger.y = $('#workarea').width() / 2 + ((maskDragger.regY * maskDragger.scaleY) / 2);

                    maskDragger.y = 300;

                }

                oldRatio = maskDragger.scaleX;

            } else {

                var bitmap1 = new createjs.Bitmap(filterimage.src);

                bitmap1.x = bitmap1.y = 0;



                maskDragger.regX = bitmap1.image.width / 2;;

                maskDragger.regY = bitmap1.image.height / 2;;



                maskDragger.scaleX = maskDragger.scaleX;

                maskDragger.scaleY = maskDragger.scaleY;

                if (!$('#mobileoptions a.flip').hasClass('flipped')) {

                    $('#mobileoptions a.flip').addClass('flipped');

                    maskDragger.x = maskDragger.regX * (maskDragger.scaleY);

                    maskDragger.y = 300;

                }

                oldRatio = maskDragger.scaleX;

            }



            maskDragger.addChild(maskImage);

            maskDragger.cursor = "pointer";

            //photostage.removeAllChildren();

            photostage.addChild(maskDragger);

            photostage.update();
			
            stageeventlisteners(maskDragger, filterimage);

            photodragger.removeAllEventListeners();

           	$(".canvaswrapper span.preview").css("background-image", "none");

            $(".canvaswrapper.locked canvas.photoadded").css("opacity", "1");
            
            $(".buttonsClass.create_it").show();
            
            

            //}



        }

        

        if (option == "flagoption" && photostage.getChildIndex(maskDragger) != -1) {

            stageeventlisteners(maskDragger, filterimage);

            photodragger.removeAllEventListeners();

            $("#cropSelector").hide();

            $("#mobileoptions").show();

        }

        if (option == "useroption" && photostage.getChildIndex(photodragger) != -1) {

            stageeventlisteners(photodragger, image);

            maskDragger.removeAllEventListeners();

            $("#mobileoptions").hide();

            $("#cropSelector").show();





        }



    }



    /*$(".regionselection .continents li").each(function() {

    	var countrylist;

    	$(this).click(function() {

    		$(".regionselection .continents li").removeClass('selected');

    		$(".regionselection .pager-next").removeClass("disabled");

    		$(this).addClass('selected');



    	});

    });*/

    $.preloadImages = function () {

        for (var i = 0; i < arguments.length; i++) {

            $("<img />").attr("src", arguments[i]).appendTo("#preloader").css({

                display: "none"

            });

        }

    };



    /*$(document).on("click", ".regionselection .continents li", function () {

        $(".regionselection .continents li").removeClass('selected');

        $(this).addClass('selected');





        $.ajax({

            type: 'GET',

            url: './countrylist.json?02sr',

            data: {

                get_param: 'value'

            },

            async: false,

            dataType: 'json',

            success: function (data) {

                var oftop = jQuery(".mainWrapper").offset().top;

                jQuery("html, body").stop().animate({

                    scrollTop: oftop

                }, 0);



                var region = $(".regionselection .continents li.selected").attr('data-region').toLowerCase();

                countrylist = data[region];

                clickOmniture("Step 3: Choose Region " + region + " Click");

                //console.log('inside success'+JSON.stringify(countrylist));

                var template = "";

                for (var i = 0; i < countrylist.length; i++) {

                    template += '<li><div class="filterimage"><img src=' + countrylist[i].filterimage + '></div><div class="countrytitle">' + countrylist[i].country + '</div></li>';

                    $.preloadImages(countrylist[i].filterimage);



                    //console.log('inside template'+template);

                }

                $('.countryflagselection .country-list').html(template);

                $(".regionselection .pager-next").addClass("show");



            },

            complete: function () {

                $('.countryflagselection').show();

                $(".regionselection").hide();





            }

        });

        return false;

    });*/



    /*$(".regionselection .pager-next").on('click', function() {

    	if ($(".regionselection .continents li.selected").length != 0) {

    		$('.countryflagselection').show();

    		$(".regionselection").hide();

    	}

    });*/
   
    $(document).on('click','#tryanother', function() {
   		$('.canvaswrapper,.mobile-prev-next-wrapper,.filterselection,#cropSelector,.buttonsClass.create_it').hide();
   		$('.canvasBG,.buttonsClass.upload').show();
   		stage.removeAllChildren();
        stage.update();
        photodragger.removeAllChildren();
        photostage.removeAllChildren();
        photostage.update();
         $('#cropSelector a.flip').removeClass('flipped');
   		/*var canvas = document.getElementById('photoworkarea'),
        context = canvas.getContext('2d');
  		context.clearRect (0, 0, canvas.width, canvas.width);*/
  		document.getElementById("imageLoader").value = "";
	    document.getElementById('uploadedphoto').value = "";
  		 $('#imageLoader').val(''); 
  		  if(!mobileOnly){
  		  	$('#imageLoader_d').show();
  		  }
  		 
   		 if ($(window).width() < 1024){
   		 	$('.mobileHeaderOnly').show();
   		 	
   		 }
   });
   
    $(document).on('click','.mobile-prev-next-wrapper.third .prev-arrow', function() { 
   		 $(".canvaswrapper").removeClass("canvasloaded");
   		  $(".canvaswrapper").removeClass("locked");
   		  $('.filterselection').show();
   		  $('.filterselection').removeClass('disablebtn');
   		  
   		  $('.customize-div,.buttonsClass.create_it').hide();
   		     photostage.removeChild(maskDragger);
           	 photostage.update();
   		  
   		
   });



    $(document).on("click touchstart", ".filterselection .filter-list li", function () {

        /*document.getElementsByClassName(".countryflagselection .country-list li").addEventListener("click", function(){

        //$('.save-filter').show();*/
        
        console.info("filterimage---**"+photostage.getChildIndex(maskDragger));
        
        
        if(photostage.getChildIndex(maskDragger) == -1){

        $(".filterselection .pager-next").removeClass("disabled");
         $(".next-arrow.disablebtn").removeClass("disablebtn");
         $('.mobile-prev-next-wrapper').removeClass('second'); 
         $('.mobile-prev-next-wrapper').addClass('third');  

        $(this).addClass('selected');
		
        filterimage = new Image();

        filterimage.src = $(this).find('img').attr('src');      

         if(mobileOnly){

        	$('.sharedownload').hide();

        	//$('.share-download').show();

        }

        filterimage.onload = function () {
			if(photostage.getChildIndex(photodragger) == -1){
            canvaspreview(userimage); 
            
           }
           else if(photostage.getChildIndex(maskDragger) == -1){
           	 $(".canvaswrapper span.preview").css("background-image", "url(" + filterimage.src + ")");
           	 $("#photoworkarea").addClass("photoadded");
           	 $('#uploadButton').removeClass("disablebtn");
           }
           else{
           	 photostage.removeChild(maskDragger);
           	 photostage.update();
           	 canvaspreview2(filterimage);
           }

        }

        

        
		$('.customize-div').show();
		
        console.info("clicked");

        }
        else{
        	filterimage.src = $(this).find('img').attr('src');
        	canvaspreview2('flagoption');
        	//stageeventlisteners(maskDragger,filterimage);
        }

		$(".user-info.chooseFilter").text("// swap filter //");

    });

	$('.save-filter').click(function () {

		$('.customize-div').show();

		$('.filterselection').addClass('disablebtn');

	});

    /*	$('select#select-drag-control').on('change', function() {

    		console.info(this.value );

    		canvaspreview2(this.value);

    }); */

    $('#select-drag-control .useroption').click(function () {

        $('#select-drag-control .custom-option').removeClass('selected');

        $(this).addClass('selected');

        canvaspreview2('useroption');

    });



    $('#select-drag-control .flagoption').click(function () {

        $('#select-drag-control .custom-option').removeClass('selected');

        $(this).addClass('selected');

        canvaspreview2('flagoption');
        $('.filterselection').addClass('disablebtn');

    });









    $("#cropSelector a.flip").click(function () {

        console.info('clikec');

        $("#cropSelector a.flip").toggleClass('mobile-flip');

        var bitmap1 = new createjs.Bitmap(image.src);

        bitmap1.x = bitmap1.y = 0;



        photodragger.regX = bitmap1.image.width / 2;

        photodragger.regY = bitmap1.image.height / 2;



        photodragger.scaleX = -photodragger.scaleX;

        photodragger.scaleY = photodragger.scaleY;



        if (!$(this).hasClass('flipped') && $(window).width() > 767) {

            $(this).addClass('flipped');

            photodragger.x = photodragger.regX * (photodragger.scaleX);

            photodragger.y = photodragger.regY * photodragger.scaleY;

            console.info('photodragger.x ', photodragger.x);

            console.info('photodragger.y ', photodragger.y);

        }



        photostage.update();

        return false;

    });

    $("#cropSelector a.zoom.zoom-in").click(function () {

        if ($(window).width() < 768) {

            if (photodragger.scaleX < 0) {

                photodragger.scaleX = photodragger.scaleX - 0.05;

                photodragger.scaleY = -photodragger.scaleX;

                oldRatio = photodragger.scaleX;

                console.log

            } else {

                photodragger.scaleX = photodragger.scaleX + 0.05;

                photodragger.scaleY = photodragger.scaleY + 0.05;

                oldRatio = photodragger.scaleX;

            }

        } else {

            if (photodragger.scaleX < 0) {

                photodragger.scaleX = photodragger.scaleX - 0.05;

                photodragger.scaleY = -photodragger.scaleX;

                oldRatio = photodragger.scaleX;

            } else {

                photodragger.scaleX = photodragger.scaleX + 0.05;

                photodragger.scaleY = photodragger.scaleX;

                oldRatio = photodragger.scaleX;

            }

        }

        photostage.update();

        return false;

    });



    $("#cropSelector a.zoom.zoom-out").click(function () {

        if ($(window).width() < 768) {

            if (photodragger.scaleX < 0) {

                photodragger.scaleX = photodragger.scaleX + 0.05;

                photodragger.scaleY = -photodragger.scaleX;

                oldRatio = photodragger.scaleX;

            } else if(photodragger.scaleX > 0.05){

                photodragger.scaleX = photodragger.scaleX - 0.05;

                photodragger.scaleY = photodragger.scaleY - 0.05;

                oldRatio = photodragger.scaleX;

            }

        } else {

            if (photodragger.scaleX < 0) {
            	
            	console.info("photodragger.scaleX"+photodragger.scaleX);

                photodragger.scaleX = photodragger.scaleX + 0.05;

                photodragger.scaleY = -photodragger.scaleX;

                oldRatio = photodragger.scaleX;

            } else if(photodragger.scaleX > 0.05){
            	
            	console.info("photodragger.scaleX > 0"+photodragger.scaleX);

                photodragger.scaleX = photodragger.scaleX - 0.05;

                photodragger.scaleY = photodragger.scaleX;

                oldRatio = photodragger.scaleX;

            }

        }

        photostage.update();

        return false;

    });

    $("#cropSelector a.rotation.rotation-right").click(function () {

        photodragger.rotation = photodragger.rotation + 2;

        photostage.update();

        return false;

    });



    $("#cropSelector a.rotation.rotation-left").click(function () {

        photodragger.rotation = photodragger.rotation - 2;

        photostage.update();

        return false;

    });



    $("#mobileoptions a.zoom.zoom-in").click(function () {

        //maskDragger.regX = filterimage.width / 2;

        //maskDragger.regY = filterimage.height / 2;

        maskDragger.scaleX = maskDragger.scaleY = (maskDragger.scaleX + 0.05);

        photostage.update();

        return false;

    });



    $("#mobileoptions a.zoom.zoom-out").click(function () {

        //maskDragger.regX = filterimage.width / 2;

        //maskDragger.regY = filterimage.height / 2;



        if ((maskDragger.scaleX - 0.05) < 0) {



            //	maskDragger.scaleX = maskDragger.scaleX + 0.05;

            //	maskDragger.scaleY = -maskDragger.scaleX;



        } else {



            maskDragger.scaleX = maskDragger.scaleX - 0.05;

            maskDragger.scaleY = maskDragger.scaleX;

            oldRatio = photodragger.scaleX;

        }

        //maskDragger.scaleX = maskDragger.scaleY = (maskDragger.scaleX - 0.05);

        photostage.update();

        return false;

    });



    $("#mobileoptions a.rotation.rotation-left").click(function () {

        //maskDragger.regX = filterimage.width / 2;

        //maskDragger.regY = filterimage.height / 2;

        maskDragger.rotation = maskDragger.rotation + 2;

        photostage.update();

        return false;

    });



    $("#mobileoptions a.rotation.rotation-right").click(function () {

        //maskDragger.regX = filterimage.width / 2;

        //maskDragger.regY = filterimage.height / 2;

        maskDragger.rotation = maskDragger.rotation - 2;

        photostage.update();

        return false;

    });



    shareLinks();



    /* Share button upload the image to server */



    $("#saveclick").click(function () {



        if ($(this).hasClass("loading")) {

            return false;

        }



        $(this).addClass("loading");



        //document.getElementById('outimage').src = meme.canvas.toDataURL();



        $.ajax({



            type: "POST",



            url: "save.php",



            data: {

                textlayer: document.getElementById('photoworkarea').toDataURL()

            },



            contentType: "application/x-www-form-urlencoded;charset=UTF-8",



            success: function (r) {



                $("#saveclick").removeClass("loading");



                $("div.step.step3.hidden").removeClass("hidden");

                $("div.step.step4.hidden").removeClass("hidden");



                memeGuid = r;

                memeImageUrl = pageUrl + "output/" + memeGuid + "-facebookshare.jpg";

                FBmemeURL = pageUrl + "/output/" + memeGuid + "-facebookshare.jpg";

                downloadImageUrl = pageUrl + "output/" + memeGuid + "-images.png";

                updateShareLinks();

                $('.image-save .save-image-btn').attr('href', downloadImageUrl);

                $('#lightbox img').attr('src', downloadImageUrl);

                $('.image-save .save-image-btn').removeClass('disabled');

                $('#saveclick').hide();

                $('#cropSelector,.filterselection,.buttonsClass.create_it').hide();

                $('#bottleContainer').hide();
                
                $('.buttonsClass.sharedownload').show();


                $('.wrapper #camera').addClass('processed');

                $('.wrapper #camera.processed').append(jQuery('<img src="' + downloadImageUrl + '"/>'));

                $('#shareContainer #finalImage').append(jQuery('<img src="' + downloadImageUrl + '"/>'));

                var oftop = jQuery("#shareContainer").offset().top;

                jQuery("html, body").stop().animate({

                    scrollTop: oftop

                }, 1000);



            }

        });



        return false;



    });

/*To read/upload the image and customise the image into canvas*/
function handleImage(e) {

    console.info("#handleImage click");

    photostage.removeAllChildren();

    photostage.update();



    $('#ajax-loader').show();

    $('#ajax-loader2').show();

	jQuery('.canvasBG').hide();

	 $('.canvaswrapper').show();

    var reader = new FileReader();

    reader.onload = function (event) {

        var tempImage = new Image();

        image = new Image();

        tempImage.src = event.target.result;
        userimage = tempImage;

        var pngImage = false;

        if (tempImage.src.slice(0, 15) == "data:image/png;") {

            //tempImage.src = "data:image/jpeg;base64,"+tempImage.src.slice(0, 23)[1];

            pngImage = true;

        }



       tempImage.onload = function () {

            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

                image.src = rotateImagecamera(event, tempImage);

              } else {

                image.src = tempImage.src;

            }

        };
        
         image.onload = function () {

            var imageWidth = image.width;

            var canvasWidth = $('#photoworkarea').width();

            var xscale = roundToTwo(670 / image.width);

            var yscale = (600 / image.height).toFixed(2);

			 yscale = 600 * (image.height / image.width);

            var newh = 600;

            var neww = newh / (image.height / image.width);

            var wRatio = (neww / image.width);

            console.info("wRatio" + wRatio);

            var bitmap = new createjs.Bitmap(image.src);

            bitmap.x = bitmap.y = 0;

            bitmap.scaleX = bitmap.scaleY = 1;
			  if (image.height < image.width) {

                bitmap.x = -(image.width - image.height) * xscale / 2;;

                xscale = roundToTwo(670 / image.height);

            }

               stagenew = new createjs.Stage("photoworkarea");

                photodragger = new createjs.Container();

                photodragger.x = photodragger.y = 0;

                photodragger.addChild(bitmap);

            photodragger.cursor = "pointer";

            if (this.width > this.height) {

                photodragger.scaleX = photodragger.scaleY = parseFloat(wRatio);

            } else {

                photodragger.scaleX = photodragger.scaleY = parseFloat(xscale);

            } photodragger.scaleX = photodragger.scaleY = ( xscale + 0.05 );

            oldRatio = photodragger.scaleX;

            if ($(window).width() < 768) {

                var bitmap1 = new createjs.Bitmap(image.src);

                bitmap1.x = bitmap1.y = 0;

                photodragger.regX = bitmap1.image.width / 2;

                photodragger.regY = bitmap1.image.height / 2;

                photodragger.scaleX = photodragger.scaleX;

                photodragger.scaleY = photodragger.scaleY;

                if (!$(this).hasClass('flipped')) {

                    console.info('flipped');

                   photodragger.x = photodragger.regX * (photodragger.scaleY);

                   photodragger.y = photodragger.regY * photodragger.scaleY;

                }              
               oldRatio = photodragger.scaleX;

            } else {

                var bitmap1 = new createjs.Bitmap(image.src);

                bitmap1.x = bitmap1.y = 0;

                photodragger.regX = bitmap1.image.width / 2;

                photodragger.regY = bitmap1.image.height / 2;

                photodragger.scaleX = photodragger.scaleX;

                photodragger.scaleY = photodragger.scaleY;

                if (!$('#cropSelector a.flip').hasClass('flipped')) {

                    $('#cropSelector a.flip').addClass('flipped');

                    photodragger.x = photodragger.regX * (photodragger.scaleY);

                    photodragger.y = photodragger.regY * photodragger.scaleY;

                }

                oldRatio = photodragger.scaleX;

            }

			photostage.removeAllChildren();

            photostage.addChild(photodragger);
           	photostage.update();

            stageeventlisteners(photodragger, image);
            $(".canvaswrapper").addClass("canvasloaded");

            $(".canvaswrapper").addClass("locked");

            $('a#createit').addClass('show');

            $(".step2").removeClass('hidden');
 
            $(".pager-next,#createit").addClass("show");   
            
             $("#cropSelector").show();         

			$('.filterselection,.buttonsClass.create_it').show(); 
			  $('.mobileHeaderOnly,.buttonsClass.upload').hide(); 
			
			  if ($(window).width() < 768 || (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
			
			            $('.filterselection').show();
			
			            $('#imageLoader_d').hide();   
						$('.mobile-prev-next-wrapper').addClass('second');  
						$('.mobile-prev-next-wrapper .next-arrow').addClass('disablebtn'); 
						$('.mobile-prev-next-wrapper').show();   
			
			    }                        
        }

        console.info("clicked canvaspreview");

    };

    reader.readAsDataURL(e.target.files[0]);
}



function roundToTwo(num) {

    return +(Math.round(num + "e+2") + "e-2");

}	
    this.document.onkeydown = keyPressed;

}



function zoomImage() {

    photodragger.scaleX = photodragger.scaleY = (photodragger.scaleX + 0.05);

    photostage.update();

    pressTimer = window.setTimeout(zoomImage, 500);

}



function initSharePage() {

    updateShareLinks();

    shareLinks();

}


/*Update the social share text and URL's*/
function updateShareLinks() {



    /* Twitter share text */   

    var twitterShareUrl = sharePageUrl + "?guid=" + memeGuid + "";

    $('#twitter .caption textarea').val(twitterShareTxt + ' ' + twitterShareUrl);

    twitterShareTxt = encodeURIComponent(twitterShareTxt) + " " + encodeURIComponent(twitterShareUrl) + " #beberexha";

    var twitterURL = 'https://twitter.com/intent/tweet?original_referer=' + pageUrl + '&text=' + twitterShareTxt;  



    /* Tumblr share text */

    var tbShareUrl = sharePageUrl + "?guid=" + memeGuid + "";
    var tbshareTxt = tumblrShareTxt;

    var tumblrShareURL = "http://www.tumblr.com/share/photo?source=" + encodeURIComponent(pageUrl + "/output/" + memeGuid + "-images.png") + "&caption=" + encodeURIComponent(tbshareTxt) + "&clickthru=" + encodeURIComponent(tbShareUrl);

}



function shareLinks() {

    $('.image-save a.save-image-btn').click(function () {

        $('.socialsheader').html('Downloaded<span class="yeah"></span>');

        clickOmniture("Step 6:Download Click");
    });

    $("#facebookd .fb").click(function () {

        $('.socialsheader').html('Thanks for Sharing!');

        FB.ui({

            method: 'feed',

            redirect_uri: pageUrl,

            display: "popup",

            caption: facebookShareTxt,

            href: 'http://staging.weate.ch.stage18.535e.blackmesh.com/wbr/beberexha-meme?og_img=http://staging.weate.ch.stage18.535e.blackmesh.com/wbr/beberexha-meme/output/5ad167315a918-images.png',

            description: facebookShareTxt,

            link: sharePageUrl + "?guid=" + memeGuid + ""



        }, function (response) {

            //$("div.step.step4.hidden").removeClass("hidden");

            clickOmniture("Facebook Share Click");



        });



        return false;

    });



    $("#twittershare").click(function () {

        clickOmniture("Step 6:Twitter Share Click");

        $('.socialsheader').html('Thanks for Sharing!');

        return true;

    });



    $("#tumblrshare").click(function () {

        clickOmniture("Tumblr Share Click");

        return true;

    });



    $("#instagramshare").click(function () {

        $('#lightbox-wrapper').fadeIn('fast');

        clickOmniture("Step 6:Instagram Share Click");

        return true;

    });



    $('a.lightbox-close').click(function () {

        $('#lightbox-wrapper').fadeOut();

        $('.socialsheader').html('Thanks for Sharing!');

    });



    setupModal();

}





$(window).resize(function () {

    setupModal();

});



var setupModal = function () {

    winW = $(window).width();

    winH = $(window).height();

    $('#overlay').css({

        'width': winW,

        'height': winH

    });



    $('.modal').each(function (i, el) {

        $el = $(el);

        $el.css({

            'left': Math.round((winW / 2) - ($el.width() / 2)),

            'top': Math.round((winH / 2) - ($el.height() / 2))

        });

    });

};



function downloadCanvas(link, canvasId, filename) {

    link.href = document.getElementById(canvasId).toDataURL();

    link.download = filename;

}



function clickOmniture(text) {

    var s = s_gi('wmgmikeshinoda.com,wmgwbrglobal,wmg');

    s_dtm.linkTrackVars = 'prop1,eVar4';

    s_dtm.prop1 = 'Artist Name';

    s_dtm.eVar4 = 'Artist Name';

    s_dtm.tl(this, 'o', 'Artist Meme Generator:Landing:' + text);



}



function keyPressed(event) {

    if (event.shiftKey && event.keyCode == 187) {

        maskImage.scaleX = maskImage.scaleY = (maskImage.scaleX + 0.05);

        console.info('originalWidth1', maskImage.scaleX);

    }

    if (event.shiftKey && event.keyCode == 189) {

        maskImage.scaleX = maskImage.scaleY = (maskImage.scaleX - 0.05);

        console.info('originalWidth2', maskImage.scaleX);

    }

    if (event.shiftKey && event.keyCode == 39) {

        maskImage.rotation = maskImage.rotation - 1;

    }

    if (event.shiftKey && event.keyCode == 37) {

        maskImage.rotation = maskImage.rotation + 1;

        console.info(maskImage.rotation);

    }

    console.info(event.keyCode);

    stage.update();

}



function addImageToCanvas() {

    var left = photodragger.x;

    var top = photodragger.y;



    martifyImage = new createjs.Bitmap(document.getElementById('workarea').toDataURL());

    console.log(scaleRatio);

    martifyImage.x = left;

    martifyImage.y = top;

    //bitmap.setBounds(left,top,image.width,image.height);

    if (photodragger.scaleX < 1) {

        martifyImage.x = martifyImage.regX;

        martifyImage.y = martifyImage.regY;

        martifyImage.scaleX = martifyImage.scaleY = 1;

    } else {

        martifyImage.x = 0;

        martifyImage.y = 0;

        martifyImage.scaleX = martifyImage.scaleY = 1;

    }



    $('.canvaswrapper.locked').removeClass("locked");

    //bitmap.scaleY = yscale;

    //bitmap.scaleX = 0.4;

    stage.removeChild(photodragger);

    stage.update();

   }

function rotateResizer() {

    maskWidth = 154;

    maskHeight = 153;

    canvasScale = $("canvas#workarea").width() / 670;



    maskWidth = canvasScale * maskWidth;

    maskHeight = canvasScale * maskHeight;



    var left = (maskDragger.x * canvasScale) - 2;

    var top = (maskDragger.y * canvasScale) - 1;

    console.info('left top', left, top);

    $("#resizable").css("left", left + "px");

    $("#resizable").css("top", top + "px");



    var eleWidth = maskWidth;

    var eleHeight = maskHeight;



    $("#resizable").css("width", eleWidth + "px");

    $("#resizable").css("height", eleHeight + "px");

}


/*Helps to fix the orientation issues of the image while uploading*/
function rotateImagecamera(e, image) {

    var exif = piexif.load(e.target.result);

    var orientation = exif["0th"][piexif.ImageIFD.Orientation];

    var canvas = document.createElement("canvas");

    canvas.width = image.width;

    canvas.height = image.height;

    var ctx = canvas.getContext("2d");

    var x = 0;

    var y = 0;

    ctx.save();



    if (orientation == 2) {

        x = -canvas.width;

        ctx.scale(-1, 1);

    } else if (orientation == 3) {

        x = -canvas.width;

        y = -canvas.height;

        ctx.scale(-1, -1);

    } else if (orientation == 3) {

        x = -canvas.width;

        y = -canvas.height;

        ctx.scale(-1, -1);

    } else if (orientation == 4) {

        y = -canvas.height;

        ctx.scale(1, -1);

    } else if (orientation == 5) {

        canvas.width = image.height;

        canvas.height = image.width;

        ctx.translate(canvas.width, canvas.height / canvas.width);

        ctx.rotate(Math.PI / 2);

        y = -canvas.width;

        ctx.scale(1, -1);

    } else if (orientation == 6) {

        canvas.width = image.height;

        canvas.height = image.width;

        ctx.translate(canvas.width, canvas.height / canvas.width);

        ctx.rotate(Math.PI / 2);

    } else if (orientation == 7) {

        canvas.width = image.height;

        canvas.height = image.width;

        ctx.translate(canvas.width, canvas.height / canvas.width);

        ctx.rotate(Math.PI / 2);

        x = -canvas.height;

        ctx.scale(-1, 1);

    } else if (orientation == 8) {

        canvas.width = image.height;

        canvas.height = image.width;

        ctx.translate(canvas.width, canvas.height / canvas.width);

        ctx.rotate(Math.PI / 2);

        x = -canvas.height;

        y = -canvas.width;

        ctx.scale(-1, -1);

    }

    ctx.drawImage(image, x, y);

    ctx.restore();



    //var dataURL = canvas.toDataURL("image/jpeg", 1.0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL;

}







/* Common JS for both the page */

$(document).ready(function () {

    /* footer Social Nav click Omniture*/

    $("a.icon-instagram").click(function () {

        clickOmniture("Instagram Click");

        return true;

    });



    $("a.icon-twitter").click(function () {

        clickOmniture("Twitter Click");

        return true;

    });



    $("a.icon-facebook").click(function () {

        clickOmniture("Facebook Click");

        return true;

    });



    $("a.icon-soundcloud").click(function () {

        clickOmniture("Soundcloud Click");

        return true;

    });



    $("a.icon-youtube").click(function () {

        clickOmniture("Youtube Click");

        return true;

    });



    $("a.button.downloadnow").click(function () {

        clickOmniture("Enter Store Click");

        return true;

    });



    $(".sharepage #resetall").click(function () {
        clickOmniture("New Photo Button Click");
        return true;
    });

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    	
    	$('body').addClass('touch-device');

        $(document).scroll(function () {

            currentScrollPosition = $(this).scrollTop();

        });

        $("#mobileoptions > a, #cropSelector > a").focus(function () {

            $(document).scrollTop(currentScrollPosition);

        });

    }





    $('#twittershare').click(function (e) {

        console.info('twittershare');

        e.preventDefault();

        $('#facebook').hide();

        $('#twitter').show();



    });

     $('#twitter .tw').click(function (e) {

        console.info('twitter click');

        var caption,

            imgdir,

            imgname,

            imgpath,

            win;

        e.preventDefault();

        imgpath = $('#finalImage img').attr('src');

        imgname = imgpath.split("/");

        imgdir = imgname[imgname.length - 2];

        imgname = imgname[imgname.length - 1].split(".")[0];

        console.log(imgname);

        caption = $('#twitter .caption textarea').val();

        if (caption.length < 280) {

            caption = encodeURIComponent(caption);

            //window.location.href = 'twitter.php?img_dir=' + imgdir + '&img_name=' + imgname + '&caption=' + caption;

			window.location.href = 'https://twitter.com/intent/tweet?img_dir=' + imgdir + '&img_name=' + imgname + '&text=' + caption;

			//window.open('https://twitter.com/intent/tweet?img_dir=' + imgdir + '&img_name=' + imgname + '&text=' + caption);

        } else {

            $('#twitter .error').html("Oops your caption is too long, please shorten it!").show();

        }

        return true;

    });

   

  

});


function postfeed() {
    FB.ui({

        method: 'share',

        app_id: '332823727543997',

        href: sharePageUrl + "?guid=" + memeGuid + "",

        //	quote : "#RepYourColors! Check out my country pride and listen to Jason Derulo?s Colors @TheCocaColaCo anthem for the 2018 @FifaWorldCup &#x1f30e; jderulo.co/colors " + sharePageUrl + "?guid=" + memeGuid + "",

        display: 'popup'

    }, function (response) {

        $('.socialsheader').html('Thanks for Sharing!');

    });



    clickOmniture("Step 6:Facebook Share Click");



}

