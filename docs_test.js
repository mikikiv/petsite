const { I, Navbar , LeftSidebar } = inject();


Feature('docs');

Before(({ I }) => {
    I.amOnPage('http://localhost:3000/')
  });


Scenario('Clicking Tutorial leads to Scouts House basic rules', ({ I }) => {
    I.see('Pet Sitters Guide to Galaxy')
    I.click(Navbar.NavigationLinks.Docs)
    I.wait(2)
    I.see('Scout\'s House')
});

Scenario('Switch to dark mode', ({ I }) => {
    I.click(Navbar.ColorModeIcon)
    // need a way to verify the page has changed colors
});



