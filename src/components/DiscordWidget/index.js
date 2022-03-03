import React from 'react';
//https://docs.widgetbot.io/embed/crate/tutorial/#getting-started

const footerScripts = [
    `<script src="https://cdn.jsdelivr.net/npm/@widgetbot/crate@3" async defer>
    new Crate({
        server: '299881420891881473',
        channel: '355719584830980096',
    })
    </script>`
];

function Feature() {
  return (
    footerScripts
  );
}

export default function DiscordWidget() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            {footerScripts.map(() => (
              <Feature/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}











