'use strict'

class PortfolioItem {
    constructor(filterApp, src, alt, name, desc, hrefImg, dataGallery, titleImg, hrefPortfPage, titlePage, parent, ...classes) {
        this.filterApp = filterApp
        this.src = src
        this.alt = alt
        this.name = name
        this.desc = desc
        this.hrefImg = hrefImg
        this.dataGallery = dataGallery
        this.titleImg = titleImg
        this.hrefPortfPage = hrefPortfPage
        this.titlePage = titlePage
        this.parent = document.querySelector(parent)
        this.classes = classes

    }

    render() {
        const element = document.createElement('div')
            // console.log("element => ", element);

        if (this.classes.length === 0) {
            this.element = ['col-lg-4', 'col-md-6', 'portfolio-item', 'filter-app']
            for (let i = 0; i < this.element.length; i++) {

                element.classList.add(this.element[i])
            }

        } else {

            this.classes.forEach((classname) => { element.classList.add(classname) })

        }

        element.innerHTML = `
            <div class="portfolio-wrap">
                    <img src=${encodeURI(this.src)} class="img-fluid" alt=${this.alt}>
                <div class="portfolio-info">
                    <h4>${this.name} 1</h4>
                    <p>${this.desc}</p>
                    <div class="portfolio-links">
                        <a href=${encodeURI(this.hrefImg)} data-gallery=${this.dataGallery} class="portfolio-lightbox" title=${this.titleImg}><i class="bx bx-plus"></i></a>
                        <a href=${this.hrefPortfPage} title=${this.titlePage} ><i class="bx bx-link"></i></a>
                    </div>
                </div>
            </div>
       `
        this.parent.append(element)

    }

}

async function getPortfolioRecurce(url) {
    const res = await fetch(url)
    return await res.json()
}

getPortfolioRecurce('http://localhost:3000/portfolio').then(data => {
    data.forEach(obj => {
        new PortfolioItem(
            obj.filter,
            obj.imgsrc,
            obj.alt,
            obj.name,
            obj.desc,
            obj.hrefImg,
            obj.dataGallery,
            obj.titleImg,
            obj.hrefPortfPage,
            obj.titlePage,
            obj.parent
        ).render()
    })
})

new PortfolioItem(
    'filter-app',
    'assets/img/portfolio/13_page-0001.jpg',
    '1-rasm',
    'Faxriy Yorliq',
    'Tafakkur Sinovlari',
    'assets/img/portfolio/13_page-0001.jpg',
    'portfolioGallery',
    "Republic",
    "portfolio-details.html",
    "More Details",
    ".portfolio-container",
    'col-lg-4', 'col-md-6', 'portfolio-item', 'filter-app'
).render()

new PortfolioItem(
    'filter-app',
    'assets/img/portfolio/Reference Letter 1.pdf_page-0001.jpg',
    '1-rasm',
    'Recomendation Letter',
    'By Xolmatov Turgunboy',
    'assets/img/portfolio/Reference Letter 1.pdf_page-0001.jpg',
    'portfolioGallery',
    "Recomendation",
    "portfolio-details.html",
    "More Details",
    ".portfolio-container",
    'portfolio-item', 'col-lg-4', 'col-md-6', 'filter-app'
    // `col-lg-4 col-md-6 portfolio-item filter-app`
).render()

new PortfolioItem(
    'filter-card',
    "assets/img/portfolio/12_page-0001.jpg",
    '2-rasm',
    'Faxriy Yorliq',
    'Akademik Litseydan',
    "assets/img/portfolio/12_page-0001.jpg",
    'portfolioGallery',
    "Academic",
    "portfolio-details.html",
    "More Details",
    ".portfolio-container",
    'col-lg-4', 'col-md-6', 'portfolio-item', 'filter-card'

).render()

new PortfolioItem(
    'filter-web',
    "assets/img/portfolio/8_page-0001.jpg",
    '2-rasm',
    'Faxriy Yorliq',
    'school',
    "assets/img/portfolio/8_page-0001.jpg",
    'portfolioGallery',
    "School",
    "portfolio-details.html",
    "More Details",
    ".portfolio-container",
    'col-lg-4', 'col-md-6', 'portfolio-item', 'filter-web'

).render()

new PortfolioItem(
    'filter-web',
    "assets/img/portfolio/10_page-0001.jpg",
    '2-rasm',
    'Faxriy Yorliq',
    'Fan Olimpiyada',
    "assets/img/portfolio/10_page-0001.jpg",
    'portfolioGallery',
    "School",
    "portfolio-details.html",
    "More Details",
    ".portfolio-container",
    'col-lg-4', 'col-md-6', 'portfolio-item', 'filter-web'

).render()

new PortfolioItem(
    'filter-web',
    "assets/img/portfolio/11_page-0001.jpg",
    '2-rasm',
    'Faxriy Yorliq',
    'Fan Olimpiyada',
    "assets/img/portfolio/11_page-0001.jpg",
    'portfolioGallery',
    "School",
    "portfolio-details.html",
    "More Details",
    ".portfolio-container",
    'col-lg-4', 'col-md-6', 'portfolio-item', 'filter-web'

).render()