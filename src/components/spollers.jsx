const spollersTitle = document.querySelectorAll('[data-spollers]');
if(spollersTitle.length > 0){
	const getSpoller = Array.from(spollersTitle).filter(function (item, index, self) {
		return item.dataset.spollers.split(',')[0];
	})
	if(getSpoller.length > 0){
		
	}
}