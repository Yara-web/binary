$('.filter__item').click(function(event) {
		var i==$(this).data('filter');
	if (i==1) {
		$('.portfolio__column').show();
	}else{
		$('.portfolio__column').hide();
		$('.portfolio__column.f_'+i).show();
	}

	return false
});