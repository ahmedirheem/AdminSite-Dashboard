// Profile Additions
const navAvatar = document.querySelector('#nav-avatar img')
const navbar = document.querySelector('nav')
let container = document.createElement('ul')
navbar.appendChild(container)
container.classList = 'drop-bar'

container.insertAdjacentHTML('beforeend', `
<li>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
    <span>Profile</span>
</li>
<li>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"/></svg>
    <span>Setting</span>
</li>
<li>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128V384c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32h64zM504.5 273.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32H320v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z"/></svg>
    <span>Log out</span>
</li>
`)
navAvatar.addEventListener('click', () => {
    container.classList.toggle('active')
})
window.addEventListener('click', (e) => {
    if (e.target !== navAvatar) {
        if (container.classList.contains('active')) {
            container.classList.remove('active')
        }
    }
})

// Input Focusing
let input = document.querySelector('input')
input.addEventListener('focus', () => {
    document.querySelector('.search-input').classList.add('active')
})
input.addEventListener('focusout', () => {
    document.querySelector('.search-input').classList.remove('active')
})

// Aside DropDown

let allDropdown = document.querySelectorAll('.drop-down'),
    aside = document.querySelector('aside')

allDropdown.forEach(item => {
    let a = item.parentElement.querySelector('a:first-child')
    a.addEventListener('click', (e) => {
        e.preventDefault();

        allDropdown.forEach(i => {
            if (!e.target.classList.contains('active')) {
                let aLink = i.parentElement.querySelector('a:first-child')

                i.classList.remove('show')
                aLink.classList.remove('active')
            }
        })

        item.classList.toggle('show')
        a.classList.toggle('active')
    })
})
// Chart Section
var options = {
    series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
    chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
// Main Boxes Navbar

let menu = document.querySelectorAll('.menu')


menu.forEach(item => {
    let icon = item.querySelector('i')
    let menuLinks = item.querySelector('.menu-links')
    icon.addEventListener('click', (e) => {
        menuLinks.classList.toggle('show')
    })
})
window.addEventListener('click', (e) => {
    menu.forEach(item => {
        let icon = item.querySelector('i')
        let menuLinks = item.querySelector('.menu-links')

        if (e.target !== icon) {
            if (e.target !== menuLinks) {
                if (menuLinks.classList.contains('show')) {
                    menuLinks.classList.remove('show')
                }
            }
        }
    })
})



// Aside Toggle Bar

let asideBtn = document.getElementById('menu-btn')
let spans = document.querySelectorAll('.lists > span')

if(aside.classList.contains('show')) {
    spans.forEach(item=> {
		item.textContent = item.dataset.text;
	})
} else {
	spans.forEach(item=> {
		item.textContent = '-'
	})
	allDropdown.forEach(item=> {
		const a = item.parentElement.querySelector('a:first-child');
		a.classList.remove('active');
		item.classList.remove('show');
	})
}

asideBtn.addEventListener('click', ()=>{
    aside.classList.toggle('show');

    if(aside.classList.contains('show')){
        spans.forEach(item=>{
            item.textContent = item.dataset.text
        })
    }else{
        spans.forEach(item=>{
            item.textContent = '-'
        })
        allDropdown.forEach(item => {
            let a = item.parentElement.querySelector('a:first-child')
            item.classList.remove('show')
            a.classList.remove('active')
        })
    }
})

aside.addEventListener('mouseleave', ()=>{
    if(!(aside.classList.contains('show'))){
        allDropdown.forEach(item => {
            let a = item.parentElement.querySelector('a:first-child')
            item.classList.remove('show')
            a.classList.remove('active')
        })
        spans.forEach(item=> {
			item.textContent = '-'
		})
    }
})

aside.addEventListener('mouseenter', ()=>{
    if(!(aside.classList.contains('show'))){
        allDropdown.forEach(item => {
            let a = item.parentElement.querySelector('a:first-child')
            item.classList.remove('show')
            a.classList.remove('active')
        })
        spans.forEach(item=> {
			item.textContent = item.dataset.text
		})
    }
})