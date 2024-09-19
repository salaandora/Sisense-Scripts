dashboard.on('widgetready', (d, args) => {
	hiddenFilters = ['BK', 'N\\A']
	filters = document.getElementsByClassName('list-item slf-back-hov');
	$.each(filters, function(index, element) {
 		if(hiddenFilters.includes(element.innerText.trim())){
			$(element).css({
				'display': 'none' })
		}
	});
	selectAll = document.getElementsByClassName('uc-ms-toprow')
	$.each(selectAll, function(index, element) {
		if (index > 0) {
			$(element).css({
				'display': 'none' })
		}
	});
});

