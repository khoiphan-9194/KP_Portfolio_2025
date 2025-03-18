
export default function NavTabs({ links }) {
  //this will return an array of links that will be rendered in the navbar 
  //links is an array of objects that contain the link and the text to be displayed
  //the link is the path that the link will take the user to when clicked
  return (
    <div className="nav-tabs-mainUI">
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">

          <ul className="nav nav-tabs navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => link)}
          </ul>
        </div>
     
    </nav>
    </div>
  );
}
