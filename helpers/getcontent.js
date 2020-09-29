import fs from 'fs';
import path from 'path';
import { createClient } from 'contentful';

import 'dotenv/config';

const SPACE = process.env.REACT_APP_CONTENTFUL_SPACE;
const TOKEN = process.env.REACT_APP_CONTENTFUL_TOKEN;


const client = createClient({
    space: SPACE,
    accessToken: TOKEN
});

const TYPES = [
    'projects', 'articles'
];

export const getContent = () => {
    console.log('> Starting import ...')

    for (const type of TYPES) {
        console.log('> Getting content for', type);
        client.getEntries({
            content_type: type,
            include: 3
        }).then((entries) => {
            const data = [...entries.items];
            let updatedContent = [];
            let newItem = {}

            data.forEach((i) => {
                newItem = { ...i.fields, updatedAt: i.sys.updatedAt }
                updatedContent = updatedContent.concat(newItem)
            })

            fs.writeFileSync(
                path.join(__dirname, '..', 'src', 'data', `${type}.json`),
                JSON.stringify(updatedContent)
            )
            console.log('> Content retrieved and written for', type);
        }).catch(err => {
            console.error('> Error: Failed to retrieve content.', err.message);
            return false;
        })
    }

    return true;
}

if (process.argv[2] === 'install') {
    getContent()
}