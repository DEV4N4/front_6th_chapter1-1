(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=`modulepreload`,t=function(e){return`/front_6th_chapter1-1/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))},s=document.getElementsByTagName(`link`),c=document.querySelector(`meta[property=csp-nonce]`),l=c?.nonce||c?.getAttribute(`nonce`);o=r(i.map(r=>{if(r=t(r,a),r in n)return;n[r]=!0;let i=r.endsWith(`.css`),o=i?`[rel="stylesheet"]`:``,c=!!a;if(c)for(let e=s.length-1;e>=0;e--){let t=s[e];if(t.href===r&&(!i||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${r}"]${o}`))return;let u=document.createElement(`link`);if(u.rel=i?`stylesheet`:e,i||(u.as=`script`),u.crossOrigin=``,u.href=r,l&&u.setAttribute(`nonce`,l),document.head.appendChild(u),i)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[]){if(t.status!==`rejected`)continue;s(t.reason)}return r().catch(s)})},i=(()=>`/front_6th_chapter1-1`)(),a=({title:e=`쇼핑몰`,cartItemCount:t=0})=>`
 <header class="bg-white shadow-sm sticky top-0 z-40">
        <div class="max-w-md mx-auto px-4 py-4">
          <div class="flex items-center justify-between">
            <h1 class="text-xl font-bold text-gray-900">
              <a href="${i??`/`}" data-link="">${e}</a>
            </h1>
            <div class="flex items-center space-x-2">
              <!-- 장바구니 아이콘 -->
              <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
                </svg>
                ${t>0?`
                    <span
                  class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">${t}</span>
                    `:``}
              </button>
            </div>
          </div>
        </div>
      </header>   
`,o=({category1:e=``,category2:t=``})=>`
    <div class="flex items-center gap-2">
        <label class="text-sm text-gray-600">카테고리:</label>
        <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>
        ${e?`
        <span class="text-xs text-gray-500">&gt;</span>
        <button data-breadcrumb="category1" data-category1="${e}" class="text-xs hover:text-blue-800 hover:underline">${e}</button>
        `:``}
        ${t?`
        <span class="text-xs text-gray-500">&gt;</span>
        <span class="text-xs text-gray-600 cursor-default">${t}</span>
        `:``}
    </div>
`,s=({search:e=``})=>`
        <div class="relative">
          <input type="text" id="search-input" placeholder="상품명을 검색해보세요..." value="${e}" class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                      focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>   
`,c=()=>{let e=new URL(window.location.href),t=parseInt(e.searchParams.get(`limit`))||20;return`
<div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">개수:</label>
            <select id="limit-select"
                    class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="10" ${t===10?`selected`:``}>
                10개
              </option>
              <option value="20" ${t===20?`selected`:``}>
                20개
              </option>
              <option value="50" ${t===50?`selected`:``}>
                50개
              </option>
              <option value="100" ${t===100?`selected`:``}>
                100개
              </option>
            </select>
          </div>   
`},l=({sort:e})=>`
 <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">정렬:</label>
            <select id="sort-select" class="text-sm border border-gray-300 rounded px-2 py-1
                         focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="price_asc" ${e===`price_asc`?`selected`:``}>가격 낮은순</option>
              <option value="price_desc" ${e===`price_desc`?`selected`:``}>가격 높은순</option>
              <option value="name_asc" ${e===`name_asc`?`selected`:``}>이름순</option>
              <option value="name_desc" ${e===`name_desc`?`selected`:``}>이름 역순</option>
            </select>
          </div>   
`,u=({category1:e,category2:t,name:n=``,isSelected:r=!1})=>`
    <button data-category1="${e}" data-category2="${t}" class="${t||e}-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors ${r?`bg-blue-100 border-blue-300 text-blue-800`:`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`} ">
        ${n}
    </button>
`,d=({category1:e,category2:t,categories:n})=>{let r=[],i=``;return t||e?(r=Object.keys(n[e]),t&&(i=t)):r=Object.keys(n),console.log(`selectCategory`,r),console.log(`selectCategoryName`,i),`
    <div class="flex flex-wrap gap-2">
    ${r.map(n=>u({category1:e,category2:t,name:n,isSelected:n===i})).join(``)}
    </div>
    `},f=({state:e})=>{let{filters:t,pagination:n,categoryLoading:r,categories:i}=e;return`
      <!-- 검색 및 필터 -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
        <!-- 검색창 -->
        <div class="mb-4">
          ${s({search:t.search})}
        </div>
        
        <!-- 필터 옵션 -->
        <div class="space-y-3">

          <!-- 카테고리 필터 -->
          <div class="space-y-2">
            ${o({category1:t.category1,category2:t.category2})}
            <div class="space-y-2">
                ${r?`<div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>`:d({category1:t.category1,category2:t.category2,categories:i})}
            </div>
          </div>
          
          <!-- 기존 필터들 -->
          <div class="flex gap-2 items-center justify-between">
            <!-- 페이지당 상품 수 -->
            ${c({limit:n?.limit})}
            <!-- 정렬 -->
            ${l({sort:t.sort})}
          </div>
        </div>
      </div>
  `},p=e=>{let{image:t,title:n,lprice:r,productId:i,brand:a}=e;return`
 <div id="product-card" class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
        data-product-id="${i}">
    <!-- 상품 이미지 -->
    <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
        <img src="${t}"
            alt="${n}"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
            loading="lazy">
    </div>
    <!-- 상품 정보 -->
    <div class="p-3">
        <div class="cursor-pointer product-info mb-3">
        <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
            ${n}
        </h3>
        <p class="text-xs text-gray-500 mb-2">${a}</p>
        <p class="text-lg font-bold text-gray-900">
            ${Number(r).toLocaleString(`ko-KR`)}원
        </p>
        </div>
        <!-- 장바구니 버튼 -->
        <button id="add-to-cart-btn" class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md
                hover:bg-blue-700 transition-colors add-to-cart-btn" data-product-id="${i}">
        장바구니 담기
        </button>
    </div>
</div>   
`},m=`
     <div class="text-center py-4">
          <div class="inline-flex items-center">
            <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" 
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
          </div>
        </div>
`,h=`
    <div class="text-center py-4 text-sm text-gray-500">
        모든 상품을 확인했습니다
    </div>  
`,g=`
  <footer class="bg-white shadow-sm sticky top-0 z-40">
    <div class="max-w-md mx-auto py-8 text-center text-gray-500">
      <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
    </div>
  </footer>   
`,_=`
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
            <div class="aspect-square bg-gray-200"></div>
            <div class="p-3">
              <div class="h-4 bg-gray-200 rounded mb-2"></div>
              <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
              <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
              <div class="h-8 bg-gray-200 rounded"></div>
            </div>
          </div>   
`,v=({children:e=``})=>`
    <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
        ${e}
    </div>
`,y=()=>`
    <main class="max-w-md mx-auto px-4 py-4">
      <div class="text-center my-4 py-20 shadow-md p-6 bg-white rounded-lg">
      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1a73e8;stop-opacity:1" />
          </linearGradient>
          <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="8" flood-color="#000000" flood-opacity="0.1"/>
          </filter>
        </defs>
        
        <!-- 404 Numbers -->
        <text x="160" y="85" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="48" font-weight="600" fill="url(#blueGradient)" text-anchor="middle">404</text>
        
        <!-- Icon decoration -->
        <circle cx="80" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
        <circle cx="240" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
        <circle cx="90" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
        <circle cx="230" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
        
        <!-- Message -->
        <text x="160" y="110" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="14" font-weight="400" fill="#5f6368" text-anchor="middle">페이지를 찾을 수 없습니다</text>
        
        <!-- Subtle bottom accent -->
        <rect x="130" y="130" width="60" height="2" rx="1" fill="url(#blueGradient)" opacity="0.3"/>
      </svg>
      
      <a href="/" data-link class="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">홈으로</a>
    </div>
    </main>
  `;function b(){var e;let t=document.getElementById(`root`),n=window.location.pathname,r=Object.values(C.routes),i;for(let e of r)if(e.regex.test(n)){i=e.page;break}i??=y,t.innerHTML=i(),(e=i.registerEvent)?.call(i)}const x={state:{mounted:!1,cartItems:[],isCartModalOpen:!1},getState:e=>(localStorage.getItem(e)&&(x.state[e]=JSON.parse(localStorage.getItem(e))),x.state[e]),setState:(e,t,{persist:n=!1}={})=>{x.state[e]=t,n&&localStorage.setItem(e,JSON.stringify(t))},useState:e=>[x.state[e],t=>{x.state[e]=t}],setStates:e=>{for(let t in e)x.state[t]=e[t]},observers:[],subscribe:e=>{x.observers.push(e)},unsubscribe:e=>{x.observers=x.observers.filter(t=>t!==e)},notify:()=>{x.observers.forEach(e=>e.update())}};function S(){let e={routes:{},addRoute:(t,n)=>{e.routes[t]=n},push:e=>{window.history.pushState(null,``,`${i}${e}`),x.setState(`mounted`,!1),window.scrollTo(0,0),b()}};return window.addEventListener(`popstate`,()=>{x.setState(`mounted`,!1),b()}),e}const C=new S;async function w(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function T(e){let t=await fetch(`/api/products/${e}`);return await t.json()}async function E(){let e=await fetch(`/api/categories`);return await e.json()}const D=e=>Object.entries(e).map(([e,t])=>`${e}=${t}`).join(`&`),O=e=>e.replace(/^\?/,``).split(`&`).reduce((e,t)=>{let[n,r]=t.split(`=`);return e[n]=r,e},{}),k=(e,t)=>{let n=x.getState(`cartItems`),r=n.find(t=>t.productId===e.productId);if(r){r.quantity+=t;let i=n.map(t=>t.productId===e.productId?r:t);x.setState(`cartItems`,i,{persist:!0})}else x.setState(`cartItems`,[...x.getState(`cartItems`),{...e,quantity:t}],{persist:!0});b()},A=({message:e})=>{let t=document.querySelector(`#success-toast`),n=document.querySelector(`#toast-message`);n.textContent=e,t&&(t.classList.remove(`opacity-0`),t.classList.add(`opacity-100`),setTimeout(()=>{t.classList.remove(`opacity-100`),t.classList.add(`opacity-0`)},3e3))},j=({message:e})=>`
<div id="success-toast" class="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 opacity-0 transition-opacity duration-300">
  <div class="bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
    <div class="flex-shrink-0">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
    <p id="toast-message" class="text-sm font-medium">${e}</p>
    <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
  </div>  
</div>
`,M=({children:e=``,cartItemCount:t=0})=>`
<div id="cart-modal" class="fixed inset-0 z-50 overflow-y-auto cart-modal">
    <!-- 배경 오버레이 -->
    <div id="cart-modal-overlay" class="fixed inset-0 bg-black bg-opacity-50 transition-opacity cart-modal-overlay"></div>
    <!-- 모달 컨테이너 -->
    <div class="flex min-h-full items-end justify-center p-0 sm:items-center sm:p-4">
      <div class="relative bg-white rounded-t-lg sm:rounded-lg shadow-xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-hidden">
        <!-- 헤더 -->
        <div class="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 class="text-lg font-bold text-gray-900 flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
            </svg>
            장바구니
            ${t&&t>0?`<span class="text-sm font-normal text-gray-600 ml-1">(${t})</span>`:``}
          </h2>
          <button id="cart-modal-close-btn" class="text-gray-400 hover:text-gray-600 p-1">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <!-- 컨텐츠 -->
        <div class="flex flex-col max-h-[calc(90vh-120px)]">
          ${e}
        </div>
      </div>
    </div>
</div>
`,N=({productId:e,quantity:t})=>`
    <div class="flex items-center mt-2">
        <button id="cart-quantity-decrease-btn" class="quantity-decrease-btn w-7 h-7 flex items-center justify-center 
        border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100" data-product-id="${e}">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
            </svg>
        </button>
        <input type="number" id="cart-quantity-input" value="${t}" min="1" class="quantity-input w-12 h-7 text-center text-sm border-t border-b 
        border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500" disabled="" data-product-id="${e}">
        <button id="cart-quantity-increase-btn" class="quantity-increase-btn w-7 h-7 flex items-center justify-center 
        border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100" data-product-id="${e}">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
        </button>
    </div>
  `,P=e=>{let{image:t,lprice:n,productId:r,quantity:i,title:a,checked:o}=e;return`
    <div class="flex items-center py-3 border-b border-gray-100 cart-item" data-product-id="${r}">
        <!-- 선택 체크박스 -->
        <label class="flex items-center mr-3">
            <input type="checkbox" ${o?`checked`:``} class="cart-item-checkbox w-4 h-4 text-blue-600 border-gray-300 rounded 
        focus:ring-blue-500" data-product-id="${r}">
        </label>
        <!-- 상품 이미지 -->
        <div class="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden mr-3 flex-shrink-0">
            <img src="${t}" alt="${a}" class="w-full h-full object-cover cursor-pointer cart-item-image" data-product-id="${r}">
        </div>
        <!-- 상품 정보 -->
        <div class="flex-1 min-w-0">
            <h4 class="text-sm font-medium text-gray-900 truncate cursor-pointer cart-item-title" data-product-id="${r}">
            ${a}
            </h4>
            <p data-product-id="${r}" class="cart-item-lprice text-sm text-gray-600 mt-1">
            ${Number(n).toLocaleString(`ko-KR`)}원
            </p>
            <!-- 수량 조절 -->
            ${N({productId:r,quantity:i})}
        </div>
        <!-- 가격 및 삭제 -->
        <div class="text-right ml-3">
            <p data-product-id="${r}" class="cart-item-price text-sm font-medium text-gray-900">
            ${Number(n*i).toLocaleString(`ko-KR`)}원
            </p>
            <button class="cart-item-remove-btn mt-1 text-xs text-red-600 hover:text-red-800" data-product-id="${r}">
            삭제
            </button>
        </div>
    </div>  
`},F=()=>`
  <!-- 빈 장바구니 -->
    <div class="flex-1 flex items-center justify-center p-8">
    <div class="text-center">
        <div class="text-gray-400 mb-4">
        <svg class="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
        </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">장바구니가 비어있습니다</h3>
        <p class="text-gray-600">원하는 상품을 담아보세요!</p>
    </div>
    </div>  
`,I=({cartItems:e=[]})=>(console.log(e),`
    ${e.length>0?`
         <!-- 전체 선택 섹션 -->
          <div class="p-4 border-b border-gray-200 bg-gray-50">
            <label class="flex items-center text-sm text-gray-700">
              <input type="checkbox" id="cart-modal-select-all-checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2">
              전체선택 (2개)
            </label>
          </div>
        <!-- 아이템 목록 -->
        <div class="flex-1 overflow-y-auto">
            <div class="p-4 space-y-4">
                ${e.map(e=>`${P(e)}`).join(``)}
            </div>
        </div>
        <!-- 하단 액션 -->
        <div class="sticky bottom-0 bg-white border-t border-gray-200 p-4">
          <!-- 선택된 아이템 정보 -->
          <div class="flex justify-between items-center mb-3 text-sm">
            <span class="text-gray-600">선택한 상품 (1개)</span>
            <span class="font-medium">440원</span>
          </div>
          <!-- 총 금액 -->
          <div class="flex justify-between items-center mb-4">
            <span class="text-lg font-bold text-gray-900">총 금액</span>
            <span id="cart-modal-total-price" class="text-xl font-bold text-blue-600">${e.reduce((e,t)=>e+t.lprice*t.quantity,0).toLocaleString(`ko-KR`)}원</span>
          </div>
          <!-- 액션 버튼들 -->
          <div class="space-y-2">
            <button id="cart-modal-remove-selected-btn" class="w-full bg-red-600 text-white py-2 px-4 rounded-md 
                       hover:bg-red-700 transition-colors text-sm">
              선택한 상품 삭제 (1개)
            </button>
            <div class="flex gap-2">
              <button id="cart-modal-clear-cart-btn" class="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md 
                       hover:bg-gray-700 transition-colors text-sm">
                전체 비우기
              </button>
              <button id="cart-modal-checkout-btn" class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md 
                       hover:bg-blue-700 transition-colors text-sm">
                구매하기
              </button>
            </div>
          </div>
        </div>
        `:`
        ${F()}
        `}
`);function L(e,t){return e.tagName===t?e:L(e.parentElement,t)}function R(e){return Number(e.replace(`원`,``).replace(/,/g,``))}const z={products:[],filters:{},pagination:{},categoryLoading:!1,productLoading:!1,categories:{},productCountLimit:20,isEnd:!1},B=()=>{let{productCountLimit:e,pagination:t}=z,n=Number(new URL(window.location.href).searchParams.get(`limit`)||e),r=new URL(window.location.href).searchParams.get(`sort`)||`price_asc`,i=new URL(window.location.href).searchParams.get(`search`)||``,o=t.page,[s,c]=x.useState(`mounted`);return s===!1&&(z.productLoading=!0,z.categoryLoading=!0,Promise.all([w({limit:n,sort:r,page:o,search:i}).then(e=>{z.productLoading=!1,z.products=e.products,z.pagination=e.pagination,z.filters=e.filters,z.isEnd=e.pagination.total<=z.products.length}),E().then(e=>{z.categoryLoading=!1,z.categories=e})]).then(()=>{c(!0),b()})),`
    <div class="min-h-screen bg-gray-50">
      ${a({title:`쇼핑몰`,cartItemCount:x.getState(`cartItems`).length})}
      <main class="max-w-md mx-auto px-4 py-4">
      ${f({state:z})}
        <!-- 상품 목록 -->
        <div class="mb-6">
          <div>
          <!-- 상품 개수 정보 -->
          ${z.productLoading?``:`<div class="mb-4 text-sm text-gray-600">
              총 <span class="font-medium text-gray-900">${z.pagination.total}개</span>의 상품
            </div>`}
            <!-- 상품 그리드 -->
            ${v({children:`
              ${(z.products??[]).length>0?`${z.products.map(e=>p(e)).join(``)}`:_.repeat(4)}
              `})}
            <div id="product-list-end-indicator" style="height: 100px;">
              ${z.isEnd?h:m}
            </div>
          </div>
        </div>
      </main>
      ${g}
</div>
${j({message:`장바구니에 추가되었습니다`})}
${x.getState(`isCartModalOpen`)?M({children:I({cartItems:x.getState(`cartItems`)})}):``}
  `};B.state=z,B.registerEvent=()=>{let e=document.getElementById(`limit-select`),t=document.getElementById(`sort-select`),n=document.getElementById(`search-input`),r=document.querySelectorAll(`.product-card`),i=document.querySelectorAll(`#add-to-cart-btn`),a=document.getElementById(`cart-icon-btn`),o=document.getElementById(`cart-modal-close-btn`),s=document.getElementById(`cart-modal-overlay`),c=document.querySelectorAll(`.quantity-decrease-btn`),l=document.querySelectorAll(`.quantity-increase-btn`),u=document.querySelectorAll(`.quantity-input`),d=document.getElementById(`cart-modal-total-price`),f=document.querySelectorAll(`.cart-item-price`),p=document.querySelectorAll(`.cart-item-lprice`);f.forEach(e=>{e.addEventListener(`change`,()=>{})}),c.forEach(e=>{e.addEventListener(`click`,e=>{let t=L(e.target,`BUTTON`),n=t.dataset.productId,r=Array.from(u).find(e=>e.dataset.productId===n);if(Number(r.value)>1){let e=Number(r.value)-1;r.value=e;let t=x.getState(`cartItems`);t=t.map(t=>t.productId===n?{...t,quantity:e}:t),x.setState(`cartItems`,t,{persist:!0});let i=Array.from(f).find(e=>e.dataset.productId===n),a=R(Array.from(p).find(e=>e.dataset.productId===n).textContent),o=a*e;i.innerHTML=o.toLocaleString(`ko-KR`)+`원`,d.textContent=(Number(R(d.textContent))-a).toLocaleString(`ko-KR`)+`원`}})}),l.forEach(e=>{e.addEventListener(`click`,e=>{let t=L(e.target,`BUTTON`),n=t.dataset.productId,r=Array.from(u).find(e=>e.dataset.productId===n);if(Number(r.value)){let e=Number(r.value)+1;r.value=e;let t=x.getState(`cartItems`);t=t.map(t=>t.productId===n?{...t,quantity:e}:t),x.setState(`cartItems`,t,{persist:!0});let i=Array.from(f).find(e=>e.dataset.productId===n),a=R(Array.from(p).find(e=>e.dataset.productId===n).textContent),o=a*e;i.innerHTML=o.toLocaleString(`ko-KR`)+`원`,d.textContent=(Number(R(d.textContent))+a).toLocaleString(`ko-KR`)+`원`}})}),a.addEventListener(`click`,()=>{x.setState(`isCartModalOpen`,!0),b()}),o.addEventListener(`click`,()=>{x.setState(`isCartModalOpen`,!1),b()}),s.addEventListener(`click`,()=>{x.setState(`isCartModalOpen`,!1),b()}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&(x.setState(`isCartModalOpen`,!1),b())}),r.forEach(e=>{e.addEventListener(`click`,()=>{C.push(`/product/${e.dataset.productId}`)})}),i.forEach(e=>{e.addEventListener(`click`,e=>{e.stopPropagation();let t=z.products.find(t=>t.productId===e.target.dataset.productId);k(t,1),A({message:`장바구니에 추가되었습니다`})})}),e.addEventListener(`change`,e=>{let t=new URL(window.location.href),n=D({...O(t.search),limit:e.target.value});C.push(`${t.pathname}?${n}`)}),t.addEventListener(`change`,e=>{let t=new URL(window.location.href),n=D({...O(t.search),sort:e.target.value});C.push(`${t.pathname}?${n}`)}),n.addEventListener(`keydown`,e=>{if(e.key!==`Enter`)return;let t=new URL(window.location.href),n=D({...O(t.search),search:e.target.value});C.push(`${t.pathname}?${n}`)});let m=document.getElementById(`product-list-end-indicator`),h=!1,g=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting&&!h){h=!0,z.pagination.page++,g.unobserve(m);let e=z.pagination.limit,t=z.filters.sort,n=z.pagination.page,r=z.filters.search;w({limit:e,sort:t,page:n,search:r}).then(e=>{z.productLoading=!1,z.products=[...z.products,...e.products],z.pagination=e.pagination,z.filters=e.filters,z.isEnd=e.pagination.total<=z.products.length}).then(()=>{h=!1,b()})}})},{threshold:.7});g.observe(m)};const V=`
    <div class="py-20 bg-gray-50 flex items-center justify-center">
        <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p class="text-gray-600">상품 정보를 불러오는 중...</p>
        </div>
    </div>  
`,H=`
    <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
`,U=`
    <svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
`,W=({rating:e})=>`
    <div class="flex items-center">
        ${H.repeat(e)}
        ${U.repeat(5-e)}
    </div>
    <span class="ml-2 text-sm text-gray-600">${Number(e).toFixed(1)}</span>
`,G=({min:e,max:t})=>`
    <div class="flex items-center">
        <button id="quantity-decrease" class="w-8 h-8 flex items-center justify-center border border-gray-300 
            rounded-l-md bg-gray-50 hover:bg-gray-100">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
            </svg>
        </button>
        <input type="number" id="quantity-input" value="1" min="${e}" max="${t}" class="w-16 h-8 text-center text-sm border-t border-b border-gray-300 
            focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
        <button id="quantity-increase" class="w-8 h-8 flex items-center justify-center border border-gray-300 
            rounded-r-md bg-gray-50 hover:bg-gray-100">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
        </button>
    </div>
`,K=({image:e,name:t,rating:n,reviewCount:r,price:i,stock:a,description:o})=>`
    <div class="bg-white rounded-lg shadow-sm mb-6">
      <!-- 상품 이미지 -->
      <div class="p-4">
        <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
          <img src="${e}" alt="${t}" class="w-full h-full object-cover product-detail-image">
        </div>
        <!-- 상품 정보 -->
        <div>
          <p class="text-sm text-gray-600 mb-1"></p>
          <h1 class="text-xl font-bold text-gray-900 mb-3">${t}</h1>
          <!-- 평점 및 리뷰 -->
          <div class="flex items-center mb-3">
            ${W({rating:n})}
            <span class="ml-2 text-sm text-gray-600">(${r}개 리뷰)</span>
          </div>
          <!-- 가격 -->
          <div class="mb-4">
            <span class="text-2xl font-bold text-blue-600">${Number(i).toLocaleString(`ko-KR`)}원</span>
          </div>
          <!-- 재고 -->
          <div class="text-sm text-gray-600 mb-4">
            재고 ${a}개
          </div>
          <!-- 설명 -->
          <div class="text-sm text-gray-700 leading-relaxed mb-6">
            ${o}
          </div>
        </div>
      </div>
      <!-- 수량 선택 및 액션 -->
      <div class="border-t border-gray-200 p-4">
        <div class="flex items-center justify-between mb-4">
          <span class="text-sm font-medium text-gray-900">수량</span>
          ${G({min:1,max:a})}
        </div>
        <!-- 액션 버튼 -->
        <button id="add-to-cart-btn" data-product-id="85067212996" class="w-full bg-blue-600 text-white py-3 px-4 rounded-md 
             hover:bg-blue-700 transition-colors font-medium">
          장바구니 담기
        </button>
      </div>
    </div>
`,q=({category1:e,category2:t})=>`
    <nav class="mb-4">
      <div class="flex items-center space-x-2 text-sm text-gray-600">
        <a href="/" data-link="" class="hover:text-blue-600 transition-colors">홈</a>
        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
        <button class="breadcrumb-link" data-category1="${e}">
          ${e}
        </button>
        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
        <button class="breadcrumb-link" data-category2="${t}">
          ${t}
        </button>
      </div>
    </nav>
`,J=({products:e})=>`
    <div class="bg-white rounded-lg shadow-sm">
      <div class="p-4 border-b border-gray-200">
        <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
        <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
      </div>
      <div class="p-4">
        <div class="grid grid-cols-2 gap-3 responsive-grid">
        ${e.map(e=>`
            <div id="related-product" class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer" data-product-id="${e.productId}">
            <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
              <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover" loading="lazy">
            </div>
            <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">${e.title}</h3>
            <p class="text-sm font-bold text-blue-600">${Number(e.lprice).toLocaleString(`ko-KR`)}원</p>
          </div>
            `).join(``)}
        </div>
      </div>
    </div>
`,Y={product:null,isDetailLoading:!1,isRelatedProductsLoading:!1,isCartAdded:!1,relatedProducts:[],cartItems:[]},X=()=>{let[e,t]=x.useState(`mounted`),n=new URL(window.location.href).pathname.split(`/`),r=n[n.length-1];return e===!1&&(Y.isDetailLoading=!0,T(r).then(async e=>{Y.product=e,Y.isDetailLoading=!1,t(!0),b()})),Y.isRelatedProductsLoading=!0,Y.product&&Y.relatedProducts.length<=0&&new Promise(e=>setTimeout(e,2e3)).then(()=>{w({category1:Y.product.category1,category2:Y.product.category2}).then(e=>{Y.relatedProducts=e.products.filter(e=>e.productId!==Y.product.productId),Y.isRelatedProductsLoading=!1,b()})}),`
    <div class="min-h-screen bg-gray-50">
      ${a({title:`상품 상세`,cartItemCount:x.getState(`cartItems`).length})}
    <main class="max-w-md mx-auto px-4 py-4">
      ${Y.isDetailLoading?V:`
          <!-- 브레드크럼 -->
          ${q({category1:Y.product.category1,category2:Y.product.category2})}
            <!-- 상품 상세 정보 -->
            ${K({image:Y.product.image,name:Y.product.title,rating:Y.product.rating,reviewCount:Y.product.reviewCount,price:Y.product.lprice,stock:Y.product.stock,description:Y.product.description})}`}
      <!-- 상품 목록으로 이동 -->
      <div class="mb-6">
        <button class="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-md 
          hover:bg-gray-200 transition-colors go-to-product-list">
          상품 목록으로 돌아가기
        </button>
      </div>
      <!-- 관련 상품 -->
      ${Y.isRelatedProductsLoading&&(Y.relatedProducts??[]).length<=0?``:J({products:Y.relatedProducts})}
    </main>
    ${g}
  </div>
  ${j({message:`장바구니에 추가되었습니다`})}
  `};X.registerEvent=()=>{let e=document.querySelector(`#quantity-decrease`),t=document.querySelector(`#quantity-increase`),n=document.querySelector(`#quantity-input`),r=document.querySelector(`#add-to-cart-btn`),i=document.querySelectorAll(`#related-product`);e&&e.addEventListener(`click`,()=>{let e=parseInt(n.value);e>1&&(n.value=e-1)}),t&&t.addEventListener(`click`,()=>{let e=parseInt(n.value);e<Y.product.stock&&(n.value=e+1)}),r&&r.addEventListener(`click`,async()=>{let e=parseInt(n.value);k(Y.product,e),A({message:`장바구니에 추가되었습니다`})}),i&&i.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.productId;C.push(`/product/${t}`),Y.relatedProducts=[],x.setState(`mounted`,!1)})})};const Z=()=>r(async()=>{let{worker:e}=await import(`./browser-CcyfQrG1.js`);return{worker:e}},[]).then(({worker:e})=>e.start({onUnhandledRequest:`bypass`,serviceWorker:{url:`${i}/mockServiceWorker.js`}}));function Q(){x.subscribe({update:()=>{b({state:x.state})}}),C.addRoute(`/`,{regex:RegExp(`^${i}/?$`),page:B}),C.addRoute(`/product/:id`,{regex:RegExp(`^${i}/product/\\d+$`),page:X}),x.notify()}Z().then(Q);