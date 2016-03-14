/*
 * jQuery KoalaZoom v1.0
 * http://www.nikolakis.net
 *
 * Copyright 2010, John Nikolakis
 * Free to use under the GPL license.
 * http://www.gnu.org/licenses/gpl.html
 *
 */

(function($){
	$.fn.koalazoom = function(options) {

	var defaults = {
		top: 0,
		left: 0,
		width: 200,
		height: 200,
		expandedwidth: 400,
		expandedheight: 400,
		duration: 450,
		effect: ""
	};
	var options = $.extend(defaults, options);

    return this.each(function() {
		var infoheight = $("div", this).outerHeight();

		$(this).find("li > img").each(function(){
			$(this).width(options.width);
			$(this).height(options.height);
			$(this).css("position", "relative");
			$(this).css("top", (options.top - infoheight) + "px");
			$(this).css("left", options.left + "px");
			$(this).css("z-index", "25");
		});

		$(this).find("div").each(function(){
			$(this).css("position", "relative");
			$(this).css("z-index", "30");

			if (options.effect == "slideup") {
				$(this).css("top", options.height + "px");
			} else if (options.effect == "slideright") {
				$(this).css("left", - options.width + "px");
			} else if (options.effect == "slideleft") {
				$(this).css("left", options.width + "px");
			} else if (options.effect == "flydown") {
				$(this).css("top", options.top - infoheight + "px");
			}
		});



		$(this).find("li").each(function(e) {
			$(this).css("float", "left");
			$(this).css("display", "block");
			$(this).css("overflow", "hidden");
			$(this).css("position", "relative");
			$(this).width(options.width);
			$(this).height(options.height);

			$(this).hover(
				function () {
					$("> img", this).stop();
					$("> img", this).animate(
						{
						left: - Math.round((options.expandedwidth - options.width) / 2),
						top: - Math.round((options.expandedheight - options.height) / 2) - infoheight,
						width: options.expandedwidth,
						height: options.expandedheight
						}, options.duration
					);

					$("div", this).stop();
					if (options.effect == "slideup") {
						$("div", this).animate(
							{
							top: (options.height - infoheight) + "px"
							}, options.duration
						);
					} else if (options.effect == "slideright") {
						$("div", this).animate(
							{
							left: 0
							}, options.duration
						);
					} else if (options.effect == "slideleft") {
						$("div", this).animate(
							{
							left: 0
							}, options.duration
						);
					} else if (options.effect == "flydown") {
						$("div", this).animate(
							{
							top: (options.height - infoheight) + "px"
							}, options.duration
						);
					}
				},
				function () {
					$("> img", this).stop();
					$("> img", this).animate(
						{
						left: options.left + "px",
						top: (options.top - infoheight) + "px",
						width: options.width,
						height: options.height
						}, options.duration
					);
					$("div", this).stop();
					if (options.effect == "slideup") {
						$("div", this).animate(
							{
							top: options.height
							}, options.duration
						);
					} else if (options.effect == "slideright") {
						$("div", this).animate(
							{
							left: -options.width
							}, options.duration
						);
					} else if (options.effect == "slideleft") {
						$("div", this).animate(
							{
							left: options.width
							}, options.duration
						);
					} else if (options.effect == "flydown") {
						$("div", this).animate(
							{
							top: (options.top - infoheight)
							}, options.duration
						);
					}

				}
			);
		});
    });
 };
})(jQuery);
