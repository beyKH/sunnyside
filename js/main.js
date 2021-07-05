// site-header button
elSitenavToggler = document.querySelector(".site-header__toggler");
// site header class
elSiteHeaderSection = document.querySelector(".site-header");

elSitenavToggler.addEventListener("click", function () {
  elSiteHeaderSection.classList.toggle("site-header--open");
})



