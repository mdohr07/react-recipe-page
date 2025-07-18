import type { FC } from "react";

const Footer: FC = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal footer-center bg-base-200 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by nom²
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
