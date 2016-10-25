import * as fs from 'fs';
import * as p from 'path';
import {sync as globSync} from 'glob';
import {sync as mkdirpSync} from 'mkdirp';

const MESSAGES_PATTERN = './app/src/**/*.json';
const LANG_DIR         = './app/public/';
const Languages = ['en', 'pt', 'es'];

// Groups the default messages by namespace that were extracted from the example
// app's React components via the React Intl Babel plugin. An error will be
// thrown if there are messages in the same namespace use the same `id`. The
// result is a collection of namespaced collections of `id: message` pairs for
// the app's default locale, "en-US".
let namespacedMessages = globSync(MESSAGES_PATTERN)
		.map((filename) => fs.readFileSync(filename, 'utf8'))
		.map((file) => JSON.parse(file))

Object.keys(namespacedMessages).forEach((namespace) => {
		let collection = namespacedMessages[namespace];
		let filename   = p.join(LANG_DIR, namespace, `${lang}.json`);

		mkdirpSync(p.dirname(filename));
		fs.writeFileSync(filename, JSON.stringify(collection, null, 2));
});
