// _app.js
import "src/app/globals.css"; // Assurez-vous de remplacer par le chemin correct

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
