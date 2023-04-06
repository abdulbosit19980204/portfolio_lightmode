'use strict'

class Projects {
    constructor(src, alt, iconClass, titleHref, title, createdAt, onCreated, desc, btnGitHref, btnYoutubeHref, btnWebHref, parent, ...classes) {
        this.src = src
        this.alt = alt
        this.iconClass = iconClass
        this.titleHref = titleHref
        this.title = title
        this.createdAt = createdAt
        this.onCreated = onCreated
        this.desc = desc
        this.btnGitHref = btnGitHref
        this.btnYoutubeHref = btnYoutubeHref
        this.btnWebHref = btnWebHref
        this.parent = document.querySelector(parent)
        this.classes = classes
    }

    render() {
        const element = document.createElement('div')
        if (this.classes.length === 0) {
            this.element = ['col-lg-4', 'col-md-6', 'd-flex', 'align-items-stretch']
            for (let i = 0; i < this.element.length; i++) {
                // element.classList.add(this.element[i])
                element.classList.add(this.element[i], "aos-init", "aos-animate")
                element.setAttribute("data-aos-delay", "300")
                element.setAttribute("data-aos", "fade-up")
            }

        } else {

            this.classes.forEach((classname) => { element.classList.add(classname) })

        }

        element.innerHTML = `
                    <div class="icon-box iconbox-blue">
                <img src=${this.src} alt=${this.alt} class="img-fluid">
                 <div class="icon">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
                </svg>
                <i class="bi ${this.iconClass}" ></i>
            </div>
    <h4 class="title"><a href=${this.titleHref}>${this.title}</a></h4>
    <div class="project_create_date md-15 d-flex">
        <p>${this.createdAt}| ${this.onCreated}</p>
    </div>
    <p class="description">${this.desc}
    </p>
    <div class="code_sourse">
        <li><a href=${this.btnGitHref} class="nav-link scrollto sourse_ico" target="_blank"><span>GitHub</span><i class="bi bi-github"></i> </a></li>
        <li><a href=${this.btnYoutubeHref} class="nav-link scrollto sourse_ico" target="_blank"><span>YouTube </span><i class="bi bi-youtube"></i> </a></li>
        <li><a href=${this.btnWebHref} class="nav-link scrollto sourse_ico" target="_blank"><span>Web Site </span><i class="bi bi-browser-chrome"></i> </a></li>
     </div>
</div>`
        this.parent.append(element)
    }


}

async function getProjectsRecource(url) {
    const res = await fetch(url)
    return await res.json()
}

getProjectsRecource('db.json').then((data) => {
    console.log("data => ", data);
    data.forEach(obj => {
        new Projects(
            obj.src,
            obj.alt,
            obj.iconClass,
            obj.titleHref,
            obj.createdAt,
            obj.onCreated,
            obj.desc,
            obj.btnGitHref,
            obj.btnYoutubeHref,
            obj.btnWebHref,
            ".services .row"

        ).render()
    })
})

// fetch('db.json').then(data => data.json()).then(res => console.log(res))

new Projects(
    "assets/img/por.png",
    "5-project",
    "bi-person-bounding-box",
    "#",
    "Portfolio",
    "01 Januar, 2023", "Tashkent",
    'This is my portfolio website. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptates nisi veritatis ex rerum dicta autem expedita impedit quos atque in aut, dolore officia soluta! In dolore quam iusto necessitatibus',
    "https://github.com/abdulbosit19980204/portifolio",
    "#",
    "https://abdulbositt.netlify.app/",
    '.services .row'

).render()

new Projects(
    "assets/img/otesst.webp",
    "2-project",
    "bi-card-checklist",
    "#",
    "Online Test Platform",
    "25 October, 2021", "AndQXAI",
    'This project is designed to monitor the knowledge of institute students and qualified faculty members. If you want to find more information',
    "https://github.com/abdulbosit19980204/VeralSoftDesign",
    "https://www.youtube.com/watch?v=q0WBYdUxltk",
    "http://yakuniy.andqxai.uz/home",
    '.services .row'

).render()

new Projects(
    "assets/img/how-ecommerce-works.png",
    "3-project",
    "bi-cart4",
    "https://electronic-commerce-andijan.netlify.app/#",
    "E-commerce",
    "21 February, 2023", "Freelance",
    'This project is designed to commerce electronically',
    "https://github.com/abdulbosit19980204/portifolio",
    "https://www.youtube.com/watch?v=q0WBYdUxltk",
    "https://electronic-commerce-andijan.netlify.app/",
    '.services .row'

).render()

new Projects(
    "assets/img/make-money-online-monetize-telegram-channel-subscription-bot.png",
    "3-project",
    "bi-robot",
    "https://electronic-commerce-andijan.netlify.app/#",
    "E-commerce",
    "21 February, 2023", "Freelance",
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ut eaque ad odio obcaecati veritatis laboriosam aspernatur dignissimos, cupiditate rerum voluptate vitae aliquid recusandae? Iure assumenda eius eum mollitia. Perferendis dolorum     voluptas obcaecati veritatis quaerat vel veniam nam reprehenderit ex, expedita mollitia ? Eveniet aperiam ducimus saepe expedita sit.Perferendis at numquam laudantium quae illo hic!',
    "https://github.com/abdulbosit19980204/gopay",
    "https://www.youtube.com/watch?v=q0WBYdUxltk",
    "https://t.me/tabiatinfo_bot",
    '.services .row'

).render()