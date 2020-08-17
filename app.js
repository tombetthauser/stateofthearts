import { LINKS, SIDE_NOTES } from "./src/data";
import { RENDER_GRAPHS } from "./src/render";

const state = {
  paletteCount: 3,
  palette: 0,
  currentPage: "introduction",
  borderColor: () => {
    switch (state.palette) {
      case 0:
        return "#c4dfff";
      case 1:
        return "#fff";
      case 2:
        return "#000";
    }
  },
}

const linkShow = (link) => {
  for (let i = 0; i < LINKS.length; i++) { document.querySelector(`.${LINKS[i]}-div`).style.display = "none" }
  if (link) document.querySelector(`.${link}-div`).style.display = "block";
  document.querySelector(`.main-section-container`).scrollTop = 0;
  removeBrokenBorder();
}

const linkBorderRemove = (link) => {
  if (link) {
    document.querySelectorAll(`.${link}-link`).style.borderBottom = 'none';
  } else {
    let links = document.querySelectorAll(".left-column-li")
    links.forEach(link => {
      link.style.borderBottom = 'none';
    })
  }
  removeBrokenBorder();
}

const linkBorderAdd = (link) => {
  if (link) {
    console.log(link);
    state.currentPage = link;
    document.querySelectorAll(`.${link}-link`).forEach(ele => {
      ele.style.borderBottom = `1px solid ${state.borderColor()}`;
    })
  }
  removeBrokenBorder();
}

const removeBrokenBorder = () => {
  document.querySelectorAll('.site-broken-li').forEach(ele => {
    ele.style.borderBottom = `none`;
  })
}


document.addEventListener('DOMContentLoaded', (_event) => {

  document.addEventListener("click", removeBrokenBorder);

  document.querySelector(".loading-div").style.display = "none";

  let style = document.querySelector(".mobile-drop-down").style;
  
    document.querySelector(".main-header-nav").addEventListener("click", () => {
      if (style.height === "650px") { style.height = "0px"; style.borderBottom = "none"; } 
      else { style.height = "650px"; style.borderBottom = `1px solid ${state.borderColor()}`; }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1000) { style.height = "0px"; style.borderBottom = "none"; }
    });

    for (let i = 0; i < LINKS.length; i++) {
      let links = document.querySelectorAll(`.${LINKS[i]}-link`);
      for (let j = 0; j < links.length; j++) {
        document.querySelectorAll(`.${LINKS[i]}-link`)[j].addEventListener("click", () => {
          linkShow(`${LINKS[i]}`)
          linkBorderRemove();
          linkBorderAdd(LINKS[i])
          style.height = "0px";
          style.borderBottom = "none";
        })
      }
    }

    document.querySelectorAll(".switch-colors-link").forEach(ele => {
      ele.addEventListener("click", () => {
        const colorModeNode = document.querySelector(".switch-colors-link");

        state.palette = (state.palette + 1) % state.paletteCount;
        document.querySelector(".color-palette-css").href = `./styles/layout${state.palette}.css`;
        document.querySelectorAll(`.${state.currentPage}-link`).forEach(ele => {
          ele.style.borderBottom = `1px solid ${state.borderColor()}`;
        })
        document.querySelector(".mobile-drop-down").style.borderBottom = `1px solid ${state.borderColor()}`;

        if (state.palette === 0) {
          colorModeNode.innerHTML = "Night Mode";
        } else if (state.palette === 1) {
          colorModeNode.innerHTML = "Black & White Mode";
        } else if (state.palette === 2) {
          colorModeNode.innerHTML = "Color Mode";
        }
      })
    })

    
    linkBorderRemove();
    linkShow(`introduction`);
    linkBorderAdd(`introduction`);
    
    RENDER_GRAPHS();
})

//  npx webpack app.js --watch