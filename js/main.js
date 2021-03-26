function app() {
	const buttons = document.querySelectorAll('.filter__item')
	const cards = document.querySelectorAll('.portfolio__column')

	function filter (category, items) {
		items.forEach ((item) => {
			const isItemFiltered = !item.classList.contains(category)
			const isShowAll = category.toLowerCase() === 'all'
			if (isItemFiltered && !isShowAll) {
				item.classList.add('hide')
			} else {
				item.classList.remove('hide')
			}
		})
	}

	buttons.forEach((li) => {
		li.addEventListener('click', () => {
			const currentCategory = li.dataset.filter
			filter(currentCategory, cards)
		})
	})
}



app()