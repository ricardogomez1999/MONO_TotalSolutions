export default function SocialMedia() {
  return (
    <ul className=" mx-auto p-1 rounded-lg bg-primary md:bg-transparent flex gap-2 w-1/2 md:w-full md:p-0">
      <li>
        <a
          href="https://www.facebook.com/profile.php?id=61561279254390"
          target="blank_"
        >
          <img src="./fbLogo.svg" alt="facebook logo" className=" w-6" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/mono_totalsolutions/"
          target="blank_"
        >
          <img src="./instaLogo.svg" alt="Instagram logo" className=" w-6" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/company/mono-total-solutions/?viewAsMember=true"
          target="blank_"
        >
          <img src="./linkLogo.svg" alt="LinkedIn logo" className=" w-6" />
        </a>
      </li>
    </ul>
  );
}
