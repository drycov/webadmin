import { URL, fileURLToPath } from 'url';
import { dirname } from 'path';

interface Meta {
    url: string | URL;
}

const fileDirName = (meta: Meta) => {
    const __filename = fileURLToPath(meta.url);

    const __dirname = dirname(__filename);

    return { __dirname, __filename };
};

export default fileDirName;
