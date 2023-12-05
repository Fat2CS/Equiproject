// _app.js
import "src/app/globals.css"; // Assurez-vous de remplacer par le chemin correct
import { FirebaseProvider } from "@/firebase";
function MyApp({ Component, pageProps }) {
	return (
		<FirebaseProvider>
			<Component {...pageProps} />
			<main>
				<Component {...pageProps} />
			</main>
		</FirebaseProvider>
	);
}

export default MyApp;
