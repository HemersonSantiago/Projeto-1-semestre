$(function(){
	$('.slider').cycle({
		timeout: 3000,
		fx: 'shuffle',
		pager:$('.pager'),
		pagerAnchorBuilder: function(index,DoMelement){
			return'<a></a>';
		},
		activePagerClass: 'sliderativado'
	});
});