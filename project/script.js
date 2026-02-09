window.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tab_content'),
		tabsParents = document.querySelector('.tabheader__items')

	function hideContent() {
		tabsContent.forEach(tabsContent => {
			tabsContent.classList.add('hide')
			tabsContent.classList.remove('show')
		})
	}

	function showTabContent(index = 0) {
		tabsContent[index].classList.add('show', 'fade')
		tabsContent[index].classList.remove('hide')
		tabs[index].classList.add('tabheader__item_active')
	}
	hideContent()
	showTabContent()

	tabsParents.addEventListener('click', event => {
		const target = event.target

		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((tab, index) => {
				tab.classList.remove('tabheader__item_active')
				tabsContent[index].style.display = 'none'
				if (tab === target) {
					tab.classList.add('tabheader__item_active', 'fade')
					tabsContent[index].style.display = 'flex'
				}
			})
		}
	})
})
