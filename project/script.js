window.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tab_content'),
		tabsParents = document.querySelector('.tabheader__items')

	function hideContent() {
		tabsContent.forEach(tabsContent => {
			tabsContent.style.display = 'none'
		})
	}

	hideContent()

	tabsParents.addEventListener('click', event => {
		const target = event.target

		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((tab, index) => {
				tab.classList.remove('tabheader__item_active')
				tabsContent[index].style.display = 'none'
				if (tab === target) {
					tab.classList.add('tabheader__item_active')
					tabsContent[index].style.display = 'flex'
				}
			})
		}
	})
})
