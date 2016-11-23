/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-touchevents-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,a,i,r;for(var l in c)if(c.hasOwnProperty(l)){if(e=[],n=c[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],r=i.split("."),1===r.length?Modernizr[r[0]]=s:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=s),f.push((s?"":"no-")+r.join("-"))}}function a(e){var n=u.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?u.className.baseVal=n:u.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=i(p?"svg":"body"),e.fake=!0),e}function l(e,t,o,s){var a,l,f,c,d="modernizr",p=i("div"),h=r();if(parseInt(o,10))for(;o--;)f=i("div"),f.id=s?s[o]:d+(o+1),p.appendChild(f);return a=i("style"),a.type="text/css",a.id="s"+d,(h.fake?h:p).appendChild(a),h.appendChild(p),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),p.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",c=u.style.overflow,u.style.overflow="hidden",u.appendChild(h)),l=t(p,e),h.fake?(h.parentNode.removeChild(h),u.style.overflow=c,u.offsetHeight):p.parentNode.removeChild(p),!!l}var f=[],c=[],d={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){c.push({name:e,fn:n,options:t})},addAsyncTest:function(e){c.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=d,Modernizr=new Modernizr;var u=n.documentElement,p="svg"===u.nodeName.toLowerCase(),h=d._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];d._prefixes=h;var m=d.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",h.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(o,function(e){t=9===e.offsetTop})}return t}),s(),a(f),delete d.addTest,delete d.addAsyncTest;for(var v=0;v<Modernizr._q.length;v++)Modernizr._q[v]();e.Modernizr=Modernizr}(window,document);
// -----------------------------------------------------------------------------
//! Add Hero To List
// -----------------------------------------------------------------------------

$(document).ready(function() {
	
	$(".hero-grid").on("click", ".grid-box", function(e) {
		//Get the name of the hero clicked
		var heroName = $(this).data("name");
		//console.log(heroName);	

		//Then - check if team grid is full
		if($(".team-grid .grid-box.has-hero").length === 6){
			//If Full, Do Nothing
		}else{
			//If not full, add selected hero to grid
			$(".team-grid .grid-box:not(.has-hero):first")
				.addClass("has-hero")
				.addClass(heroName)
				.attr("data-name", heroName)
			;
		}
		
	});
});


// -----------------------------------------------------------------------------
//! Remove Hero from List
// -----------------------------------------------------------------------------

$(document).ready(function() {
	$(".team-grid").on("click", ".grid-box", function(e) {
		if($(this).attr("data-name")){
			//Set the class to default and remove data attribute			
			$(this)
				.attr("class", "grid-box")
				.removeAttr("data-name")
				.removeData("data-name")
			;	
		}
	});	
});

// -----------------------------------------------------------------------------
//! Calculate
// -----------------------------------------------------------------------------

$(document).ready(function() {
	
	//Close Modal Function
	function closeModal(){		
		$(".results-overlay").animate({opacity:0}, {duration: 100, queue: false});
		$(".results").animate({opacity:0}, {duration: 100, queue: false});
		setTimeout(function(){
			$("body").removeClass("has-results")
		}, 300);
	}
	// Handle ESC key (key code 27)
	document.addEventListener('keyup', function(e) {
	    if (e.keyCode == 27) {
	        closeModal();
	    }
	});

	//Closing Modal	
	$(".results")
	    	.on("click", function(e) {
		       closeModal();
		    })
		    .on("click", "#results-close", function( e ) {
		       closeModal();
		    })
		    .on("click", ".results-inner", function(e) {
		        e.stopPropagation();
	    });
	    
	//The Magic		
	$("#calculate").on("click", function(e) {
		//Clear any results
		$(".results-inner-list").html("");
		
		//Create Team + Pick Arrays	
		var teamArray = [];
		var pickArray = [];
	
		//Get length of Team Grid
		var teamSize = $(".team-grid .grid-box.has-hero").length;
		
		if(teamSize >= 1){

			//Loop through each grid-box with .has-hero and push data-name intro array
			$(".team-grid .grid-box.has-hero").each(function(){
				var heroName = $(this).attr("data-name");
				teamArray.push(heroName);
			});
			
			//console.log(teamArray);
			
			//Iterate through the array, assigning counters for each choice
			var teamArrayLength = teamArray.length;
			for (var i = 0; i < teamArrayLength; i++) {
			    if(teamArray[i] === "genji"){
				   pickArray.push("symmetra");
				   pickArray.push("mei");
				   pickArray.push("tracer");
				   pickArray.push("zarya");
				   pickArray.push("lucio");
				   pickArray.push("winston");
				   pickArray.push("dva");
			    }
			    if(teamArray[i] === "mccree"){
				   pickArray.push("bastion");
				   pickArray.push("widowmaker");
				   pickArray.push("hanzo");
				   pickArray.push("zarya");
			    }
			    if(teamArray[i] === "pharah"){
				   pickArray.push("zenyatta");
				   pickArray.push("widowmaker");
				   pickArray.push("soldier");
				   pickArray.push("mccree");
				   pickArray.push("bastion");
				   pickArray.push("genji");
				   pickArray.push("dva");
			    }
			    if(teamArray[i] === "reaper"){
				   pickArray.push("pharah");
				   pickArray.push("mccree");
				   pickArray.push("lucio");
			    }
			    if(teamArray[i] === "soldier"){
				   pickArray.push("bastion");
				   pickArray.push("reinhardt");
				   pickArray.push("zarya");
			    }
			    if(teamArray[i] === "sombra"){
				   //At this point it's kinda ¯\_(ツ)_/¯ - let me know if you have suggestions and why.
				   pickArray.push("winston");
				   pickArray.push("soldier");
				   pickArray.push("hanzo");
			    }
			    if(teamArray[i] === "tracer"){
				   pickArray.push("mei");
				   pickArray.push("soldier");
				   pickArray.push("junkrat");
				   pickArray.push("pharah");
				   pickArray.push("reaper");
				   pickArray.push("roadhog");
				   pickArray.push("winston");
			    }
			    if(teamArray[i] === "bastion"){
				   pickArray.push("tracer");
				   pickArray.push("ana");
				   pickArray.push("reaper");
				   pickArray.push("symmetra");
				   pickArray.push("genji");
				   pickArray.push("junkrat");
				   pickArray.push("hanzo");
				   pickArray.push("widowmaker");
				   pickArray.push("mei");
				   pickArray.push("dva");
				   pickArray.push("zenyatta");
			    }
			    if(teamArray[i] === "hanzo"){
				   pickArray.push("reinhardt");
				   pickArray.push("winston");
				   pickArray.push("genji");
				   pickArray.push("tracer");
				   pickArray.push("widowmaker");
			    }
			    if(teamArray[i] === "junkrat"){
				   pickArray.push("pharah");
				   pickArray.push("reaper");
				   pickArray.push("widowmaker");
				   pickArray.push("mercy");
				   pickArray.push("soldier");
				   pickArray.push("zarya");
			    }
			    if(teamArray[i] === "mei"){
				   pickArray.push("reaper");
				   pickArray.push("junkrat");
				   pickArray.push("pharah");
				   pickArray.push("zarya");
				   pickArray.push("widowmaker");
				   pickArray.push("lucio");
			    }
			    if(teamArray[i] === "torbjorn"){
				   pickArray.push("reaper");
				   pickArray.push("tracer");
				   pickArray.push("dva");
				   pickArray.push("hanzo");
				   pickArray.push("junkrat");
				   pickArray.push("winston");
				   pickArray.push("reinhardt");
				   pickArray.push("sombra");
			    }
			    if(teamArray[i] === "widowmaker"){
				   pickArray.push("tracer");
				   pickArray.push("genji");
				   pickArray.push("reaper");
				   pickArray.push("winston");
			    }
			    if(teamArray[i] === "dva"){
				   pickArray.push("zenyatta");
				   pickArray.push("mei");
				   pickArray.push("zarya");
				   pickArray.push("roadhog");
				   pickArray.push("junkrat");
			    }
			    if(teamArray[i] === "reinhardt"){
				   pickArray.push("pharah");
				   pickArray.push("mccree");
				   pickArray.push("junkrat");
				   pickArray.push("reaper");
				   pickArray.push("zenyatta");
				   pickArray.push("symmetra");
				   pickArray.push("tracer");
				   pickArray.push("sombra");
			    }
			    if(teamArray[i] === "roadhog"){
				   pickArray.push("zenyatta");
				   pickArray.push("ana");
				   pickArray.push("hanzo");
				   pickArray.push("lucio");
				   pickArray.push("junkrat");
				   pickArray.push("soldier");
				   pickArray.push("mei");
			    }
			    if(teamArray[i] === "winston"){
				   pickArray.push("mccree");
				   pickArray.push("pharah");
				   pickArray.push("reaper");
				   pickArray.push("lucio");
				   pickArray.push("zenyatta");
				   pickArray.push("mei");
				   pickArray.push("reinhardt");
				   pickArray.push("zarya");
				   pickArray.push("bastion");
				   pickArray.push("sombra");
			    }
			    if(teamArray[i] === "zarya"){
				   pickArray.push("pharah");
				   pickArray.push("widowmaker");
				   pickArray.push("bastion");
				   pickArray.push("mercy");
			    }
			    if(teamArray[i] === "ana"){
				   pickArray.push("reaper");
				   pickArray.push("dva");
				   pickArray.push("hanzo");
				   pickArray.push("widowmaker");
				   pickArray.push("reinhardt");
				   pickArray.push("genji");
				   pickArray.push("tracer");
				   pickArray.push("winston");
			    }
			    if(teamArray[i] === "lucio"){
				   pickArray.push("pharah");
				   pickArray.push("zarya");
				   pickArray.push("ana");
				   pickArray.push("sombra");
			    }
			    if(teamArray[i] === "mercy"){
				   pickArray.push("tracer");
				   pickArray.push("reaper");
				   pickArray.push("ana");
				   pickArray.push("widowmaker");
				   pickArray.push("roadhog");
				   pickArray.push("soldier");
				   pickArray.push("genji");
				   pickArray.push("winston");
				   pickArray.push("dva");
			    }
			    if(teamArray[i] === "symmetra"){
				   pickArray.push("pharah");
				   pickArray.push("junkrat");
				   pickArray.push("reaper");
				   pickArray.push("winston");
				   pickArray.push("zarya");
				   pickArray.push("roadhog");
			    }
			    if(teamArray[i] === "zenyatta"){
				   pickArray.push("widowmaker");
				   pickArray.push("ana");
				   pickArray.push("hanzo");
				   pickArray.push("zarya");
				   pickArray.push("tracer");
				   pickArray.push("soldier");
				   pickArray.push("sombra");
			    }
			}	
			
			//Count Values and sort by count
			//Thanks http://stackoverflow.com/questions/19464440/jquery-javascript-sort-array-by-highest-count
			
			var histogramMap = {};
			
			for(var i=0, len=pickArray.length; i<len; i++){
			  var key = pickArray[i];
			  histogramMap[key] = (histogramMap[key] || 0) + 1;
			}
			
			var histogram = [];
			for(key in histogramMap) histogram.push({key: key, freq: histogramMap[key]});
			histogram.sort(function(a,b){return b.freq - a.freq});
			
			var iterationCount = 1;
			histogram.forEach( function (arrayItem){
			    var pickKey = arrayItem.key;
			    var pickScore = arrayItem.freq;
			    //Just show the top 6 because I'm arbitrary that way.
				if(iterationCount <= 6){
				    $('<div class="result-box score-' + pickScore + '"><div class="result-portrait '+ pickKey + '"></div><div class="stars"><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span></div></div>')
				    .appendTo(".results-inner-list");
				}
			    iterationCount++;
				
			});
			
			//Clear values
			$(".team-grid .grid-box").each(function(){
				$(this)
					.attr("class", "grid-box")
					.removeAttr("data-name")
					.removeData("data-name")
				;	
			});
			
			
			//Launch the Modal
			$("body").addClass("has-results");
			$(".results-overlay").animate({opacity:1}, {duration: 300, queue: false});
			$(".results").animate({opacity:1}, {duration: 300, queue: false});
		
		}

				
	});	



});


// -----------------------------------------------------------------------------
//! Grid Stickiness
// -----------------------------------------------------------------------------

$(function() {
    //caches a jQuery object containing the header element
    var teamGrid = $(".team-grid");
    
    //Set the Height that we're going to make it sticky at
    function setHeight(){
		teamHeight = $(".team").innerHeight();
		buttonHeight = $(".team-button-container").innerHeight();
		teamHeight = teamHeight - buttonHeight - 80;
		teamGridHeight = $(".team-grid").innerHeight();	    
    }

	setHeight();
	$(window).resize(setHeight);
	
	//Check on Page Load
	var scroll = $(window).scrollTop();
    if (scroll >= teamHeight) {
        teamGrid.addClass("is-sticky");
        $(".team-grid-placeholder").innerHeight(teamGridHeight);
    } else {
        teamGrid.removeClass("is-sticky");
        $(".team-grid-placeholder").innerHeight(0);
    }

	//Check on Scroll
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= teamHeight) {
            teamGrid.addClass("is-sticky");
            $(".team-grid-placeholder").innerHeight(teamGridHeight);
        } else {
            teamGrid.removeClass("is-sticky");
            $(".team-grid-placeholder").innerHeight(0);
        }
    });
    
    
});