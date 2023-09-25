import Logo from "../Logo";

const Footer = () => {
  return (
    <div>
      <div>
        <Logo />
        <p>
          This is a big one and i consider it one of the most important things
          for a business.
        </p>
      </div>
      <div>
        <header>Quick Links</header>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Appointment</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <header>Company</header>
        <ul>
          <li>About</li>
          <li>Contacy</li>
          <li>Careers</li>
          <li>Press</li>
        </ul>
      </div>
      <div>
        <header>Information</header>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms & Condition</li>
          <li>FAQ</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
