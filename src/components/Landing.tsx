import { PropsWithChildren, useState } from "react";
import "./styles/Landing.css";
import { config } from "../data/portfolio";

const Landing = ({ children }: PropsWithChildren) => {
  const nameParts = config.developer.fullName.split(" ");
  const firstName = nameParts[0] || config.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";
  const [photoLoaded, setPhotoLoaded] = useState(true);

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              {firstName.toUpperCase()}
              {' '}
              <br />
              {lastName && <span>{lastName.toUpperCase()}</span>}
            </h1>
          </div>
          <div className="landing-info">
            <h3>An</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">{config.developer.roles[0]}</div>
            </h2>
            <h2>
              <div className="landing-h2-info">{config.developer.roles[1]}</div>
            </h2>
          </div>
          {/* Mobile photo - shows only on mobile when 3D character is hidden */}
          <div className="mobile-photo">
            {photoLoaded && (
              <img
                src={config.assets.profilePhoto}
                alt={config.developer.fullName}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                onError={() => setPhotoLoaded(false)}
              />
            )}
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
