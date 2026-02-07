window.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tab_content'),
		tabsParents = document.querySelector('.tabheader__items')

	function hideContent() {
		tabsContent.forEach(tabsContent => {
			tabsContent.style.display = 'none'
		})
	}

	tabs.forEach(tab => {
		tab.classList.remove('tabheader__item_active')
	})

	function showTabContent(index) {
		tabsContent[index].style.display = 'block'
		tabs[index].classList.add('tabheader__item_active')
	}
	hideContent()
	showTabContent(0)
})
