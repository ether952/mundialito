const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'images');
fs.mkdirSync(targetDir, { recursive: true });

const alfajores = [
  {
    id: "terrabusi-blanco",
    urls: [
      "https://carrefourar.vtexassets.com/arquivos/ids/825749/7622300742621_E01.jpg",
      "https://jumboargentina.vtexassets.com/arquivos/ids/803209-800-auto?v=638379382406570000"
    ]
  },
  {
    id: "milka-oreo",
    urls: [
      "https://mdlzargentina.vtexassets.com/arquivos/ids/156017-800-800?v=638174216974530000&width=800&height=800&aspect=true",
      "https://images.openfoodfacts.org/images/products/762/230/083/5620/front_es.12.400.jpg"
    ]
  },
  {
    id: "terrabusi-glaseado-blanco",
    urls: [
      "https://carrefourar.vtexassets.com/arquivos/ids/825749/7622300742621_E01.jpg",
      "https://images.openfoodfacts.org/images/products/779/058/012/6209/front_es.3.400.jpg"
    ]
  },
  {
    id: "milka-mousse-blanco",
    urls: [
      "https://mdlzargentina.vtexassets.com/arquivos/ids/156019/7622300457303_01.jpg?v=638174216990070000",
      "https://images.openfoodfacts.org/images/products/762/230/083/5590/front_es.4.400.jpg"
    ]
  },
  {
    id: "milka-mousse-negro",
    urls: [
      "https://images.openfoodfacts.org/images/products/762/230/083/5606/front_es.4.400.jpg",
      "https://donpicho.com.ar/wp-content/uploads/2026/05/alfajor-milka-mousse-negro-x3.jpg"
    ]
  },
  {
    id: "block",
    urls: [
      "https://arcorencasa.com/wp-content/uploads/2026/06/20260609-6596.webp",
      "https://arcorencasa.com/wp-content/uploads/2025/05/20250516-14363.webp",
      "https://images.openfoodfacts.org/images/products/779/058/011/7306/front_es.4.400.jpg"
    ]
  },
  {
    id: "bonobon",
    urls: [
      "https://arcorencasa.com/wp-content/uploads/2025/01/20250107-14884.webp",
      "https://arcorencasa.com/wp-content/uploads/2024/10/20241008-4303.webp",
      "https://images.openfoodfacts.org/images/products/779/058/011/9164/front_es.3.400.jpg"
    ]
  },
  {
    id: "pepito",
    urls: [
      "https://carrefourar.vtexassets.com/arquivos/ids/912588/77915481_02.jpg",
      "https://jumboargentina.vtexassets.com/arquivos/ids/924008-800-auto?v=639223228035430000",
      "https://images.openfoodfacts.org/images/products/762/230/083/5613/front_es.4.400.jpg"
    ]
  },
  {
    id: "chocotorta",
    urls: [
      "https://carrefourar.vtexassets.com/arquivos/ids/915668/7790040150072_E02.jpg?v=639227418272970000",
      "https://jumboargentina.vtexassets.com/arquivos/ids/869197-800-auto?v=638840434213000000",
      "https://images.openfoodfacts.org/images/products/779/058/012/9101/front_es.3.400.jpg"
    ]
  },
  {
    id: "cachafaz-n",
    urls: [
      "https://carrefourar.vtexassets.com/arquivos/ids/915509/7798128000479_E02.jpg?v=639226798551000000",
      "https://images.openfoodfacts.org/images/products/779/812/907/0010/front_es.3.400.jpg"
    ]
  },
  {
    id: "cachafaz-b",
    urls: [
      "https://carrefourar.vtexassets.com/arquivos/ids/915511/7798128000493_E02.jpg",
      "https://images.openfoodfacts.org/images/products/779/812/907/0027/front_es.3.400.jpg"
    ]
  },
  {
    id: "shot-b",
    urls: [
      "https://mdlzargentina.vtexassets.com/arquivos/ids/156451-800-800?v=639070417368700000&width=800&height=800&aspect=true",
      "https://images.openfoodfacts.org/images/products/762/230/083/5583/front_es.3.400.jpg"
    ]
  },
  {
    id: "gula",
    urls: [
      "https://http2.mlstatic.com/D_NQ_NP_875767-MLA99868981643_112025-O.webp",
      "https://images.openfoodfacts.org/images/products/779/834/512/0018/front_es.3.400.jpg"
    ]
  },
  {
    id: "capitan-del-espacio",
    urls: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Alfajor_Capit%C3%A1n_del_Espacio.jpg/480px-Alfajor_Capit%C3%A1n_del_Espacio.jpg",
      "https://images.openfoodfacts.org/images/products/779/808/330/0018/front_es.3.400.jpg"
    ]
  },
  {
    id: "guaymallen",
    urls: [
      "https://jumboargentina.vtexassets.com/arquivos/ids/765914-800-auto?v=638100849781000000",
      "https://carrefourar.vtexassets.com/arquivos/ids/915497/77980267_02.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Alfajores_Guaymallen.jpg/480px-Alfajores_Guaymallen.jpg"
    ]
  },
  {
    id: "havanna-clasico",
    urls: [
      "https://jumboargentina.vtexassets.com/arquivos/ids/441853-800-auto?v=636529712291200000",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Alfajor_havanna_chocolate.jpg/480px-Alfajor_havanna_chocolate.jpg"
    ]
  },
  {
    id: "havanna-sal-marina",
    urls: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Alfajor_H.jpg/480px-Alfajor_H.jpg",
      "https://http2.mlstatic.com/D_NQ_NP_762862-MLA49747042319_042022-O.webp"
    ]
  },
  {
    id: "jorgito-negro",
    urls: [
      "https://carrefourar.vtexassets.com/arquivos/ids/915487-800-450?v=639226792857270000",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Alfajores_Jorgito.jpg/480px-Alfajores_Jorgito.jpg"
    ]
  },
  {
    id: "cachafaz-maicena",
    urls: [
      "https://images.openfoodfacts.org/images/products/779/812/907/0034/front_es.3.400.jpg",
      "https://jumboargentina.vtexassets.com/arquivos/ids/773132-800-auto?v=638138541635100000"
    ]
  },
  {
    id: "fantoche-triple",
    urls: [
      "https://jumboargentina.vtexassets.com/arquivos/ids/820596-800-auto?v=638500018855870000",
      "https://jumboargentina.vtexassets.com/arquivos/ids/771724-800-auto?v=638132818466570000"
    ]
  },
  {
    id: "rasta",
    urls: [
      "https://http2.mlstatic.com/D_NQ_NP_615746-MLA105654186506_012026-O.webp",
      "https://images.openfoodfacts.org/images/products/779/839/744/4202/front_es.3.400.jpg"
    ]
  },
  {
    id: "balcarce",
    urls: [
      "https://http2.mlstatic.com/D_NQ_NP_762862-MLA49747042319_042022-O.webp",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Alfajor_chocolate_y_dulce_de_leche.jpg/480px-Alfajor_chocolate_y_dulce_de_leche.jpg"
    ]
  },
  {
    id: "fulbito",
    urls: [
      "https://www.golomax.com.ar/uploads/centum/articles/home/13002656_1.jpg",
      "https://http2.mlstatic.com/D_NQ_NP_875767-MLA99868981643_112025-O.webp"
    ]
  },
  {
    id: "jorgelin-triple",
    urls: [
      "https://www.alfajores-jorgito.com/media/ecf048b64b49f84c3fd1b68b3c64f124.webp",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Alfajores_Jorgito.jpg/480px-Alfajores_Jorgito.jpg"
    ]
  },
  {
    id: "tatin-simple",
    urls: [
      "https://arcorencasa.com/wp-content/uploads/2026/06/20241008-3312-opt.webp",
      "https://arcorencasa.com/wp-content/uploads/2024/10/20241008-4056.webp"
    ]
  },
  {
    id: "grandote-triple",
    urls: [
      "https://http2.mlstatic.com/D_NQ_NP_964956-MLU76018482341_042024-O.webp",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/AlfajoresTriples.jpg/480px-AlfajoresTriples.jpg"
    ]
  }
];

async function downloadOne(alf) {
  for (const url of alf.urls) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
        }
      });
      if (res.ok) {
        const contentType = res.headers.get('content-type') || '';
        let ext = '.jpg';
        if (contentType.includes('webp')) ext = '.webp';
        else if (contentType.includes('png')) ext = '.png';
        else if (url.endsWith('.webp')) ext = '.webp';
        else if (url.endsWith('.png')) ext = '.png';

        const buffer = Buffer.from(await res.arrayBuffer());
        if (buffer.length > 2000) { // Valid image
          const filename = `${alf.id}${ext}`;
          const filePath = path.join(targetDir, filename);
          fs.writeFileSync(filePath, buffer);
          console.log(`[OK] ${alf.id} -> ${filename} (${Math.round(buffer.length / 1024)} KB)`);
          return `/images/${filename}`;
        }
      }
    } catch (err) {
      // try next url
    }
  }
  console.error(`[FAIL] Could not download image for ${alf.id}`);
  return null;
}

async function run() {
  console.log(`Starting download of ${alfajores.length} alfajores...`);
  const results = {};
  for (const alf of alfajores) {
    const res = await downloadOne(alf);
    results[alf.id] = res;
  }
  fs.writeFileSync(path.join(targetDir, 'mapping.json'), JSON.stringify(results, null, 2));
  console.log('Finished downloading images!');
}

run();
