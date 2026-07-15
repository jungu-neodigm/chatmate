(function () {
  var script = document.currentScript;
  var base = script.getAttribute('data-base') || '.';
  var page = script.getAttribute('data-page') || '';

  var useCasesItems = [
    { label: '전체 보기', href: base + '/use-cases/index.html' },
    { label: '상품/서비스 탐색', href: base + '/use-cases/product-discovery.html' },
    { label: '고객지원 자동화', href: base + '/use-cases/customer-support.html' },
    { label: 'B2B 상담 및 리드 수집', href: base + '/use-cases/b2b-lead-generation.html' },
    { label: '지식 지원 및 도움', href: base + '/use-cases/knowledge-support.html' },
    { label: '내부 지식 검색', href: base + '/use-cases/internal-knowledge-search.html' },
    { label: '공공기관/관공서 안내', href: base + '/use-cases/public-sector.html' }
  ];

  var resourcesItems = [
    { label: 'FAQ', href: base + '/faq.html' },
    { label: 'Contact / Demo', href: base + '/contact.html' }
  ];

  var navConfig = [
    { type: 'link', key: 'features', label: '기능 소개', href: base + '/features.html' },
    { type: 'dropdown', key: 'use-cases', label: '활용 사례', items: useCasesItems },
    { type: 'link', key: 'how-it-works', label: '도입 절차', href: base + '/how-it-works.html' },
    { type: 'link', key: 'security', label: '보안', href: base + '/security.html' },
    { type: 'link', key: 'pricing', label: '요금', href: base + '/pricing.html' },
    { type: 'dropdown', key: 'resources', label: 'Resources', items: resourcesItems }
  ];

  function cls(key) {
    return 'nav-link text-sm font-medium text-gray-600 hover:text-slate-900' + (page === key ? ' active text-blue-700 font-semibold' : '');
  }

  function dropdownHtml(item) {
    return '<div class="dropdown-group relative">'
      + '<button class="' + cls(item.key) + '">' + item.label + '</button>'
      + '<div class="dropdown-menu absolute left-1/2 top-full mt-3 w-52 rounded-xl border border-gray-100 bg-white p-2 shadow-lg">'
      +   item.items.map(function (sub) {
            return '<a href="' + sub.href + '" class="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-slate-900">' + sub.label + '</a>';
          }).join('')
      + '</div>'
      + '</div>';
  }

  var navHtml = navConfig.map(function (item) {
    if (item.type === 'dropdown') return dropdownHtml(item);
    return '<a href="' + item.href + '" class="' + cls(item.key) + '">' + item.label + '</a>';
  }).join('');

  var mobileNavHtml = navConfig.map(function (item) {
    if (item.type === 'dropdown') {
      var subLinks = item.items.map(function (sub) {
        return '<a href="' + sub.href + '" class="rounded-lg px-3 py-2 pl-6 text-sm text-gray-500 hover:bg-gray-50">' + sub.label + '</a>';
      }).join('');
      return '<p class="px-3 pt-3 pb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">' + item.label + '</p>' + subLinks;
    }
    return '<a href="' + item.href + '" class="rounded-lg px-3 py-2 hover:bg-gray-50">' + item.label + '</a>';
  }).join('');

  var headerHtml = ''
    + '<header class="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-lg">'
    + '  <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">'
    + '    <a href="' + base + '/index.html" class="flex items-center gap-2 text-xl font-extrabold tracking-tight text-slate-900">'
    + '      <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white text-sm">C</span>'
    + '      ChatMate'
    + '    </a>'
    + '    <nav class="hidden items-center gap-8 md:flex">'
    +      navHtml
    + '    </nav>'
    + '    <div class="hidden items-center gap-3 md:flex">'
    + '      <a href="#" class="text-sm font-medium text-gray-600 hover:text-slate-900">로그인</a>'
    + '      <a href="' + base + '/contact.html" class="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800">데모 신청</a>'
    + '    </div>'
    + '    <button id="menuBtn" class="md:hidden" aria-label="메뉴 열기">'
    + '      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>'
    + '    </button>'
    + '  </div>'
    + '  <div id="mobileMenu" class="mobile-menu border-t border-gray-100 bg-white md:hidden">'
    + '    <div class="flex flex-col gap-1 px-4 py-4 text-sm font-medium text-gray-600">'
    +      mobileNavHtml
    + '      <div class="mt-2 flex flex-col gap-2 border-t border-gray-100 pt-3">'
    + '        <a href="#" class="rounded-lg px-3 py-2 hover:bg-gray-50">로그인</a>'
    + '        <a href="' + base + '/contact.html" class="rounded-full bg-slate-900 px-4 py-2 text-center font-semibold text-white">데모 신청</a>'
    + '      </div>'
    + '    </div>'
    + '  </div>'
    + '</header>';

  var footerHtml = ''
    + '<footer class="bg-[#0F1A2E] pt-16 pb-8 text-gray-400">'
    + '  <div class="mx-auto max-w-6xl px-4 sm:px-6">'
    + '    <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">'
    + '      <div>'
    + '        <p class="mb-3 flex items-center gap-2 text-lg font-extrabold text-white">'
    + '          <span class="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-xs text-white">C</span>'
    + '          ChatMate'
    + '        </p>'
    + '        <p class="text-sm leading-relaxed text-gray-400">'
    + '          웹사이트, 문서, FAQ, 상품 정보를 대화형 고객 경험으로 전환하는<br>AI 챗봇 / AI 대화 에이전트 플랫폼입니다.'
    + '        </p>'
    + '      </div>'
    + '      <div>'
    + '        <p class="mb-4 text-sm font-bold text-white">Product</p>'
    + '        <ul class="space-y-2.5 text-sm">'
    + '          <li><a href="' + base + '/features.html" class="hover:text-white">기능 소개</a></li>'
    + '          <li><a href="' + base + '/how-it-works.html" class="hover:text-white">도입 절차</a></li>'
    + '          <li><a href="' + base + '/admin-console.html" class="hover:text-white">관리자 콘솔</a></li>'
    + '          <li><a href="' + base + '/security.html" class="hover:text-white">보안</a></li>'
    + '          <li><a href="' + base + '/pricing.html" class="hover:text-white">요금</a></li>'
    + '        </ul>'
    + '      </div>'
    + '      <div>'
    + '        <p class="mb-4 text-sm font-bold text-white">Use Cases</p>'
    + '        <ul class="space-y-2.5 text-sm">'
    + '          <li><a href="' + base + '/use-cases/product-discovery.html" class="hover:text-white">상품/서비스 탐색</a></li>'
    + '          <li><a href="' + base + '/use-cases/customer-support.html" class="hover:text-white">고객지원 자동화</a></li>'
    + '          <li><a href="' + base + '/use-cases/b2b-lead-generation.html" class="hover:text-white">B2B 상담·리드 수집</a></li>'
    + '          <li><a href="' + base + '/use-cases/knowledge-support.html" class="hover:text-white">지식 지원 및 도움</a></li>'
    + '          <li><a href="' + base + '/use-cases/internal-knowledge-search.html" class="hover:text-white">내부 지식 검색</a></li>'
    + '          <li><a href="' + base + '/use-cases/public-sector.html" class="hover:text-white">공공기관/관공서 안내</a></li>'
    + '        </ul>'
    + '      </div>'
    + '      <div>'
    + '        <p class="mb-4 text-sm font-bold text-white">Resources</p>'
    + '        <ul class="space-y-2.5 text-sm">'
    + '          <li><a href="' + base + '/faq.html" class="hover:text-white">FAQ</a></li>'
    + '          <li><a href="' + base + '/contact.html" class="hover:text-white">문의 / 데모 신청</a></li>'
    + '          <li><a href="#" class="hover:text-white">로그인</a></li>'
    + '        </ul>'
    + '      </div>'
    + '    </div>'
    + '    <div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row">'
    + '      <p>© 2026 ChatMate. All rights reserved.</p>'
    + '      <div class="flex gap-3">'
    + '        <span class="rounded-full border border-white/10 px-3 py-1">GDPR compliant</span>'
    + '        <span class="rounded-full border border-white/10 px-3 py-1">PIPA compliant</span>'
    + '      </div>'
    + '    </div>'
    + '  </div>'
    + '</footer>';

  document.addEventListener('DOMContentLoaded', function () {
    var headerMount = document.getElementById('site-header');
    var footerMount = document.getElementById('site-footer');
    if (headerMount) headerMount.outerHTML = headerHtml;
    if (footerMount) footerMount.outerHTML = footerHtml;

    var menuBtn = document.getElementById('menuBtn');
    var mobileMenu = document.getElementById('mobileMenu');
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', function () { mobileMenu.classList.toggle('open'); });
      mobileMenu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () { mobileMenu.classList.remove('open'); });
      });
    }

    document.querySelectorAll('.faq-item').forEach(function (item) {
      var btn = item.querySelector('.faq-toggle');
      if (!btn) return;
      btn.addEventListener('click', function () {
        var isOpen = item.classList.contains('open');
        item.parentElement.querySelectorAll('.faq-item').forEach(function (i) { i.classList.remove('open'); });
        if (!isOpen) item.classList.add('open');
      });
    });
  });
})();
