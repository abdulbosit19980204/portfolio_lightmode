'use strict'

class Projects {
    constructor(src, alt, title, createdAt, onCreated, desc, bthGitHref, btnYoutubeHref, btnWebHref) {
        this.src = src
        this.alt = alt
        this.title = title
        this.createdAt = createdAt
        this.onCreated = onCreated

    }
    render() {
        const element = document.createElement('div')
        element.innerHTML = `

        <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
            <div class="icon-box iconbox-blue">
                <img src=${this.src} alt="" class="img-fluid">
                 <div class="icon">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
                </svg>
                <i class="bi bi-person-bounding-box"></i>
            </div>
    <h4 class="title"><a href="">Portfolio</a></h4>
    <div class="project_create_date md-15 d-flex">
        <p>01 Januar, 2023 | AndQXAI</p>
    </div>
    <p class="description">This is my portfolio website. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptates nisi veritatis ex rerum dicta autem expedita impedit quos atque in aut, dolore officia soluta! In dolore quam iusto
        necessitatibus
    </p>
    <div class="code_sourse">
        <li><a href="https://github.com/abdulbosit19980204/portifolio" class="nav-link scrollto sourse_ico" target="_blank"><span>GitHub</span><i class="bi bi-github"></i> </a></li>
        <li><a href="#" class="nav-link scrollto sourse_ico" target="_blank"><span>YouTube </span><i class="bi bi-youtube"></i> </a></li>
        <li><a href="https://abdulbositt.netlify.app/" class="nav-link scrollto sourse_ico" target="_blank"><span>Web Site </span><i class="bi bi-browser-chrome"></i> </a></li>
     </div>
</div>
</div>


`
    }
}