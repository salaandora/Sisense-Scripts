dashboard.on('widgetready', (d, args) => {
	list = document.getElementsByClassName('list-item slf-back-hov')
	$.each(list, function(index, element) {
 		if(element.innerText === 'BK' || element.innerText === 'N\\A'){
			$(element).css({
				'display': 'none' })
		}
	});
	items = document.getElementsByClassName('uc-ms-toprow')
	$.each(items, function(index, element) {
		if (index > 0) {
			$(element).css({
				'display': 'none' })
		}
	});
});

