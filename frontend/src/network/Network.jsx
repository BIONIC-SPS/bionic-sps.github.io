import React, { useEffect, useState } from "react";

export default function Network() {
  const [network, setNetwork] = useState([]);

  useEffect(() => {
    const el = document.getElementById("partners-root");
    const baseurl = el?.dataset?.baseurl ?? "";

    // Prefer baseurl if provided, otherwise fall back to your current dev URL
    const url = baseurl
      ? `${baseurl.replace(/\/$/, "")}/assets/data/network.json`
      : "http://127.0.0.1:4000/assets/data/network.json";

    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status} for ${url}`);
        return r.json();
      })
      .then(setNetwork)
      .catch((e) => console.error("Failed to load network.json", e));
  }, []);

  const openPartner = (url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const onCardKeyDown = (e, url) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openPartner(url);
    }
  };

  return (
    <div className="partner-grid" id="partners-root">
      {network.map((p) => {
        const name = p.name ?? "";
        const url = p.url;

        // Try a few common logo field names (adjust to match your JSON)
        const logoUrl = p.logo_url ?? p.logoUrl ?? p.logo ?? p.logo_path ?? "";

        const email = p.contact_email ?? p.email ?? "";

        return (
          <div
            key={p.id ?? p.name}
            className="partner-card"
            role="link"
            tabIndex={0}
            onClick={() => openPartner(url)}
            onKeyDown={(e) => onCardKeyDown(e, url)}
          >
            <div className="partner-card__row">
              {logoUrl ? (
                <img
                  className="partner-card__logo"
                  src={logoUrl}
                  alt={`${name} logo`}
                  loading="lazy"
                />
              ) : (
                <div className="partner-card__logo partner-card__logo--fallback">
                  {name.slice(0, 2).toUpperCase()}
                </div>
              )}

              <div className="partner-card__info">
                <div>
                  <strong>{name}</strong>
                </div>

                {email ? (
                  <div className="partner-card__contact">
                    <a
                      href={`mailto:${email}`}
                      onClick={(e) => e.stopPropagation()} // don't trigger card click
                    >
                      {email}
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}